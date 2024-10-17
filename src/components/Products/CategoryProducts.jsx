// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';


// const products = [
//     {
//       image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Ring.jpg',
//       title: 'Rings',
//       description: 'Engagement Rings | Solitaire Rings | Dailywear Rings',
//     },
//     {
//       image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Nosepin.jpg',
//       title: 'Nose Pin',
//       description: 'Nose Ring | Gold Nose Pin | Diamond Nose Pin | Everyday Nose Pin',
//     },
//     {
//       image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Earring.jpg',
//       title: 'Earrings',
//       description: 'Studs | Hoops & Huggies | Drops & Danglers',
//     },
//     {
//         image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Earring.jpg',
//         title: 'Earrings',
//         description: 'Studs | Hoops & Huggies | Drops & Danglers',
//       },
//   ];

  
// const CategoryProducts = () => {
 
//     const navigate = useNavigate()

//     const navigationFunction =(type)=>{
//       navigate(`/all-category/${type}`); 
//     }


//     useEffect(()=>{
//       getAllProducts()
//     },[])


//     const getAllProducts = async() =>{
//           try{
//               const response = await axios.get('/product/getall');
//               console.log('response in category',response.data);
//               alert('ok')
//           }catch(err){
//             console.log('errr',err)
//           }
//     }


//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold text-center mb-6">All Category</h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             // className="border rounded-lg shadow-md p-4 flex flex-col items-center"
//             data-aos="zoom-in"
//             className="  cursor-pointer p-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
//             onClick={()=>{
//                 navigationFunction(product.title)
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//             //   className="w-20 h-20 object-contain mb-4"
//               className="rounded-lg hover:scale-x-105"
//             />
//             <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
//             <p className="text-sm text-purple-500">{product.description}</p>
//           </div>
//         ))}
//       </div>
//       <div 
//       className="flex justify-center mt-6"
//       onClick={()=>{
//         navigationFunction('all')
//       }}
//       >
//         <h2 className="text-lg font-semibold cursor-pointer hover:underline">View All</h2>
//       </div>
//     </div>
//   );
// };

// export default CategoryProducts;















import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryProducts = () => {
  const [products, setProducts] = useState([]); // State to hold fetched products
  const navigate = useNavigate();

  const navigationFunction = (type) => {
    navigate(`/all-category/${type}`);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

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
          setProducts(validProducts); // Update the state with valid product data
        } else {
          console.error("No valid products found in the response.");
          setProducts([]); // Set to empty array if no valid products found
        }
      } else {
        console.error("Expected an array but got:", response.data.data);
        setProducts([]); // Set to empty array if not valid
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]); // Optionally set to empty array on error
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">All Categories</h1>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {products.map((product) => (
          <div
            key={product._id}
            data-aos="zoom-in"
            className="group relative flex flex-col items-center justify-center cursor-pointer p-4 rounded-lg bg-white dark:bg-gray-800  dark:hover:bg-primary shadow-lg transition duration-300 ease-in-out"
            onClick={() => {
              navigationFunction(product.category); // Navigate based on product category
            }}
          >
            <img
              src={product.images[0]} // Use the first image from the array
              alt={product.title}
              className="object-cover rounded-lg h-40 w-40 md:h-48 md:w-48 transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="text-lg font-semibold mt-2 mb-1 text-center">{product.title}</h2>
            {/* <p className="text-sm dark:text-gray-300 text-center">{product.description}</p> */}
           
          </div>
        ))}
      </div>
      <div
        className="flex justify-center mt-6"
        onClick={() => {
          navigationFunction('all');
        }}
      >
        <h2 className="text-lg font-semibold cursor-pointer hover:underline">View All</h2>
      </div>
    </div>
  );
};

export default CategoryProducts;
