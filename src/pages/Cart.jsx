// // src/Cart.js
// import React, { useState } from 'react';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Basic Tee', color: 'Sienna', size: 'Large', price: 32, stock: 'In stock', shipping: 'In stock', quantity: 1 },
//     { id: 2, name: 'Basic Tee', color: 'Black', size: 'Large', price: 32, stock: 'Ships in 3-4 weeks', shipping: 'Pre-order', quantity: 1 }
//   ]);

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const shipping = 5.00;
//   const tax = subtotal * 0.084;
//   const total = subtotal + shipping + tax;

//   const updateQuantity = (id, quantity) => {
//     const newCart = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//     );
//     setCartItems(newCart);
//   };

//   const removeItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Cart Items */}
//         <div className="col-span-2">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex flex-wrap justify-between items-center p-4 mb-4 bg-white shadow-md rounded-lg relative">
//               {/* Close Icon */}
//               <button
//                 onClick={() => removeItem(item.id)}
//                 className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
//               >
//                 &times;
//               </button>
//               <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
//                 <img
//                   src={`https://via.placeholder.com/100?text=₹{item.name}`}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div className="ml-4 text-sm sm:text-base">
//                   <h3 className="text-base font-medium">{item.name}</h3>
//                   <p className="text-gray-500">{item.color} - {item.size}</p>
//                   <p className="text-xs sm:text-sm text-gray-500">{item.stock}</p>
//                 </div>
//               </div>
//               <div className="flex flex-wrap justify-center items-center space-x-2">
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
//                   className="w-14 sm:w-16 border rounded-md p-1 text-center"
//                 />
//                 <p className="text-lg sm:text-xl font-semibold">₹{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Order Summary */}
//         <div className="p-4 bg-white shadow-md rounded-lg">
//           <h3 className="text-xl font-bold mb-4 text-center sm:text-left">Order Summary</h3>
//           <div className="flex justify-between mb-2 text-sm sm:text-base">
//             <span>Subtotal</span>
//             <span>₹{subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2 text-sm sm:text-base">
//             <span>Shipping estimate</span>
//             <span>₹{shipping.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-4 text-sm sm:text-base">
//             <span>Tax estimate</span>
//             <span>₹{tax.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between font-bold text-base sm:text-lg mb-6">
//             <span>Order total</span>
//             <span>₹{total.toFixed(2)}</span>
//           </div>
//           <button className="w-full bg-indigo-600 text-white p-2 sm:p-3 rounded-lg font-semibold">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const CartPage = () => {

//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Basic Tee', color: 'Sienna', size: 'Large', price: 32, stock: 'In stock', shipping: 'In stock', quantity: 1 ,image:'https://th.bing.com/th/id/OIP.5oXVEA9oBmZVL2SLFsXluQHaEK?rs=1&pid=ImgDetMain'},
//     { id: 2, name: 'Basic Tee', color: 'Black', size: 'Large', price: 32, stock: 'Ships in 3-4 weeks', shipping: 'Pre-order', quantity: 1, image:'https://th.bing.com/th/id/OIP.564jMxnsejs71Zyq97t1aAAAAA?rs=1&pid=ImgDetMain' }
//   ]);

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const shipping = 5.00;
//   const tax = subtotal * 0.084;
//   const total = subtotal + shipping + tax;

//   const updateQuantity = (id, quantity) => {
//     const newCart = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//     );
//     setCartItems(newCart);
//   };

//   const removeItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };


//   const getAllCartData = async() =>{
//       const response = axios.post('/cart/get');
//       console.log(response.data)
//   }


//   useEffect(() => {
//     getAllCartData();
//   })

//   return (
//     <div className="container mx-auto p-4 dark:bg-gray-900 mt-32">
//       <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Shopping Cart</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Cart Items */}
//         <div className="col-span-2">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex flex-wrap justify-between items-center p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg relative">
//               {/* Close Icon */}
//               <button
//                 onClick={() => removeItem(item.id)}
//                 className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white"
//               >
//                 &times;
//               </button>
//               <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div className="ml-4 text-sm sm:text-base">
//                   <h3 className="text-base font-medium dark:text-white">{item.name}</h3>
//                   <p className="text-gray-500 dark:text-gray-400">{item.color} - {item.size}</p>
//                   <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.stock}</p>
//                 </div>
//               </div>
//               <div className="flex flex-wrap justify-center items-center space-x-2">
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
//                   className="w-14 sm:w-16 border rounded-md p-1 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600"
//                 />
//                 <p className="text-lg sm:text-xl font-semibold dark:text-white">₹{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Order Summary */}
//         <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
//           <h3 className="text-xl font-bold mb-4 text-center sm:text-left dark:text-white">Order Summary</h3>
//           <div className="flex justify-between mb-2 text-sm sm:text-base dark:text-gray-300">
//             <span>Subtotal</span>
//             <span>₹{subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2 text-sm sm:text-base dark:text-gray-300">
//             <span>Shipping estimate</span>
//             <span>₹{shipping.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-4 text-sm sm:text-base dark:text-gray-300">
//             <span>Tax estimate</span>
//             <span>₹{tax.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between font-bold text-base sm:text-lg mb-6 dark:text-white">
//             <span>Order total</span>
//             <span>₹{total.toFixed(2)}</span>
//           </div>
//           <button className="w-full bg-indigo-600 text-white p-2 sm:p-3 rounded-lg font-semibold hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

















// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const CartPage = () => {
//   const [cartData, setCartData] = useState(null);

//   const getAllCartData = async () => {
//     try {
//       const response = await axios.post('/cart/get', { userId: 'yourUserId' }); // Replace with actual user ID
//       setCartData(response.data);
//     } catch (error) {
//       console.error('Error fetching cart data:', error);
//     }
//   };

//   useEffect(() => {
//     getAllCartData();
//   }, []);

//   if (!cartData) return <div>Loading...</div>; // Loading state

//   const { items } = cartData;

//   // Function to calculate totals
//   const calculateTotals = () => {
//     const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const shippingEstimate = 5.00; // Fixed shipping cost
//     const taxEstimate = subtotal * 0.18; // 18% tax rate
//     const orderTotal = subtotal + shippingEstimate + taxEstimate;

//     return { subtotal, shippingEstimate, taxEstimate, orderTotal };
//   };

//   // State for totals
//   const { subtotal, shippingEstimate, taxEstimate, orderTotal } = calculateTotals();

//   const updateQuantity = (id, quantity) => {
//     const newCart = items.map(item =>
//       item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//     );
//     setCartData({ ...cartData, items: newCart });
//   };

//   const removeItem = (id) => {
//     const newItems = items.filter(item => item._id !== id);
//     setCartData({ ...cartData, items: newItems });
//   };

//   return (
//     <div className="container mx-auto p-4 dark:bg-gray-900 mt-32">
//       <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Shopping Cart</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Cart Items */}
//         <div className="col-span-2">
//           {items.map((item) => (
//             <div key={item._id} className="flex flex-wrap justify-between items-center p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg relative">
//               <button
//                 onClick={() => removeItem(item._id)}
//                 className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white"
//               >
//                 &times;
//               </button>
//               <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
//                 <img
//                   src={item.productId.images[0]}
//                   alt={item.productId.title}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div className="ml-4 text-sm sm:text-base">
//                   <h3 className="text-base font-medium dark:text-white">{item.productId.title}</h3>
//                   <p className="text-gray-500 dark:text-gray-400">{item.productId.category}</p>
//                   <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">In stock: {item.productId.quantity}</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <button 
//                   onClick={() => updateQuantity(item._id, item.quantity - 1)} 
//                   className="bg-gray-300 hover:bg-gray-400 text-lg font-bold rounded-l px-2"
//                 >
//                   -
//                 </button>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
//                   className="w-14 border-t border-b border-gray-300 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600"
//                 />
//                 <button 
//                   onClick={() => updateQuantity(item._id, item.quantity + 1)} 
//                   className="bg-gray-300 hover:bg-gray-400 text-lg font-bold rounded-r px-2"
//                 >
//                   +
//                 </button>
//                 <p className="text-lg sm:text-xl font-semibold dark:text-white">₹{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Order Summary */}
//         <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
//           <h3 className="text-xl font-bold mb-4 text-center sm:text-left dark:text-white">Order Summary</h3>
//           <div className="flex justify-between mb-2 text-sm sm:text-base dark:text-gray-300">
//             <span>Subtotal</span>
//             <span>₹{subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2 text-sm sm:text-base dark:text-gray-300">
//             <span>Shipping estimate</span>
//             <span>₹{shippingEstimate.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-4 text-sm sm:text-base dark:text-gray-300">
//             <span>Tax estimate</span>
//             <span>₹{taxEstimate.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between font-bold text-base sm:text-lg mb-6 dark:text-white">
//             <span>Order total</span>
//             <span>₹{orderTotal.toFixed(2)}</span>
//           </div>
//           <button className="w-full bg-indigo-600 text-white p-2 sm:p-3 rounded-lg font-semibold hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

















// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// import CouponPopup from '../components/Popup/CouponPopup';

// const CartPage = () => {
//   const [cartData, setCartData] = useState(null);
//   const [couponCode, setCouponCode] = useState('');
//   const [discount, setDiscount] = useState(0); // Discount percentage

//   const [showPopup, setShowPopup] = useState(false);

//   const getAllCartData = async () => {
//     try {
//       const response = await axios.post('/cart/get'); // Replace with actual user ID
//       setCartData(response.data);
//     } catch (error) {
//       console.error('Error fetching cart data:', error);
//     }
//   };

//   useEffect(() => {
//     getAllCartData();
//   }, []);

//   if (!cartData) return <div>Loading...</div>; // Loading state

//   const { items } = cartData;

//   // Function to calculate totals
//   const calculateTotals = () => {
//     const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const shippingEstimate = 5.00; // Fixed shipping cost
//     const taxEstimate = subtotal * 0.18; // 18% tax rate
//     const orderTotal = subtotal + shippingEstimate + taxEstimate - (subtotal * (discount / 100));

//     return { subtotal, shippingEstimate, taxEstimate, orderTotal };
//   };

//   // State for totals
//   const { subtotal, shippingEstimate, taxEstimate, orderTotal } = calculateTotals();

//   const updateQuantity = (id, quantity) => {
//     const newCart = items.map(item =>
//       item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//     );
//     setCartData({ ...cartData, items: newCart });
//   };

//   const removeItem = (id) => {
//     const newItems = items.filter(item => item._id !== id);
//     setCartData({ ...cartData, items: newItems });
//   };

//   const applyCoupon = () => {
//     // Example logic for coupon
//     if (couponCode === 'SAVE10') {
//       setDiscount(10); // 10% discount
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2000);
//     } else if (couponCode === 'SAVE20') {
//       setDiscount(20); // 20% discount
//     } else {
//       alert('Invalid coupon code');
//       setDiscount(0);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 dark:bg-gray-900 mt-32">
//         {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />}
//       <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Shopping Cart</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Cart Items */}
//         <div className="col-span-2">
//           {items.map((item) => (
//             <div key={item._id} className="flex flex-wrap justify-between items-center p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg relative">
//               <button
//                 onClick={() => removeItem(item._id)}
//                 className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white"
//               >
//                 &times;
//               </button>
//               <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
//                 <img
//                   src={item?.productId?.images[0]}
//                   alt={item.productId.title}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div className="ml-4 text-sm sm:text-base">
//                   <h3 className="text-base font-medium dark:text-white">{item.productId.title}</h3>
//                   <p className="text-gray-500 dark:text-gray-400">{item.productId.category}</p>
//                   <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">In stock: {item.productId.quantity}</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <button 
//                   onClick={() => updateQuantity(item._id, item.quantity - 1)} 
//                   className="bg-gray-300 hover:bg-gray-400 text-lg font-bold rounded-l px-2"
//                 >
//                   -
//                 </button>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
//                   className="w-14 border-t border-b border-gray-300 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600"
//                 />
//                 <button 
//                   onClick={() => updateQuantity(item._id, item.quantity + 1)} 
//                   className="bg-gray-300 hover:bg-gray-400 text-lg font-bold rounded-r px-2"
//                 >
//                   +
//                 </button>
//                 <p className="text-lg sm:text-xl font-semibold dark:text-white">₹{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Order Summary */}
//         <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
//           <h3 className="text-xl font-bold mb-4 text-center sm:text-left dark:text-white">Order Summary</h3>
//           <div className="flex justify-between mb-2 text-sm sm:text-base dark:text-gray-300">
//             <span>Subtotal</span>
//             <span>₹{subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2 text-sm sm:text-base dark:text-gray-300">
//             <span>Shipping estimate</span>
//             <span>₹{shippingEstimate.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-4 text-sm sm:text-base dark:text-gray-300">
//             <span>Tax estimate</span>
//             <span>₹{taxEstimate.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-4 text-sm sm:text-base dark:text-gray-300">
//             <span>Discount</span>
//             <span>-₹{(subtotal * (discount / 100)).toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between font-bold text-base sm:text-lg mb-6 dark:text-white">
//             <span>Order total</span>
//             <span>₹{orderTotal.toFixed(2)}</span>
//           </div>

//           {/* Coupon Code Section */}
//           <div className="flex mb-4">
//             <input
//               type="text"
//               value={couponCode}
//               onChange={(e) => setCouponCode(e.target.value)}
//               placeholder="Enter coupon code"
//               className="border rounded-l-md p-2 w-full dark:bg-gray-700 dark:text-white"
//             />
//             <button
//               onClick={applyCoupon}
//               className="bg-indigo-600 text-white p-2 rounded-r-md hover:bg-indigo-700"
//             >
//               Apply
//             </button>
//           </div>

//           <button className="w-full bg-indigo-600 text-white p-2 sm:p-3 rounded-lg font-semibold hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;















// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import CouponPopup from '../components/Popup/CouponPopup';

// const CartPage = () => {
//   const [cartData, setCartData] = useState(null);
//   const [couponCode, setCouponCode] = useState('');
//   const [discount, setDiscount] = useState(0); // Discount percentage
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const getAllCartData = async () => {
//     try {
//       const response = await axios.post('/cart/get'); // Replace with actual user ID
//       setCartData(response.data);
//     } catch (error) {
//       console.error('Error fetching cart data:', error);
//     }
//   };

//   useEffect(() => {
//     getAllCartData();
//   }, []);

//   if (!cartData) return <div>Loading...</div>; // Loading state

//   const { items } = cartData;

//   // Function to calculate totals
//   const calculateTotals = () => {
//     const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const shippingEstimate = 5.00; // Fixed shipping cost
//     const taxEstimate = subtotal * 0.18; // 18% tax rate
//     const orderTotal = subtotal + shippingEstimate + taxEstimate - (subtotal * (discount / 100));

//     return { subtotal, shippingEstimate, taxEstimate, orderTotal };
//   };

//   // State for totals
//   const { subtotal, shippingEstimate, taxEstimate, orderTotal } = calculateTotals();

//   const updateQuantity = (id, quantity) => {
//     const newCart = items.map(item =>
//       item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//     );
//     setCartData({ ...cartData, items: newCart });
//   };

//   const removeItem = (id) => {
//     const newItems = items.filter(item => item._id !== id);
//     setCartData({ ...cartData, items: newItems });
//   };

//   const validateCoupon = (code) => {
//     // Example logic for coupon validation
//     const validCoupons = {
//       'SAVE10': 10,
//       'SAVE20': 20
//     };
//     return validCoupons[code] || null; // Return discount value or null
//   };

//   const applyCoupon = () => {
//     if (!couponCode.trim()) {
//       setPopupMessage('Please enter a coupon code.');
//       setShowPopup(true);
//       return;
//     }

//     const discountValue = validateCoupon(couponCode);
//     if (discountValue) {
//       if (discount !== 0) {
//         setPopupMessage('A coupon is already applied. Please remove it before applying a new one.');
//       } else {
//         setDiscount(discountValue);
//         setPopupMessage(`Coupon applied! You saved ${discountValue}%.`);
//       }
//     } else {
//       setPopupMessage('Invalid coupon code.');
//     }

//     setShowPopup(true);
//     setCouponCode('');
//   };

//   return (
//     <div className="container mx-auto p-4 dark:bg-gray-900 mt-32">
//       {showPopup && <CouponPopup message={popupMessage} onClose={() => setShowPopup(false)} />}
//       <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Shopping Cart</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Cart Items */}
//         <div className="col-span-2">
//           {items.map((item) => (
//             <div key={item._id} className="flex flex-wrap justify-between items-center p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg relative">
//               <button
//                 onClick={() => removeItem(item._id)}
//                 className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white"
//               >
//                 &times;
//               </button>
//               <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
//                 <img
//                   src={item?.productId?.images[0]}
//                   alt={item.productId.title}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div className="ml-4 text-sm sm:text-base">
//                   <h3 className="text-base font-medium dark:text-white">{item.productId.title}</h3>
//                   <p className="text-gray-500 dark:text-gray-400">{item.productId.category}</p>
//                   <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">In stock: {item.productId.quantity}</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <button 
//                   onClick={() => updateQuantity(item._id, item.quantity - 1)} 
//                   className="bg-gray-300 hover:bg-gray-400 text-lg font-bold rounded-l px-2"
//                 >
//                   -
//                 </button>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
//                   className="w-14 border-t border-b border-gray-300 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600"
//                 />
//                 <button 
//                   onClick={() => updateQuantity(item._id, item.quantity + 1)} 
//                   className="bg-gray-300 hover:bg-gray-400 text-lg font-bold rounded-r px-2"
//                 >
//                   +
//                 </button>
//                 <p className="text-lg sm:text-xl font-semibold dark:text-white">₹{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Order Summary */}
//         <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
//           <h3 className="text-xl font-bold mb-4 text-center sm:text-left dark:text-white">Order Summary</h3>
//           <div className="flex justify-between mb-2 text-sm sm:text-base dark:text-gray-300">
//             <span>Subtotal</span>
//             <span>₹{subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2 text-sm sm:text-base dark:text-gray-300">
//             <span>Shipping estimate</span>
//             <span>₹{shippingEstimate.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-4 text-sm sm:text-base dark:text-gray-300">
//             <span>Tax estimate</span>
//             <span>₹{taxEstimate.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-4 text-sm sm:text-base dark:text-gray-300">
//             <span>Discount</span>
//             <span>-₹{(subtotal * (discount / 100)).toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between font-bold text-base sm:text-lg mb-6 dark:text-white">
//             <span>Order total</span>
//             <span>₹{orderTotal.toFixed(2)}</span>
//           </div>

//           {/* Coupon Code Section */}
//           <div className="flex mb-4">
//             <input
//               type="text"
//               value={couponCode}
//               onChange={(e) => setCouponCode(e.target.value)}
//               placeholder="Enter coupon code"
//               className="border rounded-l-md p-2 w-full dark:bg-gray-700 dark:text-white"
//             />
//             <button
//               onClick={applyCoupon}
//               className="bg-indigo-600 text-white p-2 rounded-r-md hover:bg-indigo-700"
//             >
//               Apply
//             </button>
//           </div>

//           <button className="w-full bg-indigo-600 text-white p-2 sm:p-3 rounded-lg font-semibold hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;










import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CouponPopup from '../components/Popup/CouponPopup';

const CartPage = () => {
  const [cartData, setCartData] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const getAllCartData = async () => {
    try {
      const response = await axios.post('/cart/get');
      const validItems = response.data.items.filter(item => item.productId !== null);
      setCartData({ ...response.data, items: validItems });
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  useEffect(() => {
    getAllCartData();
  }, []);

  if (!cartData) return <div>Loading...</div>;

  const { items } = cartData;

  // Function to calculate totals
  const calculateTotals = () => {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingEstimate = 5.00; // Fixed shipping cost
    const taxEstimate = subtotal * 0.18; // 18% tax rate
    const orderTotal = subtotal + shippingEstimate + taxEstimate - (subtotal * (discount / 100));

    return { subtotal, shippingEstimate, taxEstimate, orderTotal };
  };

  // State for totals
  const { subtotal, shippingEstimate, taxEstimate, orderTotal } = calculateTotals();

  const updateQuantity = (id, quantity) => {
    const newCart = items.map(item =>
      item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartData({ ...cartData, items: newCart });
  };

  const removeItem = (id) => {
    const newItems = items.filter(item => item._id !== id);
    setCartData({ ...cartData, items: newItems });
  };

  const applyCoupon = () => {
    if (couponCode === 'SAVE10') {
      setDiscount(10);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } else if (couponCode === 'SAVE20') {
      setDiscount(20);
    } else {
      alert('Invalid coupon code');
      setDiscount(0);
    }
  };

  return (
    <div className="container mx-auto p-4 dark:bg-gray-900 mt-32">
      {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />}
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2">
          {items.map((item) => (
            <div key={item._id} className="flex flex-wrap justify-between items-center p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg relative">
              <button
                onClick={() => removeItem(item._id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white"
              >
                &times;
              </button>
              <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                <img
                  src={item?.productId?.images[0]}
                  alt={item.productId.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 text-sm sm:text-base">
                  <h3 className="text-base font-medium dark:text-white">{item.productId.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{item.productId.category}</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">In stock: {item.productId.quantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => updateQuantity(item._id, item.quantity - 1)} 
                  className="bg-gray-300 hover:bg-gray-400 text-lg font-bold rounded-l px-2"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                  className="w-14 border-t border-b border-gray-300 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <button 
                  onClick={() => updateQuantity(item._id, item.quantity + 1)} 
                  className="bg-gray-300 hover:bg-gray-400 text-lg font-bold rounded-r px-2"
                >
                  +
                </button>
                <p className="text-lg sm:text-xl font-semibold dark:text-white">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center sm:text-left dark:text-white">Order Summary</h3>
          <div className="flex justify-between mb-2 text-sm sm:text-base dark:text-gray-300">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-sm sm:text-base dark:text-gray-300">
            <span>Shipping estimate</span>
            <span>₹{shippingEstimate.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 text-sm sm:text-base dark:text-gray-300">
            <span>Tax estimate</span>
            <span>₹{taxEstimate.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 text-sm sm:text-base dark:text-gray-300">
            <span>Discount</span>
            <span>-₹{(subtotal * (discount / 100)).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-base sm:text-lg mb-6 dark:text-white">
            <span>Order total</span>
            <span>₹{(subtotal + shippingEstimate + taxEstimate - (subtotal * (discount / 100))).toFixed(2)}</span>
          </div>

          {/* Coupon Code Section */}
          <div className="flex mb-4">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="border rounded-l-md p-2 w-full dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={applyCoupon}
              className="bg-indigo-600 text-white p-2 rounded-r-md hover:bg-indigo-700"
            >
              Apply
            </button>
          </div>

          <button className="w-full bg-indigo-600 text-white p-2 sm:p-3 rounded-lg font-semibold hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
