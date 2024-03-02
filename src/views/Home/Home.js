import React, { useState } from 'react';
import SearchBar from './../../components/Searchbar/Searchbar';
import BookList from './../../components/Booklist/Booklist';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      const data = await response.json();

      if (data.items) {
        setSearchResults(data.items);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={searchResults} />
    </div>
  );
};

export default App;
