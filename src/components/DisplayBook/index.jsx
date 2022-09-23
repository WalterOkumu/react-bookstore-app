import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-customizable-progressbar';
import './DisplayBook.styles.scss';

const DisplayBook = ({
  book: {
    title, category, author, completed, currentChapter,
  },
}) => (
  <div className="container group">
    <div className="left">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <br />
      <div className="bottom-buttons">
        <button type="button" className="buttons">Comments</button>
        <span>&#124;</span>
        <button type="button" className="buttons">Remove</button>
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

DisplayBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    completed: PropTypes.number.isRequired,
    currentChapter: PropTypes.string.isRequired,
  }),
};

DisplayBook.defaultProps = {
  book: {
    title: 'Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
    completed: 64,
    currentChapter: 'Chapter 17',
  },
};

export default DisplayBook;
