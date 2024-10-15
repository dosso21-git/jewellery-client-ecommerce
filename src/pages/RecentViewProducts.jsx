import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const RecentViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the data from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/user/recent-views/get");
      if (response.data.data) {
        setProducts(response.data.data);
      }
      console.log("data", response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle errors here if needed
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOrderPopup = () => {
    // Logic for opening the order popup
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-4 border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
      </div>
    ); // Loading state with spinner
  }

  return (
    <div className="container mx-auto px-4 mt-16 lg:mt-32">
  {/* Header section */}
  <div className="text-left mb-12 lg:mb-24">
    <p data-aos="fade-up" className="text-sm text-primary">
      Recent Products for you
    </p>
    <h1 data-aos="fade-up" className="text-2xl lg:text-3xl font-bold">
      Recent View Products
    </h1>
    <p data-aos="fade-up" className="text-xs lg:text-sm text-gray-400">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
    </p>
  </div>

  {/* Body section */}
  {products.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
      {products.map((product) => {
        const productDetails = product.productId || {};
        const images = productDetails.images || [];
        const title = productDetails.title || "No title";
        const description = productDetails.description || "No description";
        const totalRating = Math.max(0, Math.floor(productDetails.totalrating || 0));

        return (
          <div
            key={productDetails._id}
            data-aos="zoom-in"
            className="mb-12 lg:mb-28 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group w-[160px] sm:w-[200px] md:w-[240px] lg:w-[270px] h-[350px] sm:h-[370px] lg:h-[400px]"
          >
            {/* Image section */}
            <div className="h-[120px] sm:h-[150px] flex items-center justify-center">
              {images.length > 0 ? (
                <img
                  src={images[0]}
                  alt={title}
                  className="max-h-full max-w-full object-contain transform -translate-y-10 sm:-translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              ) : (
                <div className="h-[120px] sm:h-[150px] w-full flex items-center justify-center bg-gray-200">
                  <span>No Image Available</span>
                </div>
              )}
            </div>
            {/* Details section */}
            <div className="p-3 sm:p-4 text-center flex-grow">
              {/* Star rating */}
              <div className="w-full flex items-center justify-center gap-1">
                {Array(totalRating)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
              </div>

              <h1 className="text-lg sm:text-xl font-bold">{title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm sm:text-base line-clamp-2">
                {description}
              </p>
              <button
                className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                onClick={handleOrderPopup}
              >
                Order Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="text-center text-gray-500 text-lg mt-16">
      No recent view products available.
    </div>
  )}
</div>

  );
};

export default RecentViewProducts;
