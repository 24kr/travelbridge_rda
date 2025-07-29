// src/app/page.tsx
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Steps from "@/components/Steps";
import PopularRoutes from "@/components/PopularRoutes";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SearchBar />
      <Steps />
      <PopularRoutes />
      <Footer />
    </main>
  );
}
