import React from 'react';

const Contact = ({ contact, onDelete }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};
export default Contact;
