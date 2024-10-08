import React, { useState } from 'react';
import { FaUser, FaStar, FaTasks, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CardDataStats from '../../components/CardDataStats';
import MapOne from '../../components/Maps/MapOne';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import axios from 'axios';

// Define a type for the user data
interface UserData {
  firstname: string;
  [key: string]: any; // To allow other potential user properties
}

const ECommerce: React.FC = () => {
  const navigate = useNavigate();





  const [token, setToken] = useState<string | null>(Cookies.get('userToken'));
  const apiUrl = import.meta.env.VITE_API_URL;

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.baseURL = apiUrl;
  }


  // Use static user data for the name
  const [userdata] = useState<UserData>({
    firstname: 'John',
  });

  // Navigation handlers
  const handleAttendance = () => navigate('/dashboard/attendance');
  const handleReview = () => navigate('/dashboard/review');
  const handleTask = () => navigate('/dashboard/task');
  const handleTaskDetail = () => navigate('/dashboard/taskdetail');

  return (
    <>
      <motion.div
        className="bg-gray-800 shadow-2xl rounded-lg p-8 mb-6 flex items-center space-x-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div
            className="w-20 h-20 flex-shrink-0 rounded-full bg-white p-2 flex items-center justify-center shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-blue-500 hover:text-blue-600 transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="6" x2="12" y2="12"></line>
              <line x1="12" y1="12" x2="15" y2="15"></line>
            </svg>
          </motion.div>
          <div>
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Welcome,{' '}
              <span className="text-blue-300 uppercase">{userdata.firstname}</span>
            </h1>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div onClick={handleAttendance} className="cursor-pointer">
          <CardDataStats title="Total Attendance" total="01" rate="55" levelUp>
            <FaUser className="text-teal-500 dark:text-white text-3xl transition-transform transform hover:scale-110" />
          </CardDataStats>
        </div>

        <div onClick={handleTask} className="cursor-pointer">
          <CardDataStats title="See all User" total="05" rate="0%" levelUp>
            <FaTasks className="text-orange-500 dark:text-white text-3xl transition-transform transform hover:scale-110" />
          </CardDataStats>
        </div>

        <div onClick={handleTaskDetail} className="cursor-pointer">
          <CardDataStats title="Detail" total="10" rate="" levelDown>
            <FaUsers className="text-green-500 dark:text-white text-3xl transition-transform transform hover:scale-110" />
          </CardDataStats>
        </div>

        <div onClick={handleReview} className="cursor-pointer">
          <CardDataStats title="View Product Reviews" total="4.5" rate="4.5%" levelUp>
            <FaStar className="text-yellow-400 dark:text-white text-3xl transition-transform transform hover:scale-110" />
          </CardDataStats>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          {/* Additional content can go here */}
        </div>
      </div>
    </>
  );
};

export default ECommerce;
