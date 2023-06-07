import React, { Component } from 'react';
import { FaPhone } from 'react-icons/fa';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              <FaPhone /> {name}: {number}
            </p>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
