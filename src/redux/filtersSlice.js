import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    searchContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { searchContact } = slice.actions;
export const contactReducer = slice.reducer;
