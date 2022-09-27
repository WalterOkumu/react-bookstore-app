import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressBar from 'react-customizable-progressbar';
import { deleteBook } from '../../redux/books';
import './DisplayBook.styles.scss';

const DisplayBook = ({
  book: {
    id, title, category, author, completed, currentChapter,
  },
}) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="container group">
      <div className="left">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <br />
        <div className="bottom-buttons">
          <button type="button" className="buttons">Comments</button>
          <span>&#124;</span>
          <button type="submit" className="buttons" onClick={() => handleDelete(id)}>Remove</button>
          <span>&#124;</span>
          <button type="button" className="buttons">Edit</button>
        </div>
      </div>
      <div className="middle">
        <ProgressBar
          radius={30}
          progress={completed}
          strokeWidth={5}
          strokeColor="#379cf6"
          strokeLinecap="round"
          trackStrokeWidth={5}
        />
        <div className="indicator">
          {completed}
          % Completed
        </div>
      </div>
      <div className="right">
        <p className="chapter-title">CURRENT CHAPTER</p>
        <p className="chapter">{currentChapter}</p>
        <button type="button" className="buttons">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

DisplayBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
    completed: PropTypes.number,
    currentChapter: PropTypes.string,
  }),
};

DisplayBook.defaultProps = {
  book: {
    id: '455f93831997',
    title: 'Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
    completed: 64,
    currentChapter: 'Chapter 17',
  },
};

export default DisplayBook;
