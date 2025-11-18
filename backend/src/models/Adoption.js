
import mongoose from 'mongoose';

const AdoptionSchema = new mongoose.Schema({
	animal: { type: mongoose.Schema.Types.ObjectId, ref: 'Animal', required: true },
	applicantName: { type: String, required: true },
	applicantEmail: { type: String, required: true },
	applicantPhone: { type: String },
	status: { type: String, enum: ['pending','approved','rejected'], default: 'pending' },
	notes: { type: String },
	processedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const Adoption = mongoose.model('Adoption', AdoptionSchema);
export default Adoption;