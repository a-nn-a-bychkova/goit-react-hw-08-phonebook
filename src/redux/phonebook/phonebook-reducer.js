import { combineReducers } from 'redux';
import { createReducer, createSlice } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebook-operations';

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

// const conactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { contacts: [] },
//   reducers: {
//     [fetchContacts.fulfilled]: (_, { payload }) => payload,
//     [addContact.fulfilled]: (state, { payload }) => {
//       return [...state, payload];
//     },
//     [deleteContact.fulfilled]: (state, { payload }) =>
//       state.filter(({ id }) => id !== payload),
//   },
// });

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
