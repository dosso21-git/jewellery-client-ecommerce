// import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import filled and regular heart icons

// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import ReactImageMagnify from 'react-image-magnify';  // Importing the magnify library

// import Cookies from 'js-cookie'

// const ProductDetails = () => {
//     const { id } = useParams(); // Retrieve the product ID from the URL

//     console.log('getting id', id);

//     const [isInWishlist, setIsInWishlist] = useState(false); // State to track wishlist status

//     const [selectedImage, setSelectedImage] = useState('https://th.bing.com/th/id/OIP.znS3E-xhiMUwDAwwZiXa8gAAAA?rs=1&pid=ImgDetMain'); // Placeholder for product image URL

//     const productImages = [
//         'https://th.bing.com/th/id/OIP.znS3E-xhiMUwDAwwZiXa8gAAAA?rs=1&pid=ImgDetMain', // Use actual image URLs
//         'https://i.pinimg.com/originals/2c/43/d1/2c43d1f31e0d75308b840c57f9a7aa51.jpg',
//         'https://i.pinimg.com/originals/0b/c3/76/0bc37647f8404ccecb4a6ce4fedb9685.jpg',
//     ];

//     const price = 15999;
//     const originalPrice = 21999;
//     const discount = ((originalPrice - price) / originalPrice) * 100;

//     let navigation = useNavigate()

//     let token = Cookies.get('usertoken')

//     const redirectFunction = () => {
//         if (!token) {
//             navigation('/login')
//         } else {
//             // buy now this product
//         }
//     }

//     const AddToCart = () => {
//         if (!token) {
//             navigation('/login')
//         } else {
//             // buy now this product
//         }
//     }

//     const toggleWishlist = () => {
//         setIsInWishlist(!isInWishlist); // Toggle wishlist state
//         console.log('Toggled wishlist');
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Left Column: Product Images */}
//                 <div>
//                     <div className="border mb-4 p-4">
//                         {/* Main Image with Magnify effect */}
//                         <ReactImageMagnify
//                             {...{
//                                 smallImage: {
//                                     alt: 'Product Image',
//                                     isFluidWidth: true,
//                                     src: selectedImage,
//                                 },
//                                 largeImage: {
//                                     src: selectedImage,
//                                     width: 800,
//                                     height: 900,
//                                 },
//                                 enlargedImageContainerDimensions: {
//                                     width: '100%',
//                                     height: '80%',
//                                 },
//                                 enlargedImagePosition: 'beside', // To display zoomed image beside the original one
//                             }}
//                             style={{ width: '100%', height: '100%' }}
//                         />
//                     </div>

//                     {/* Image Thumbnails */}
//                     <div className="flex space-x-2">
//                         {productImages.map((img, index) => (
//                             <img
//                                 key={index}
//                                 src={img}
//                                 alt={`Product ${index}`}
//                                 onClick={() => setSelectedImage(img)}
//                                 className={`w-16 h-16 object-cover cursor-pointer border ${selectedImage === img ? 'border-indigo-600' : 'border-gray-300'
//                                     }`}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Column: Product Details */}
//                 <div>
//                     <h1 className="text-2xl font-bold mb-2">CMF by Nothing Phone 1 (Light Green, 128 GB) (8 GB RAM)</h1>

//                     <div className="flex items-center space-x-2 mb-4">
//                         <span className="text-green-600 font-semibold">4.3 ★</span>
//                         <span>6,440 Ratings & 462 Reviews</span>
//                         <button onClick={toggleWishlist} className="ml-4 text-red-500 hover:text-red-700">
//                             {isInWishlist ? (
//                                 <FaHeart size={24} /> // Filled heart when in wishlist
//                             ) : (
//                                 <FaRegHeart size={24} /> // Regular heart when not in wishlist
//                             )}
//                         </button>
//                     </div>

//                     {/* Pricing Section */}
//                     <div className="mb-4">
//                         <span className="text-3xl font-bold text-red-600">₹{price}</span>
//                         <span className="line-through text-gray-500 ml-4">₹{originalPrice}</span>
//                         <span className="text-green-600 font-semibold ml-2">{Math.round(discount)}% off</span>
//                     </div>

//                     {/* Available Offers */}
//                     <div className="mb-4">
//                         <h3 className="text-lg font-semibold">Available offers</h3>
//                         <ul className="list-disc list-inside text-gray-700 space-y-2">
//                             <li>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
//                             <li>Bank Offer 10% off up to ₹500 on HDFC Bank Credit Card</li>
//                             <li>Bank Offer ₹1500 Off On HDFC Bank Credit Card Transactions</li>
//                             <li>Special Price Get extra ₹2000 off</li>
//                         </ul>
//                     </div>

//                     {/* Buy Options */}
//                     <div className="border rounded-lg p-4 mb-4">
//                         <div className="flex items-center space-x-4">
//                             <input type="radio" id="withoutExchange" name="exchange" defaultChecked />
//                             <label htmlFor="withoutExchange" className="font-medium">
//                                 Buy without Exchange
//                             </label>
//                             <span className="font-semibold">₹{price}</span>
//                         </div>
//                         <div className="flex items-center space-x-4 mt-2">
//                             <input type="radio" id="withExchange" name="exchange" />
//                             <label htmlFor="withExchange" className="font-medium">
//                                 Buy with Exchange
//                             </label>
//                             <span className="text-gray-500">up to ₹9,650 off</span>
//                         </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex space-x-4">
//                         <button
//                             onClick={() => {
//                                 AddToCart();
//                             }}
//                             className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
//                             ADD TO CART
//                         </button>
//                         <button
//                             onClick={() => {
//                                 redirectFunction();
//                             }}
//                             className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
//                             BUY NOW
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import ReactImageMagnify from 'react-image-magnify';
// import Cookies from 'js-cookie';

// const ProductDetails = () => {
//     const { id } = useParams();
//     const [isInWishlist, setIsInWishlist] = useState(false);
//     const [selectedImage, setSelectedImage] = useState('https://th.bing.com/th/id/OIP.znS3E-xhiMUwDAwwZiXa8gAAAA?rs=1&pid=ImgDetMain');
//     const [couponCode, setCouponCode] = useState('');
//     const [discountedPrice, setDiscountedPrice] = useState(15999);

//     const productImages = [
//         'https://th.bing.com/th/id/OIP.znS3E-xhiMUwDAwwZiXa8gAAAA?rs=1&pid=ImgDetMain',
//         'https://i.pinimg.com/originals/2c/43/d1/2c43d1f31e0d75308b840c57f9a7aa51.jpg',
//         'https://i.pinimg.com/originals/0b/c3/76/0bc37647f8404ccecb4a6ce4fedb9685.jpg',
//     ];

//     const price = 15999;
//     const originalPrice = 21999;
//     const discount = ((originalPrice - price) / originalPrice) * 100;

//     const navigation = useNavigate();
//     const token = Cookies.get('usertoken');

//     const redirectFunction = () => {
//         if (!token) {
//             navigation('/login');
//         } else {
//             // Buy now this product
//         }
//     };

//     const AddToCart = () => {
//         if (!token) {
//             navigation('/login');
//         } else {
//             // Add to cart logic
//         }
//     };

//     const toggleWishlist = () => {
//         setIsInWishlist(!isInWishlist);
//     };

//     const applyCoupon = () => {
//         if (couponCode === 'FLAT50') {
//             setDiscountedPrice(price - 50);
//         } else {
//             alert('Invalid coupon code');
//         }
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Left Column: Product Images */}
//                 <div>
//                     <div className="border mb-4 p-4">
//                         <ReactImageMagnify
//                             {...{
//                                 smallImage: {
//                                     alt: 'Product Image',
//                                     isFluidWidth: true,
//                                     src: selectedImage,
//                                 },
//                                 largeImage: {
//                                     src: selectedImage,
//                                     width: 800,
//                                     height: 900,
//                                 },
//                                 enlargedImageContainerDimensions: {
//                                     width: '100%',
//                                     height: '80%',
//                                 },
//                                 enlargedImagePosition: 'beside',
//                             }}
//                             style={{ width: '100%', height: '100%' }}
//                         />
//                     </div>

//                     {/* Image Thumbnails */}
//                     <div className="flex space-x-2">
//                         {productImages.map((img, index) => (
//                             <img
//                                 key={index}
//                                 src={img}
//                                 alt={`Product ${index}`}
//                                 onClick={() => setSelectedImage(img)}
//                                 className={`w-16 h-16 object-cover cursor-pointer border ${selectedImage === img ? 'border-indigo-600' : 'border-gray-300'}`}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Column: Product Details */}
//                 <div>
//                     <h1 className="text-2xl font-bold mb-2">CMF by Nothing Phone 1 (Light Green, 128 GB) (8 GB RAM)</h1>

//                     <div className="flex items-center space-x-2 mb-4">
//                         <span className="text-green-600 font-semibold">4.3 ★</span>
//                         <span>6,440 Ratings & 462 Reviews</span>
//                         <button onClick={toggleWishlist} className="ml-4 text-red-500 hover:text-red-700">
//                             {isInWishlist ? <FaHeart size={24} color="darkred" /> : <FaRegHeart size={24} />}
//                         </button>
//                     </div>

//                     {/* Pricing Section */}
//                     <div className="mb-4">
//                         <span className="text-3xl font-bold text-red-600">₹{discountedPrice}</span>
//                         <span className="line-through text-gray-500 ml-4">₹{originalPrice}</span>
//                         <span className="text-green-600 font-semibold ml-2">{Math.round(discount)}% off</span>
//                     </div>

//                     {/* Coupon Code Input */}
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             value={couponCode}
//                             onChange={(e) => setCouponCode(e.target.value)}
//                             placeholder="Enter coupon code"
//                             className="border rounded p-2 w-full"
//                         />
//                         <button
//                             onClick={applyCoupon}
//                             className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//                             Apply Coupon
//                         </button>
//                     </div>

//                     {/* Available Offers */}
//                     <div className="mb-4">
//                         <h3 className="text-lg font-semibold">Available offers</h3>
//                         <ul className="list-disc list-inside text-gray-700 space-y-2">
//                             <li>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
//                             <li>Bank Offer 10% off up to ₹500 on HDFC Bank Credit Card</li>
//                             <li>Bank Offer ₹1500 Off On HDFC Bank Credit Card Transactions</li>
//                             <li>Special Price Get extra ₹2000 off</li>
//                         </ul>
//                     </div>

//                     {/* Buy Options */}
//                     <div className="border rounded-lg p-4 mb-4">
//                         <div className="flex items-center space-x-4">
//                             <input type="radio" id="withoutExchange" name="exchange" defaultChecked />
//                             <label htmlFor="withoutExchange" className="font-medium">Buy without Exchange</label>
//                             <span className="font-semibold">₹{discountedPrice}</span>
//                         </div>
//                         <div className="flex items-center space-x-4 mt-2">
//                             <input type="radio" id="withExchange" name="exchange" />
//                             <label htmlFor="withExchange" className="font-medium">Buy with Exchange</label>
//                             <span className="text-gray-500">up to ₹9,650 off</span>
//                         </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex space-x-4">
//                         <button
//                             onClick={AddToCart}
//                             className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
//                             ADD TO CART
//                         </button>
//                         <button
//                             onClick={redirectFunction}
//                             className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
//                             BUY NOW
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import ReactImageMagnify from 'react-image-magnify';
// import Cookies from 'js-cookie';
// import CouponPopup from '../components/Popup/CouponPopup';

// const ProductDetails = () => {
//     const { id } = useParams();
//     const [isInWishlist, setIsInWishlist] = useState(false);
//     const [selectedImage, setSelectedImage] = useState('https://th.bing.com/th/id/OIP.znS3E-xhiMUwDAwwZiXa8gAAAA?rs=1&pid=ImgDetMain');
//     const [couponCode, setCouponCode] = useState('');
//     const [discountedPrice, setDiscountedPrice] = useState(15999);
//     const [showPopup, setShowPopup] = useState(false); // State for showing the popup

//     const productImages = [
//         'https://th.bing.com/th/id/OIP.znS3E-xhiMUwDAwwZiXa8gAAAA?rs=1&pid=ImgDetMain',
//         'https://i.pinimg.com/originals/2c/43/d1/2c43d1f31e0d75308b840c57f9a7aa51.jpg',
//         'https://i.pinimg.com/originals/0b/c3/76/0bc37647f8404ccecb4a6ce4fedb9685.jpg',
//     ];

//     const price = 15999;
//     const originalPrice = 21999;
//     const discount = ((originalPrice - price) / originalPrice) * 100;

//     const navigation = useNavigate();
//     const token = Cookies.get('usertoken');

//     const redirectFunction = () => {
//        navigation('/delivery-address')
//         if (!token) {
//             // navigation('/login');
//         } else {
//             // Buy now this product
//         }
//     };

//     const AddToCart = () => {
//         navigation('/cart')
//         if (!token) {
//             // navigation('/login');
//         } else {
//             // Add to cart logic
//         }
//     };

//     const toggleWishlist = () => {
//         setIsInWishlist(!isInWishlist);
//             navigation('/wishlist')
//     };

//     const applyCoupon = () => {
//         if (couponCode === 'FLAT50') {
//             setDiscountedPrice(price - 50);
//             setShowPopup(true); // Show the popup

//             // Automatically close the popup after 2 seconds
//             setTimeout(() => {
//                 setShowPopup(false);
//             }, 2000);
//         } else {
//             alert('Invalid coupon code');
//         }
//     };

//     return (
//         <div className="container mx-auto p-4 mt-24 ">
//             {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />} {/* Render popup when applicable */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Left Column: Product Images */}
//                 <div>
//                     <div className="border mb-4 p-4">
//                         <ReactImageMagnify
//                             {...{
//                                 smallImage: {
//                                     alt: 'Product Image',
//                                     isFluidWidth: true,
//                                     src: selectedImage,
//                                 },
//                                 largeImage: {
//                                     src: selectedImage,
//                                     width: 800,
//                                     height: 900,
//                                 },
//                                 enlargedImageContainerDimensions: {
//                                     width: '100%',
//                                     height: '80%',
//                                 },
//                                 enlargedImagePosition: 'beside',
//                             }}
//                             style={{ width: '100%', height: '100%' }}
//                         />
//                     </div>

//                     {/* Image Thumbnails */}
//                     <div className="flex space-x-2">
//                         {productImages.map((img, index) => (
//                             <img
//                                 key={index}
//                                 src={img}
//                                 alt={`Product ${index}`}
//                                 onClick={() => setSelectedImage(img)}
//                                 className={`w-16 h-16 object-cover cursor-pointer border ${selectedImage === img ? 'border-indigo-600' : 'border-gray-300'}`}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Column: Product Details */}
//                 <div>
//                     <h1 className="text-2xl font-bold mb-2">CMF by Nothing Phone 1 (Light Green, 128 GB) (8 GB RAM)</h1>

//                     <div className="flex items-center space-x-2 mb-4">
//                         <span className="text-green-600 font-semibold">4.3 ★</span>
//                         <span>6,440 Ratings & 462 Reviews</span>
//                         <button onClick={toggleWishlist} className="ml-4 text-red-500 hover:text-red-700">
//                             {isInWishlist ? <FaHeart size={24} color="darkred" /> : <FaRegHeart size={24} />}
//                         </button>
//                     </div>

//                     {/* Pricing Section */}
//                     <div className="mb-4">
//                         <span className="text-3xl font-bold text-red-600">₹{discountedPrice}</span>
//                         <span className="line-through text-gray-500 ml-4">₹{originalPrice}</span>
//                         <span className="text-green-600 font-semibold ml-2">{Math.round(discount)}% off</span>
//                     </div>

//                     {/* Coupon Code Input */}
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             value={couponCode}
//                             onChange={(e) => setCouponCode(e.target.value)}
//                             placeholder="Enter coupon code"
//                             className="border rounded p-2 w-full"
//                         />
//                         <button
//                             onClick={applyCoupon}
//                             className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//                             Apply Coupon
//                         </button>
//                     </div>

//                     {/* Available Offers */}
//                     <div className="mb-4">
//                         <h3 className="text-lg font-semibold">Available offers</h3>
//                         <ul className="list-disc list-inside text-gray-700 space-y-2">
//                             <li>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
//                             <li>Bank Offer 10% off up to ₹500 on HDFC Bank Credit Card</li>
//                             <li>Bank Offer ₹1500 Off On HDFC Bank Credit Card Transactions</li>
//                             <li>Special Price Get extra ₹2000 off</li>
//                         </ul>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex space-x-4">
//                         <button
//                             onClick={AddToCart}
//                             className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
//                             ADD TO CART
//                         </button>
//                         <button
//                             onClick={redirectFunction}
//                             className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
//                             BUY NOW
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import ReactImageMagnify from 'react-image-magnify';
// import Cookies from 'js-cookie';
// import CouponPopup from '../components/Popup/CouponPopup';

// const productData = {
//   id: 1,
//   name: "CMF by Nothing Phone 1 (Light Green, 128 GB) (8 GB RAM)",
//   images: [
//     'https://th.bing.com/th/id/OIP.znS3E-xhiMUwDAwwZiXa8gAAAA?rs=1&pid=ImgDetMain',
//     'https://i.pinimg.com/originals/2c/43/d1/2c43d1f31e0d75308b840c57f9a7aa51.jpg',
//     'https://i.pinimg.com/originals/0b/c3/76/0bc37647f8404ccecb4a6ce4fedb9685.jpg',
//   ],
//   originalPrice: 21999,
//   price: 15999,
//   rating: 4.3,
//   ratingsCount: 6440,
//   reviewsCount: 462,
//   availableOffers: [
//     "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
//     "Bank Offer 10% off up to ₹500 on HDFC Bank Credit Card",
//     "Bank Offer ₹1500 Off On HDFC Bank Credit Card Transactions",
//     "Special Price Get extra ₹2000 off",
//   ],
// };

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(productData.images[0]);
//   const [couponCode, setCouponCode] = useState('');
//   const [discountedPrice, setDiscountedPrice] = useState(productData.price);
//   const [showPopup, setShowPopup] = useState(false); // State for showing the popup

//   const navigate = useNavigate();
//   const token = Cookies.get('usertoken');

//   const redirectFunction = () => {
//     navigate('/delivery-address');
//     if (!token) {
//       // navigation('/login');
//     } else {
//       // Buy now this product
//     }
//   };

//   const AddToCart = () => {
//     navigate('/cart');
//     if (!token) {
//       // navigation('/login');
//     } else {
//       // Add to cart logic
//     }
//   };

//   const toggleWishlist = () => {
//     setIsInWishlist(!isInWishlist);
//     navigate('/wishlist');
//   };

//   const applyCoupon = () => {
//     if (couponCode === 'FLAT50') {
//       setDiscountedPrice(productData.price - 50);
//       setShowPopup(true); // Show the popup

//       // Automatically close the popup after 2 seconds
//       setTimeout(() => {
//         setShowPopup(false);
//       }, 2000);
//     } else {
//       alert('Invalid coupon code');
//     }
//   };

//   const discount = ((productData.originalPrice - discountedPrice) / productData.originalPrice) * 100;

//   return (
//     <div className="container mx-auto p-4 mt-24">
//       {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />} {/* Render popup when applicable */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left Column: Product Images */}
//         <div>
//           <div className="border mb-4 p-4">
//             <ReactImageMagnify
//               {...{
//                 smallImage: {
//                   alt: 'Product Image',
//                   isFluidWidth: true,
//                   src: selectedImage,
//                 },
//                 largeImage: {
//                   src: selectedImage,
//                   width: 800,
//                   height: 900,
//                 },
//                 enlargedImageContainerDimensions: {
//                   width: '100%',
//                   height: '80%',
//                 },
//                 enlargedImagePosition: 'beside',
//               }}
//               style={{ width: '100%', height: '100%' }}
//             />
//           </div>

//           {/* Image Thumbnails */}
//           <div className="flex space-x-2">
//             {productData.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Product ${index}`}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-16 h-16 object-cover cursor-pointer border ${selectedImage === img ? 'border-indigo-600' : 'border-gray-300'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right Column: Product Details */}
//         <div>
//           <h1 className="text-2xl font-bold mb-2">{productData.name}</h1>

//           <div className="flex items-center space-x-2 mb-4">
//             <span className="text-green-600 font-semibold">{productData.rating} ★</span>
//             <span>{productData.ratingsCount} Ratings & {productData.reviewsCount} Reviews</span>
//             <button onClick={toggleWishlist} className="ml-4 text-red-500 hover:text-red-700">
//               {isInWishlist ? <FaHeart size={24} color="darkred" /> : <FaRegHeart size={24} />}
//             </button>
//           </div>

//           {/* Pricing Section */}
//           <div className="mb-4">
//             <span className="text-3xl font-bold text-red-600">₹{discountedPrice}</span>
//             <span className="line-through text-gray-500 ml-4">₹{productData.originalPrice}</span>
//             <span className="text-green-600 font-semibold ml-2">{Math.round(discount)}% off</span>
//           </div>

//           {/* Coupon Code Input */}
//           <div className="mb-4">
//             <input
//               type="text"
//               value={couponCode}
//               onChange={(e) => setCouponCode(e.target.value)}
//               placeholder="Enter coupon code"
//               className="border rounded p-2 w-full"
//             />
//             <button
//               onClick={applyCoupon}
//               className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//               Apply Coupon
//             </button>
//           </div>

//           {/* Available Offers */}
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold">Available offers</h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               {productData.availableOffers.map((offer, index) => (
//                 <li key={index}>{offer}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Buttons */}
//           <div className="flex space-x-4">
//             <button
//               onClick={AddToCart}
//               className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
//               ADD TO CART
//             </button>
//             <button
//               onClick={redirectFunction}
//               className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import ReactImageMagnify from 'react-image-magnify';
// import Cookies from 'js-cookie';
// import CouponPopup from '../components/Popup/CouponPopup';
// import axios from 'axios';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [couponCode, setCouponCode] = useState('');
//   const [discountedPrice, setDiscountedPrice] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const [productData, setProductData] = useState(null); // Changed to null initially
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const token = Cookies.get('usertoken');

//   useEffect(() => {
//     const getProductById = async () => {
//       try {
//         const result = await axios.get(`/product/getsingle/${id}`);
//         if (result.data) {
//           console.log('result',result.data)
//           setProductData(result.data);
//           setSelectedImage(result.data.images[0]); // Set the first image as selected
//           setDiscountedPrice(result.data.price); // Set initial discounted price
//         }
//       } catch (error) {
//         setError('Failed to fetch product data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProductById();
//   }, [id]);

//   const redirectFunction = () => {
//     if (!token) {
//       navigate('/login');
//     } else {
//       navigate('/delivery-address');
//     }
//   };

//   const AddToCart = () => {
//     if (!token) {
//       navigate('/login');
//     } else {
//       navigate('/cart');
//     }
//   };

//   const toggleWishlist = () => {
//     setIsInWishlist(!isInWishlist);
//     navigate('/wishlist');
//   };

//   const applyCoupon = () => {
//     if (couponCode === 'FLAT50') {
//       setDiscountedPrice(productData.price - 50);
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 2000);
//     } else {
//       alert('Invalid coupon code');
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   const discount = ((productData.originalPrice - discountedPrice) / productData.originalPrice) * 100;

//   return (
//     <div className="container mx-auto p-4 mt-24">
//       {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <div className="border mb-4 p-4">
//             <ReactImageMagnify
//               {...{
//                 smallImage: {
//                   alt: 'Product Image',
//                   isFluidWidth: true,
//                   src: selectedImage,
//                 },
//                 largeImage: {
//                   src: selectedImage,
//                   width: 800,
//                   height: 900,
//                 },
//                 enlargedImageContainerDimensions: {
//                   width: '100%',
//                   height: '80%',
//                 },
//                 enlargedImagePosition: 'beside',
//               }}
//               style={{ width: '100%', height: '100%' }}
//             />
//           </div>
//           <div className="flex space-x-2">
//             {productData.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Product ${index}`}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-16 h-16 object-cover cursor-pointer border ${selectedImage === img ? 'border-indigo-600' : 'border-gray-300'}`}
//               />
//             ))}
//           </div>
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold mb-2">{productData.name}</h1>
//           <div className="flex items-center space-x-2 mb-4">
//             <span className="text-green-600 font-semibold">{productData.rating} ★</span>
//             <span>{productData.ratingsCount} Ratings & {productData.reviewsCount} Reviews</span>
//             <button onClick={toggleWishlist} className="ml-4 text-red-500 hover:text-red-700">
//               {isInWishlist ? <FaHeart size={24} color="darkred" /> : <FaRegHeart size={24} />}
//             </button>
//           </div>
//           <div className="mb-4">
//             <span className="text-3xl font-bold text-red-600">₹{discountedPrice}</span>
//             <span className="line-through text-gray-500 ml-4">₹{productData.originalPrice}</span>
//             <span className="text-green-600 font-semibold ml-2">{Math.round(discount)}% off</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               value={couponCode}
//               onChange={(e) => setCouponCode(e.target.value)}
//               placeholder="Enter coupon code"
//               className="border rounded p-2 w-full"
//             />
//             <button
//               onClick={applyCoupon}
//               className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//               Apply Coupon
//             </button>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold">Available offers</h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               {productData.availableOffers.map((offer, index) => (
//                 <li key={index}>{offer}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex space-x-4">
//             <button
//               onClick={AddToCart}
//               className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
//               ADD TO CART
//             </button>
//             <button
//               onClick={redirectFunction}
//               className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import ReactImageMagnify from 'react-image-magnify';
// import Cookies from 'js-cookie';
// import CouponPopup from '../components/Popup/CouponPopup';
// import axios from 'axios';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [couponCode, setCouponCode] = useState('');
//   const [discountedPrice, setDiscountedPrice] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const [productData, setProductData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const token = Cookies.get('usertoken');

//   useEffect(() => {
//     const getProductById = async () => {
//       try {
//         const result = await axios.get(`/product/get/${id}`);
//         if (result.data) {
//           setError('');
//           setProductData(result.data);
//           setSelectedImage(result.data.images[0]);
//           setDiscountedPrice(result.data.price);
//           setError('');
//         }
//       } catch (error) {

//       } finally {
//         setLoading(false);
//       }
//     };

//     getProductById();
//   }, [id]);

//   const redirectFunction = () => {
//     if (!token) {
//       navigate('/login');
//     } else {
//       navigate('/delivery-address');
//     }
//   };

//   const AddToCart = () => {
//     if (!token) {
//       navigate('/login');
//     } else {
//       navigate('/cart');
//     }
//   };

//   const toggleWishlist = () => {
//     setIsInWishlist(!isInWishlist);
//     navigate('/wishlist');
//   };

//   const applyCoupon = () => {
//     if (couponCode === 'FLAT50') {
//       setDiscountedPrice(productData.price - 50);
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 2000);
//     } else {
//       alert('Invalid coupon code');
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   const discount = ((productData.price - discountedPrice) / productData.price) * 100;

//   return (
//     <div className="container mx-auto p-4 mt-24">
//       {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <div className="border mb-4 p-4">
//             <ReactImageMagnify
//               {...{
//                 smallImage: {
//                   alt: 'Product Image',
//                   isFluidWidth: true,
//                   src: selectedImage,
//                 },
//                 largeImage: {
//                   src: selectedImage,
//                   width: 800,
//                   height: 900,
//                 },
//                 enlargedImageContainerDimensions: {
//                   width: '100%',
//                   height: '80%',
//                 },
//                 enlargedImagePosition: 'beside',
//               }}
//               style={{ width: '100%', height: '100%' }}
//             />
//           </div>
//           <div className="flex space-x-2">
//             {productData?.images?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Product ${index}`}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-16 h-16 object-cover cursor-pointer border ${selectedImage === img ? 'border-indigo-600' : 'border-gray-300'}`}
//               />
//             ))}
//           </div>
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold mb-2">{productData.title}</h1>
//           <p className="text-sm text-gray-600 mb-4">{productData.description}</p>
//           <div className="flex items-center space-x-2 mb-4">
//             <span className="text-green-600 font-semibold">{productData.totalrating} ★</span>
//             <button onClick={toggleWishlist} className="ml-4 text-red-500 hover:text-red-700">
//               {isInWishlist ? <FaHeart size={24} color="darkred" /> : <FaRegHeart size={24} />}
//             </button>
//           </div>
//           <div className="mb-4">
//             <span className="text-3xl font-bold text-red-600">₹{discountedPrice}</span>
//             <span className="line-through text-gray-500 ml-4">₹{productData.price}</span>
//             <span className="text-green-600 font-semibold ml-2">{Math.round(discount)}% off</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               value={couponCode}
//               onChange={(e) => setCouponCode(e.target.value)}
//               placeholder="Enter coupon code"
//               className="border rounded p-2 w-full"
//             />
//             <button
//               onClick={applyCoupon}
//               className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//               Apply Coupon
//             </button>
//           </div>
//           {/* Available Offers */}
//           {productData?.availableOffers && productData?.availableOffers?.length > 0 && (
//             <div className="mb-4">
//               <h3 className="text-lg font-semibold">Available offers</h3>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 {productData.availableOffers.map((offer, index) => (
//                   <li key={index}>{offer}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Buttons */}
//           <div className="flex space-x-4">
//             <button
//               onClick={AddToCart}
//               className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
//               ADD TO CART
//             </button>
//             <button
//               onClick={redirectFunction}
//               className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import ReactImageMagnify from "react-image-magnify";
// import Cookies from "js-cookie";
// import CouponPopup from "../components/Popup/CouponPopup";
// import axios from "axios";
// import { AlertCustomStyles } from "../components/Popup/SuccessAlert";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [couponCode, setCouponCode] = useState("");
//   const [discountedPrice, setDiscountedPrice] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const [productData, setProductData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newRating, setNewRating] = useState(0);
//   const [ratings, setRatings] = useState([]);

//   const navigate = useNavigate();
//   const token = Cookies.get("loginToken");
//   const [message, setMessage] = useState("");

//   const dummyProduct = {
//     title: "Dummy Product Title",
//     description: "This is a description of the dummy product.",
//     price: 100,
//     images: [
//       "https://via.placeholder.com/300",
//       "https://via.placeholder.com/300",
//     ],
//     totalrating: 4.5,
//     ratings: [{ star: 4, comment: "Good!" }],
//     availableOffers: [
//       "10% off on first purchase",
//       "Free shipping on orders over ₹500",
//     ],
//   };

//   useEffect(() => {
//     // setProductData(dummyProduct);
//     const getProductById = async () => {
//       try {
//         const result = await axios.get(`/product/get/${id}`);
//         if (result.data) {
//           setProductData(result.data);
//           setSelectedImage(result.data.images[0]);
//           setDiscountedPrice(result.data.price);
//           setRatings(result.data.ratings || []);
//         } else {
//           setProductData(dummyProduct); // Use dummy product if no data is returned
//         }
//       } catch (error) {
//         // setError('Error fetching product data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProductById();
//   }, [id]);

//   const redirectFunction = () => {
//     if (!token) {
//       navigate("/login");
//     } else {
//       navigate("/delivery-address");
//     }
//   };

//   const AddToCart = (productId, quantity) => {
//     if (!token) {
//       navigate("/login");
//     } else {
//       addToCartProduct(productId, quantity);
//       setMessage("product added to cart successfully");
//       // setShowAlert(true);
//       // navigate('/cart');
//     }
//   };
//   const AddToWishlist = (productId) => {
//     if (!token) {
//       navigate("/login");
//     } else {
//       addToWishlistProduct(productId);
//       setMessage("product added to wishlist successfully");
//       // setShowAlert(true);
//       // navigate('/cart');
//     }
//   };
//   const addToCartProduct = async (productId, quantity) => {
//     try {
//       const result = await axios.post("/cart/add", {
//         productId,
//         quantity,
//       });
//       console.log("result", result);
//       if (result.data) {
//         setMessage("product added to cart successfully");
//         setShowAlert(true);
//       }
//     } catch (err) {
//       console.log("this is erro in adding to cart", err);
//     }
//   };
//   const addToWishlistProduct = async (productId) => {
//     try {
//       const result = await axios.post("/wishlist/create", {
//         productId,
//       });
//       console.log("result", result);
//       if (result.data) {
//         setMessage(result.data.message);
//         setShowAlert(true);
//       }
//     } catch (error) {
//       setMessage(error.data);
//       alert(error.message);
//       console.log("this is error in adding to wishlist", error.message);
//     }
//   };

//   const applyCoupon = () => {
//     if (couponCode === "FLAT50") {
//       setDiscountedPrice(productData.price - 50);
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 2000);
//     } else {
//       alert("Invalid coupon code");
//     }
//   };

//   const submitRating = async () => {
//     if (newRating < 1 || newRating > 5) {
//       alert("Please provide a rating between 1 and 5.");
//       return;
//     }
//     const updatedRatings = [
//       ...ratings,
//       { star: newRating, comment: "Great product!" },
//     ]; // Comment can be modified as needed
//     setRatings(updatedRatings);
//     setNewRating(0);
//   };

//   // if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   const discount =
//     ((productData.price - discountedPrice) / productData.price) * 100;

//   const [showAlert, setShowAlert] = useState(false);

//   const handleShowAlert = () => {
//     setShowAlert(true);
//   };

//   useEffect(() => {
//     handleShowAlert;
//   }, []);
//   return (
//     <div className="container mx-auto p-4 mt-24">
//       {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />}
//       <AlertCustomStyles
//         visible={showAlert}
//         setVisible={setShowAlert}
//         message={message}
//       />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {" "}
//         {/* Increased gap between columns */}
//         <div>
//           <div className="border mb-6 p-4">
//             {" "}
//             {/* Increased margin bottom */}
//             <ReactImageMagnify
//               {...{
//                 smallImage: {
//                   alt: "Product Image",
//                   isFluidWidth: true,
//                   src: selectedImage,
//                 },
//                 largeImage: {
//                   src: selectedImage,
//                   width: 800,
//                   height: 900,
//                 },
//                 enlargedImageContainerDimensions: {
//                   width: "100%",
//                   height: "80%",
//                 },
//                 enlargedImagePosition: "beside",
//               }}
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>
//           <div className="flex space-x-2 overflow-x-auto mb-6">
//             {" "}
//             {/* Increased margin bottom */}
//             {productData?.images?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Product ${index}`}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-16 h-16 object-cover cursor-pointer border ${
//                   selectedImage === img
//                     ? "border-indigo-600"
//                     : "border-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold mb-4">{productData.title}</h1>{" "}
//           {/* Increased margin bottom */}
//           <p className="text-sm text-gray-600 mb-6">
//             {productData.description}
//           </p>{" "}
//           {/* Increased margin bottom */}
//           <div className="flex items-center space-x-2 mb-6">
//             {" "}
//             {/* Increased margin bottom */}
//             <span className="text-green-600 font-semibold">
//               {productData.totalrating} ★
//             </span>
//             <button
//               onClick={() => AddToWishlist(productData._id)}
//               className="ml-4 text-red-500 hover:text-red-700"
//             >
//               {isInWishlist ? (
//                 <FaHeart size={24} color="darkred" />
//               ) : (
//                 <FaRegHeart size={24} />
//               )}
//             </button>
//           </div>
//           <div className="mb-6">
//             {" "}
//             {/* Increased margin bottom */}
//             <span className="text-3xl font-bold text-red-600">
//               ₹{discountedPrice}
//             </span>
//             <span className="line-through text-gray-500 ml-4">
//               ₹{productData.price}
//             </span>
//             <span className="text-green-600 font-semibold ml-2">
//               {Math.round(discount)}% off
//             </span>
//           </div>
//           <div className="mb-6">
//             {" "}
//             {/* Increased margin bottom */}
//             <h3 className="text-lg font-semibold mb-2">
//               Rate this Product
//             </h3>{" "}
//             {/* Increased margin bottom */}
//             <input
//               type="number"
//               value={newRating}
//               onChange={(e) => setNewRating(Number(e.target.value))}
//               placeholder="Rate (1-5)"
//               min="1"
//               max="5"
//               className="border rounded p-2 w-full mb-2"
//             />
//             <button
//               onClick={submitRating}
//               className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
//             >
//               Submit Rating
//             </button>
//           </div>
//           {/* Display Existing Ratings */}
//           <div className="mb-6">
//             {" "}
//             {/* Increased margin bottom */}
//             <h3 className="text-lg font-semibold mb-2">
//               Existing Ratings
//             </h3>{" "}
//             {/* Increased margin bottom */}
//             {ratings.length > 0 ? (
//               ratings.map((rating, index) => (
//                 <div key={index} className="flex items-center mb-1">
//                   <span className="text-yellow-500">{rating.star} ★</span>
//                   <p className="ml-2 text-gray-600">{rating.comment}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No ratings yet.</p>
//             )}
//           </div>
//           {/* Available Offers */}
//           {productData?.availableOffers &&
//             productData.availableOffers.length > 0 && (
//               <div className="mb-6">
//                 {" "}
//                 {/* Increased margin bottom */}
//                 <h3 className="text-lg font-semibold mb-2">
//                   Available Offers
//                 </h3>{" "}
//                 {/* Increased margin bottom */}
//                 <ul className="list-disc list-inside text-gray-700 space-y-2">
//                   {productData.availableOffers.map((offer, index) => (
//                     <li key={index}>{offer}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           {/* Buttons */}
//           <div className="flex space-x-4">
//             <button
//               onClick={() => AddToCart(productData._id, 1)}
//               className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={redirectFunction}
//               className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition"
//             >
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Cookies from "js-cookie";
// import CouponPopup from "../components/Popup/CouponPopup";
// import axios from "axios";
// import { AlertCustomStyles } from "../components/Popup/SuccessAlert";
// import ProductMagnifier from "./ProductMagnifier"; // Import the magnifier component

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [discountedPrice, setDiscountedPrice] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const [productData, setProductData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newRating, setNewRating] = useState(0);
//   const [ratings, setRatings] = useState([]);
//   const navigate = useNavigate();
//   const token = Cookies.get("loginToken");
//   const [message, setMessage] = useState("");
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     const getProductById = async () => {
//       try {
//         const result = await axios.get(`/product/get/${id}`);
//         if (result.data.data) {
//           setProductData(result.data.data);
//           setSelectedImage(result.data.data.images[0]);
//           setDiscountedPrice(result.data.data.price);
//           setRatings(result.data.data.ratings || []);
//         }
//       } catch (error) {
//         setError('Error fetching product data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProductById();
//   }, [id]);

//   const redirectFunction = () => {
//     if (!token) {
//       navigate("/login");
//     } else {
//       navigate("/delivery-address");
//     }
//   };

//   const AddToCart = (productId, quantity) => {
//     // Your existing logic for adding to cart
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mx-auto p-4 mt-24">
//       {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />}
//       <AlertCustomStyles
//         visible={showAlert}
//         setVisible={setShowAlert}
//         message={message}
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <div className="border mb-6 p-4">
//             <div className="relative overflow-hidden">
//               {/* Replace the image with ProductMagnifier */}
//               <ProductMagnifier yourphoto={selectedImage} />
//             </div>
//           </div>
//           <div className="flex space-x-2 overflow-x-auto mb-6">
//             {productData?.images?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Product ${index}`}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-16 h-16 object-cover cursor-pointer border ${
//                   selectedImage === img
//                     ? "border-indigo-600"
//                     : "border-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold mb-4">{productData.title}</h1>
//           <p className="text-sm text-gray-600 mb-6">{productData.description}</p>
//           <div className="flex items-center space-x-2 mb-6">
//             <span className="text-green-600 font-semibold">{productData.totalrating} ★</span>
//             <button onClick={() => setIsInWishlist(!isInWishlist)} className="ml-4 text-red-500 hover:text-red-700">
//               {isInWishlist ? <FaHeart size={24} color="darkred" /> : <FaRegHeart size={24} />}
//             </button>
//           </div>
//           <div className="mb-6">
//             <span className="text-3xl font-bold text-red-600">₹{discountedPrice}</span>
//             <span className="line-through text-gray-500 ml-4">₹{productData.price}</span>
//           </div>
//           {/* Additional product details here */}
//           <div className="flex space-x-4">
//             <button onClick={() => AddToCart(productData._id, 1)} className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
//               ADD TO CART
//             </button>
//             <button onClick={redirectFunction} className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition">
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Cookies from "js-cookie";
// import CouponPopup from "../components/Popup/CouponPopup";
// import axios from "axios";
// import { AlertCustomStyles } from "../components/Popup/SuccessAlert";
// import ProductMagnifier from "./ProductMagnifier"; // Import the magnifier component

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [discountedPrice, setDiscountedPrice] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const [productData, setProductData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   const token = Cookies.get("loginToken");
//   const [message, setMessage] = useState("");
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     const getProductById = async () => {
//       try {
//         const result = await axios.get(`/product/get/${id}`);
//         if (result.data.data) {
//           setProductData(result.data.data);
//           setSelectedImage(result.data.data.images[0]);
//           setDiscountedPrice(result.data.data.price);
//           setRatings(result.data.data.ratings || []);
//         }
//       } catch (error) {
//         setError("Error fetching product data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProductById();
//   }, [id]);

//   const redirectFunction = () => {
//     if (!token) {
//       navigate("/login");
//     } else {
//       navigate("/delivery-address");
//     }
//   };

//   const AddToCart = (productId, quantity) => {
//     if (!token) {
//       navigate("/login");
//     } else {
//       addToCartProduct(productId, quantity);
//       setMessage("product added to cart successfully");

//     }
//   };
//   const AddToWishlist = (productId) => {
//     if (!token) {
//       navigate("/login");
//     } else {
//       addToWishlistProduct(productId);
//       setMessage("product added to wishlist successfully");

//     }
//   };
//   const addToCartProduct = async (productId, quantity) => {
//     try {
//       const result = await axios.post("/cart/add", {
//         productId,
//         quantity,
//       });
//       console.log("result", result);
//       if (result.data) {
//         setMessage("product added to cart successfully");
//         setShowAlert(true);
//       }
//     } catch (err) {
//       console.log("this is erro in adding to cart", err);
//     }
//   };
//   const addToWishlistProduct = async (productId) => {
//     try {
//       const result = await axios.post("/wishlist/create", {
//         productId,
//       });
//       console.log("result", result);
//       if (result.data) {
//         setMessage(result.data.message);
//         setShowAlert(true);
//       }
//     } catch (error) {
//       setMessage(error.data);
//       alert(error.message);
//       console.log("this is error in adding to wishlist", error.message);
//     }
//   };
//   const giveRating = async () => {
//     try {
//       const result = await axios.post("/product/rate", {
//         productId: productData._id,
//         comment: comment,
//         star: star,
//       });
//     } catch (error) {}
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container p-4">
//       {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />}
//       <AlertCustomStyles
//         visible={showAlert}
//         setVisible={setShowAlert}
//         message={message}
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
//         <div>
//           <div className="border mb-6 p-4">
//             <div className="relative overflow-hidden">
//               {/* Replace the image with ProductMagnifier */}
//               {selectedImage && <ProductMagnifier yourphoto={selectedImage} />}
//             </div>
//           </div>
//           <div className="flex space-x-2 overflow-x-auto mb-6">
//             {productData?.images?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Product ${index}`}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-16 h-16 object-cover cursor-pointer border ${
//                   selectedImage === img
//                     ? "border-indigo-600"
//                     : "border-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold mb-4">{productData.title}</h1>
//           <p className="text-sm text-gray-600 mb-6">
//             {productData.description}
//           </p>
//           <div className="flex items-center space-x-2 mb-6">
//             <span className="text-green-600 font-semibold">
//               {productData.totalrating} ★
//             </span>
//             <button
//               onClick={() => AddToWishlist(productData._id)}
//               className="ml-4 text-red-500 hover:text-red-700"
//             >
//               {isInWishlist ? (
//                 <FaHeart size={24} color="darkred" />
//               ) : (
//                 <FaRegHeart size={24} />
//               )}
//             </button>
//           </div>
//           <div className="mb-6">
//             <span className="text-3xl font-bold text-red-600">
//               ₹{discountedPrice}
//             </span>
//             <span className="line-through text-gray-500 ml-4">
//               ₹{productData.price}
//             </span>
//           </div>
//           {/* Additional product details here */}
//           <div className="flex space-x-4">
//             <button
//               onClick={() => AddToCart(productData._id, 1)}
//               className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={redirectFunction}
//               className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition"
//             >
//               BUY NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import CouponPopup from "../components/Popup/CouponPopup";
import axios from "axios";
import { AlertCustomStyles } from "../components/Popup/SuccessAlert";
import ProductMagnifier from "./ProductMagnifier";
import ProductRatings from "../components/GetReviewSection";

const ProductDetails = () => {
  const { id } = useParams();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState("");
  const [star, setStar] = useState(0);

  const navigate = useNavigate();
  const token = Cookies.get("loginToken");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const result = await axios.get(`/product/get/${id}`);
        if (result.data.data) {
          const { data } = result.data;
          setProductData(data);
          setSelectedImage(data.images[0]);
          setDiscountedPrice(data.price);
          setIsInWishlist(data.isInWishlist || false);
        }
      } catch (error) {
        setError("Error fetching product data");
      } finally {
        setLoading(false);
      }
    };

    getProductById();
  }, [id]);

  const redirectFunction = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/delivery-address");
    }
  };

  const AddToCart = (productId, quantity) => {
    if (!token) {
      navigate("/login");
    } else {
      addToCartProduct(productId, quantity);
      setMessage("Product added to cart successfully");
    }
  };

  const AddToWishlist = (productId) => {
    if (!token) {
      navigate("/login");
    } else {
      addToWishlistProduct(productId);
    }
  };

  const addToCartProduct = async (productId, quantity) => {
    try {
      const result = await axios.post("/cart/add", { productId, quantity });
      if (result.data) {
        setMessage("Product added to cart successfully");
        setShowAlert(true);
      }
    } catch (err) {
      console.log("Error adding to cart:", err);
    }
  };

  const addToWishlistProduct = async (productId) => {
    try {
      const result = await axios.post("/wishlist/create", { productId });
      if (result.data) {
        setMessage(result.data.message);
        setIsInWishlist(true);
        setShowAlert(true);
      }
    } catch (error) {
      setMessage(error.response?.data || "Error adding to wishlist");
      setShowAlert(true);
      console.log("Error adding to wishlist:", error.message);
    }
  };

  const giveRating = async () => {
    try {
      const result = await axios.post("/product/rate", {
        productId: productData._id,
        comment,
        star,
      });
      if (result.data) {
        setMessage("Rating submitted successfully");
        setShowAlert(true);
      }
    } catch (error) {
      setMessage("Error submitting rating");
      setShowAlert(true);
      console.log("Error submitting rating:", error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container p-4">
      {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />}
      <AlertCustomStyles
        visible={showAlert}
        setVisible={setShowAlert}
        message={message}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
        <div>
          <div className="border mb-6 p-4">
            <div className="relative overflow-hidden">
              {selectedImage && <ProductMagnifier yourphoto={selectedImage} />}
            </div>
          </div>
          <div className="flex space-x-2 overflow-x-auto mb-6">
            {productData?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover cursor-pointer border ${
                  selectedImage === img
                    ? "border-indigo-600"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{productData.title}</h1>
          <p className="text-sm text-gray-600 mb-6">
            {productData.description}
          </p>
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-green-600 font-semibold">
              {productData.totalrating} ★
            </span>
            <button
              onClick={() => AddToWishlist(productData._id)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              {isInWishlist ? (
                <FaHeart size={24} color="darkred" />
              ) : (
                <FaRegHeart size={24} />
              )}
            </button>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-bold text-red-600">
              ₹{discountedPrice}
            </span>
            <span className="line-through text-gray-500 ml-4">
              ₹{productData.price}
            </span>
          </div>
          <div className="flex space-x-4 mb-6">
            <textarea
              placeholder="Write your comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              max={5}
              min={1}
              placeholder="Star rating"
              value={star}
              onChange={(e) => setStar(Number(e.target.value))}
              className="w-20 p-2 border rounded"
            />
          </div>
          <button
            onClick={giveRating}
            className="mb-6 w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Submit Rating
          </button>
          <div className="flex space-x-4">
            <button
              onClick={() => AddToCart(productData._id, 1)}
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
            >
              ADD TO CART
            </button>
            <button
              onClick={redirectFunction}
              className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition"
            >
              BUY NOW
            </button>
          </div>
      
        </div>
        <ProductRatings productId={productData._id} />
      </div>
    </div>
  );
};

export default ProductDetails;
