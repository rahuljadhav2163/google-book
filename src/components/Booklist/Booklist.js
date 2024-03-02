import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {books.map((book) => (
        <div key={book.id} className="cursor-pointer">
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-full h-48 object-cover rounded-md" />
          <p className="mt-2 text-center">{book.volumeInfo.title}</p>
          <p className="text-center text-gray-500">{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
