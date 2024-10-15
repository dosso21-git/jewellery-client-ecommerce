// import React from "react";
// import Img1 from "../../assets/women/women.png";
// import Img2 from "../../assets/women/women2.jpg";
// import Img3 from "../../assets/women/women3.jpg";
// import Img4 from "../../assets/women/women4.jpg";
// import { FaStar } from "react-icons/fa6";

// const ProductsData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Women Ethnic",
//     rating: 5.0,
//     color: "white",
//     aosDelay: "0",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Women western",
//     rating: 4.5,
//     color: "Red",
//     aosDelay: "200",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     rating: 4.7,
//     color: "brown",
//     aosDelay: "400",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed T-Shirt",
//     rating: 4.4,
//     color: "Yellow",
//     aosDelay: "600",
//   },
//   {
//     id: 5,
//     img: Img2,
//     title: "Fashin T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
// ];

// const Products = () => {
//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             Top Selling Products for you
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Products
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//             asperiores modi Sit asperiores modi
//           </p>
//         </div>
//         {/* Body section */}
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//             {/* card section */}
//             {ProductsData.map((data) => (
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={data.aosDelay}
//                 key={data.id}
//                 className="space-y-3"
//               >
//                 <img
//                   src={data.img}
//                   alt=""
//                   className="h-[220px] w-[150px] object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{data.title}</h3>
//                   <p className="text-sm text-gray-600">{data.color}</p>
//                   <div className="flex items-center gap-1">
//                     <FaStar className="text-yellow-400" />
//                     <span>{data.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* view all button */}
//           <div className="flex justify-center">
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
//               View All Button
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;





// import React, { useEffect, useState } from "react";
// import Img1 from "../../assets/women/women.png";
// import Img2 from "../../assets/women/women2.jpg";
// import Img3 from "../../assets/women/women3.jpg";
// import Img4 from "../../assets/women/women4.jpg";
// import {  FaHeart } from "react-icons/fa6";
// import { FaShoppingCart,FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "axios";

// // const ProductsData = [
// //   {
// //     id: 1,
// //     img: Img1,
// //     title: "Women Ethnic",
// //     rating: 5.0,
// //     color: "white",
// //     aosDelay: "0",
// //   },
// //   {
// //     id: 2,
// //     img: Img2,
// //     title: "Women Western",
// //     rating: 4.5,
// //     color: "Red",
// //     aosDelay: "200",
// //   },
// //   {
// //     id: 3,
// //     img: Img3,
// //     title: "Goggles",
// //     rating: 4.7,
// //     color: "Brown",
// //     aosDelay: "400",
// //   },
// //   {
// //     id: 4,
// //     img: Img4,
// //     title: "Printed T-Shirt",
// //     rating: 4.4,
// //     color: "Yellow",
// //     aosDelay: "600",
// //   },
// //   {
// //     id: 5,
// //     img: Img2,
// //     title: "Fashion T-Shirt",
// //     rating: 4.5,
// //     color: "Pink",
// //     aosDelay: "800",
// //   },
// // ];

// const Products = () => {

//   const navigate = useNavigate(); // Use the useNavigate hook

//   const [ProductsData,setProductsData] = useState([]);

//   const handleProductClick = (id) => {
//     navigate(`/product-details/${id}`); // Redirect to the product details page
//   };


//   const getAllProducts = async () =>{
//     alert('working')
//       const result = await axios.get('/product/getall')
//       setProductsData(result.data);
//       console.log('result',result);

//   }

//   useEffect(()=>{
//     getAllProducts();
//   },[])



//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             Top Selling Products for you
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Products
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//             asperiores modi.
//           </p>
//         </div>

//         {/* Body section */}
//         <div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//             {/* Card section */}
//             {ProductsData.map((data) => (
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={data.aosDelay}
//                 key={data.id}
//                 className="space-y-3 bg-white rounded-md shadow-md p-4 cursor-pointer"
//                 onClick={()=>{
//                   handleProductClick(data.id)
//                 }}
//               >
//                 <img
//                   src={data.img}
//                   alt={data.title}
//                   className="h-[220px] w-[150px] object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{data.title}</h3>
//                   <p className="text-sm text-gray-600">{data.color}</p>
//                   <div className="flex items-center gap-1">
//                     <FaStar className="text-yellow-400" />
//                     <span>{data.rating}</span>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
               
//               </div>
//             ))}
//           </div>

//           {/* View All Button */}
//           <div 
//           className="flex justify-center"
//           onClick={()=>{
//             navigate('/all-products')
//           }}
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

// export default Products;








// import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "axios";

// const Products = () => {
//   const navigate = useNavigate(); // Use the useNavigate hook

//   const [ProductsData, setProductsData] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const handleProductClick = (id) => {
//     navigate(`/product-details/${id}`); // Redirect to the product details page
//   };

//   const getAllProducts = async () => {
//     try {
//       const response = await axios.get('/product/getall');
      
//       // Check if result.data is an array
//       if (response.data.data) {
//         setProductsData(response.data.data);
//       } else {
//         console.error("Expected an array but got:", response.data);
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
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p className="text-sm text-primary">
//             Top Selling Products for you
//           </p>
//           <h1 className="text-3xl font-bold">
//             Products
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
//               { ProductsData.length > 0 && ProductsData?.map((data,index) => (
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

// export default Products;













// import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "axios";

// const Products = () => {
//   const navigate = useNavigate(); // Use the useNavigate hook

//   const [productsData, setProductsData] = useState([]); // Corrected variable name
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const handleProductClick = (id) => {
//     navigate(`/product-details/${id}`); // Redirect to the product details page
//   };

//   const getAllProducts = async () => {
//     try {
//       const response = await axios.get('/product/getall');
      
//       // Check if result.data is an array
//       if (response.data.data) {
//         setProductsData(response.data.data); // Update the state with product data
//       } else {
//         console.error("Expected an array but got:", response.data);
//         setProductsData([]); // Set to empty array if not valid
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setError("Failed to fetch products."); // Set error message
//       setProductsData([]); // Optionally set to empty array on error
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         {/* Header section */}
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p className="text-sm text-primary">
//             Top Selling Products for you
//           </p>
//           <h1 className="text-3xl font-bold">Products</h1>
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
//               {productsData.length > 0 && productsData.map((data) => (
//                 <div
//                   key={data._id} // Use product ID as key
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

// export default Products;









import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

import {addToCart, removeFromCart, clearCart } from '../../redux/cartSlice';
import { useDispatch } from "react-redux";

const Products = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const [productsData, setProductsData] = useState([]); // Corrected variable name
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    // const [token, setToken] = useState(Cookies.get('loginToken') || null);
  // const baseURL =  import.meta.env.VITE_APP_API_URL; // Replace with your API URL
  
const dispatch = useDispatch();

  const handleProductClick = (id) => {
    navigate(`/product-details/${id}`); // Redirect to the product details page
  };

  const getAllProducts = async () => {
    try {
      const response = await axios.get('/api/user/product/getall');
  
      // Check if response.data.data exists and is an array
      if (Array.isArray(response.data.data) && response.data.data.length > 0) {
        // Additional validation for each product item (if needed)
        const validProducts = response.data.data.filter(product => 
          product && 
          product._id && 
          product.title && 
          product.images && 
          Array.isArray(product.images) && 
          product.images.length > 0 && 
          typeof product.price === 'number' && 
          typeof product.totalrating === 'number'
        );

     
          dispatch(addToCart(response.data.cartLength))
      

        if (validProducts.length > 0) {
          setProductsData(validProducts); // Update the state with valid product data
        } else {
          console.error("No valid products found in the response.");
          setProductsData([]); // Set to empty array if no valid products found
        }
      } else {
        console.error("Expected an array but got:", response.data.data);
        setProductsData([]); // Set to empty array if not valid
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products."); // Set error message
      setProductsData([]); // Optionally set to empty array on error
    } finally {
      setLoading(false);
    }
  };
  


  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi.
          </p>
        </div>

        {/* Body section */}
        <div>
          {loading ? (
            <p className="text-center">Loading products...</p> // Show loading message
          ) : error ? (
            <p className="text-center text-red-500">{error}</p> // Show error message
          ) : (
            <div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"
            >
              {/* Card section */}
              {productsData.length > 0 && productsData.map((data) => (
                <div
                  key={data._id} // Use product ID as key
                  className="space-y-3 bg-white rounded-md shadow-md p-4 cursor-pointer h-[300px]"
                  onClick={() => handleProductClick(data._id)}
                >
                  <img
                    src={data.images[0]} // Use the first image
                    alt={data.title}
                    className="object-cover rounded-md h-[150px] w-[200px]"
                  />
                  <div>
                    <h3 className="font-semibold text-black">{data.title}</h3>
                    <p className="text-sm text-black">Price: ₹{data.price}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="text-black">{data.totalrating || "0"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* View All Button */}
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

export default Products;
