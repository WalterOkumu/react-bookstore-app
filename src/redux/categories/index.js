// categories.js

// Actions
const CHECK_STATUS = 'react-bookstore-app/categories/CREATE';

const initialState = [];

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under Construction';
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export const checkStatus = () => ({ type: CHECK_STATUS });

export default reducer;
