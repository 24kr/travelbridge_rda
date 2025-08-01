import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
    agencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', required: true },
    busPlateNumber: { type: String, required: true },
    routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
    departureDate: { type: String, required: true }, // "2025-08-10"
    departureTime: { type: String, required: true }, // "14:00"
    availableSeats: { type: Number, required: true },
    bookedSeats: [Number],
    ticketPrice: { type: Number, required: true },
    isPublished: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Schedule', scheduleSchema);
