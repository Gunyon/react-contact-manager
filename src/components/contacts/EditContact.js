import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from './../layout/TextInputGroup';
import { fetch } from 'whatwg-fetch';

export class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = await resp.json();
    const { name, email, phone } = contact;
    this.setState({ name, email, phone });
  }

  handleFormControls = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const { id } = this.props.match.params;

    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone })
      }
    );

    const data = await resp.json();

    console.log(data);

    dispatch({
      type: 'UPDATE_CONTACT',
      payload: data
    });

    this.setState({ name: '', email: '', phone: '', errors: {} });
    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter name..."
                    value={name}
                    onChange={this.handleFormControls}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={this.handleFormControls}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone..."
                    value={phone}
                    onChange={this.handleFormControls}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Update contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
