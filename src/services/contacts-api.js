import axios from 'axios';

// axios.defaults.baseURL = 'http://goit-phonebook-api.herokkapp.com';

axios.defaults.baseURL = 'http://localhost:4040';
export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post('/contacts', newContact);
  return data;
}
export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
