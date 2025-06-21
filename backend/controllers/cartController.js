import userModel from '../models/userModel.js';

// Add item to user cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ Consistent access
    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = { ...userData.cartData };

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding to cart" });
  }
};

// Remove item from user cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ Consistent access
    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = { ...userData.cartData };

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Removed from cart" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error removing from cart" });
  }
};

// Get user's cart data
const getCart = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ Consistent access
    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, cartData: userData.cartData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error fetching cart" });
  }
};

export { addToCart, removeFromCart, getCart };
