import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        items => items.id !== action.payload
      );
    },
  },
});

export const selectContacts = state => state.contacts.items;

export const { deleteContact, addContact } = slice.actions;
export const contactReducer = slice.reducer;
