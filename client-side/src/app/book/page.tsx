"use client";

import { useState } from "react";

export default function BookingPage() {
    const [seat, setSeat] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [isBooked, setIsBooked] = useState(false);

    const handleBooking = () => {
        if (seat && fullName && phone) {
            setIsBooked(true);
        } else {
            alert("Please fill in all fields.");
        }
    };

    if (isBooked) {
        return (
            <div className="flex flex-col items-center justify-center h-screen px-4">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h1>
                <p className="text-center text-gray-700">
                    Thank you {fullName}, your ticket has been reserved.<br />
                    We’ve sent a confirmation to your phone ({phone}).
                </p>
                <p className="mt-4 text-sm text-gray-500">*Mocked confirmation only</p>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Confirm Your Booking</h1>

            {/* Route Summary (Mocked) */}
            <div className="mb-6 border p-4 rounded shadow">
                <p className="font-semibold">From: <span className="text-blue-700">Kigali</span></p>
                <p className="font-semibold">To: <span className="text-blue-700">Huye</span></p>
                <p className="text-sm text-gray-600">Departure: 10:30 AM | Bus: Volcano Express</p>
            </div>

            {/* Form */}
            <div className="space-y-4">
                <select
                    value={seat}
                    onChange={(e) => setSeat(e.target.value)}
                    className="w-full border px-4 py-2 rounded"
                >
                    <option value="">Select a Seat</option>
                    {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={`Seat ${i + 1}`}>
                            Seat {i + 1}
                        </option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border px-4 py-2 rounded"
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border px-4 py-2 rounded"
                />

                <button
                    onClick={handleBooking}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Book Ticket
                </button>
            </div>
        </div>
    );
}
