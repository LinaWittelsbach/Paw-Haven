import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../src/models/User.js";
import Animal from "../src/models/Animal.js";
import Adoption from "../src/models/Adoption.js";

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const seed = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Animal.deleteMany();
    await Adoption.deleteMany();

    // Seed Users
    const users = [
      { name: "Admin", email: "admin@pawhaven.com", password: await bcrypt.hash("password123", 10), role: "admin" },
      { name: "John Doe", email: "john@example.com", password: await bcrypt.hash("password123", 10), role: "user" },
      { name: "Jane Volunteer", email: "jane@example.com", password: await bcrypt.hash("password123", 10), role: "volunteer" },
    ];
    const createdUsers = await User.insertMany(users);

    // Seed Animals
    const animals = [
      { name: "Bella", species: "Dog", breed: "Beagle", age: 3, gender: "Female", healthStatus: "Healthy", adopted: false },
      { name: "Max", species: "Cat", breed: "Siamese", age: 2, gender: "Male", healthStatus: "Healthy", adopted: false },
      { name: "Luna", species: "Rabbit", breed: "Lop", age: 1, gender: "Female", healthStatus: "Healthy", adopted: false },
    ];
    const createdAnimals = await Animal.insertMany(animals);

    // Optional: Seed adoptions
    const adoptions = [
      { user: createdUsers[1]._id, animal: createdAnimals[0]._id, status: "pending" },
    ];
    await Adoption.insertMany(adoptions);

    console.log("Database seeded successfully ✅");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();