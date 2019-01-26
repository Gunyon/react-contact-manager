import React, { Component } from 'react';
import 'whatwg-fetch';

const {
  Provider: ContactsProvider,
  Consumer: ContactsConsumer
} = React.createContext();

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== payload;
        })
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [payload, ...state.contacts]
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(c => (c.id === payload.id ? payload : c))
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    this.setState({ contacts: data });
  }

  render() {
    return (
      <ContactsProvider value={this.state}>
        {this.props.children}
      </ContactsProvider>
    );
  }
}

export const Consumer = ContactsConsumer;
