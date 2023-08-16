import React from "react";

import AddContactForm from "../components/AddContactForm/AddContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";

import styles from "../App/App.module.css";

class App extends React.Component {
  state = {
    contacts: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '0934591256',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '0734438912',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '0636451779',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '0972279126',
      },
    ],
    filter: "",
  };

  constructor(props) {
    super(props);

    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddContact(newContact) {
    // Add the new contact to the state
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  }

  handleFilter(event) {
    // Set the filter in the state
    this.setState({
      filter: event.target.value,
    });
  }

  handleDelete(id) {
    // Get the filtered contacts
    const filteredContacts = this.state.contacts.filter((contact) => contact.id !== id);

    // Set the contacts in the state
    this.setState({
      contacts: filteredContacts,
    });
  }

  handleSearch(event) {
    // Get the filtered contacts
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      contact.phone.toLowerCase().includes(event.target.value.toLowerCase())
    );

    // Set the contacts in the state
    this.setState({
      contacts: filteredContacts,
    });
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <h1>Phonebook</h1>
        <AddContactForm
          handleAddContact={this.handleAddContact}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter
          filterText={this.state.filter}
          handleFilter={this.handleFilter}
        />
        <ContactList
          contacts={this.state.contacts}
          filterText={this.state.filter}
          handleDelete={this.handleDelete}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;