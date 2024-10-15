// import React from "react";
// import Img1 from ".././assets/shirt/shirt.png";
// import Img2 from ".././assets/shirt/shirt2.png";
// import Img3 from ".././assets/shirt/shirt3.png";
// import { FaStar } from "react-icons/fa";

// const ProductsData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Casual Wear",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Printed shirt",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Women shirt",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 4,
//     img: Img2,
//     title: "Printed shirt",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];
// const AllProductsPage = () => {

//     const handleOrderPopup =() =>{

//     }


//   return (
//     <div>
//       <div className="container mt-32">
//         {/* Header section */}
//         <div className="text-left mb-24">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             Top Rated Products for you
//           </p>
          
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Best Products
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//             asperiores modi Sit asperiores modi
//           </p>
//         </div>
//         {/* Body section */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  gap-5 md:gap-5 place-items-center">
//           {ProductsData.map((data) => (
//             <div
//               data-aos="zoom-in"
//               className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
//             >
//               {/* image section */}
//               <div className="h-[100px]">
//                 <img
//                   src={data.img}
//                   alt=""
//                   className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
//                 />
//               </div>
//               {/* details section */}
//               <div className="p-4 text-center">
//                 {/* star rating */}
//                 <div className="w-full flex items-center justify-center gap-1">
//                   <FaStar className="text-yellow-500" />
//                   <FaStar className="text-yellow-500" />
//                   <FaStar className="text-yellow-500" />
//                   <FaStar className="text-yellow-500" />
//                 </div>
//                 <h1 className="text-xl font-bold">{data.title}</h1>
//                 <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
//                   {data.description}
//                 </p>
//                 <button
//                   className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
//                   onClick={handleOrderPopup}
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllProductsPage;





// import React from "react";
// import Img1 from "../assets/shirt/shirt.png";
// import Img2 from "../assets/shirt/shirt2.png";
// import Img3 from "../assets/shirt/shirt3.png";
// import { FaStar } from "react-icons/fa";

// const ProductsData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Casual Wear",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Printed Shirt",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Women Shirt",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 4,
//     img: Img2,
//     title: "Printed Shirt",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 5,
//     img: Img1,
//     title: "Casual Wear",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 6,
//     img: Img2,
//     title: "Printed Shirt",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 7,
//     img: Img3,
//     title: "Women Shirt",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 8,
//     img: Img2,
//     title: "Printed Shirt",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

// const AllProductsPage = () => {
//   const handleOrderPopup = () => {
//     // Logic for opening the order popup
//   };

//   return (
//     <div className="container mt-32">
//       {/* Header section */}
//       <div className="text-left mb-24">
//         <p data-aos="fade-up" className="text-sm text-primary">
//           Top Rated Products for you
//         </p>
//         <h1 data-aos="fade-up" className="text-3xl font-bold">
//           Best Products
//         </h1>
//         <p data-aos="fade-up" className="text-xs text-gray-400">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//           asperiores modi.
//         </p>
//       </div>

//       {/* Body section */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center ">
//         {ProductsData.map((data) => (
//           <div
//             key={data.id} // Added key prop for list items
//             data-aos="zoom-in"
//             className=" mb-32 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
//           >
//             {/* Image section */}
//             <div className="h-[100px]">
//               <img
//                 src={data.img}
//                 alt={data.title} // Added alt text for accessibility
//                 className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
//               />
//             </div>
//             {/* Details section */}
//             <div className="p-4 text-center">
//               {/* Star rating */}
//               <div className="w-full flex items-center justify-center gap-1">
//                 <FaStar className="text-yellow-500" />
//                 <FaStar className="text-yellow-500" />
//                 <FaStar className="text-yellow-500" />
//                 <FaStar className="text-yellow-500" />
//               </div>
//               <h1 className="text-xl font-bold">{data.title}</h1>
//               <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
//                 {data.description}
//               </p>
//               <button
//                 className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
//                 onClick={handleOrderPopup}
//               >
//                 Order Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProductsPage;
















import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const AllProductsPage = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const [productsData, setProductsData] = useState([]); // Corrected variable name
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="mt-40 mb-12"> 
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
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
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">Price: ₹{data.price}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.totalrating || "0"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* View All Button */}
          {/* <div 
            className="flex justify-center"
            onClick={() => navigate('/all-products')}
          >
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
