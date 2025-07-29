// src/components/PopularRoutes.tsx
const sampleRoutes = [
    { from: "Kigali", to: "Musanze", time: "2h 15m" },
    { from: "Kigali", to: "Huye", time: "2h 45m" },
    { from: "Kigali", to: "Rubavu", time: "3h 30m" },
];

export default function PopularRoutes() {
    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Popular Routes</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {sampleRoutes.map((route, index) => (
                    <div key={index} className="bg-white p-6 border shadow rounded">
                        <h3 className="text-xl font-semibold mb-2 text-zinc-600">{route.from} → {route.to}</h3>
                        <p className="text-gray-600">Approx. travel time: {route.time}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
