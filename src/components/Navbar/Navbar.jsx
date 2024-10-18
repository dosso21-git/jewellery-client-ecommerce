// import React, { useEffect, useState } from "react";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { MdAccountCircle } from "react-icons/md";
// import Cookies from "js-cookie";
// import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import Notification from "../Notification";

// import { useSelector } from 'react-redux';


// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Top Rated", link: "/top-rated" },
//   { id: 3, name: "Earrings", link: "/" },
// ];

// const DropdownLinks = [
//   { id: 1, name: "Trending Products", link: "/trending" },
//   { id: 2, name: "Most Popular", link: "/most-popular" },
//   { id: 3, name: "Most Selling", link: "/most-selling" },
//   { id: 4, name: "Recent View", link: "/recent-view" },
//   { id: 5, name: "Top Rated", link: "/top-rated" },
//   { id: 6, name: "Wishlist", link: "/wishlist" },
// ];

// const Navbar = () => {

//   const cartItems = useSelector(state => state.cart);
//   console.log('cartitmes', cartItems)

//   // alert(cartItems)
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     const token = Cookies.get('loginToken');
//     setToken(token);
//   }, []);

//   useEffect(() => {
//     // Close the menu on route change
//     setIsMenuOpen(false);
//     setIsDropdownOpen(false);
//   }, [location.pathname]);

//   const handleOrderPopup = () => {
//     if (token) {
//       navigate('/cart');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleMenuClick = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleDropdownLinkClick = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     // <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed top-0 left-0 right-0 z-40">
//     //   {/* upper Navbar */}
//     //   <div className="bg-primary/40 py-2">
//     //     <div className="container flex justify-between items-center">
//     //       <div className="flex items-center">
//     //         <Link to="/" className="flex items-center gap-1">
//     //           <img src={Logo} alt="Logo" className="w-8 sm:w-10" />
//     //           <div className="hidden sm:flex justify-center">
//     //             <span className="sm:text-2xl">Jewellery-Shop</span>
//     //           </div>
//     //         </Link>
//     //       </div>

//     //       <div className="hidden sm:flex justify-center">
//     //         <ul className="flex items-center gap-4  ">
//     //           {Menu.map((data) => (
//     //             <li key={data.id}>
//     //               <Link
//     //                 to={data.link}
//     //                 className="inline-block px-4 hover:text-primary duration-200"
//     //                 onClick={() => setIsDropdownOpen(false)} // Close dropdown on major option click
//     //               >
//     //                 {data.name}
//     //               </Link>
//     //             </li>
//     //           ))}
//     //           <li className="group relative cursor-pointer">
//     //             <button onClick={handleMenuClick} className="flex items-center gap-[2px] py-2">
//     //               Trending Products
//     //               <span>
//     //                 <FaCaretDown className={`transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//     //               </span>
//     //             </button>
//     //             {isDropdownOpen && (
//     //               <div className="absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//     //                 <ul>
//     //                   {DropdownLinks.map((data) => (
//     //                     <li key={data.id}>
//     //                       <Link
//     //                         to={data.link}
//     //                         className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//     //                         onClick={handleDropdownLinkClick} // Close dropdown when clicking a link
//     //                       >
//     //                         {data.name}
//     //                       </Link>
//     //                     </li>
//     //                   ))}
//     //                 </ul>
//     //               </div>
//     //             )}
//     //           </li>
//     //         </ul>
//     //       </div>

//     //       {/* Hamburger Menu */}
//     //       <div className="sm:hidden">
//     //         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//     //           {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//     //         </button>
//     //       </div>

//     //       {/* Profile and Cart Buttons */}
//     //       <div className="flex items-center gap-10">
//     //         <button
//     //           onClick={() => {
//     //             token ? navigate('/account') : navigate('/login');
//     //           }}
//     //           className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-2 group"
//     //         >
//     //           <MdAccountCircle className="text-lg sm:text-xl" />
//     //         </button>

//     //         <button
//     //           onClick={handleOrderPopup}
//     //           className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-2 group"
//     //         >
//     //            <span>{cartItems.length}</span>
//     //           <FaCartShopping className="text-lg sm:text-xl" />
//     //         </button>

//     //         {/* Darkmode Switch */}
//     //         <div>
//     //           <DarkMode />
//     //         </div>
//     //         <div>
//     //           <Notification />
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   {/* lower Navbar */}
//     //   <div className={`flex justify-center sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
//     //     <ul className="flex flex-col items-center gap-4">
//     //       {Menu.map((data) => (
//     //         <li key={data.id}>
//     //           <Link
//     //             to={data.link}
//     //             className="inline-block px-4 hover:text-primary duration-200"
//     //             onClick={() => setIsMenuOpen(false)} // Close the menu on link click
//     //           >
//     //             {data.name}
//     //           </Link>
//     //         </li>
//     //       ))}
//     //       <li className="group relative cursor-pointer">
//     //         <button onClick={handleMenuClick} className="flex items-center gap-[2px] py-2">
//     //           Trending Products
//     //           <span>
//     //             <FaCaretDown className={`transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//     //           </span>
//     //         </button>
//     //         {isDropdownOpen && (
//     //           <div className="absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//     //             <ul>
//     //               {DropdownLinks.map((data) => (
//     //                 <li key={data.id}>
//     //                   <Link
//     //                     to={data.link}
//     //                     className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//     //                     onClick={handleDropdownLinkClick} // Close dropdown when clicking a link
//     //                   >
//     //                     {data.name}
//     //                   </Link>
//     //                 </li>
//     //               ))}
//     //             </ul>
//     //           </div>
//     //         )}
//     //       </li>
//     //     </ul>
//     //   </div>
//     // </div>
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed top-0 left-0 right-0 z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-1">
//               <img src={Logo} alt="Logo" className="w-8 sm:w-10" />
//               <div className="hidden sm:flex justify-center">
//                 <span className="sm:text-2xl">Jewellery-Shop</span>
//               </div>
//             </Link>
//           </div>

//           {/* Hide menu when screen size is <= 1030px */}
//           {/* <div className="hidden 1030px:hidden sm:flex justify-center">
//         <ul className="flex items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <Link
//                 to={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//                 onClick={() => setIsDropdownOpen(false)} // Close dropdown on major option click
//               >
//                 {data.name}
//               </Link>
//             </li>
//           ))}
//           <li className="group relative cursor-pointer">
//             <button onClick={handleMenuClick} className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className={`transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//               </span>
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//                 <ul>
//                   {DropdownLinks.map((data) => (
//                     <li key={data.id}>
//                       <Link
//                         to={data.link}
//                         className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//                         onClick={handleDropdownLinkClick} // Close dropdown when clicking a link
//                       >
//                         {data.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div> */}
//           {/* Menu for larger screens */}
//           <div className="hidden custom:flex justify-center">
//             <ul className="flex items-center gap-4">
//               {Menu.map((data) => (
//                 <li key={data.id}>
//                   <Link
//                     to={data.link}
//                     className="inline-block px-4 hover:text-primary duration-200"
//                     onClick={() => setIsDropdownOpen(false)} // Close dropdown on major option click
//                   >
//                     {data.name}
//                   </Link>
//                 </li>
//               ))}
//               <li className="group relative cursor-pointer">
//                 <button onClick={handleMenuClick} className="flex items-center gap-[2px] py-2">
//                   Trending Products
//                   <span>
//                     <FaCaretDown className={`transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                   </span>
//                 </button>
//                 {isDropdownOpen && (
//                   <div className="absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//                     <ul>
//                       {DropdownLinks.map((data) => (
//                         <li key={data.id}>
//                           <Link
//                             to={data.link}
//                             className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//                             onClick={handleDropdownLinkClick} // Close dropdown when clicking a link
//                           >
//                             {data.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </li>
//             </ul>
//           </div>
//           {/* Hamburger Menu */}
//           <div className="sm:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//             </button>
//           </div>

//           {/* Profile and Cart Buttons */}
//           <div className="flex items-center gap-10">
//             <button
//               onClick={() => {
//                 token ? navigate('/account') : navigate('/login');
//               }}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-2 group"
//             >
//               <MdAccountCircle className="text-lg sm:text-xl" />
//             </button>

//             <button
//               onClick={handleOrderPopup}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-2 group"
//             >
//               <span>{cartItems.length}</span>
//               <FaCartShopping className="text-lg sm:text-xl" />
//             </button>

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>
//             <div>
//               <Notification />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* lower Navbar */}
//       <div className={`flex justify-center sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
//         <ul className="flex flex-col items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <Link
//                 to={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//                 onClick={() => setIsMenuOpen(false)} // Close the menu on link click
//               >
//                 {data.name}
//               </Link>
//             </li>
//           ))}
//           <li className="group relative cursor-pointer">
//             <button onClick={handleMenuClick} className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className={`transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//               </span>
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//                 <ul>
//                   {DropdownLinks.map((data) => (
//                     <li key={data.id}>
//                       <Link
//                         to={data.link}
//                         className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//                         onClick={handleDropdownLinkClick} // Close dropdown when clicking a link
//                       >
//                         {data.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>

//   );
// };

// export default Navbar;



import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import Cookies from "js-cookie";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Notification from "../Notification";
import { useSelector } from 'react-redux';

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "/top-rated" },
  { id: 3, name: "Earrings", link: "/" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/trending" },
  { id: 2, name: "Most Popular", link: "/most-popular" },
  { id: 3, name: "Most Selling", link: "/most-selling" },
  { id: 4, name: "Recent View", link: "/recent-view" },
  { id: 5, name: "Top Rated", link: "/top-rated" },
  { id: 6, name: "Wishlist", link: "/wishlist" },
];

const Navbar = () => {

  const cartItems = useSelector(state => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState('');

  console.log("CArt Length:", cartItems);


  useEffect(() => {
    const token = Cookies.get('loginToken');
    setToken(token);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const handleOrderPopup = () => {
    if (token) {
      navigate('/cart');
    } else {
      navigate('/login');
    }
  };

  const handleMenuClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed top-0 left-0 right-0 z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1">
              {/* <img src={Logo} alt="IridscentGems" width={50} height={50} /> */}
              <div className="sm:flex justify-center">
                <h1 className="text-[12px] md:text-2xl flex flex-col text-gray-500"><p>Iridescent<b className="text-secondary">Gems</b></p> <span className="text-[6px] md:text-sm text-gray-500">Jewels as Unique as You</span></h1>
              </div>
            </Link>
          </div>

          {/* Main menu hidden on smaller screens */}
          <div className="hidden lg:flex justify-center">
            <ul className="flex items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="inline-block px-4 hover:text-primary duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <button onClick={handleMenuClick} className="flex items-center gap-[2px] py-2">
                  Trending Products
                  <FaCaretDown className={`transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                    <ul>
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <Link
                            to={data.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            onClick={handleDropdownLinkClick}
                          >
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Profile and Cart Buttons */}
          <div className="flex items-center justify-center gap-10">
            <button
              onClick={() => {
                token ? navigate('/account') : navigate('/login');
              }}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-2 group"
            >
              <MdAccountCircle className="text-lg sm:text-xl" />
            </button>
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-2 group"
            >
              <span>{cartItems.length}</span>
              <FaCartShopping className="text-lg sm:text-xl" />
            </button>
            <div>
              <DarkMode />
            </div>
            <div>
              <Notification />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} flex justify-center`}>
        <ul className="flex flex-col items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {data.name}
              </Link>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <button onClick={handleMenuClick} className="flex items-center gap-[2px] py-2">
              Trending Products
              <FaCaretDown className={`transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <Link
                        to={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        onClick={handleDropdownLinkClick}
                      >
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;