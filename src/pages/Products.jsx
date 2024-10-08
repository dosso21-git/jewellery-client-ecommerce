import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PopupMessage from './PopupMessage';
import { FaEdit, FaTrashAlt, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';

const ManageDishes = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    img: [],
  });
  const fileInput = useRef(null);
  const [loader, setLoader] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoader(true);
    try {
      const response = await axios.get('user/product/getall');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoader(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...formData.img, ...files];
    setFormData({ ...formData, img: updatedImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append('title', formData.title);
    formDataObj.append('description', formData.description);
    formDataObj.append('price', formData.price);
    formDataObj.append('category', formData.category);
    formDataObj.append('quantity', formData.quantity);

    formData.img.forEach((image) => {
      formDataObj.append('pictures', image);
    });

    setLoader(true);
    try {
      if (editingProduct) {
        await confirmUpdate(editingProduct._id, formDataObj);
        setSuccessMessage('Product updated successfully!'); // Set success message
      } else {
        await axios.post('user/admin/create', formDataObj);
        setSuccessMessage('Product created successfully!'); // Set success message
      }
      fetchProducts();
      resetForm();
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setLoader(false);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title || '',
      description: product.description || '',
      price: product.price || '',
      category: product.category || '',
      quantity: product.quantity || '',
      img: [],
    });
  };

  const ConfirmDelete = (id) => {
    setConfirmAction(() => () => handleDelete(id));
    setShowPopup(true);
  };

  const handleDelete = async (id) => {
    setLoader(true);
    try {
      await axios.delete(`user/admin/delete/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setLoader(false);
    }
  };

  const confirmUpdate = async (id, formDataObj) => {
    setLoader(true);
    try {
      await axios.put(`user/admin/update/${id}`, formDataObj);
      fetchProducts();
      resetForm();
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      setLoader(false);
    }
  };

  const handleSearch = async () => {
    if (searchInput) {
      setLoader(true);
      try {
        const response = await axios.get(`/user/product/category/${searchInput}`);
        setProducts(response.data.products || []);
      } catch (error) {
        console.error('Error fetching products by category:', error);
        setProducts([]);
      } finally {
        setLoader(false);
      }
    } else {
      fetchProducts();
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: '',
      category: '',
      quantity: '',
      img: [],
    });
    setEditingProduct(null);
  };

  const handleImageChange = (direction, productId) => {
    setCurrentImageIndices((prevIndices) => {
      const currentIndex = prevIndices[productId] || 0;
      const totalImages = products.find(product => product._id === productId)?.images.length || 0;

      if (direction === 'left') {
        return { ...prevIndices, [productId]: currentIndex === 0 ? totalImages - 1 : currentIndex - 1 };
      } else if (direction === 'right') {
        return { ...prevIndices, [productId]: currentIndex === totalImages - 1 ? 0 : currentIndex + 1 };
      }
      return prevIndices;
    });
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">Search by Category</label>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter category to search"
        />
        <button
          onClick={handleSearch}
          className="absolute text-lg text-blue-600 left-3 bottom-2 transform -translate-y-1/2 text-gray-600"
        >
          <FaSearch />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4">{editingProduct ? 'Edit Dish' : 'Create a New Dish'}</h2>

        {['title', 'description', 'price', 'category', 'quantity'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 text-sm font-bold mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              name={field}
              type="text"
              value={formData[field]}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={`Enter dish ${field}`}
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Pictures</label>
          <input
            type='file'
            name="pictures"
            multiple
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {editingProduct ? 'Update Dish' : 'Create Dish'}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const currentImageIndex = currentImageIndices[product._id] || 0;

          return (
            <div key={product._id} className="bg-white shadow-md rounded-lg p-6">
              {product.images && product.images.length > 0 && (
                <div className="relative mb-4">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={`Dish ${product.title} Image`}
                    className="w-full h-48 rounded"
                  />
                  {/* Left Button */}
                  <button
                    onClick={() => handleImageChange('left', product._id)}
                    className="absolute text-xl left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-300"
                    style={{ zIndex: 1 }}
                  >
                    <FaChevronLeft />
                  </button>
                  {/* Right Button */}
                  <button
                    onClick={() => handleImageChange('right', product._id)}
                    className="absolute text-xl right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-300"
                    style={{ zIndex: 1 }}
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}

              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-800 font-bold">Price: ${product.price}</p>
              <p className="text-gray-800 font-bold">Quantity: {product.quantity}</p>
              <p className="text-gray-800 font-bold">Category: {product.category}</p>

              <div className="flex justify-between mt-4">
                <button onClick={() => handleEdit(product)} className="text-blue-500 hover:underline">
                  <FaEdit />
                </button>
                <button onClick={() => ConfirmDelete(product._id)} className="text-red-500 hover:underline">
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {showPopup && (
        <PopupMessage
          message="Are you sure you want to delete this dish?"
          onConfirm={confirmAction}
          onCancel={() => {
            setShowPopup(false);
            setConfirmAction(null);
          }}
        />
      )}

      {/* Success Message Popup */}
      {successMessage && (
        <PopupMessage
          message={successMessage}
          onConfirm={() => setSuccessMessage('')} // Hide message on confirm
        />
      )}
    </div>
  );
};

export default ManageDishes;
