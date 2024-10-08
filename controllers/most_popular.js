

// Create a new popular product
exports.createPopularProduct = async (req, res) => {
  try {
    const { productId, popularityScore } = req.body;
    const popularProduct = new PopularProduct({ productId, popularityScore });
    await popularProduct.save();
    res.status(201).json(popularProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all popular products
exports.getAllPopularProducts = async (req, res) => {
  try {
    const popularProducts = await PopularProduct.find().populate('productId');
    res.status(200).json(popularProducts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a popular product by ID
exports.getPopularProductById = async (req, res) => {
  try {
    const popularProduct = await PopularProduct.findById(req.params.id).populate('productId');
    if (!popularProduct) {
      return res.status(404).json({ message: 'Popular product not found' });
    }
    res.status(200).json(popularProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a popular product
exports.updatePopularProduct = async (req, res) => {
  try {
    const { popularityScore } = req.body;
    const popularProduct = await PopularProduct.findByIdAndUpdate(
      req.params.id,
      { popularityScore },
      { new: true }
    ).populate('productId');

    if (!popularProduct) {
      return res.status(404).json({ message: 'Popular product not found' });
    }
    res.status(200).json(popularProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a popular product
exports.deletePopularProduct = async (req, res) => {
  try {
    const popularProduct = await PopularProduct.findByIdAndDelete(req.params.id);
    if (!popularProduct) {
      return res.status(404).json({ message: 'Popular product not found' });
    }
    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
