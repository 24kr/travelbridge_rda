// /models/Booking.ts
import mongoose, { Schema, Document } from 'mongoose';
import { sha3_256 } from 'js-sha3';

interface BookingDocument extends Document {
  passengerName: string;
  passengerPhone: string;
  passengerEmail?: string;
  agency: string;
  route: string;
  travelDate: Date;
  travelTime: string;
  plateNumber: string;
  seatNumber: string;
  ticketCode: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  createdAt: Date;
}

const BookingSchema = new Schema<BookingDocument>(
  {
    passengerName: { type: String, required: true },
    passengerPhone: { type: String, required: true },
    passengerEmail: { type: String },
    agency: { type: String, required: true },
    route: { type: String, required: true },
    travelDate: { type: Date, required: true },
    travelTime: { type: String, required: true },
    plateNumber: { type: String, required: true },
    seatNumber: { type: String, required: true },
    ticketCode: { type: String, required: true, unique: true },
    status: {
      type: String,
      enum: ['PENDING', 'CONFIRMED', 'CANCELLED'],
      default: 'PENDING',
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: 'bookings',
  }
);

// 🧠 Auto-generate ticketCode before saving
BookingSchema.pre('validate', function (next) {
  if (!this.ticketCode) {
    const raw = `${this.agency}-${this.plateNumber}-${this.travelDate.toISOString()}-${this.route}-${this.seatNumber}`;
    const hash = sha3_256(raw);
    this.ticketCode = hash.slice(0, 6).toUpperCase();
  }
  next();
});

export default mongoose.models.Booking ||
  mongoose.model<BookingDocument>('Booking', BookingSchema);
