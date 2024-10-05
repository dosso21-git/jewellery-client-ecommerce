// import React from "react";
// import Products from "../components/Products/Products";
// import TopProducts from "../components/TopProducts/TopProducts";
// import Banner from "../components/Banner/Banner";
// import Subscribe from "../components/Subscribe/Subscribe";
// import Testimonials from "../components/Testimonials/Testimonials";
// import Footer from "../components/Footer/Footer";
// import Popup from "../components/Popup/Popup";
// import Hero from "../components/Hero/Hero";
// import CategoryProducts from "../components/Products/CategoryProducts";

// const Home = () => {


//     const [orderPopup, setOrderPopup] = React.useState(false);

//     const handleOrderPopup = () => {
//       setOrderPopup(!orderPopup);
//     };

    
//   return (
//   <div>
//     <Hero handleOrderPopup={handleOrderPopup} />
//     <Products />
//         <TopProducts handleOrderPopup={handleOrderPopup} />
//         <Banner />
//         <CategoryProducts/>
//         <Subscribe />
//         <Testimonials />
//         <Footer />
//         <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

//   </div>
// )
// };

// export default Home;





// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Products from "../components/Products/Products";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";
import Hero from "../components/Hero/Hero";
import CategoryProducts from "../components/Products/CategoryProducts";



const products = [
  {
    image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Ring.jpg',
    title: 'Rings',
    description: 'Engagement Rings | Solitaire Rings | Dailywear Rings',
  },
  {
    image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Nosepin.jpg',
    title: 'Nose Pin',
    description: 'Nose Ring | Gold Nose Pin | Diamond Nose Pin | Everyday Nose Pin',
  },
  {
    image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Earring.jpg',
    title: 'Earrings',
    description: 'Studs | Hoops & Huggies | Drops & Danglers',
  },
  {
      image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Earring.jpg',
      title: 'Earrings',
      description: 'Studs | Hoops & Huggies | Drops & Danglers',
    },
];

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const search = query.get('search');
    if (search) {
      setSearchTerm(search);
    }else{
      setSearchTerm('');
    }
  }, [location]);

  const filteredData = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Results */}
      {searchTerm&& (
        <div className="search-results mt-32">
          <h2 className="text-center text-xl">Search Results:</h2>
          <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredData.map((product, index) => (
          <div
            key={index}
            // className="border rounded-lg shadow-md p-4 flex flex-col items-center"
            data-aos="zoom-in"
            className="  cursor-pointer p-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            onClick={()=>{
                navigationFunction(product.title)
            }}
          >
            <img
              src={product.image}
              alt={product.title}
            //   className="w-20 h-20 object-contain mb-4"
              className="rounded-lg hover:scale-x-105"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-sm text-purple-500">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <h2 className="text-lg font-semibold cursor-pointer hover:underline">View All</h2>
      </div>
    </div>
        </div>
      )}

      {/* Original Components */}
      {!searchTerm && (
        <>
          <Hero handleOrderPopup={handleOrderPopup} />
          <Products />
          <TopProducts handleOrderPopup={handleOrderPopup} />
          <Banner />
          <CategoryProducts />
          <Subscribe />
          <Testimonials />
          <Footer />
          <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </>
      )}
    </div>
  );
};

export default Home;
