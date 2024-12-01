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
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        items => items.id !== action.payload
      );
    },

    addContacts: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { removeContact, addContacts } = slice.actions;
export const contactReducer = slice.reducer;
