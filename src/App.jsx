

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import AOS from "aos";
// import "aos/dist/aos.css";
// // Import your page components
// import Home from './pages/Home';
// import TopRated from "./pages/TopRated";
// import CartPage from "./pages/Cart";
// import ProductDetails from "./pages/ProductDetailsPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import WishlistPage from "./pages/WishListPage";
// import DeliveryAddress from "./pages/DeliveryAddress";
// import AllCategoryProducts from "./pages/AllCategoryProductsPage";
// import SearchBar from "./components/Navbar/SearchBar";
// import AllProductsPage from "./pages/AllProductsPage";
// import ScrollToTop from "./components/ScrollToTop";
// import OrderSummary from "./pages/OrderSummaryPage";
// import AccountSettings from "./pages/AccountSettings";
// import Cookies from "js-cookie";

// const App = () => {
//   const token = Cookies.set('loginToken'); 
//   const handleSearch = (term) => {
//     alert('term')
//     // setSearchTerm(term);
//     // navigate("/"); // Redirect to Home page
//   };

//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 200,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <Router>
//       <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 mt-14">
//         <Navbar onSearch={handleSearch}/>
//         <SearchBar/>
//         <ScrollToTop/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path ='top-rated' element={<TopRated/>} />
//           <Route path ='cart' element={<CartPage/>} />
//           <Route path="/product-details/:id" element={<ProductDetails/>} />
//           <Route path="/wishlist" element={<WishlistPage/>} />
//           <Route path="/delivery-address" element={<DeliveryAddress/>} />
//           <Route path="/all-category/:type" element={<AllCategoryProducts/>} />
//           <Route path="/all-products" element={<AllProductsPage/>} />
//           <Route path="order-summary" element={<OrderSummary/>} />
//           <Route path='account' element={<AccountSettings/>} />
//           {/* Add other routes as needed */}
//           <Route path="/login" element={<LoginPage/>} />
//           <Route path="/register" element={<RegisterPage/>} />
//           {/* Example: <Route path="/top-rated" element={<TopRated />} /> */}
//         </Routes>

//         {/* Always render shared components here, if you want them visible on every page */}
       
//       </div>
//     </Router>
//   );
// };

// export default App;









// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { AppProvider } from './context/AppContext'; // Import the provider
// import Home from './pages/Home';
// import TopRated from "./pages/TopRated";
// import CartPage from "./pages/Cart";
// import ProductDetails from "./pages/ProductDetailsPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import WishlistPage from "./pages/WishListPage";
// import DeliveryAddress from "./pages/DeliveryAddress";
// import AllCategoryProducts from "./pages/AllCategoryProductsPage";
// import SearchBar from "./components/Navbar/SearchBar";
// import AllProductsPage from "./pages/AllProductsPage";
// import ScrollToTop from "./components/ScrollToTop";
// import OrderSummary from "./pages/OrderSummaryPage";
// import AccountSettings from "./pages/AccountSettings";

// const App = () => {
//   const handleSearch = (term) => {
//     alert(term);
//     // Handle search logic here
//   };

//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 200,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <AppProvider>
//       <Router>
//         <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 mt-14">
//           <Navbar onSearch={handleSearch} />
//           <SearchBar />
//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path='top-rated' element={<TopRated />} />
//             <Route path='cart' element={<CartPage />} />
//             <Route path="/product-details/:id" element={<ProductDetails />} />
//             <Route path="/wishlist" element={<WishlistPage />} />
//             <Route path="/delivery-address" element={<DeliveryAddress />} />
//             <Route path="/all-category/:type" element={<AllCategoryProducts />} />
//             <Route path="/all-products" element={<AllProductsPage />} />
//             <Route path="order-summary" element={<OrderSummary />} />
//             <Route path='account' element={<AccountSettings />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//           </Routes>
//         </div>
//       </Router>
//     </AppProvider>
//   );
// };

// export default App;










// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import TopRated from "./pages/TopRated";
import CartPage from "./pages/Cart";
import ProductDetails from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WishlistPage from "./pages/WishListPage";
import DeliveryAddress from "./pages/DeliveryAddress";
import AllCategoryProducts from "./pages/AllCategoryProductsPage";
import AllProductsPage from "./pages/AllProductsPage";
import OrderSummary from "./pages/OrderSummaryPage";
import AccountSettings from "./pages/AccountSettings";
import MainLayout from './components/MainLayout';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="top-rated" element={<MainLayout><TopRated /></MainLayout>} />
          <Route path="cart" element={<MainLayout><CartPage /></MainLayout>} />
          <Route path="/product-details/:id" element={<MainLayout><ProductDetails /></MainLayout>} />
          <Route path="/wishlist" element={<MainLayout><WishlistPage /></MainLayout>} />
          <Route path="/delivery-address" element={<MainLayout><DeliveryAddress /></MainLayout>} />
          <Route path="/all-category/:type" element={<MainLayout><AllCategoryProducts /></MainLayout>} />
          <Route path="/all-products" element={<MainLayout><AllProductsPage /></MainLayout>} />
          <Route path="order-summary" element={<MainLayout><OrderSummary /></MainLayout>} />
          <Route path='account' element={<MainLayout><AccountSettings /></MainLayout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
