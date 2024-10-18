import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { addToCart } from '../redux/cartSlice';
import { AlertCustomStyles } from "../components/Popup/SuccessAlert";

const WishListPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate()

  const token = Cookies.get("loginToken");


  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const response = await axios.get("/api/user/wishlist/get");
      setWishlist(response.data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  const removeWishlist = async (id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/delete/${id}`);
      if (response.data.message) {
        // setWishlist(wishlist.filter(item => item._id!== id));
        fetchWishlist();
      } else {
        console.error("Error removing from wishlist:", response.data);
      }
    } catch (error) {
      alert("theek kar");
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


  const addToCartProduct = async (productId, quantity) => {
    try {
      const result = await axios.post("/api/user/cart/add", {
        productId,
        quantity,
      });
      if (result?.data) {
        fetchWishlist()
        dispatch(addToCart(result?.data?.data?.totalItems));
        setMessage("Product added to cart successfully");
        setShowAlert(true);
      }
    } catch (err) {
      console.log("Error adding to cart", err);
    }
  };

  const getProdDetails = (id) => {
    navigate(`/product-details/${id}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {showPopup && <CouponPopup onClose={() => setShowPopup(false)} />}
      <AlertCustomStyles
        visible={showAlert}
        setVisible={setShowAlert}
        message={message}
      />
      <h1 className="text-2xl font-bold text-center mb-6 mt-6">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(wishlist) && wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => getProdDetails(item._id)}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-xl font-bold mt-2">
                  ₹{item.price.toFixed(2)}
                </p>
                <p className="text-gray-500">Rating: {item.totalrating} ⭐</p>
                <div>
                  <button
                    onClick={() => removeWishlist(item._id)}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Remove from Wishlist
                  </button>
                  <button
                    onClick={() => AddToCart(item._id, 1)}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishListPage;
