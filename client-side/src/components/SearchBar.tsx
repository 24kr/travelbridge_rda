// src/components/SearchBar.tsx
export default function SearchBar() {
    return (
        <div className="bg-white p-4 shadow-md rounded-md mt-[-2rem] mx-auto max-w-3xl">
            <form className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="From"
                    className="flex-1 border px-4 py-2 rounded placeholder-gray-500 border-gray-300"
                />
                <input
                    type="text"
                    placeholder="To"
                    className="flex-1 border px-4 py-2 rounded placeholder-gray-500 border-gray-300"
                />
                <input
                    type="date"
                    className="border px-4 py-2 rounded placeholder-gray-500 border-gray-300"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Search
                </button>
            </form>
        </div>
    );
}
