import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contacts-api';

axios.defaults.baseURL = 'http://localhost:4040';

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
    const data = await contactsAPI.addContact(newContact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async id => {
    const data = await contactsAPI.deleteContact(id);
    return data;
  },
);
