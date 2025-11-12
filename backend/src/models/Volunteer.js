const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
hours: { type: Number, default: 0 },
tasks: [{ date: Date, description: String }]
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', VolunteerSchema);