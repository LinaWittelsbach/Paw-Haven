
import mongoose from 'mongoose';

const DonationSchema = new mongoose.Schema({
	donorName: String,
	donorEmail: String,
	amount: Number,
	type: { type: String, enum: ['money','food','supplies'], default: 'money' },
	message: String
}, { timestamps: true });

const Donation = mongoose.model('Donation', DonationSchema);
export default Donation;