import mongoose, { Schema, Document } from 'mongoose';

export interface IRoute extends Document {
    agencyId: mongoose.Types.ObjectId;
    origin: string;
    destination: string;
    distanceKm?: number;
    estimatedTime?: string;
    price: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const RouteSchema: Schema = new Schema(
    {
        agencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', required: true },
        origin: { type: String, required: true },
        destination: { type: String, required: true },
        distanceKm: { type: Number },
        estimatedTime: { type: String },
        price: { type: Number, required: true },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model<IRoute>('Route', RouteSchema);
