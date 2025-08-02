import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
connectDB();

app.use(express.json());

app.get('/', (_, res) => res.send('TravelBridge API Running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));