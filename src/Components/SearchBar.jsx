import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchInput, setSearchInput, handleSearch }) => {
  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 text-sm font-bold mb-2">Search by Category</label>
      <input
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') handleSearch();
        }}
        className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter category to search"
      />
      <button
        onClick={handleSearch}
        className="absolute text-lg text-blue-600 left-3 bottom-2 transform -translate-y-1/2 text-gray-600"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
