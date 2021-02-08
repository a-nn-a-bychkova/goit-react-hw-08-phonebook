import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contacts-api';

axios.defaults.baseURL = 'http://goit-phonebook-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  '/phonebook/fetchContacts',
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async ({ name, number }) => {
    const newContact = {
      name,
      number,
    };
    const contact = await contactsAPI.addContact(newContact);
    console.log(contact);
    return contact;
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async id => {
    const { data } = await contactsAPI.deleteContact(id);
    console.log('contactID', id);
    return id;
  },
);
