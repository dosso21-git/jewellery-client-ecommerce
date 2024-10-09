const Offer = require('../models/Offer');
const Product = require('../models/Product');

const createOffer = async (req, res) => {
    try {
        const { offer, discount, prodCategory } = req.body;

        const newOffer = new Offer({
            offer,
            discount,
            prodCategory
        });

        const savedOffer = await newOffer.save();
        res.status(201).json(savedOffer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllOffers = async (req, res) => {
    try {
        const offers = await Offer.find().populate('prodCategory');
        res.status(200).json(offers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateOffer = async (req, res) => {
    try {
        const { id } = req.params;
        const { offer, discount, prodCategory } = req.body;

        const updatedOffer = await Offer.findByIdAndUpdate(
            id,
            { offer, discount, prodCategory },
            { new: true }
        );

        if (!updatedOffer) {
            return res.status(404).json({ message: "Offer not found" });
        }

        res.status(200).json(updatedOffer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOffer = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedOffer = await Offer.findByIdAndDelete(id);

        if (!deletedOffer) {
            return res.status(404).json({ message: "Offer not found" });
        }

        res.status(200).json({ message: "Offer deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { createOffer, getAllOffers, updateOffer, deleteOffer }