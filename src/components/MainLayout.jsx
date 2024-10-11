import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import SearchBar from './Navbar/SearchBar';
import Footer from './Footer/Footer';

const MainLayout = ({ showSearchBar = true }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 mt-14">
      <Navbar />
      {showSearchBar && <SearchBar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;




