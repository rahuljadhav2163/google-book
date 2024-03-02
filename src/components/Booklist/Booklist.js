import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      {
      books.map((book) => (
        <div key={book.id}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
          <p>{book.volumeInfo.title}</p>
          <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
        </div>
      ))
      }
    </div>
  );
};

export default BookList;
