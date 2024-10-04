import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const WishlistPage = () => {
    const navigate = useNavigate();
    const token = Cookies.get('usertoken');

    // Sample wishlist products array with descriptions
    const wishlistProducts = [
        {
            id: 1,
            name: 'CMF by Nothing Phone 1',
            image: 'https://th.bing.com/th/id/OIP.znS3E-xhiMUwDAwwZiXa8gAAAA?rs=1&pid=ImgDetMain',
            price: 15999,
            originalPrice: 21999,
            discount: ((21999 - 15999) / 21999) * 100,
            description: 'A sleek and modern smartphone with excellent features and design.',
        },
        {
            id: 2,
            name: 'Another Product',
            image: 'https://i.pinimg.com/originals/2c/43/d1/2c43d1f31e0d75308b840c57f9a7aa51.jpg',
            price: 9999,
            originalPrice: 12999,
            discount: ((12999 - 9999) / 12999) * 100,
            description: 'An innovative gadget that enhances your daily tasks effortlessly.',
        },
    ];

    const handleRemoveFromWishlist = (productId) => {
        // Logic to remove product from wishlist
        console.log(`Removed product with id: ${productId}`);
    };

    const redirectToProductDetails = (id) => {
        if (!token) {
            navigate('/login');
        } else {
            navigate(`/product/${id}`);
        }
    };

    const addToCart = (productId) => {
        // Logic to add product to cart
        console.log(`Added product with id: ${productId} to cart`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Your Wishlist</h1>
            <div className="space-y-6">
                {wishlistProducts.map((product) => (
                    <div>
                    <div key={product.id} className="border rounded-lg p-4 flex flex-col md:flex-row md:space-x-4">
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0 rounded"
                        />

                        <div className="flex-grow">
                            <h2 className="text-xl font-bold">{product.name}</h2>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-green-600 font-semibold">4.3 ★</span>
                                <span>6,440 Ratings</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-3xl font-bold text-red-600">₹{product.price}</span>
                                <span className="line-through text-gray-500 ml-4">₹{product.originalPrice}</span>
                                <span className="text-green-600 font-semibold ml-2">{Math.round(product.discount)}% off</span>
                            </div>
                        </div>
                        {/* Buttons for Add to Cart and Buy Now */}
                       
                    </div>
                    <div className="flex space-x-4 mt-4">
                            <button
                                onClick={() => addToCart(product.id)}
                                className="w-full py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={() => redirectToProductDetails(product.id)}
                                className="w-full py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600"
                            >
                                Buy Now
                            </button>
                        </div>
                 </div>
                    
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;
