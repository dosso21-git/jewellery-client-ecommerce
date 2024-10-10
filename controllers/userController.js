const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require('path')
const cloudinary = require('cloudinary').v2;
const User = require("../models/userModel");
const Address = require('../models/addressModel')
// const Product = require("../models/productModel");
// const Cart = require("../models/cartModel");
// const Coupon = require("../models/couponModel");
// const Order = require("../models/orderModel");
const { generateToken } = require("../config/jwtToken");
// const sendEmail = require("./emailCtrl");



const createUser = async (req, res) => {
  const { email, firstname, lastname, mobile, password, role } = req.body;
  const saltRounds = 10;

  try {
    if (!email || !firstname || !lastname || !mobile || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const findUserByEmail = await User.findOne({ email });
    if (findUserByEmail) {
      return res.status(409).json({ error: "Email already exists. Please login." });
    }

    const findUserByMobile = await User.findOne({ mobile });
    if (findUserByMobile) {
      return res.status(409).json({ error: "Mobile number already exists. Please login." });
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);

    const userRole = role && role.toLowerCase() === 'admin' ? 'admin' : 'user';

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      mobile,
      password: passwordHash,
      role: userRole,
    });

    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {

    const findAdmin = await User.findOne({ email });
    console.log("Admin: ", findAdmin);

    if (!findAdmin) {
      return res.status(401).json({ message: "Incorrect Email." });
    }

    if (findAdmin.role !== "admin") {
      return res.status(403).json({ message: "Not Authorised" });
    }

    const isPasswordMatched = await bcrypt.compare(password, findAdmin.password);
    if (!isPasswordMatched) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    const refreshToken = generateToken(findAdmin._id);
    await User.findByIdAndUpdate(
      findAdmin.id,
      { token: refreshToken },
      { new: true }
    );

    return res.status(200).json({
      _id: findAdmin._id,
      firstname: findAdmin.firstname,
      lastname: findAdmin.lastname,
      email: findAdmin.email,
      mobile: findAdmin.mobile,
      token: generateToken(findAdmin._id),
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const loginUserCtrl = async (req, res) => {
  const { email, mobile, password } = req.body;

  try {

    const findUser = await User.findOne({
      $or: [{ email }, { mobile }]
    });

    if (!findUser) {
      return res.status(401).json({ error: "Incorrect Email or Mobile." });
    }

    // Check if the password is correct
    const isPasswordMatched = await bcrypt.compare(password, findUser.password);
    if (!isPasswordMatched) {
      return res.status(401).json({ error: "Incorrect password." });
    }

    // Generate a token and update it in the user's record
    const token = generateToken(findUser._id);
    await User.findByIdAndUpdate(
      findUser._id,
      { token },
      { new: true }
    );

    return res.status(200).json({
      _id: findUser._id,
      firstname: findUser.firstname,
      lastname: findUser.lastname,
      email: findUser.email,
      mobile: findUser.mobile,
      token,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// const updatedUser = async (req, res) => {
//   try {
//     const userId = req.user;

//     const existingUser = await User.findById(userId);
//     if (!existingUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const profilePicUrl = req.file ? req.file.path : existingUser.profilepic;

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       {
//         firstname: req.body.firstname || existingUser.firstname,
//         lastname: req.body.lastname || existingUser.lastname,
//         email: req.body.email || existingUser.email,
//         mobile: req.body.mobile || existingUser.mobile,
//         profilepic: profilePicUrl,
//       },
//       { new: true }
//     );

//     if (updatedUser) {
//       return res.status(200).json({
//         message: 'User updated successfully',
//         user: updatedUser,
//       });
//     } else {
//       return res.status(400).json({ error: 'Failed to update user' });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: 'Server error', details: error.message });
//   }
// };

const updatedUser = async (req, res) => {
  try {
    const userId = req.user;

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    let profilePicUrl = existingUser.profilepic;

    if (req.file) {
      if (existingUser.profilepic) {
        const publicId = existingUser.profilepic.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(publicId);
      }

      const uploadResponse = await cloudinary.uploader.upload(req.file.path);
      profilePicUrl = uploadResponse.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        firstname: req.body.firstname || existingUser.firstname,
        lastname: req.body.lastname || existingUser.lastname,
        email: req.body.email || existingUser.email,
        mobile: req.body.mobile || existingUser.mobile,
        profilepic: profilePicUrl,
      },
      { new: true }
    );

    if (updatedUser) {
      return res.status(200).json({
        message: 'User updated successfully',
        user: updatedUser,
      });
    } else {
      return res.status(400).json({ error: 'Failed to update user' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
};

const deleteaUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndUpdate(id, {
      isDeleted: true,
    }, { new: true });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User marked as deleted successfully",
      deletedUser,
    });
  } catch (error) {
    console.error("Error marking user as deleted:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const restoreUser = async (req, res) => {
  const { id } = req.params;

  try {
    const restoredUser = await User.findByIdAndUpdate(id, {
      isDeleted: false,
    }, { new: true });

    if (!restoredUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User restored successfully",
      restoredUser,
    });
  } catch (error) {
    console.error("Error restoring user:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const getallUser = async (req, res) => {
  try {
    const getUsers = await User.find({ isDeleted: false });
    res.json(getUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single-user
const getaUser = async (req, res) => {
  const { id } = req.params;
  try {
    const getaUser = await User.findById(id);
    res.json({
      getaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
};


const addAddress = async (req, res) => {
  try {
    const userId = req.user;

    const { addressLine1, addressLine2, city, state, country, postalCode, phone, isDefault } = req.body;

    const newAddress = new Address({
      user: userId,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      postalCode,
      phone,
      isDefault: isDefault || false,
    });

    const savedAddress = await newAddress.save();

    await User.findByIdAndUpdate(userId, {
      $push: { address: savedAddress._id },
    });

    res.status(201).json({ message: 'Address added successfully', address: savedAddress });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add address', details: error.message });
  }
};

const getAllAddresses = async (req, res) => {
  try {
    const userId = req.user;

    const addresses = await Address.find({ user: userId });

    res.status(200).json({ message: 'Addresses fetched successfully', addresses });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch addresses', details: error.message });
  }
};

const updateAddress = async (req, res) => {
  try {
    const addressId = req.params.id;
    const userId = req.user;

    const updatedAddress = await Address.findOneAndUpdate(
      { _id: addressId, user: userId },
      req.body,
      { new: true }
    );

    if (!updatedAddress) {
      return res.status(404).json({ error: 'Address not found or does not belong to user' });
    }

    res.status(200).json({ message: 'Address updated successfully', address: updatedAddress });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update address', details: error.message });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const addressId = req.params.id;
    const userId = req.user;

    const deletedAddress = await Address.findOneAndDelete({ _id: addressId, user: userId });

    if (!deletedAddress) {
      return res.status(404).json({ error: 'Address not found or does not belong to user' });
    }

    // Remove the address from the user's address list
    await User.findByIdAndUpdate(userId, {
      $pull: { address: addressId },
    });

    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete address', details: error.message });
  }
};

const blockUser = async (req, res) => {
  const { id } = req.params;

  try {
    const blockusr = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json(blockusr);
  } catch (error) {
    throw new Error(error);
  }
};

// Unblock User
const unblockUser = async (req, res) => {
  const { id } = req.params;

  try {
    const unblock = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User UnBlocked",
    });
  } catch (error) {
    throw new Error(error);
  }
};

// Password Updation
const updatePassword = async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
};

// Password Reset Token
const forgotPasswordToken = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const resetToken = crypto.randomBytes(32).toString("hex");
  user.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  user.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  if (!user) throw new Error("User not found with this email");
  try {
    const token = resetToken;
    console.log("Token:", token);
    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:4000/api/user/reset-password/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      htm: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
};

// Password Reset
const resetPassword = async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) {
    throw new Error("Token Expired, Please try again later");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  user.password = hashedPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
};

// Get Wishlist
const getWishlist = async (req, res) => {
  const { _id } = req.user;
  try {
    const findUser = await User.findById(_id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
};

// Cart
const userCart = async (req, res) => {
  const { productId, title, brand, rating, category, price, discountedPrice } = req.body;
  const { _id } = req.user;
  validateMongoId(_id);

  try {
    let newCartItem = {
      userId: _id,
      items: [{
        productId: productId,
        quantity: 1,
        product: {
          title: title,
          brand: brand,
          rating: rating,
          category: category,
          price: price,
          discountedPrice: discountedPrice
        }
      }],
      cartTotal: price,
      discountedPrice: discountedPrice

    };
    const user = await User.findById(_id);

    user.cart.push(newCartItem);

    await user.save();

    res.json(newCartItem);
  } catch (error) {
    throw new Error(error);
  }
};

// Get user cart
const getUserCart = async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const cart = await Cart.findOne({ orderby: _id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
};

// Empty Cart
const emptyCart = async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const user = await User.findOne({ _id });
    const cart = await Cart.findOneAndRemove({ orderby: user._id });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
};

// Apply Coupon
const applyCoupon = async (req, res) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  validateMongoId(_id);
  const validCoupon = await Coupon.findOne({ name: coupon });
  if (validCoupon === null) {
    throw new Error("Invalid Coupon");
  }
  const user = await User.findOne({ _id });
  let { cartTotal } = await Cart.findOne({
    orderby: user._id,
  }).populate("products.product");
  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2);
  await Cart.findOneAndUpdate(
    { orderby: user._id },
    { totalAfterDiscount },
    { new: true }
  );
  res.json(totalAfterDiscount);
};

// Create Order
const createOrder = async (req, res) => {
  const { COD, couponApplied } = req.body;
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    if (!COD) throw new Error("Create cash order failed");
    const user = await User.findById(_id);
    let userCart = await Cart.findOne({ orderby: user._id });
    let finalAmout = 0;
    if (couponApplied && userCart.totalAfterDiscount) {
      finalAmout = userCart.totalAfterDiscount;
    } else {
      finalAmout = userCart.cartTotal;
    }

    let newOrder = await new Order({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmout,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "usd",
      },
      orderby: user._id,
      orderStatus: "Cash on Delivery",
    }).save();
    let update = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });
    const updated = await Product.bulkWrite(update, {});
    res.json({ message: "success" });
  } catch (error) {
    throw new Error(error);
  }
};

// Get Orders
const getOrders = async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const userorders = await Order.findOne({ orderby: _id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
};

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const alluserorders = await Order.find()
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(alluserorders);
  } catch (error) {
    throw new Error(error);
  }
};

// Get order by user id
const getOrderByUserId = async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const userorders = await Order.findOne({ orderby: id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
};

// Update Order Status
const updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  validateMongoId(id);
  try {
    const updateOrderStatus = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },
      { new: true }
    );
    res.json(updateOrderStatus);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createUser,
  loginAdmin,
  loginUserCtrl,
  updatedUser,
  deleteaUser,
  restoreUser,
  getaUser,
  getallUser,
  blockUser,
  unblockUser,
  addAddress,
  getAllAddresses, updateAddress, deleteAddress
  // handleRefreshToken,
  // logout,
  // updatePassword,
  // forgotPasswordToken,
  // resetPassword,
  // getWishlist,
  // userCart,
  // getUserCart,
  // emptyCart,
  // applyCoupon,
  // createOrder,
  // getOrders,
  // getAllOrders,
  // getOrderByUserId,
  // updateOrderStatus,
};