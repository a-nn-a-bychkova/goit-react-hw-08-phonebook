import React from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
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
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </Button>
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
