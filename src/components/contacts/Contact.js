import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import { fetch } from 'whatwg-fetch';
import { Link } from 'react-router-dom';

export class Contact extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    })
  };

  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState(state => {
      return {
        showContactInfo: !state.showContactInfo
      };
    });
  };

  onDeleteClick = async (id, dispatch) => {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: 'DELETE'
      }
    );
    if (resp.status === 200) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />{' '}
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-edit"
                    style={{
                      float: 'right',
                      cursor: 'pointer',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
