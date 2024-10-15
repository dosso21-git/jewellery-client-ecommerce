


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

// const MostSellingProducts = () => {
//   const handleOrderPopup = () => {
//     // Logic for opening the order popup
//   };

//   return (
//     <div className="container mt-32">
//       {/* Header section */}
//       <div className="text-left mb-24">
//         <p data-aos="fade-up" className="text-sm text-primary">
//           Most Selling Products for you
//         </p>
//         <h1 data-aos="fade-up" className="text-3xl font-bold">
//          Most Selling Products
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

// export default MostSellingProducts;









// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaStar } from "react-icons/fa";

// const MostSellingProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch the data from the API
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("/most-selling");
//       setProducts(response.data);
//       // setProducts(Array.isArray(response.data) ? response.data : []); 
//       console.log('data',response.data)
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       // setProducts([]); // Set to an empty array on error
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleOrderPopup = () => {
//     // Logic for opening the order popup
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Loading state
//   }

//   return (
//     <div className="container mt-32">
//       {/* Header section */}
//       <div className="text-left mb-24">
//         <p data-aos="fade-up" className="text-sm text-primary">
//           Most Selling Products for you
//         </p>
//         <h1 data-aos="fade-up" className="text-3xl font-bold">
//           Most Selling Products
//         </h1>
//         <p data-aos="fade-up" className="text-xs text-gray-400">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
//         </p>
//       </div>

//       {/* Body section */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center ">
//         {products.map((product,index) => (
//           <div
//             key={index+1}
//             data-aos="zoom-in"
//             className="mb-28 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group w-[180px] h-[370px] sm:w-[270px]"
//           >
//             {/* Image section */}
//             <div className="h-[150px] flex items-center justify-center">
//               <img
//                 src={product.images[0]}
//                 alt={product.title}
//                 className="max-h-full max-w-full object-contain transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
//               />
//             </div>
//             {/* Details section */}
//             <div className="p-4 text-center flex-grow">
//               {/* Star rating */}
//               <div className="w-full flex items-center justify-center gap-1">
//                 {Array(4) // Replace with actual ratings if available
//                   .fill()
//                   .map((_, index) => (
//                     <FaStar key={index} className="text-yellow-500" />
//                   ))}
//               </div>
//               <h1 className="text-xl font-bold">{product.title}</h1>
//               <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
//                 {product.description}
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

// export default MostSellingProducts;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const MostSellingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the data from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/user/most-selling");
      if(response.data.data){
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
          Most Selling Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Most Selling Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
        </p>
      </div>

      {/* Body section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {products.map((product) => (
          <div
            key={product._id} // Ensure this key is unique
            data-aos="zoom-in"
            className="mb-28 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group w-[180px] h-[370px] sm:w-[270px]"
          >
            {/* Image section */}
            <div className="h-[150px] flex items-center justify-center">
              <img
                src={product.images[0]}
                alt={product.title}
                className="max-h-full max-w-full object-contain transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
              />
            </div>
            {/* Details section */}
            <div className="p-4 text-center flex-grow">
              {/* Star rating */}
              <div className="w-full flex items-center justify-center gap-1">
                {Array(4) // Replace with actual ratings if available
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
              </div>
              <h1 className="text-xl font-bold">{product.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {product.description}
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

export default MostSellingProducts;
