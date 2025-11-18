
import mongoose from 'mongoose';

const VolunteerSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	hours: { type: Number, default: 0 },
	tasks: [{ date: Date, description: String }]
}, { timestamps: true });

const Volunteer = mongoose.model('Volunteer', VolunteerSchema);
export default Volunteer;