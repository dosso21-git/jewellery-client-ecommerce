

import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { useNavigate, useParams } from 'react-router-dom';

const AllCategoryProducts = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`/product/category/${type}`);
        if (result.data && Array.isArray(result.data.products)) {
          setProductsData(result.data.products); // Set product data from the response
        } else {
          setProductsData([]); // Fallback to empty array if no products found
        }
      } catch (error) {
        console.error('Error fetching product data', error);
        setError("Failed to fetch products."); // Set error message
        setProductsData([]); // Optionally set to empty array on error
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [type]);

  return (
    <div className="container mx-auto p-4 m-32">
      <h1 className="text-2xl font-bold text-center mb-6">All Category</h1>
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {productsData.map((product,index) => (
            <div
              key={index+1}
              className="cursor-pointer p-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              onClick={() => navigate(`/product-details/${product._id}`)} // Navigate to product details
            >
              <img
                src={product.images[0]} // Use the first image
                alt={product.title}
                className="rounded-lg"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-sm text-purple-500">{product.description}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-6">
        <h2 className="text-lg font-semibold cursor-pointer hover:underline">View All</h2>
      </div>
    </div>
  );
};

export default AllCategoryProducts;
