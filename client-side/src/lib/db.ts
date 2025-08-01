// src/lib/db.ts
import mongoose from 'mongoose';

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: 'travelbridge',
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default connectDB;
