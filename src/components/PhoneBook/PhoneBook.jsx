import React, { Component } from 'react';
// import styled from 'styled-components';
import ContactForm from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onClickBtnAddContact = data => {
    const normalizeName = data.name.toLocaleLowerCase();
    const renderContactsList = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizeName
    );
    renderContactsList
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [{ ...data, id: nanoid(5) }, ...prevState.contacts],
          };
        });
  };

  handleFilterOnInputChange = inform => {
    this.setState({
      filter: inform,
    });
  };

  handleOnDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const normFilter = this.state.filter.toLocaleLowerCase();
    const renderContactsList = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.onClickBtnAddContact} />

        <h2>Contacts</h2>
        <Filter
          handleFilterOnInputChange={this.handleFilterOnInputChange}
          value={this.state.filter}
        />
        <ContactList
          data={renderContactsList}
          handleOnDelete={this.handleOnDelete}
        />
      </div>
    );
  }
}

export default PhoneBook;
