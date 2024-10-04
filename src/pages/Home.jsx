import React from "react";
import Products from "../components/Products/Products";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";
import Hero from "../components/Hero/Hero";

const Home = () => {


    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };

    
  return (
  <div>
    Home Page
    <Hero handleOrderPopup={handleOrderPopup} />
    <Products />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <Testimonials />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

  </div>
)
};

export default Home;
