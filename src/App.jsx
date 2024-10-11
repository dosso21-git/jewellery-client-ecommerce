

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









import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";
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
import ErrorBoundary from "./components/ErrorBoundary";
import TrendingProductsPage from "./pages/TrendingProducts";
import BestSellingProductsPage from "./pages/BestSellingProducts";
import MostSellingProducts from "./pages/MostSellingProducts";
import MostPopularProducts from "./pages/MostPopular";
import RecentViewProducts from "./pages/RecentViewProducts";
import ContactUs from "./pages/ContactUs";

// Create a ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const token = Cookies.get('loginToken');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

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
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/top-rated" element={<TopRated />} />
              <Route path="/trending" element={<TrendingProductsPage />} />
              <Route path="/most-selling" element={<MostSellingProducts />} />
              <Route path="/most-popular" element={<MostPopularProducts />} />
              <Route path="/recent-view" element={<RecentViewProducts />} />
              <Route path="/best-selling" element={<BestSellingProductsPage />} />
              <Route path="/contact" element={<ContactUs />} />

              {/* Protected Routes */}
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/wishlist"
                element={
                  <ProtectedRoute>
                    <WishlistPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/delivery-address"
                element={
                  <ProtectedRoute>
                    <DeliveryAddress />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/order-summary"
                element={
                  <ProtectedRoute>
                    <OrderSummary />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <AccountSettings />
                  </ProtectedRoute>
                }
              />

              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/all-category/:type" element={<AllCategoryProducts />} />
              <Route path="/all-products" element={<AllProductsPage />} />
            </Route>
          </Routes>
        </Router>
      </ErrorBoundary>
    </AppProvider>
  );
};

export default App;