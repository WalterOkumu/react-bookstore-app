/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayBook from '../DisplayBook';
import './Home.styles.scss';

const Home = () => {
  const navigation = useNavigate();
  const [books, setBooks] = useState([
    {
      title: 'Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
      completed: 64,
      currentChapter: 'Chapter 17',
    },
    {
      title: 'Dune',
      category: 'Science Fiction',
      author: 'Frank Herbert',
      completed: 8,
      currentChapter: 'Chapter 3: \u0027A Lesson Learned\u0027',
    },
    {
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
      author: 'Suzanne Collins',
      completed: 0,
      currentChapter: 'Introduction',
    },
  ]);

  const handleAddBook = () => {
    navigation('/books/add-book');
  };

  return (
    <div className="home-container">
      <ul className="book-list">
        <li className="book-item">
          <DisplayBook book={books[0]} />
        </li>
        <li className="book-item">
          <DisplayBook book={books[1]} />
        </li>
        <li className="book-item">
          <DisplayBook book={books[2]} />
        </li>
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
