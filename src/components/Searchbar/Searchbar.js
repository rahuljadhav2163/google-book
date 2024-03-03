import React, { useState } from 'react';
import "./Searchbar.css"
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
      className='search'
        type="text"
        placeholder="Search for books"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className='search-btn'>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
