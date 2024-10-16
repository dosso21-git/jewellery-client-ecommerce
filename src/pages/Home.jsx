import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Products from "../components/Products/Products";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";
import Hero from "../components/Hero/Hero";
import CategoryProducts from "../components/Products/CategoryProducts";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm,setSortTerm]= useState('');
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const search = query.get('search') || "";
    const sort = query.get('sort') || "";
  
    // Set search term
    setSearchTerm(search);
    setSortTerm(sort)
  
    const getData = async () => {
      // setLoading(true);
      try {
        const result = await axios.get(`/api/user/getallsearch?query=${search}&sort=${sort}`, {
          headers: {
            'Cache-Control': 'no-cache'
          },
        });
        if (result.data.products) {
          // window.location.reload()
          setProductData(result.data.products); // Set product data from the response
        } else {
          setProductData([]); // Fallback to empty array if no products found
        }
      } catch (error) {
        console.error('Error fetching product data', error);
        setProductData([]); // Handle error by resetting product data
      } finally {
        setLoading(false);
      }
    };
  
    getData();
  }, [location]); // Dependency on location.search instead of location
  




  return (
    <div>
      {(searchTerm || sortTerm) && (
        <div className="search-results mt-32">
          <h2 className="text-center text-xl">Search Results:</h2>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {
                productData.map((product, index) => (
                  <div
                    key={index+1}
                    className="cursor-pointer p-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                    onClick={() => navigate(`/product-details/${product._id}`)} // Navigate to product details
                  >
                    <img
                      src={product.images[0]} // Use the first image from the array
                      alt={product.title}
                      className="rounded-lg hover:scale-x-105"
                    />
                    <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                    <p className="text-sm text-purple-500">{product.description}</p>
                    <p className="text-lg font-bold">₹{product.price}</p>
                  </div>
                )
              )}
            </div>
            <div className="flex justify-center mt-6">
              <h2 className="text-lg font-semibold cursor-pointer hover:underline">View All</h2>
            </div>
          </div>
        </div>
      )}

      {(!searchTerm || !sortTerm)&& (
        <>
          <Hero handleOrderPopup={handleOrderPopup} />
          <Products/>
          {/* <TopProducts handleOrderPopup={handleOrderPopup} /> */}
          <Banner />
          <CategoryProducts />
          <Subscribe />
          <Testimonials />
          <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </>
      )}
    </div>
  );
};

export default Home;
