import React, { Component } from "react";
import PropTypes from "prop-types";

import shortid from "shortid";

import styles from "./AddContactForm.module.css";

class AddContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleContactData(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    for (const { name } of this.props.contacts) {
      if (name === this.state.name) {
        alert(`${name} is already in contacts`);

        return;
      }
    }

    const newContact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.handleAddContact(newContact);

    this.setState({ name: "", number: "" });
  }

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)} className={styles.addForm}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.formInput}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Z ]{2,40}$"
            title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            required
            onChange={this.handleContactData.bind(this)}
            placeholder="Boruto Uzumaki"
          />
        </label>

        <label className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            value={number}
            type="tel"
            name="number"
            pattern="^(?:\+|0)?[0-9]{7,10}$"
            title="The phone number must be numeric and may contain spaces, dashes, parentheses, and may begin with +"
            required
            onChange={this.handleContactData.bind(this)}
            placeholder="0999999999"
          />
        </label>

        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

AddContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleAddContact: PropTypes.func.isRequired,
};

export default AddContactForm;