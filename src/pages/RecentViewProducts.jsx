
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const RecentViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the data from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/recent-views/get");
      if (response.data.data) {
        setProducts(response.data.data);
      }
      console.log('data', response.data);
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
    <div className="container mt-32">
      {/* Header section */}
      <div className="text-left mb-24">
        <p data-aos="fade-up" className="text-sm text-primary">
         Recent Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Recent View  Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
        </p>
      </div>

      {/* Body section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {products.map((product) => (
            <div
              key={product.productId._id} // Ensure this key is unique
              data-aos="zoom-in"
              className="mb-28 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group w-[180px] h-[370px] sm:w-[270px]"
            >
              {/* Image section */}
              <div className="h-[150px] flex items-center justify-center">
                <img
                  src={product.productId.images[0]} // Access the first image of the product
                  alt={product.productId.title}
                  className="max-h-full max-w-full object-contain transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* Details section */}
              <div className="p-4 text-center flex-grow">
                {/* Star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  {Array(product.productId.totalrating || 0) // Use actual ratings from product
                    .fill()
                    .map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                </div>
                <h1 className="text-xl font-bold">{product.productId.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {product.productId.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RecentViewProducts;
