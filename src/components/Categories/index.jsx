import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <div>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>
        Check status
      </button>
      <h4>{status}</h4>
    </div>
  );
};

export default Categories;
