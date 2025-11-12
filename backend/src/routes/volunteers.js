import express from "express";
import { applyVolunteer, getVolunteers, updateVolunteer, deleteVolunteer } from "../controllers/volunteerController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Volunteer routes
router.post("/", applyVolunteer);
router.get("/", protect, getVolunteers);
router.put("/:id", protect, updateVolunteer);
router.delete("/:id", protect, deleteVolunteer);

export default router;