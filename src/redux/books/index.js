// books.js

// Actions
const CREATE = 'react-bookstore-app/books/CREATE';
const UPDATE = 'react-bookstore-app/books/UPDATE';
const DELETE = 'react-bookstore-app/books/DELETE';
const LOAD = 'react-bookstore-app/books/LOAD';

const initialState = [];

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE: {
      return state;
    }

    case UPDATE: {
      return state;
    }

    case DELETE: {
      return state;
    }

    case LOAD: {
      return state;
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export const createBook = (book) => ({ type: CREATE, book });

export const loadBooks = () => ({ type: LOAD });

export const deleteBook = (book) => ({ type: DELETE, book });

export const updateBook = (book) => ({ type: UPDATE, book });

export default reducer;
