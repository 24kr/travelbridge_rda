// src/components/Steps.tsx
export default function Steps() {
    const steps = [
        { id: 1, title: "Search", desc: "Find available routes, buses, and schedules in seconds." },
        { id: 2, title: "Book", desc: "Reserve your seat instantly — no registration needed." },
        { id: 3, title: "Travel", desc: "Get your digital ticket via SMS or email and hop on board." },
    ];

    return (
        <section className="py-16 px-6 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-10 text-zinc-600">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
                {steps.map(step => (
                    <div key={step.id} className="bg-white p-6 shadow rounded w-full md:w-1/3">
                        <div className="text-4xl font-bold text-blue-600 mb-4">{step.id}</div>
                        <h3 className="text-xl font-semibold mb-2 text-zinc-600">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
