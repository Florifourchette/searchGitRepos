import React from 'react';
import { useState } from 'react';
import SearchBar from '@mkyy/mui-search-bar';

const Searchbar = ({ searchTerm, setSearchTerm, setRepoClicked }) => {
  const handleSearch = (newValue) => {
    setRepoClicked(false);
    setSearchTerm(newValue);
  };

  return (
    <>
      <SearchBar
        value={searchTerm}
        onChange={(newValue) => handleSearch(newValue)}
        onSearch={handleSearch}
        className="searchBar"
      />
    </>
  );
};

export default Searchbar;
