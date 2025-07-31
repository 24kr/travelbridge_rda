import mongoose, { Schema, models, model } from 'mongoose';

const BookingSchema = new Schema(
    {
        passengerName: {
            type: String,
            required: true,
        },
        passengerPhone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        agency: {
            type: Schema.Types.ObjectId,
            ref: 'Agency',
            required: true,
        },
        bus: {
            type: Schema.Types.ObjectId,
            ref: 'Bus',
            required: true,
        },
        route: {
            type: Schema.Types.ObjectId,
            ref: 'Route',
            required: true,
        },
        travelDateTime: {
            type: Date,
            required: true,
        },
        seatNumber: {
            type: String,
            required: true,
        },
        ticketCode: {
            type: String,
            required: true,
            unique: true,
        },
        status: {
            type: String,
            enum: ['confirmed', 'cancelled', 'pending'],
            default: 'confirmed',
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

// Prevent model overwrite in dev
export default models.Booking || model('Booking', BookingSchema);
