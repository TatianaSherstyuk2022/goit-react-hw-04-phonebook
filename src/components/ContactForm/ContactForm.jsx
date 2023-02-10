import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';


export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleInputChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    this.setState({
      [inputName]: inputValue,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onAddContact(contact);

    this.setState({
      name: '',
      number: '',
    });
  };

  
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <div className="form-group">
          <label htmlFor="name" className={s.label}>Name</label>
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className={s.label}>Number</label>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};
