import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors, phonebookOperations } from '../../redux/phonebook';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(phonebookSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));

  return (
    <ul className={s.List}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.Item}>
          <p className={s.Text}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
