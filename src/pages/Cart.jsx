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


import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Basic Tee', color: 'Sienna', size: 'Large', price: 32, stock: 'In stock', shipping: 'In stock', quantity: 1 ,image:'https://th.bing.com/th/id/OIP.5oXVEA9oBmZVL2SLFsXluQHaEK?rs=1&pid=ImgDetMain'},
    { id: 2, name: 'Basic Tee', color: 'Black', size: 'Large', price: 32, stock: 'Ships in 3-4 weeks', shipping: 'Pre-order', quantity: 1, image:'https://th.bing.com/th/id/OIP.564jMxnsejs71Zyq97t1aAAAAA?rs=1&pid=ImgDetMain' }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.00;
  const tax = subtotal * 0.084;
  const total = subtotal + shipping + tax;

  const updateQuantity = (id, quantity) => {
    const newCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(newCart);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-wrap justify-between items-center p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg relative">
              {/* Close Icon */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white"
              >
                &times;
              </button>
              <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 text-sm sm:text-base">
                  <h3 className="text-base font-medium dark:text-white">{item.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{item.color} - {item.size}</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.stock}</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center space-x-2">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-14 sm:w-16 border rounded-md p-1 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
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
            <span>₹{shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 text-sm sm:text-base dark:text-gray-300">
            <span>Tax estimate</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-base sm:text-lg mb-6 dark:text-white">
            <span>Order total</span>
            <span>₹{total.toFixed(2)}</span>
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
