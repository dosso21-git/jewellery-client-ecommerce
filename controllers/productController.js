const Product = require("../models/productModel");
const cloudinary = require("../config/cloudinary")

const createProduct = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: { fileError: 'No pictures uploaded or invalid file type' } });
        }

        const pictureUrls = req.files.map(file => file.path);

        const newProduct = new Product({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            quantity: req.body.quantity,
            images: pictureUrls
        });

        await newProduct.save();

        return res.status(201).json({
            message: 'Product created successfully',
        });

    } catch (error) {
        console.error('Error creating product:', error);
        return res.status(500).json({ error: 'Server Error' });
    }
};


const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dishes', error })
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)

        if (!product) {
            return res.status(404).json({ message: 'Dish not found' })
        }

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dish', error })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (req.files && req.files.length > 0) {
            const uploadedImages = await Promise.all(
                req.files.map(async (file) => {
                    const result = await cloudinary.uploader.upload(file.path);
                    return result.secure_url;
                })
            );

            existingProduct.images = [...existingProduct.images, ...uploadedImages];
        }

        existingProduct.title = req.body.title || existingProduct.title;
        existingProduct.description = req.body.description || existingProduct.description;
        existingProduct.price = req.body.price || existingProduct.price;
        existingProduct.category = req.body.category || existingProduct.category;
        existingProduct.quantity = req.body.quantity || existingProduct.quantity;

        const updatedProduct = await existingProduct.save();

        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Error updating product', error });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findById(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const imagePaths = deletedProduct.images;
        for (const imageUrl of imagePaths) {
            const publicId = imageUrl.split('/').slice(-2).join('/').split('.')[0];

            await cloudinary.uploader.destroy(publicId, (error, result) => {
                if (error) {
                    console.error(`Failed to delete image ${publicId} from Cloudinary:`, error);
                } else {
                    console.log(`Image ${publicId} deleted successfully from Cloudinary.`);
                }
            });
        }

        await Product.findByIdAndDelete(id);

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Error deleting product', error });
    }
};

const deleteDeletePicture = async (req, res) => {
    const { dishId, pictureIndex } = req.params;

    try {
        const dish = await Dish.findById(dishId);
        if (!dish) {
            return res.status(404).json({ error: 'Dish not found' });
        }

        if (pictureIndex < 0 || pictureIndex >= dish.img.length) {
            return res.status(400).json({ error: { pictureError: 'Invalid picture index' } });
        }

        const imageUrl = dish.img[pictureIndex];

        const publicId = imageUrl.split('/').slice(-2).join('/').split('.')[0]; // 'dishes/some-id'
        console.log(`Attempting to delete Cloudinary image with publicId: ${publicId}`);

        const cloudinaryResponse = await cloudinary.uploader.destroy(publicId);
        if (cloudinaryResponse.result !== 'ok') {
            console.error(`Failed to delete image from Cloudinary:`, cloudinaryResponse);
            return res.status(500).json({ error: 'Failed to delete image from Cloudinary' });
        }

        console.log(`Image ${publicId} deleted successfully from Cloudinary.`);

        dish.img.splice(pictureIndex, 1);

        await dish.save();

        return res.status(200).json({
            message: 'Picture deleted successfully',
        });

    } catch (error) {
        console.error('Error deleting picture:', error);
        return res.status(500).json({ error: 'Server Error' });
    }
};


const getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category; // Get the category from the request parameters
        const products = await Product.find({ category }); // Find products by category

        if (!products || products.length === 0) {
            return res.status(404).json({
                message: "No products found in this category",
            });
        }

        res.status(200).json({
            success: true,
            products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: error.message,
        });
    }
};

module.exports = { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct, getProductsByCategory };