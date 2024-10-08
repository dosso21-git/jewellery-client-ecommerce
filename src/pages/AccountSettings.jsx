// import React, { useState } from "react";
// import OrderSummary from "./OrderSummaryPage";
// import { FaBars, FaTimes } from "react-icons/fa";

// const AccountSettings = () => {
//   const [activeSection, setActiveSection] = useState("profile");
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userProfile, setUserProfile] = useState({
//     name: "Rafiqur Rahman",
//     role: "Team Manager",
//     location: "Leeds, United Kingdom",
//     email: "rafiqurrahman51@gmail.com",
//     phone: "+09 345 346 46",
//     bio: "Team Manager",
//     country: "United Kingdom",
//     city: "Leeds, East London",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
//   };

//   const renderContent = () => {
//     switch (activeSection) {
//       case "profile":
//         return (
//           <div className="p-4">
//             <h2 className="text-xl font-semibold mb-4">My Profile</h2>
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//               <div className="flex justify-between items-center mb-6">
//                 <div>
//                   <p className="text-lg font-bold">{userProfile.name}</p>
//                   <p>{userProfile.role}</p>
//                   <p>{userProfile.location}</p>
//                 </div>
//                 {isEditing ? (
//                   <button className="text-blue-500" onClick={() => setIsEditing(false)}>Save</button>
//                 ) : (
//                   <button className="text-blue-500" onClick={() => setIsEditing(true)}>Edit</button>
//                 )}
//               </div>
//               <div className="border-t pt-4">
//                 <h3 className="text-lg font-semibold">Personal Information</h3>
//                 <div className="grid grid-cols-2 gap-4 mt-2">
//                   <div>
//                     <p className="text-sm text-gray-500">First Name</p>
//                     {isEditing ? (
//                       <input
//                         name="name"
//                         value={userProfile.name.split(" ")[0]}
//                         onChange={handleInputChange}
//                         className="border rounded p-1 w-full"
//                       />
//                     ) : (
//                       <p>{userProfile.name.split(" ")[0]}</p>
//                     )}
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Last Name</p>
//                     {isEditing ? (
//                       <input
//                         name="lastName"
//                         value={userProfile.name.split(" ")[1]}
//                         onChange={handleInputChange}
//                         className="border rounded p-1 w-full"
//                       />
//                     ) : (
//                       <p>{userProfile.name.split(" ")[1]}</p>
//                     )}
//                   </div>
//                   {/* Other fields here... */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       case "orders":
//         return <OrderSummary />;
//       // Other sections...
//       default:
//         return <p>Select a section...</p>;
//     }
//   };

//   return (
//     <div className="flex h-screen mt-36 bg-gray-50 dark:bg-gray-900">
//       {/* Sidebar Toggle Button for Mobile */}
//       <button
//         className="absolute top-36 left-4 md:hidden p-2 bg-gray-200 rounded"
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//         aria-label="Toggle Sidebar"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div className={`w-64 bg-gray-100 dark:bg-gray-800 p-4 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
//         <nav className="space-y-4">
//           {["profile", "orders", "teams", "notifications", "billing"].map((section) => (
//             <button
//               key={section}
//               className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${activeSection === section ? "bg-gray-200 dark:bg-gray-700" : ""}`}
//               onClick={() => {
//                 setActiveSection(section);
//                 setSidebarOpen(false); // Close sidebar on mobile
//               }}
//               aria-label={section.charAt(0).toUpperCase() + section.slice(1)}
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1)}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className={`flex-grow p-6`}>
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default AccountSettings;














import React, { useState } from "react";
import OrderSummary from "./OrderSummaryPage";
import { FaBars, FaTimes } from "react-icons/fa";
import LoginPage from "./LoginPage";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "Testing user ",
    role: "Team Manager",
    image : 'https://www.suntiros.com/wp-content/uploads/2016/12/Akshay-Kumar-Height-Weight-Age-Biography-More.jpg',
    location: "Leeds, United india",
    email: "test@gmail.com",
    phone: "+09 345 346 46",
    bio: "Team Manager",
    country: "United india",
    city: "Leeds, East india",
  });



  const token = Cookies.get('loginToken') ;

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('loginToken'); // Remove token from cookies
    navigate('/');
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
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
                  {/* Profile Image */}
                  <img
                    src={userProfile.image || "default-profile-image.jpg"} // Placeholder image if no image URL is provided
                    alt="Profile"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-lg font-bold">{userProfile.name}</p>
                    <p>{userProfile.role}</p>
                    <p>{userProfile.location}</p>
                  </div>
                </div>
                {isEditing ? (
                  <button className="text-blue-500" onClick={() => setIsEditing(false)}>Save</button>
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
                        name="firstName"
                        value={userProfile.name.split(" ")[0]}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile.name.split(" ")[0]}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Name</p>
                    {isEditing ? (
                      <input
                        name="lastName"
                        value={userProfile.name.split(" ")[1]}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile.name.split(" ")[1]}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    {isEditing ? (
                      <input
                        name="email"
                        value={userProfile.email}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile.email}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    {isEditing ? (
                      <input
                        name="phone"
                        value={userProfile.phone}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile.phone}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bio</p>
                    {isEditing ? (
                      <input
                        name="bio"
                        value={userProfile.bio}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile.bio}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Country</p>
                    {isEditing ? (
                      <input
                        name="country"
                        value={userProfile.country}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile.country}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">City</p>
                    {isEditing ? (
                      <input
                        name="city"
                        value={userProfile.city}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      <p>{userProfile.city}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "orders":
        return <OrderSummary />;
        case "reset-password":
          return <OrderSummary />;
          case "Login":
            return <LoginPage />;
      // Other sections...
      default:
        return <p>Select a section...</p>;
    }
  };

  return (
    <div className="flex h-screen mt-36 bg-gray-50 dark:bg-gray-900">
  {/* Sidebar Toggle Button for Mobile */}
  <button
    className="absolute top-36 left-4 md:hidden p-2 bg-gray-200 rounded"
    onClick={() => setSidebarOpen(!sidebarOpen)}
    aria-label="Toggle Sidebar"
  >
    {sidebarOpen ? <FaTimes /> : <FaBars />}
  </button>

  {/* Sidebar (static on larger screens) */}
  <div
    className={`w-64 bg-gray-100 dark:bg-gray-800 p-4 ${
      sidebarOpen ? "block" : "hidden"
    } md:block h-full`}
  >
    <nav className="space-y-4">
      {["profile","orders", "teams", "notifications", "billing"].map(
        (section) => (
          <button
            key={section}
            className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${
              activeSection === section
                ? "bg-gray-200 dark:bg-gray-700"
                : ""
            }`}
            onClick={() => {
              setActiveSection(section);
              setSidebarOpen(false); // Close sidebar on mobile
            }}
            aria-label={section.charAt(0).toUpperCase() + section.slice(1)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        )
      )}

       {/* Conditional Login/Logout Button */}
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

  {/* Main Content (Scrollable) */}
  <div className="flex-grow p-6 overflow-y-auto">
    {renderContent()}
  </div>
</div>


  );
};

export default AccountSettings;
