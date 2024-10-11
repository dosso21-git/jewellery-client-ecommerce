
// src/components/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import SearchBar from './Navbar/SearchBar';
import Footer from './Footer/Footer';

const MainLayout = ({ children, showSearchBar = true }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 mt-14">
      <Navbar />
      {showSearchBar && <SearchBar />}
      <ScrollToTop />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
