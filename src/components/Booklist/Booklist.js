import React from 'react';
import "./Booklist.css"
const BookList = ({ books }) => {
  return (
    <div>
      {
      books.map((book) => (
        <div key={book.id} className='book-card'>
          <img className='img' src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
          <p className='book-name'>{book.volumeInfo.title}</p>
          <p className='book-author'>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
        </div>
      ))
      }
    </div>
  );
};

export default BookList;
