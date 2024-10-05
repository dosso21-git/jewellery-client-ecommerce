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







import { FaHeart, FaRegHeart } from 'react-icons/fa';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Cookies from 'js-cookie';
import CouponPopup from '../components/Popup/CouponPopup';

const productData = {
  id: 1,
  name: "CMF by Nothing Phone 1 (Light Green, 128 GB) (8 GB RAM)",
  images: [
    'https://th.bing.com/th/id/OIP.znS3E-xhiMUwDAwwZiXa8gAAAA?rs=1&pid=ImgDetMain',
    'https://i.pinimg.com/originals/2c/43/d1/2c43d1f31e0d75308b840c57f9a7aa51.jpg',
    'https://i.pinimg.com/originals/0b/c3/76/0bc37647f8404ccecb4a6ce4fedb9685.jpg',
  ],
  originalPrice: 21999,
  price: 15999,
  rating: 4.3,
  ratingsCount: 6440,
  reviewsCount: 462,
  availableOffers: [
    "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
    "Bank Offer 10% off up to ₹500 on HDFC Bank Credit Card",
    "Bank Offer ₹1500 Off On HDFC Bank Credit Card Transactions",
    "Special Price Get extra ₹2000 off",
  ],
};

const ProductDetails = () => {
  const { id } = useParams();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [couponCode, setCouponCode] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(productData.price);
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  const navigate = useNavigate();
  const token = Cookies.get('usertoken');

  const redirectFunction = () => {
    navigate('/delivery-address');
    if (!token) {
      // navigation('/login');
    } else {
      // Buy now this product
    }
  };

  const AddToCart = () => {
    navigate('/cart');
    if (!token) {
      // navigation('/login');
    } else {
      // Add to cart logic
    }
  };

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    navigate('/wishlist');
  };

  const applyCoupon = () => {
    if (couponCode === 'FLAT50') {
      setDiscountedPrice(productData.price - 50);
      setShowPopup(true); // Show the popup

      // Automatically close the popup after 2 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } else {
      alert('Invalid coupon code');
    }
  };

  const discount = ((productData.originalPrice - discountedPrice) / productData.originalPrice) * 100;

  return (
    <div className="container mx-auto p-4 mt-24">
      {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />} {/* Render popup when applicable */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Product Images */}
        <div>
          <div className="border mb-4 p-4">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Product Image',
                  isFluidWidth: true,
                  src: selectedImage,
                },
                largeImage: {
                  src: selectedImage,
                  width: 800,
                  height: 900,
                },
                enlargedImageContainerDimensions: {
                  width: '100%',
                  height: '80%',
                },
                enlargedImagePosition: 'beside',
              }}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Image Thumbnails */}
          <div className="flex space-x-2">
            {productData.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover cursor-pointer border ${selectedImage === img ? 'border-indigo-600' : 'border-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{productData.name}</h1>

          <div className="flex items-center space-x-2 mb-4">
            <span className="text-green-600 font-semibold">{productData.rating} ★</span>
            <span>{productData.ratingsCount} Ratings & {productData.reviewsCount} Reviews</span>
            <button onClick={toggleWishlist} className="ml-4 text-red-500 hover:text-red-700">
              {isInWishlist ? <FaHeart size={24} color="darkred" /> : <FaRegHeart size={24} />}
            </button>
          </div>

          {/* Pricing Section */}
          <div className="mb-4">
            <span className="text-3xl font-bold text-red-600">₹{discountedPrice}</span>
            <span className="line-through text-gray-500 ml-4">₹{productData.originalPrice}</span>
            <span className="text-green-600 font-semibold ml-2">{Math.round(discount)}% off</span>
          </div>

          {/* Coupon Code Input */}
          <div className="mb-4">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="border rounded p-2 w-full"
            />
            <button
              onClick={applyCoupon}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Apply Coupon
            </button>
          </div>

          {/* Available Offers */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Available offers</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {productData.availableOffers.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={AddToCart}
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
              ADD TO CART
            </button>
            <button
              onClick={redirectFunction}
              className="w-full py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
