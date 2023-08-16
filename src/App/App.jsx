import React, { useState, useEffect } from "react";

import AddContactForm from "../components/AddContactForm/AddContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";

import styles from "../App/App.module.css";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: '1',
      name: 'Naruto Uzumaki',
      phone: '0888888888',
    },
    {
      id: 2,
      name: "Sasuke Uchiha",
      phone: "0777777777",
    },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Get contacts from the server
    // ...

    // Set the contacts in the state
    setContacts([
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
    ]);
  }, []);

  const handleAddContact = (newContact) => {
    // Add the new contact to the state
    setContacts([...contacts, newContact]);
  };

  const handleFilter = (event) => {
    // Set the filter in the state
    setFilter(event.target.value);
  };

  const handleDelete = (id) => {
    // Get the filtered contacts
    const filteredContacts = contacts.filter((contact) => contact.id !== id);

    // Set the contacts in the state
    setContacts(filteredContacts);
  };

  const handleSearch = (event) => {
    // Get the filtered contacts
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      contact.phone.toLowerCase().includes(event.target.value.toLowerCase())
    );

    // Set the contacts in the state
    setContacts(filteredContacts);
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Phonebook</h1>
      <AddContactForm
        handleAddContact={handleAddContact}
        contacts={contacts}
      />

      <h2>Contacts</h2>
      <Filter
        filterText={filter}
        handleFilter={handleFilter}
      />
      <ContactList
        contacts={contacts}
        filterText={filter}
        handleDelete={handleDelete}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default App;