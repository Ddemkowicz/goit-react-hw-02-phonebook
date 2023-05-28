import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
  handleDeleteClick = () => {
    const { contact, handleContactDelete } = this.props;
    handleContactDelete(contact.id);
  };

  render() {
    const { filteredContacts, handleDeleteClick } = this.props;

    return (
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button onClick={handleDeleteClick} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleContactDelete: PropTypes.func.isRequired,
};
