// src/components/MainLayout.js
import React from 'react';
import Navbar from './Navbar/Navbar';
import SearchBar from './Navbar/SearchBar';
import ScrollToTop from './ScrollToTop';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 mt-14">
      <Navbar />
      <SearchBar />
      <ScrollToTop />
      {children}
    </div>
  );
};

export default MainLayout;
