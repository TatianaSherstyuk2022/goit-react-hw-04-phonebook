import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';

export function ContactList({ contacts, deleteContact }) {
  return (
    <>
      <div>
        {contacts.length > 0 &&
          contacts.map(contact => {
            return <Contact key={contact.id} deleteContact={deleteContact} {...contact} />;
          })}
      </div>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    }).isRequired
    ),
    
    deleteContact: PropTypes.func,
};
