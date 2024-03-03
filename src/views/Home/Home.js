import React, { useState } from 'react';
import SearchBar from './../../components/Searchbar/Searchbar';
import BookList from './../../components/Booklist/Booklist';
import "./Home.css"
const Home = () => {
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
      <p className='heading'>Google Book Store</p>
      <p className='heading-search'>Search Your Book Here 👇</p>
      <div className='search-container'>
      <SearchBar onSearch={handleSearch} />
      </div>
      <div className='book-containers'>
      <BookList books={searchResults} />
      </div>
    </div>
  );
};

export default Home;
