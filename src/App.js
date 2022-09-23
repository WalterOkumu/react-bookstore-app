import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DisplayBook from './components/DisplayBook';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="books" element={<DisplayBook />}>
        <Route path="add-book" element={<AddBook />} />
      </Route>
      <Route path="categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
