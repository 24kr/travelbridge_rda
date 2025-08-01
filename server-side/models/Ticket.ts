import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    passengerName: { type: String, required: true },
    passengerPhone: { type: String, required: true },
    passengerEmail: { type: String },
    ticketCode: { type: String, required: true, unique: true },
    seatNumber: { type: Number, required: true },
    scheduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule', required: true },
    routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
    agencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', required: true },
    busPlateNumber: { type: String },
    departureTime: { type: String },
    departureDate: { type: String },
    paymentStatus: { type: String, enum: ['paid', 'pending', 'cancelled'], default: 'pending' },
    deliveryMethod: { type: String, enum: ['sms', 'email'], default: 'sms' }
}, { timestamps: true });

export default mongoose.model('Ticket', ticketSchema);
