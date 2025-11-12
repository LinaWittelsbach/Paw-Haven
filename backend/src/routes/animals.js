import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { addAnimal, getAnimals, updateAnimal, deleteAnimal } from "../controllers/animalController.js";

const router = express.Router();

// Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "paw-haven",
    allowed_formats: ["jpg", "png"],
  },
});

const upload = multer({ storage });

// Routes
router.get("/", getAnimals);
router.post("/", upload.single("image"), addAnimal);
router.put("/:id", updateAnimal);
router.delete("/:id", deleteAnimal);

export default router;
