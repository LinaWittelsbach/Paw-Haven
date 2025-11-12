/* require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/auth');
const animalRoutes = require('./src/routes/animals');
const adoptionRoutes = require('./src/routes/adoptions');
const donationRoutes = require('./src/routes/donations');
const volunteerRoutes = require('./src/routes/volunteers');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json({ limit: '10mb' }));

app.get('/', (req, res) => res.send('Paw Haven API'));

app.use('/api/auth', authRoutes);
app.use('/api/animals', animalRoutes);
app.use('/api/adoptions', adoptionRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/volunteers', volunteerRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); */

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/auth.js";
import animalRoutes from "./src/routes/animals.js";
import adoptionRoutes from "./src/routes/adoptions.js";
import donationRoutes from "./src/routes/donations.js";
import volunteerRoutes from "./src/routes/volunteers.js";

dotenv.config();
const app = express();

console.log("🔍 MONGO_URI:", process.env.MONGO_URI)

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/animals", animalRoutes);
app.use("/api/adoptions", adoptionRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/volunteers", volunteerRoutes);

// Connect DB and start server
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🐾 Server running on port ${PORT}`));