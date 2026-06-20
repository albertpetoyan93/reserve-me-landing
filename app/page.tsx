import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import CTATextian from "./components/CTATextian";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ReserveMe - Smart Reservation Management",
  description:
    "Streamline your business reservations with ReserveMe. Modern, minimalist reservation management platform for restaurants, salons, clinics, and more.",
  keywords:
    "reservation system, booking management, appointment scheduling, table booking",
  openGraph: {
    title: "ReserveMe - Smart Reservation Management",
    description:
      "Modern minimalist reservation management platform for your business",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CTATextian />
      <Footer />
    </div>
  );
}
