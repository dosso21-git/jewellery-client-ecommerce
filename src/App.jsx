 
// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
// import Popup from "./components/Popup/Popup";

// const App = () => {
//   const [orderPopup, setOrderPopup] = React.useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 300,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//       <Navbar handleOrderPopup={handleOrderPopup} />
//       <Hero handleOrderPopup={handleOrderPopup} />
//       <Products />
//       <TopProducts handleOrderPopup={handleOrderPopup} />
//       <Banner />
//       <Subscribe />
//       <Products />
//       <Testimonials />
//       <Footer />
//       <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
//     </div>
//   );
// };

// export default App;









import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

// Import your page components
import Home from './pages/Home';
import TopRated from "./pages/TopRated";
import CartPage from "./pages/Cart";
import ProductDetails from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WishlistPage from "./pages/WishListPage";
// import KidsWear from "./pages/KidsWear";
// import MensWear from "./pages/MensWear";
// import Electronics from "./pages/Electronics";
// import TrendingProducts from "./pages/TrendingProducts";
// import BestSelling from "./pages/BestSelling";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

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
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar/>
       

        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path ='top-rated' element={<TopRated/>} />
          <Route path ='cart' element={<CartPage/>} />
          <Route path="/product-details/:id" element={<ProductDetails/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/wishlist" element={<WishlistPage/>} />
         
          {/* Add other routes as needed */}
          {/* Example: <Route path="/top-rated" element={<TopRated />} /> */}
        </Routes>

        {/* Always render shared components here, if you want them visible on every page */}
       
      </div>
    </Router>
  );
};

export default App;
