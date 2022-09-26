// books.js

// Actions
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const LOAD = 'LOAD';

const initialState = [];

// Reducer
const booksReducer = (state = initialState, action = {}) => {
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

export default booksReducer;
