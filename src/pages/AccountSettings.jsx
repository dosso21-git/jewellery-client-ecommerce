

import React, { useEffect, useState } from "react";
import OrderSummary from "./OrderSummaryPage";
import { FaBars, FaTimes } from "react-icons/fa";
import LoginPage from "./LoginPage";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import ConfirmBoxPopup from "../components/Popup/ConfirmBoxPopup";
import axios from "axios";
import AddAddress from "../components/Address";
import { useDispatch } from "react-redux";

import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice';
import ResetPassword from "./LoginResetPassword";

const AccountSettings = () => {

  const dispatch = useDispatch();


  const [activeSection, setActiveSection] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const token = Cookies.get('loginToken');
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // alert(location?.pathname)



  // Fetch user data
  const getUserData = async () => {
    try {
      const response = await axios.get('/api/user/getuser');
      console.log(response.data); // Log the response
      setUserProfile(response.data.getaUser);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Update user data
  const updateUserData = async () => {
    try {
      const response = await axios.put(`/api/user/update`, {
        firstname: userProfile.firstname,
        lastname: userProfile.lastname,
        email: userProfile.email,
        mobile: userProfile.mobile
      });
      // setUserProfile(response.data.data);
      getUserData()
      setIsEditing(false); // Exit edit mode after successful update
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  useEffect(() => {
    getUserData();
    setActiveSection('profile')
  }, []);

  const handleConfirm = () => {
    Cookies.remove('loginToken'); // Remove token from cookies
    navigate('/login');
    setIsModalOpen(false);
    dispatch(clearCart())
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = () => {
    updateUserData();
  };


  const renderContent = () => {

    switch (activeSection) {
      case "profile":
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">My Profile</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div>
                    <p className="text-lg font-bold">
                      {userProfile?.firstname || "First Name Not Available"} {userProfile?.lastname || "Last Name Not Available"}
                    </p>
                    <p>{userProfile?.role || "Role Not Available"}</p>
                    <p>{userProfile?.location || "Location Not Available"}</p>
                  </div>
                </div>
                {isEditing ? (
                  <button className="text-blue-500" onClick={handleSave}>Save</button>
                ) : (
                  <button className="text-blue-500" onClick={() => setIsEditing(true)}>Edit</button>
                )}
              </div>
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-500">First Name</p>
                    {isEditing ? (
                      <input
                        name="firstname"
                        value={userProfile.firstname || ""}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile?.firstname || "Not Available"}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Name</p>
                    {isEditing ? (
                      <input
                        name="lastname"
                        value={userProfile.lastname || ""}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile?.lastname || "Not Available"}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    {isEditing ? (
                      <input
                        name="email"
                        value={userProfile.email || ""}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile?.email || "Not Available"}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    {isEditing ? (
                      <input
                        name="mobile"
                        value={userProfile.mobile || ""}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile?.mobile || "Not Available"}</p>
                    )}
                  </div>
                  {/* Additional fields can be added here */}
                </div>
              </div>
            </div>
          </div>
        );
      case "orders":
        return <OrderSummary />;
      case "reset-password":
        return <ResetPassword />;
      case "addresses":
        return <AddAddress />;
      case "Login":
        return <LoginPage />;
      default:
        return <p>Select a section...</p>;
    }
  };

  return (
    <>
      {isModalOpen && (
        <ConfirmBoxPopup
          onDeactivate={handleConfirm}
          onCancel={handleCancel}
          title="Logout ?"
          description="Are you sure you want to logout."
        />
      )}
      <div className="flex h-screen mt-13 bg-gray-50 dark:bg-gray-900">
        <button
          className="absolute top-14 left-4 md:hidden p-2 bg-gray-200 rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={` w-64 bg-gray-100 dark:bg-gray-800 px-4 py-8 ${sidebarOpen ? "block" : "hidden"} md:block h-full`}>
          <nav className="space-y-4">
            {["profile", "addresses", "reset-password", "orders"].map((section) => (
              <button
                key={section}
                className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${activeSection === section ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                onClick={() => {
                  setActiveSection(section);
                  setSidebarOpen(false); // Close sidebar on mobile
                }}
                aria-label={section.charAt(0).toUpperCase() + section.slice(1)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            {token ? (
              <button
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={handleLogout}
                aria-label="Logout"
              >
                Logout
              </button>
            ) : (
              <button
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setActiveSection("Login")}
                aria-label="Login"
              >
                Login
              </button>
            )}
          </nav>
        </div>
        <div className="flex-grow p-6 overflow-y-auto">
          {!sidebarOpen ? renderContent() : ''}
        </div>
      </div>
    </>
  );
};

export default AccountSettings;