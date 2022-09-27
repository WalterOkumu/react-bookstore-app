import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="add-book" element={<AddBook />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
