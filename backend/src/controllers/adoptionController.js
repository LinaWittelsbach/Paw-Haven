import Adoption from "../models/Adoption.js";

// Request adoption
export const requestAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.create({ ...req.body, user: req.user._id, status: "pending" });
    res.status(201).json(adoption);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all adoptions (admin/volunteer)
export const getAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find().populate("user").populate("animal");
    res.json(adoptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Approve adoption
export const approveAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.findById(req.params.id);
    if (!adoption) return res.status(404).json({ message: "Not found" });

    adoption.status = "approved";
    await adoption.save();
    res.json(adoption);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete adoption
export const deleteAdoption = async (req, res) => {
  try {
    await Adoption.findByIdAndDelete(req.params.id);
    res.json({ message: "Adoption deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};