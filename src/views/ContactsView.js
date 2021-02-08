import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/phonebook-operations';
import { phonebookSelectors } from '../redux';
// import { contactsOperations, contactsSelectors } from '../redux/contacts';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? <Filter /> : <p>Your phonebook is empty</p>}
      <ContactList />
    </Container>
  );
}
