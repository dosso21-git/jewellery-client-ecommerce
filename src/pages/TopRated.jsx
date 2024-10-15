

// import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "axios";

// const TopRated = () => {
//   const navigate = useNavigate(); // Use the useNavigate hook

//   const [ProductsData, setProductsData] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const handleProductClick = (id) => {
//     navigate(`/product-details/${id}`); // Redirect to the product details page
//   };

//   const getAllProducts = async () => {
//     try {
//       const result = await axios.get('/product/toprated');
//       // Check if result.data is an array
//       if (Array.isArray(result.data.data)) {
//         setProductsData(result.data.data);
//       } else {
//         console.error("Expected an array but got:", result.data);
//         setProductsData([]); // Set to empty array if not valid
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setProductsData([]); // Optionally set to empty array on error
//     }finally{
//       setLoading(false)
//     }
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   return (
//     <div className="mt-32 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p className="text-sm text-primary">
//             Top Rated Products for you
//           </p>
//           <h1 className="text-3xl font-bold">
//            Top Rated Products
//           </h1>
//           <p className="text-xs text-gray-400">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//             asperiores modi.
//           </p>
//         </div>

//         {/* Body section */}
//         <div>
//           {loading ? (
//             <p className="text-center">Loading products...</p> // Show loading message
//           ) : error ? (
//             <p className="text-center text-red-500">{error}</p> // Show error message
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//               {/* Card section */}
//               { ProductsData.length > 0 && ProductsData.map((data,index) => (
//                 <div
//                   key={index+1}
//                   className="space-y-3 bg-white rounded-md shadow-md p-4 cursor-pointer h-[300px]"
//                   onClick={() => handleProductClick(data._id)}
//                 >
//                   <img
//                     src={data.images[0]} // Use the first image
//                     alt={data.title}
//                     className="object-cover rounded-md h-[150px] w-[200px]"
//                   />
//                   <div>
//                     <h3 className="font-semibold">{data.title}</h3>
//                     <p className="text-sm text-gray-600">Price: ${data.price}</p>
//                     <div className="flex items-center gap-1">
//                       <FaStar className="text-yellow-400" />
//                       <span>{data.totalrating || "0"}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {/* View All Button */}
//           <div 
//             className="flex justify-center"
//             onClick={() => navigate('/all-products')}
//           >
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
//               View All
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopRated;







import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

const TopRated = () => {
  const navigate = useNavigate();
  const [ProductsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleProductClick = (id) => {
    navigate(`/product-details/${id}`);
  };

  const getAllProducts = async () => {
    try {
      const result = await axios.get('/api/user/product/toprated');
      if (Array.isArray(result.data.data)) {
        setProductsData(result.data.data);
      } else {
        console.error("Expected an array but got:", result.data);
        setProductsData([]); 
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="mt-32 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top Rated Products for you</p>
          <h1 className="text-3xl font-bold">Top Rated Products</h1>
          <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.</p>
        </div>

        <div>
          {loading ? (
            <p className="text-center">Loading products...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {ProductsData.length > 0 && ProductsData.map((data) => (
                <div
                  key={data._id}
                  className="space-y-3 bg-white rounded-md shadow-md p-4 cursor-pointer h-[300px]"
                  onClick={() => handleProductClick(data._id)}
                >
                  <img
                    src={data.images[0]} 
                    alt={data.title}
                    className="object-cover rounded-md h-[150px] w-[200px]"
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">Price: ${data.price}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.totalrating || "0"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div 
            className="flex justify-center"
            onClick={() => navigate('/all-products')}
          >
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
