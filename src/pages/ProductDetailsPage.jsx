// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Cookies from "js-cookie";
// import CouponPopup from "../components/Popup/CouponPopup";
// import axios from "axios";
// import { AlertCustomStyles } from "../components/Popup/SuccessAlert";
// import ProductMagnifier from "./ProductMagnifier";
// import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice';
// import { useDispatch } from "react-redux";
// import ProductRatings from "./ProductRatings";

// const ProductDetails = () => {


//   const dispatch = useDispatch();

//   const { id } = useParams();
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [discountedPrice, setDiscountedPrice] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const [productData, setProductData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [comment, setComment] = useState("");
//   const [star, setStar] = useState(0);



//   const navigate = useNavigate();
//   const token = Cookies.get("loginToken");
//   const [message, setMessage] = useState("");
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {

//     const getProductById = async () => {
//       try {
//         // alert(id)
//         if (id) {
//           const result = await axios.get(`/api/user/product/get/${id}`);
//           if (result.data) {
//             setProductData(result.data.data);
//             setSelectedImage(result.data.data.images[0]);
//             setDiscountedPrice(result.data.data.price);
//             // setRatings(result.data.data.ratings || []);
//             // dispatch(addToCart(result?.data?.totalItems)); 

//           }
//         }
//       } catch (error) {
//         // setError("Error fetching product data");
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
//       const result = await axios.post("/api/user/cart/add", {
//         productId,
//         quantity,
//       });
//       console.log("result", result);
//       if (result?.data) {
//         dispatch(addToCart(result?.data?.data?.totalItems));
//         setMessage("product added to cart successfully");
//         setShowAlert(true);
//       }
//     } catch (err) {
//       console.log("this is erro in adding to cart", err);
//     }
//   };
//   const addToWishlistProduct = async (productId) => {
//     try {
//       const result = await axios.post("/api/user/wishlist/create", {
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
//       const result = await axios.post("/api/user/product/rate", {
//         productId: productData._id,
//         comment,
//         star,
//       });
//       if (result.data) {
//         setMessage(result.data.message);
//         setShowAlert(true);
//       }
//     } catch (error) {
//       setMessage("Error adding to wishlist");
//       setShowAlert(true);
//       console.log("Error submitting rating:", error.message);
//     }
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
//                 className={`w-16 h-16 object-cover cursor-pointer border ${selectedImage === img
//                     ? "border-indigo-600"
//                     : "border-gray-300"
//                   }`}
//               />
//             ))}
//           </div>
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold mb-4">{productData?.title}</h1>
//           <p className="text-sm text-gray-600 mb-6">
//             {productData?.description}
//           </p>
//           <div className="flex items-center space-x-2 mb-6">
//             <span className="text-green-600 font-semibold">
//               {productData?.totalrating} ★
//             </span>
//             <button
//               onClick={() => AddToWishlist(productData?._id)}
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
//               ₹{productData?.price}
//             </span>
//           </div>
//           <div className="flex space-x-4 mb-6">
//             <textarea
//               placeholder="Write your comment here"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               className="w-full p-2 border rounded text-black"
//             />
//             <input
//               type="number"
//               max={5}
//               min={1}
//               placeholder="Star rating"
//               value={star}
//               onChange={(e) => setStar(Number(e.target.value))}
//               className="w-20 p-2 border rounded text-black"
//             />
//           </div>
//           <button
//             onClick={giveRating}
//             className="mb-6 w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
//           >
//             Submit Rating
//           </button>
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
//         <ProductRatings productId={id} />
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
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice';
import { useDispatch } from "react-redux";
import ProductRatings from "./ProductRatings";

const ProductDetails = () => {
  const dispatch = useDispatch();
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
  const [ratingError, setRatingError] = useState("");

  const navigate = useNavigate();
  const token = Cookies.get("loginToken");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const getProductById = async () => {
      try {
        if (id) {
          const result = await axios.get(`/api/user/product/get/${id}`);
          if (result.data) {
            setProductData(result.data.data);
            setSelectedImage(result.data.data.images[0]);
            setDiscountedPrice(result.data.data.price);
            setError('');
            setLoading(false);
          }
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
      setMessage("Product added to wishlist successfully");
    }
  };

  const addToCartProduct = async (productId, quantity) => {
    try {
      const result = await axios.post("/api/user/cart/add", {
        productId,
        quantity,
      });
      if (result?.data) {
        dispatch(addToCart(result?.data?.data?.totalItems));
        setMessage("Product added to cart successfully");
        setShowAlert(true);
      }
    } catch (err) {
      console.log("Error adding to cart", err);
    }
  };

  const addToWishlistProduct = async (productId) => {
    try {
      const result = await axios.post("/api/user/wishlist/create", {
        productId,
      });
      if (result.data) {
        setMessage(result.data.message);
        setShowAlert(true);
      }
    } catch (error) {
      console.log("Error adding to wishlist", error.message);
    }
  };

  const giveRating = async () => {
    if (!token) {
      setRatingError("You need to log in to submit a rating.");
      setTimeout(() => setRatingError(""), 2000);
      return;
    }

    try {
      const result = await axios.post("/api/user/product/rate", {
        productId: productData._id,
        comment,
        star,
      });
      if (result.data) {
        setMessage(result.data.message);
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
                  selectedImage === img ? "border-indigo-600" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{productData?.title}</h1>
          <p className="text-sm text-gray-600 mb-6">
            {productData?.description}
          </p>
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-green-600 font-semibold">
              {productData?.totalrating} ★
            </span>
            <button
              onClick={() => AddToWishlist(productData?._id)}
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
              ₹{productData?.price}
            </span>
          </div>
          <div className="flex space-x-4 mb-6">
            <textarea
              placeholder="Write your comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border rounded text-black"
            />
            <input
              type="number"
              max={5}
              min={1}
              placeholder="Star rating"
              value={star}
              onChange={(e) => setStar(Number(e.target.value))}
              className="w-20 p-2 border rounded text-black"
            />
          </div>
          <button
            onClick={giveRating}
            className="mb-4 w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Submit Rating
          </button>
          {/* Conditionally render the error message */}
          {ratingError && (
            <p className="text-red-500 text-sm font-bold mb-4">{ratingError}</p>
          )}
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
        <ProductRatings productId={id} />
      </div>
    </div>
  );
};

export default ProductDetails;
