import Animal from "../models/Animal.js";
import { v2 as cloudinary } from "cloudinary";

// Get all animals
export const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new animal
export const addAnimal = async (req, res) => {
  try {
    let imageUrl = "";
    if (req.file) {
      const uploaded = await cloudinary.uploader.upload(req.file.path);
      imageUrl = uploaded.secure_url;
    }
    const animal = await Animal.create({ ...req.body, imageUrl });
    res.status(201).json(animal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update animal
export const updateAnimal = async (req, res) => {
  try {
    const updated = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete animal
export const deleteAnimal = async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.json({ message: "Animal deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};