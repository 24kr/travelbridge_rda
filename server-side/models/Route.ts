import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    distanceKm: { type: Number },
    estimatedDuration: { type: String },
    stops: [String],
    agencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', required: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Route', routeSchema);
