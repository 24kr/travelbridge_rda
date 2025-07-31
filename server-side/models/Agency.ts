import mongoose, { Schema, Document } from 'mongoose';

export interface IAgency extends Document {
    name: string;
    email: string;
    phone: string;
    logoUrl?: string;
    address?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const AgencySchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        logoUrl: { type: String },
        address: { type: String },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model<IAgency>('Agency', AgencySchema);
