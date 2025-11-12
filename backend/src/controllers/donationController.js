import Donation from "../models/Donation.js";

// Make a donation
export const makeDonation = async (req, res) => {
  try {
    const donation = await Donation.create({ ...req.body, user: req.user._id });
    res.status(201).json(donation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get donations (admin)
export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate("user");
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};