import express from "express";
import { makeDonation, getDonations } from "../controllers/donationController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Donation routes
router.post("/", protect, makeDonation);
router.get("/", protect, getDonations);

export default router;