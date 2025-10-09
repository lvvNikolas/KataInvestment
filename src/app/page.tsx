import NavBar from "@/components/nav/NavBar";
import VideoHero from "@/components/hero/VideoHero";
import About from "@/components/sections/About";
import Strategies from "@/components/sections/Strategies";
import Portfolio from "@/components/sections/Portfolio";
import Insights from "@/components/sections/Insights";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="top">
      {/* Global navigation */}
      <NavBar />

      {/* Hero section with background video */}
      <VideoHero />

      {/* Main content sections */}
      <About />
      <Strategies />
      <Portfolio />
      <Insights />
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}