import { createSlice } from '@reduxjs/toolkit';
// categories.js

const initialState = [
  { id: 0, category: 'Literary Fiction' },
  { id: 1, category: 'Mystery' },
  { id: 2, category: 'Thriller' },
  { id: 3, category: 'Horror' },
  { id: 4, category: 'Historical' },
  { id: 5, category: 'Romance' },
  { id: 6, category: 'Western' },
  { id: 7, category: 'Bildungsroman' },
  { id: 8, category: 'Speculative Fiction' },
  { id: 9, category: 'Science Fiction' },
  { id: 10, category: 'Fantasy' },
  { id: 11, category: 'Dystopian' },
  { id: 12, category: 'Magical Realism' },
  { id: 13, category: 'Realist Literature' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    CATEGORY: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const selectAllCategories = (state) => state.categories;

export const { CATEGORY } = categoriesSlice.actions;

export default categoriesSlice.reducer;
