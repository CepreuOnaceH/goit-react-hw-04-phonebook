import React, { useState } from 'react';
import Notiflix from 'notiflix';

function ContactForm({ contacts, onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      Notiflix.Notify.failure(`${name} is already in your phone list!`);
      return;
    }
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '250px',
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

export default ContactForm;
