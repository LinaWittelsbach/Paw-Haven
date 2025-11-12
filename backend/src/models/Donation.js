const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
donorName: String,
donorEmail: String,
amount: Number,
type: { type: String, enum: ['money','food','supplies'], default: 'money' },
message: String
}, { timestamps: true });

module.exports = mongoose.model('Donation', DonationSchema);