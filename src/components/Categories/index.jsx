import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../redux/categories';
import './Categories.styles.scss';

const Categories = () => {
  const [category, setCategory] = useState([]);

  const data = useSelector(selectAllCategories);

  const handleCheckStatus = () => {
    setCategory(data);
  };
  return (
    <div className="category-container">
      <button type="button" onClick={handleCheckStatus}>
        Check status
      </button>
      <ol className="category-list">
        {
          category.map((data) => (
            <li key={data.id} className="list-item">
              {data.category}
            </li>
          ))
        }
      </ol>
    </div>
  );
};

export default Categories;
