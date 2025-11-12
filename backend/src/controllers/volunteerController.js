import Volunteer from "../models/Volunteer.js";

// Apply to volunteer
export const applyVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.create({ ...req.body, user: req.user?._id });
    res.status(201).json(volunteer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all volunteers (admin)
export const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find().populate("user");
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update volunteer
export const updateVolunteer = async (req, res) => {
  try {
    const updated = await Volunteer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete volunteer
export const deleteVolunteer = async (req, res) => {
  try {
    await Volunteer.findByIdAndDelete(req.params.id);
    res.json({ message: "Volunteer deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};