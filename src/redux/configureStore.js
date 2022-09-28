import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books';
import categoriesSlice from './categories';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
});

export default store;
