
// // src/pages/Home.js
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Products from "../components/Products/Products";
// import TopProducts from "../components/TopProducts/TopProducts";
// import Banner from "../components/Banner/Banner";
// import Subscribe from "../components/Subscribe/Subscribe";
// import Testimonials from "../components/Testimonials/Testimonials";
// import Footer from "../components/Footer/Footer";
// import Popup from "../components/Popup/Popup";
// import Hero from "../components/Hero/Hero";
// import CategoryProducts from "../components/Products/CategoryProducts";
// import PullToRefresh from "../components/PullToRefresh";



// const products = [
//   {
//     image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Ring.jpg',
//     title: 'Rings',
//     description: 'Engagement Rings | Solitaire Rings | Dailywear Rings',
//   },
//   {
//     image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Nosepin.jpg',
//     title: 'Nose Pin',
//     description: 'Nose Ring | Gold Nose Pin | Diamond Nose Pin | Everyday Nose Pin',
//   },
//   {
//     image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Earring.jpg',
//     title: 'Earrings',
//     description: 'Studs | Hoops & Huggies | Drops & Danglers',
//   },
//   {
//       image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Earring.jpg',
//       title: 'Earrings',
//       description: 'Studs | Hoops & Huggies | Drops & Danglers',
//     },
// ];

// const Home = () => {
//   const [orderPopup, setOrderPopup] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
  

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   const location = useLocation();
//   const navigate = useNavigate()

 

//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const search = query.get('search');
//     if (search) {
//       setSearchTerm(search);
//       const getData = async()=>{
//       try {
//         const result = await axios.get(`/getallsearch/${search}`);
//         if (result.data) {
    
//         }else{
//           setProductData(dummyProduct); // Use dummy product if no data is returned
//         }
//       } catch (error) {
//         // setError('Error fetching product data');
//       } finally {
//         setLoading(false);
//       }
//     }
//     getData();
//     }else{
//       setSearchTerm('');
//     }
   
//   }, [location]);

//   const filteredData = products.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );


//   const fetchData = () =>{
//     alert('wroking fine')
//   }

//   return (
//     <div>
//       {/* Search Results */}
//       <PullToRefresh fetchData={fetchData}>
//       {searchTerm&& (
//         <div className="search-results mt-32">
//           <h2 className="text-center text-xl">Search Results:</h2>
//           <div className="container mx-auto p-4">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {filteredData.map((product, index) => (
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
//       <div className="flex justify-center mt-6">
//         <h2 className="text-lg font-semibold cursor-pointer hover:underline">View All</h2>
//       </div>
//     </div>
//         </div>
//       )}

//       {/* Original Components */}
//       {!searchTerm && (
//         <>
//           <Hero handleOrderPopup={handleOrderPopup} />
//           <Products />
//           <TopProducts handleOrderPopup={handleOrderPopup} />
//           <Banner />
//           <CategoryProducts />
//           <Subscribe />
//           <Testimonials />
//           <Footer />
//           <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
//         </>
//       )}
//        </PullToRefresh>
//     </div>
//   );
// };

// export default Home;

















// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from 'axios'; // Import axios
// import Products from "../components/Products/Products";
// import TopProducts from "../components/TopProducts/TopProducts";
// import Banner from "../components/Banner/Banner";
// import Subscribe from "../components/Subscribe/Subscribe";
// import Testimonials from "../components/Testimonials/Testimonials";
// import Footer from "../components/Footer/Footer";
// import Popup from "../components/Popup/Popup";
// import Hero from "../components/Hero/Hero";
// import CategoryProducts from "../components/Products/CategoryProducts";
// import PullToRefresh from "../components/PullToRefresh";

// const dummyProduct = [
//   {
//     image: 'https://dummyimage.com/200x200/000/fff&text=Dummy+Product',
//     title: 'Dummy Product',
//     description: 'This is a dummy product description.',
//   },
// ];

// const Home = () => {
//   const [orderPopup, setOrderPopup] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [productData, setProductData] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const search = query.get('search');

//     if (search) {
//       setSearchTerm(search);
//       const getData = async () => {
//         setLoading(true); // Set loading to true
//         try {
//           const result = await axios.get(`/getallsearch?search=${search}`);
//           if (result.data) {
//             setProductData(result.data); // Update product data
//           } else {
//             setProductData(dummyProduct); // Use dummy product if no data is returned
//           }
//         } catch (error) {
//           console.error('Error fetching product data', error);
//           setProductData(dummyProduct); // Fallback to dummy data
//         } finally {
//           setLoading(false); // Set loading to false
//         }
//       };
//       getData();
//     } else {
//       setSearchTerm('');
//       setProductData([]); // Reset product data if no search
//     }
//   }, [location]);

//   const filteredData = productData.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const fetchData = () => {
//     alert('working fine');
//   }

//   return (
//     <div>
//       {/* Search Results */}
//       <PullToRefresh fetchData={fetchData}>
//         {searchTerm && (
//           <div className="search-results mt-32">
//             <h2 className="text-center text-xl">Search Results:</h2>
//             <div className="container mx-auto p-4">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {loading ? ( // Display loading while fetching data
//                   <p>Loading...</p>
//                 ) : (
//                   filteredData.map((product, index) => (
//                     <div
//                       key={index}
//                       className="cursor-pointer p-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
//                       onClick={() => {
//                           navigate(`/product/${product.title}`); // Example navigation
//                       }}
//                     >
//                       <img
//                         src={product.image}
//                         alt={product.title}
//                         className="rounded-lg hover:scale-x-105"
//                       />
//                       <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
//                       <p className="text-sm text-purple-500">{product.description}</p>
//                     </div>
//                   ))
//                 )}
//               </div>
//               <div className="flex justify-center mt-6">
//                 <h2 className="text-lg font-semibold cursor-pointer hover:underline">View All</h2>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Original Components */}
//         {!searchTerm && (
//           <>
//             <Hero handleOrderPopup={handleOrderPopup} />
//             <Products />
//             <TopProducts handleOrderPopup={handleOrderPopup} />
//             <Banner />
//             <CategoryProducts />
//             <Subscribe />
//             <Testimonials />
//             <Footer />
//             <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
//           </>
//         )}
//       </PullToRefresh>
//     </div>
//   );
// };

// export default Home;














// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import Products from "../components/Products/Products";
// import TopProducts from "../components/TopProducts/TopProducts";
// import Banner from "../components/Banner/Banner";
// import Subscribe from "../components/Subscribe/Subscribe";
// import Testimonials from "../components/Testimonials/Testimonials";
// import Footer from "../components/Footer/Footer";
// import Popup from "../components/Popup/Popup";
// import Hero from "../components/Hero/Hero";
// import CategoryProducts from "../components/Products/CategoryProducts";

// const Home = () => {
//   const [orderPopup, setOrderPopup] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [productData, setProductData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const search = query.get('search');

//     const getData = async () => {
//       setLoading(true);
//       try {
//         const result = await axios.get(`/getallsearch?query=${search || ''}`);
//         if (result.data.products) {
//           setProductData(result.data.products); // Set product data from the response
//         } else {
//           setProductData([]); // Fallback to empty array if no products found
//         }
//       } catch (error) {
//         console.error('Error fetching product data', error);
//         setProductData([]); // Handle error by resetting product data
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, [location]);


//   return (
//     <div>
//         {searchTerm && (
//           <div className="search-results mt-32">
//             <h2 className="text-center text-xl">Search Results:</h2>
//             <div className="container mx-auto p-4">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {loading ? (
//                   <p>Loading...</p>
//                 ) : (
//                   productData.map((product, index) => (
//                     <div
//                       key={index+1}
//                       className="cursor-pointer p-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
//                       onClick={() => navigate(`/product/${product._id}`)} // Navigate to product details
//                     >
//                       <img
//                         src={product.images[0]} // Use the first image from the array
//                         alt={product.title}
//                         className="rounded-lg hover:scale-x-105"
//                       />
//                       <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
//                       <p className="text-sm text-purple-500">{product.description}</p>
//                       <p className="text-lg font-bold">${product.price}</p>
//                     </div>
//                   ))
//                 )}
//               </div>
//               <div className="flex justify-center mt-6">
//                 <h2 className="text-lg font-semibold cursor-pointer hover:underline">View All</h2>
//               </div>
//             </div>
//           </div>
//         )}

//         {!searchTerm && (
//           <>
//             <Hero handleOrderPopup={handleOrderPopup} />
//             <Products />
//             <TopProducts handleOrderPopup={handleOrderPopup} />
//             <Banner />
//             <CategoryProducts />
//             <Subscribe />
//             <Testimonials />
//             <Footer />
//             <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
//           </>
//         )}
//     </div>
//   );
// };

// export default Home;

















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
        const result = await axios.get(`/getallsearch?query=${search}&sort=${sort}`, {
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

      {!searchTerm && (
        <>
          <Hero handleOrderPopup={handleOrderPopup} />
          <Products/>
          <TopProducts handleOrderPopup={handleOrderPopup} />
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
