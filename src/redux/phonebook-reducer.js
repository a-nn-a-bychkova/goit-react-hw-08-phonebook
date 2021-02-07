import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../redux/phonebook-operations';

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});
const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
export default combineReducers({
  contacts,
  filter,
});
