import mongoose from 'mongoose';

const agencySchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    logoUrl: { type: String },
    busPlateNumbers: [String],
    routesOffered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Route' }]
}, { timestamps: true });

export default mongoose.model('Agency', agencySchema);
