import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductRatings = ({ productId }) => {

  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/product/rate/${productId}`);
        // Check if response data has a 'ratings' field and it's an array
        const productRatings = response.data.data.ratings;
        console.log(productRatings,"pankaj")
        setRatings(Array.isArray(productRatings) ? productRatings : []);
        setLoading(false);
      } catch (err) {
      
        setLoading(false);
      }
    };

    fetchRatings();
  }, [productId]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Product Ratings</h2>
      {ratings.length === 0 ? (
        <p className="text-gray-500">No ratings for this product yet.</p>
      ) : (
        <div className="space-y-4">
          {ratings.map((rating) => (
            <div key={rating._id} className="bg-white p-4 rounded-lg shadow-md text-black">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 mr-2">
                  {"★".repeat(rating.star)}{" "}
                  {"☆".repeat(5 - rating.star)}
                </span>
                <span className="text-gray-700 font-medium">
                  {rating.postedby?.name || "Anonymous"}
                </span>
              </div>
              <p className="text-gray-600">{rating.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductRatings;
