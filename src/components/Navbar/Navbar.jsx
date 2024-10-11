// import React from "react";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";


// import { useNavigate } from "react-router-dom"; 

// const Menu = [
//   {
//     id: 1,
//     name: "Home",
//     link: "/",
//   },
//   {
//     id: 2,
//     name: "Top Rated",
//     link: "/top-rated",
//   },
//   {
//     id: 3,
//     name: "Kids Wear",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Mens Wear",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Electronics",
//     link: "/#",
//   },
// ];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending Products",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/home",
//   },
// ];

// const Navbar = () => {

//   const navigate = useNavigate(); // Use useNavigate hook

//   const handleOrderPopup = () => {
//     navigate('/cart'); // Redirect to the cart page
//   };


//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div>
//             <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               Jewellery-Shop
//             </a>
//           </div>

//           {/* search bar */}
//           <div className="flex justify-between items-center gap-4">
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             {/* order button */}
//             <button
//               onClick={() => handleOrderPopup()}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
//             >
//               <span className="group-hover:block hidden transition-all duration-200">
//                 Order
//               </span>
//               <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
//             </button>

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Simple Dropdown and Links */}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;








// import React, { useState } from "react";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { MdAccountCircle } from "react-icons/md";
// import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { useNavigate } from "react-router-dom"; 

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Top Rated", link: "/top-rated" },
//   { id: 3, name: "Earrings", link: "/#" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/#" },
//   { id: 2, name: "Best Selling", link: "/#" },
//   { id: 3, name: "Top Rated", link: "/home" },
// ];

// const Navbar = () => {

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleOrderPopup = () => {
//     navigate('/cart'); // Redirect to the cart page
//   };

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed top-0 left-0 right-0 z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div className="flex items-center">
//             <a href="#" className="flex items-center gap-1">
//               <img src={Logo} alt="Logo" className="w-8 sm:w-10" />
//               <span className="text-xl sm:text-2xl">Jewellery-Shop</span>
//             </a>
//           </div>

//             <div className="hidden sm:flex justify-center">
//         <ul className="flex items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div> 

//           {/* Hamburger Menu */}
//           <div className="sm:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//             </button>
//           </div>

//           {/* Order button */}
//           <button
//             onClick={()=>{
//               navigate('/account')
//             }}
//             className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-2 group"
//           >
//             <MdAccountCircle className="text-lg sm:text-xl" />
//             <span className="hidden sm:block">Profile</span>
//           </button>

//           <button
//             onClick={handleOrderPopup}
//             className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-2 group"
//           >
//             <FaCartShopping className="text-lg sm:text-xl" />
//             <span className="hidden sm:block">Order</span>
//           </button>
//           {/* Darkmode Switch    */}
//           <div>
//             <DarkMode />
//           </div>
//         </div>
//       </div>

//       {/* lower Navbar */}
//       <div className={`flex justify-center sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
//         <ul className="flex flex-col items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>     
//     </div>
//   );
// };

// export default Navbar;










import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import Cookies from "js-cookie";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "/top-rated" },
  { id: 3, name: "Earrings", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/trending" },
  { id: 2, name: "Most Popular", link: "/most-popular" },
  { id: 2, name: "Most Selling", link: "/most-selling" },
  { id: 2, name: "Recent View", link: "/recent-view" },
  { id: 3, name: "Top Rated", link: "/top-rated" },
];



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  const [token, setToken] = useState('')

  useEffect(()=>{
    const token = Cookies.get('loginToken');
    setToken(token)
  }, [])

  const handleOrderPopup = () => {
    if (token) {
      navigate('/cart');
    } else {
      navigate('/login')
    }
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed top-0 left-0 right-0 z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* <div className="hidden sm:flex justify-center"> */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-1">
              <img src={Logo} alt="Logo" className="w-8 sm:w-10" />
              <div className="hidden sm:flex justify-center">
                <span className="sm:text-2xl">Jewellery-Shop</span> {/* Hide on mobile */}
              </div>
            </a>
          </div>

          <div className="hidden sm:flex justify-center">
            <ul className="flex items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block px-4 hover:text-primary duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] py-2">
                  Trending Products
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu */}
          <div className="sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Profile and Cart Buttons */}
          <div className="flex items-center gap-10">
            <button
              onClick={() => {
                token ?
                  navigate('/account') :
                  navigate('/login')
              }}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-2 group"
            >
              <MdAccountCircle className="text-lg sm:text-xl" />
            </button>

            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-2 group"
            >
              <FaCartShopping className="text-lg sm:text-xl" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
            <div>
              <Notification />
            </div>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div className={`flex justify-center sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
