const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// register
router.post('/register', async (req, res) => {
const { name, email, password, role } = req.body;
try {
const user = await User.create({ name, email, password, role });
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token, user: { id: user._id, email: user.email, name: user.name, role: user.role } });
} catch (err) {
res.status(400).json({ message: err.message });
}
});

// login
router.post('/login', async (req, res) => {
const { email, password } = req.body;
try {
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: 'Invalid credentials' });
const isMatch = await user.matchPassword(password);
if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token, user: { id: user._id, email: user.email, name: user.name, role: user.role } });
} catch (err) {
res.status(500).json({ message: err.message });
}
});

module.exports = router;

/* import express from "express";
import { registerUser, loginUser, getProfile } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);

export default router; */