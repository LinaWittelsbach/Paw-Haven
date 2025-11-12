const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
name: { type: String, required: true },
species: { type: String, required: true },
breed: { type: String },
age: { type: String },
gender: { type: String },
description: { type: String },
images: [{ url: String, public_id: String }],
health: {
vaccinated: { type: Boolean, default: false },
neutered: { type: Boolean, default: false },
notes: { type: String }
},
status: { type: String, enum: ['available','reserved','adopted','fostered'], default: 'available' },
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Animal', AnimalSchema);