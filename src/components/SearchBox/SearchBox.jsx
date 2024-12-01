import s from './SearchBox.module.css';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchContact } from '../../redux/filtersSlice.js';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <label className={s.input}>
      <span>Find contacts by name</span>
      <input
        type="text"
        onChange={(e = dispatch(searchContact(e.target.value)))}
        name="search"
      />
    </label>
  );
};

export default SearchBox;
