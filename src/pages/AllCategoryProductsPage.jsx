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
        const result = await axios.get(`/api/user/product/category/${type}`);
        if (result.data && Array.isArray(result.data.products)) {
          setProductsData(result.data.products);
        } else {
          setProductsData([]);
        }
      } catch (error) {
        console.error('Error fetching product data', error);
        setError("Failed to fetch products.");
        setProductsData([]);
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
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 "
        >
          {productsData.map((product, index) => (
            <div
              key={index + 1}
              className=" h-[350px] space-y-3 cursor-pointer p-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              onClick={() => navigate(`/product-details/${product._id}`)}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="object-cover rounded-md h-[150px] w-[200px]"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-sm text-purple-500 truncate-text">{product.description}</p>
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