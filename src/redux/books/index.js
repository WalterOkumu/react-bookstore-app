// books.js
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const baseURL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `${baseURL}/apps/${API_KEY}/books`;

const headers = {
  'Content-Type': 'application/json',
};

export const loadBooks = createAsyncThunk('books/loadBooks', async () => {
  const books = await axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
  return books;
});

export const addNewBook = createAsyncThunk('books/addNewBook', async (data) => {
  try {
    await axios.post(url, JSON.stringify(data), { headers })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error);
      });

    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    await axios.delete(`${url}/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error);
      });

    return id;
  } catch (error) {
    throw new Error(error);
  }
});

const generateObj = (data) => {
  const keysList = Object.keys(data);
  const myList = [];
  for (let i = 0; i < keysList.length; i += 1) {
    myList[i] = {
      id: keysList[i],
      author: data[keysList[i]][0].author,
      title: data[keysList[i]][0].title,
      category: data[keysList[i]][0].category,
    };
  }
  return myList;
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    ADD_BOOK: {
      reducer(state, { payload }) {
        state.books.push(payload);
      },
      prepare(title, author, category) {
        return {
          payload: {
            title,
            author,
            category,
          },
        };
      },
    },
    DELETE_BOOK: {
      reducer(state, { payload }) {
        return state.books[payload.id];
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadBooks.pending, (state) => ({ ...state, status: 'loading' }))

      .addCase(loadBooks.fulfilled, (state, { payload }) => ({ ...state, status: 'succeeded', books: payload }))

      .addCase(loadBooks.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }))

      .addCase(deleteBook.fulfilled, (state, { payload }) => ({ ...state, status: 'succeeded', delete: payload.item_id }))

      .addCase(addNewBook.fulfilled, (state, { payload }) => ({ ...state, status: 'succeeded', books: generateObj(payload) }));
  },
});

export const getAllBooks = (state) => state.books.books;
export const getStatus = (state) => state.books.status;
export const getError = (state) => state.books.error;

export const { ADD_BOOK, DELETE_BOOK } = booksSlice.actions;

export default booksSlice.reducer;
