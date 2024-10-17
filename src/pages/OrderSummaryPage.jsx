// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const OrderSummary = () => {
//   const [orders, setOrders] = useState([]);
//   const [selectedDate, setSelectedDate] = useState("");
//   useEffect(() => {
//     getAllOrderHistory();
//   }, []);

//   const getAllOrderHistory = async () => {
//     try {
//       const response = await axios.get("/api/user/orders/getall");
//       console.log("response", response.data);
//       setOrders(response.data.orders);
//     } catch (err) {
//       console.error("error", err);
//     }
//   };
//   const handleDateChange = (event) => {
//     const date = event.target.value;
//     setSelectedDate(date);
//     getAllOrderHistory(date); // Fetch orders based on the selected date
//   };
//   const navigate = useNavigate();
//   const navigationFunction = (id) => {
//     navigate(`/product-details/${id}`);
//   };
//   return (
//     <div className="p-4 md:p-8 max-w-4xl mx-auto">
//       {/* Date Picker */}
//       <div className="mb-6">
//         <label
//           htmlFor="order-date"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Filter by Order Date:
//         </label>
//         <input
//           type="date"
//           id="order-date"
//           className="mt-1 block w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
//           value={selectedDate}
//           onChange={handleDateChange}
//         />
//       </div>
//       {orders.map((order) => (
//         <div
//           key={order._id}
//           className="mb-10 bg-white shadow-lg rounded-lg p-1"
//         >
//           <div
//             className="flex flex-col md:flex-row justify-between items-center mt-6"
//           >
//             <h1 className="text-xl font-bold">Order ID: {order._id}</h1>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">
//               Track order
//             </button>
//           </div>
//           <div className="flex justify-between mb-4">
//             <p className="text-gray-600">
//               Order date: {new Date(order.createdAt).toLocaleDateString()}
//             </p>
//             <p className="text-green-600">
//               Estimated delivery: {order.shipping_estimate} days
//             </p>
//           </div>
//           <div className="bg-white rounded-lg p-4">
//             {order.items.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex justify-between items-center border-b pb-4 mb-4"
//                 onClick={() => navigationFunction(item.productId)}
//               >
//                 <div className="flex items-center">
//                   <img
//                     src={`https://dummyimage.com/64x64/000/fff.png&text=Product+${item.productId}`}
//                     alt={`Product ${item.productId}`}
//                     className="w-16 h-16 object-cover mr-4"
//                   />
//                   <div className=" md:flex-row   mt-6">
//                     <p className="font-medium">Product ID: {item.productId}</p>

//                     <p className="text-sm text-gray-600">
//                       Quantity: {item.quantity}
//                     </p>
//                     <p className="font-medium">
//                       ₹{(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="bg-white rounded-lg p-4 mt-6">
//             <div className="flex justify-between border-b pb-2 mb-2">
//               <p className="text-gray-600">Subtotal</p>
//               <p>₹{order.totalAmount.toFixed(2)}</p>
//             </div>

//             <div className="flex justify-between border-b pb-2 mb-2">
//               <p className="text-gray-600">Discount ({order.discount_type})</p>
//               <p>−₹{order.discountedprice.toFixed(2)}</p>
//             </div>

//             <div className="flex justify-between border-b pb-2 mb-2">
//               <p className="text-gray-600">Tax Estimate</p>
//               <p>+₹{order.tax_estimate.toFixed(2)}</p>
//             </div>

//             <div className="flex justify-between font-bold">
//               <p>Total</p>
//               <p>
//                 ₹
//                 {(
//                   order.totalAmount -
//                   order.discountedprice +
//                   order.tax_estimate
//                 ).toFixed(2)}
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col md:flex-row justify-between items-center mt-6">
//             <a href="#" className="text-blue-500 mb-2 md:mb-0">
//               Order Issues
//             </a>
//             <a href="#" className="text-blue-500 mb-2 md:mb-0">
//               Delivery Info
//             </a>
//             <a href="#" className="text-blue-500">
//               Returns
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OrderSummary;import axios from "axios";





import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const [orders, setOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [skip, setSkip] = useState(0); // Pagination offset
  const limit = 20; // Number of orders to fetch

  useEffect(() => {
    getAllOrderHistory(selectedDate); // Pass selectedDate to filter orders from the backend
  }, [skip, selectedDate]);

  const getAllOrderHistory = async (date) => {
    try {
      const response = await axios.get("api/user/orders/getall", {
        params: {
          date, // Include date parameter to filter orders by date
          limit,
          skip,
        },
      });
      console.log("response", response.data);
      setOrders(response.data.orders);
    } catch (err) {
      console.error("error", err);
    }
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    setSkip(0); // Reset pagination when filtering by date
  };

  const loadMoreOrders = () => {
    setSkip(skip + limit); // Increase offset to fetch the next set of orders
  };

  const navigate = useNavigate();
  const navigationFunction = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      {/* Date Picker */}
      <div className="mb-6">
        <label
          htmlFor="order-date"
          className="block text-sm font-medium text-gray-700"
        >
          Filter by Order Date:
        </label>
        <input
          type="date"
          id="order-date"
          className="mt-1 block w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      {/* Orders List */}
      <div>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className="border-b pb-4 mb-4">
              <p className="text-sm text-gray-500">
                Order Created At: {new Date(order.createdAt).toLocaleDateString()}
              </p>
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center mb-4"
                  onClick={() => navigationFunction(item.productId)}
                >
                  <div className="flex items-center">
                    <img
                      src={`https://dummyimage.com/64x64/000/fff.png&text=Product+${item.productId}`}
                      alt={`Product ${item.productId}`}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium">Product ID: {item.productId}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders found.</p>
        )}
      </div>
      {/* Load More Button */}
      {orders.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreOrders}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;


