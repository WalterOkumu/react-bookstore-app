// books.js
import { v4 as uuidv4 } from 'uuid';
// Actions
const CREATE = 'react-bookstore-app/books/CREATE';
const UPDATE = 'react-bookstore-app/books/UPDATE';
const DELETE = 'react-bookstore-app/books/DELETE';

const initialState = [
  {
    id: uuidv4().split('-')[4],
    title: 'Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
    completed: 64,
    currentChapter: 'Chapter 17',
  },
  {
    id: uuidv4().split('-')[4],
    title: 'Dune',
    category: 'Science Fiction',
    author: 'Frank Herbert',
    completed: 8,
    currentChapter: 'Chapter 3: \u0027A Lesson Learned\u0027',
  },
  {
    id: uuidv4().split('-')[4],
    title: 'Capital in the Twenty-First Century',
    category: 'Economy',
    author: 'Suzanne Collins',
    completed: 0,
    currentChapter: 'Introduction',
  },
];

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE: return [
      ...state,
      {
        id: action.id,
        title: action.title,
        author: action.author,
        completed: parseInt(action.completed, 10),
        currentChapter: action.currentChapter,
      },
    ];

    case UPDATE: {
      return state;
    }

    case DELETE: {
      return state.filter((book) => book.id !== action.id);
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export const createBook = (book) => ({
  type: CREATE,
  id: book.id,
  title: book.title,
  author: book.author,
  completed: book.completed,
  currentChapter: book.currentChapter,
});

export const deleteBook = (id) => ({ type: DELETE, id });

export const updateBook = (book) => ({ type: UPDATE, book });

export default reducer;
