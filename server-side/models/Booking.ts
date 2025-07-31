import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  passengerName: string;
  ticketCode: string;
  agencyId: mongoose.Types.ObjectId;
  busId: mongoose.Types.ObjectId;
  routeId: mongoose.Types.ObjectId;
  seatNumber: string;
  travelDateTime: Date;
  bookedAt: Date;
  amount: number;
  paymentMethod: 'Mobile Money' | 'Card' | 'Cash';
  contact: {
    phone: string;
    email?: string;
  };
  qrData?: string;
  isVerified: boolean;
  isBoarded: boolean;
  canceled: boolean;
  usedPromoCode?: string;
  language?: string;
}

const BookingSchema: Schema<IBooking> = new Schema({
  passengerName: { type: String, required: true },
  ticketCode: { type: String, required: true, unique: true },
  agencyId: { type: mongoose.Types.ObjectId, ref: 'Agency', required: true },
  busId: { type: mongoose.Types.ObjectId, ref: 'Bus', required: true },
  routeId: { type: mongoose.Types.ObjectId, ref: 'Route', required: true },
  seatNumber: { type: String, required: true },
  travelDateTime: { type: Date, required: true },
  bookedAt: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  paymentMethod: {
    type: String,
    enum: ['Mobile Money', 'Card', 'Cash'],
    default: 'Mobile Money'
  },
  contact: {
    phone: { type: String, required: true },
    email: { type: String }
  },
  qrData: { type: String },
  isVerified: { type: Boolean, default: false },
  isBoarded: { type: Boolean, default: false },
  canceled: { type: Boolean, default: false },
  usedPromoCode: { type: String },
  language: { type: String, default: 'en' }
});

export default mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);
