import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import categoriesReducer from './categories';

export default configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});
