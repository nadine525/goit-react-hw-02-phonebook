import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Division } from './App.styled';



export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  formSubmitHandler = (contact) => {
    console.log(contact)

    this.setState(prevState => ({ contacts: [contact, ...prevState.contacts] }))
  }
  
    deleteContact = contactId => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== contactId) }));
  };
  
  render() {
    const {contacts} = this.state
    return (
        <Division>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact}/>
      </Division>
    )
  }
};
