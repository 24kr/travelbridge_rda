import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Booking from '@/lib/models/Booking';
import { generateTicketCode } from '@/lib/utils/generateTicketCode';

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const body = await req.json();

        const {
            passengerName,
            passengerPhone,
            email,
            agencyId,
            busId,
            routeId,
            travelDateTime,
            seatNumber
        } = body;

        // Fetch related info from DB (agency, bus, route)
        const [agency, bus, route] = await Promise.all([
            // You'd typically use mongoose findById or similar queries here
        ]);

        // Generate ticket code
        const ticketCode = generateTicketCode({
            agencyName: agency.name,
            plateNumber: bus.plateNumber,
            routeCode: route.code,
            travelDateTime
        });

        const booking = new Booking({
            passengerName,
            passengerPhone,
            email,
            agency: agencyId,
            bus: busId,
            route: routeId,
            travelDateTime,
            seatNumber,
            ticketCode
        });

        await booking.save();

        return NextResponse.json({ success: true, booking }, { status: 201 });
    } catch (err: any) {
        console.error('[BOOKING_ERROR]', err);
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
