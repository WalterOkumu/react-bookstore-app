/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DisplayBook from '../DisplayBook';
import './Home.styles.scss';

const Home = () => {
  const navigation = useNavigate();

  const bookList = useSelector((state) => state.books);

  const handleAddBook = () => {
    navigation('/add-book');
  };

  return (
    <div className="home-container">
      <ul className="book-list">
        {
          bookList.map((book) => (
            <li key={book.id} className="book-item">
              <DisplayBook book={book} />
            </li>
          ))
        }
      </ul>
      <hr />
      <div className="add-book-container">
        <input type="text" placeholder="Book title" className="book-title" />
        <input type="text" placeholder="Check status" className="book-category" />
        <button type="button" className="add-book-button" onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  );
};

export default Home;
