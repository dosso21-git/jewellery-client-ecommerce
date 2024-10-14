const fs = require('fs');
const Banner = require('../models/bannerModel');
const cloudinary = require('../config/cloudinary');


const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};


const getBanners = async (req, res) => {
    try {
        const banners = await Banner.find();
        res.json(banners);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getBannerById = async (req, res) => {
    try {
        const banner = await Banner.findById(req.params.id);
        if (!banner) {
            return res.status(404).json({ message: 'Banner not found' });
        }
        res.json(banner);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const createBanner = async (req, res) => {
    try {
    const { title, content, offer, discount } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'banners',
    });

    removeTmp(req.file.path);

    const newBanner = new Banner({
        title,
        content,
        offer,
        discount,
        imageUrl: result.secure_url,
        imagePublicId: result.public_id,
    });

    const savedBanner = await newBanner.save();
    res.status(201).json(savedBanner);
    } catch (error) {
        res.status(500).json({ message: 'Error creating banner' });
    }
};

const updateBanner = async (req, res) => {
    try {
        const { title, content, offer, discount } = req.body;
        let banner = await Banner.findById(req.params.id);

        if (!banner) {
            return res.status(404).json({ message: 'Banner not found' });
        }

        let imageUrl = banner.imageUrl;
        let imagePublicId = banner.imagePublicId;

        if (req.file) {
            await cloudinary.uploader.destroy(banner.imagePublicId);

            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'banners',
            });

            removeTmp(req.file.path);

            imageUrl = result.secure_url;
            imagePublicId = result.public_id;
        }

        banner = await Banner.findByIdAndUpdate(req.params.id, {
            title,
            content,
            offer,
            discount,
            imageUrl,
            imagePublicId,
        }, { new: true });

        res.json(banner);
    } catch (error) {
        res.status(500).json({ message: 'Error updating banner' });
    }
};

const deleteBanner = async (req, res) => {
    try {
        const banner = await Banner.findByIdAndDelete(req.params.id);

        if (!banner) {
            return res.status(404).json({ message: 'Banner not found' });
        }

        await cloudinary.uploader.destroy(banner.imagePublicId);

        res.json({ message: 'Banner deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting banner' });
    }
};


module.exports = { getBanners, getBannerById, createBanner, deleteBanner, updateBanner }