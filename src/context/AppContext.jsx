// src/context/AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get('loginToken') || null);
  const baseURL =  import.meta.env.VITE_APP_API_URL; // Replace with your API URL
  // Set Axios defaults
 
  useEffect(() => {
    axios.defaults.baseURL = `${baseURL}/api/user`;
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token, baseURL]);

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
