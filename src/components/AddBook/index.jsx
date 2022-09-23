import React from 'react';

const AddBook = () => {
  const title = '';
  const author = '';

  return (
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" placeholder="Title" value={title} id="title" />
      </label>
      <label htmlFor="title">
        Author:
        <input type="text" placeholder="Title" value={author} id="title" />
      </label>

    </form>
  );
};

export default AddBook;
