// src/app/api/book/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db'; // custom MongoDB connection helper
import Booking from '@/models/Booking';

export async function POST(req: NextRequest) {
    await connectDB();

    try {
        const body = await req.json();

        const {
            passengerName,
            passengerPhone,
            passengerEmail,
            agency,
            route,
            travelDate,
            travelTime,
            plateNumber,
            seatNumber,
        } = body;

        if (
            !passengerName ||
            !passengerPhone ||
            !agency ||
            !route ||
            !travelDate ||
            !travelTime ||
            !plateNumber ||
            !seatNumber
        ) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Create new booking
        const newBooking = await Booking.create({
            passengerName,
            passengerPhone,
            passengerEmail,
            agency,
            route,
            travelDate,
            travelTime,
            plateNumber,
            seatNumber,
        });

        return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });
    } catch (error) {
        console.error('Booking Error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
