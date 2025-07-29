// src/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white text-center p-6 mt-10">
            <p>&copy; {new Date().getFullYear()} TravelBridge Rwanda. All rights reserved.</p>
        </footer>
    );
}
