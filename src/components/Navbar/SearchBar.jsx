import React, { useState } from "react";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    // if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
    // }
    if(!e){
        navigate('/')
    }
  };

  const clearInput = () => {
    setSearchTerm("");
    navigate("/"); // Optionally redirect to home or stay on the same page
  };

  return (
    <div className="fixed top-14 left-0 right-0 z-10 flex justify-center mt-4">
      <div className="relative w-full max-w-md mx-auto"> {/* Adjusting width for responsiveness */}
        <input
          value={searchTerm}
          onChange={(e) =>{
             handleSearch(e.target.value);
             setSearchTerm(e.target.value)
            }}
        //   onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          type="text"
          placeholder="Search"
          className="w-full transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
        />
        <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        {searchTerm && (
          <button
            onClick={clearInput}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            aria-label="Clear search"
          >
            <IoMdClose size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
