import { useState } from "react";

type Route = {
    from: string;
    to: string;
    departureTime: string;
    seatsAvailable: number;
    company: string;
};

const allRoutes: Route[] = [
    {
        from: "Kigali",
        to: "Huye",
        departureTime: "10:30 AM",
        seatsAvailable: 12,
        company: "Volcano Express",
    },
    {
        from: "Kigali",
        to: "Musanze",
        departureTime: "1:00 PM",
        seatsAvailable: 8,
        company: "RITCO",
    },
    {
        from: "Kigali",
        to: "Rubavu",
        departureTime: "3:15 PM",
        seatsAvailable: 5,
        company: "Royal Bus",
    },
];

export default function SearchPage() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const filtered = allRoutes.filter(
        (route) =>
            route.from.toLowerCase().includes(from.toLowerCase()) &&
            route.to.toLowerCase().includes(to.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Search Bus Routes</h1>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                <input
                    type="text"
                    placeholder="From"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="border px-4 py-2 rounded w-full md:w-1/4"
                />
                <input
                    type="text"
                    placeholder="To"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="border px-4 py-2 rounded w-full md:w-1/4"
                />
            </div>

            {/* Results */}
            <div className="grid gap-4 md:grid-cols-2">
                {filtered.length > 0 ? (
                    filtered.map((route, index) => (
                        <div
                            key={index}
                            className="border p-4 rounded shadow flex flex-col md:flex-row justify-between"
                        >
                            <div>
                                <p className="font-bold">{route.from} → {route.to}</p>
                                <p className="text-sm text-gray-600">Departs at {route.departureTime}</p>
                                <p className="text-sm text-gray-600">Seats left: {route.seatsAvailable}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                                <p className="text-sm text-gray-700">Bus: {route.company}</p>
                                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Book
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-2">No matching routes found.</p>
                )}
            </div>
        </div>
    );
}
