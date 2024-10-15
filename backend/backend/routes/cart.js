const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Cart = require('../models/Cart');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All Cart Items of Valid User using: GET "/api/cart/fetchallcartitems". Login required
router.get('/fetchallcartitems', fetchUser, async (req, res) => {
    try {
        const cartItems = await Cart.find({user: req.user.id});
        res.json(cartItems);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// ROUTE 2: Add items to the cart for the authenticated user
router.post('/addcart', fetchUser, [
    body('items.*.name', 'Name is required').notEmpty(),
    body('items.*.quantity', 'Quantity is required').isInt({ min: 1 }),
    body('items.*.price', 'Price is required').isFloat({ min: 0 }),
], async (req, res) => {
    console.log('Authenticated user:', req.user);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { items } = req.body;

    if (!Array.isArray(items)) {
        return res.status(400).json({ error: "Items should be an array" });
    }

    try {
        let cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            cart = new Cart({
                user: req.user.id,
                items: items
            });
        } else {
            items.forEach(item => {
                const existingItemIndex = cart.items.findIndex(cartItem => cartItem.name === item.name);

                if (existingItemIndex !== -1) {
                    cart.items[existingItemIndex].quantity += item.quantity;
                } else {
                    cart.items.push(item);
                }
            });
        }

        const savedCart = await cart.save();
        res.status(201).json(savedCart);
    } catch (error) {
        console.error('Error saving cart:', error.stack);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;