import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DishList from '../Components/DishList';
import PopupMessage from '../Components/PopupMessage';


const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    img: [],
  });
  const [loader, setLoader] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);

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

    formData.img.forEach((image, index) => {
      formDataObj.append(`images[${index}]`, image);
    });

    try {
      if (editingProduct) {
        await axios.put(`user/product/update/${editingProduct._id}`, formDataObj);
      } else {
        await axios.post('user/product/create', formDataObj);
      }
      fetchProducts();
      setFormData({
        title: '',
        description: '',
        price: '',
        quantity: '',
        category: '',
        img: [],
      });
      setEditingProduct(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditingProduct(product);
  };

  const handleSearch = async () => {
    setLoader(true);
    try {
      const response = await axios.get(`user/product/getall?category=${searchInput}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoader(false);
    }
  };

  const handleImageChange = (direction, productId) => {
    setCurrentImageIndices((prevIndices) => {
      const currentIndex = prevIndices[productId] || 0;
      const newIndex =
        direction === 'left'
          ? (currentIndex === 0 ? products.find(p => p._id === productId).images.length - 1 : currentIndex - 1)
          : (currentIndex === products.find(p => p._id === productId).images.length - 1 ? 0 : currentIndex + 1);
      return { ...prevIndices, [productId]: newIndex };
    });
  };

  const ConfirmDelete = (productId) => {
    setConfirmAction(() => () => handleDelete(productId));
    setShowPopup(true);
  };

  const handleDelete = async (productId) => {
    setLoader(true);
    try {
      await axios.delete(`user/admin/delete/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setShowPopup(false);
      setLoader(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Listed Products</h1>

      

      {/* <DishForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        editingProduct={editingProduct}
      /> */}

      {loader ? (
        <p className="text-center">Loading...</p>
      ) : (
        <DishList
          products={products}
          currentImageIndices={currentImageIndices}
          handleEdit={handleEdit}
          handleImageChange={handleImageChange}
          ConfirmDelete={ConfirmDelete}
        />
      )}

      {showPopup && (
        <PopupMessage
          message="Are you sure you want to delete this dish?"
          onConfirm={confirmAction}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default MainPage;
