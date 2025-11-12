import express from "express";
import { requestAdoption, getAdoptions, approveAdoption, deleteAdoption } from "../controllers/adoptionController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Adoption routes
router.post("/", protect, requestAdoption);
router.get("/", protect, getAdoptions);
router.put("/:id/approve", protect, approveAdoption);
router.delete("/:id", protect, deleteAdoption);

export default router;