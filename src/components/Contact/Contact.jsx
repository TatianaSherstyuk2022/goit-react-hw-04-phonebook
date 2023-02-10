import PropTypes from 'prop-types';

export const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <h2 className="contactName">{name}</h2>
      <p className="contactNumber">Number: {number}</p>
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </>
  );
};
