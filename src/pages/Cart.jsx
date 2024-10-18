//todayimport { useEffect, useState } from "react";
import axios from "axios";
import CouponPopup from "../components/Popup/CouponPopup";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Lottie from "lottie-react";
import successAnimation from "./cartAnimation/CartAnimation.json";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice';


const CartPage = () => {

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [cartData, setCartData] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [type, setType] = useState("coupon");
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);


  const handleAddressSelection = (addressId) => {
    setSelectedAddress(addressId);
  };


  const getAllCartData = async () => {
    try {

      const response = await axios.post("/api/user/cart/get");
      if (response.data.items) {
        const validItems = response.data.items.filter(
          (item) => item.productId !== null
        );
        setCartData({ ...response.data, items: validItems });
        dispatch(addToCart(response?.data?.items?.length));
        if(response?.data){
          dispatch(addToCart(0));
        }
        if (response?.data?.items?.length == 0) {
          dispatch(clearCart())
        }
      } else {
        // setCartData([])
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const getAddresses = async () => {
    try {
      const response = await axios.get("/api/user/get/address");
      setAddresses(response.data.addresses);
    } catch (error) {
      console.error("Error fetching addresses:", error);
      // alert("Error fetching addresses. Please try again.");
    }
  };

  const getProdDetails = (id) => {
    if (id) {
      navigate(`/product-details/${id}`)
    }
  }

  useEffect(() => {
    getAllCartData();
    getAddresses();
  }, []);

  if (!cartData)
    return (
      <div>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black ">
          <div className=" p-6 rounded-lg shadow-lg text-center">
            <Lottie
              animationData={successAnimation}
              loop={true}
              style={{ width: 250, height: 250 }}
            />
            <h2 className="mt-4 text-lg font-semibold text-white">
              Your Cart is Empty
            </h2>
          </div>
        </div>
      </div>
    );

  const { items } = cartData;

  // Function to calculate totals
  const calculateTotals = () => {
    // if(items.length > 0){
    const subtotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const shippingEstimate = 5.0; // Fixed shipping cost
    const taxEstimate = subtotal * 0.18; // 18% tax rate
    const orderTotal =
      subtotal + shippingEstimate + taxEstimate - subtotal * (discount / 100);

    return { subtotal, shippingEstimate, taxEstimate, orderTotal };
    // }
  };

  // State for totals
  const { subtotal, shippingEstimate, taxEstimate, orderTotal } =
    calculateTotals();

  const updateQuantity = (id, quantity) => {
    const newCart = items.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartData({ ...cartData, items: newCart });
  };

  const removeItem = async (id) => {
    try {
      const response = await axios.delete(`/api/user/cart/remove/${id}`);
      if (response.data.status) {
        // setWishlist(wishlist.filter(item => item._id!== id));
        getAllCartData()
      } else {
        console.error('Error removing from wishlist:', response.data);
      }
    } catch (error) {
      console.log('catch block', error)
    }
  };


  const applyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(10);
      setShowPopup(true);
      setType("coupon");
      setTimeout(() => setShowPopup(false), 2000);
    } else if (couponCode === "SAVE20") {
      setDiscount(20);
    } else {
      alert("Invalid coupon code");
      setDiscount(0);
    }
  };

  const handleOrder = async (type, orderTotal) => {
    if (!selectedAddress) {
      alert("Please select an address.");
      return;
    }
    try {
      const response = await axios.post("/api/user/orders/create", {
        discountedprice: subtotal * (discount / 100),
        discount_type: type,
        tax_estimate: taxEstimate,
        shipping_estimate: shippingEstimate,
        items: items,
        address: selectedAddress,
        totalAmount: orderTotal,
      });
      if (response?.data?.status) {
        console.log(response.message);
        alert("Order created successfully")
        getAllCartData();
        // alert(response.data.message);
        setCartData(null); // Clear cart after successful order
      }
    } catch (error) {
      console.error("Error creating order:", error);
      setErrorMessage("Error creating order");
    }
  };

  return (
    <div className="container mx-auto p-4 dark:bg-gray-900 mt-32">
      {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />}
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">
        Shopping Cart
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex flex-wrap justify-between items-center p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg relative"
            >
              <button
                onClick={() => {
                  removeItem(item.productId._id);
                  window.location.reload()
                }}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white"
              >
                &times;
              </button>
              <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0 cursor-pointer" onClick={() => getProdDetails(item.productId._id)}>
                <img
                  src={item?.productId?.images[0]}
                  alt={item.productId.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 text-sm sm:text-base">
                  <h3 className="text-base font-medium dark:text-white">
                    {item.productId.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.productId.category}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    In stock: {item.productId.quantity}
                  </p>
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
                  onChange={(e) =>
                    updateQuantity(item._id, parseInt(e.target.value))
                  }
                  className="w-14 border-t border-b border-gray-300 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  className="bg-gray-300 hover:bg-gray-400 text-lg font-bold rounded-r px-2"
                >
                  +
                </button>
                <p className="text-lg sm:text-xl font-semibold dark:text-white">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center sm:text-left dark:text-white">
            Order Summary
          </h3>
          <div className="mt-4">
            <h1 className="text-red-800 font-bold">      Select Your Address:</h1>
            {Array.isArray(addresses) && addresses.length > 0 ? (
              addresses.map((address) => (
                <div
                  key={address._id}
                  className={`flex justify-between items-center p-2 border-b ${selectedAddress === address._id
                    ? "bg-gray-200 dark:bg-gray-700"
                    : ""
                    }`}
                >
                  <div>
                    <p>
                      {address.addressLine1}, {address.addressLine2},{" "}
                      {address.city}, {address.state}, {address.country},{" "}
                      {address.postalCode}
                    </p>
                    {address.isDefault && (
                      <span className="text-green-500">Default Address</span>
                    )}
                  </div>
                  <input
                    type="radio"
                    checked={selectedAddress === address._id}
                    onChange={() => handleAddressSelection(address._id)}
                  />
                </div>
              ))
            ) : (
              <p>No addresses found</p>
            )}
          </div>

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
            <span>₹{orderTotal.toFixed(2)}</span>
          </div>
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
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            onClick={() => handleOrder(type, orderTotal)}
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;