import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors, phonebookOperations } from '../../redux/phonebook';
import s from '../styles/Input.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(phonebookSelectors.getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    } else if (e.currentTarget.name === 'number') {
      setNumber(e.currentTarget.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkContact(name, number);
    reset();
  };

  const checkContact = (name, number) => {
    const isNameInContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isNameInContact) {
      alert(`${name} is already in contact`);
    } else if (name !== '' || number !== '') {
      const newContact = {
        name,
        number,
      };
      dispatch(phonebookOperations.addContact(newContact));
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={s.Form}>
      <label className={s.Label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={s.Input}
        />
      </label>
      <label className={s.Label}>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          className={s.Input}
        />
      </label>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={s.Button}
      >
        Add contact
      </Button>
    </form>
  );
}

export default ContactForm;

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
