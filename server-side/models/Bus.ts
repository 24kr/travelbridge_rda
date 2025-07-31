import mongoose, { Schema, Document } from 'mongoose';

export interface IBus extends Document {
    agencyId: mongoose.Types.ObjectId;
    plateNumber: string;
    seatCount: number;
    type?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const BusSchema: Schema = new Schema(
    {
        agencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', required: true },
        plateNumber: { type: String, required: true, unique: true },
        seatCount: { type: Number, required: true },
        type: { type: String },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model<IBus>('Bus', BusSchema);
