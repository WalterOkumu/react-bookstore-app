/* eslint-disable max-len */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../../redux/books';

const AddBook = () => {
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    completed: 0,
    currentChapter: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setBook({
      ...book,
      id: uuidv4().split('-')[4],
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleSave = () => {
    if (book.title !== '' && book.author !== '') {
      dispatch(createBook(book));
      navigate('/');
    }
  };

  return (
    <form className="add-book-container">
      <div className="title-container">
        <label htmlFor="title">
          Title:
          <input type="text" placeholder="Title" value={book.title} name="title" onChange={(event) => handleChange(event)} />
        </label>
      </div>
      <div className="author-container">
        <label htmlFor="author">
          Author:
          <input type="text" placeholder="Author" value={book.author} name="author" onChange={(event) => handleChange(event)} />
        </label>
      </div>
      <div className="completed-container">
        <label htmlFor="completed">
          Completed:
          <input type="number" placeholder="Completed" value={book.completed} name="completed" onChange={(event) => handleChange(event)} />
        </label>
      </div>
      <div className="currentChapter-container">
        <label htmlFor="currentChapter">
          Current Chapter:
          <input type="text" placeholder="Current Chapter" value={book.currentChapter} name="currentChapter" onChange={(event) => handleChange(event)} />
        </label>
      </div>
      <div className="button-container">
        <button type="button" className="save-button" onClick={handleSave}>Save</button>
        <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default AddBook;
