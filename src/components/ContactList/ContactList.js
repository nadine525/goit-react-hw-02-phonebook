import React, { Component } from 'react';
import { FaPhone } from 'react-icons/fa';
import { List, Contact, Person } from './ContactList.styled';
import { Button } from '../ContactForm/ContactForm.styled';
import { iconSize } from '../constans';

class ContactList extends Component {
  render() {
    return (
      <List>
        {this.props.contacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <Person>
              <FaPhone size={iconSize.xs} /> {name}: {number}
            </Person>
            <Button
              type="button"
              onClick={() => this.props.onDeleteContact(id)}
            >
              Delete
            </Button>
          </Contact>
        ))}
      </List>
    );
  }
}

export default ContactList;
