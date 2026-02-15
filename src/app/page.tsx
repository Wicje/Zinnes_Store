import Navbar from "@/modules/layout/Navbar";
import Hero from "@/modules/home/sections/Hero";
import Features from "@/modules/home/sections/Features";
import Showcase from "@/modules/home/sections/Showcase";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
      </main>
    </>
  );
}
