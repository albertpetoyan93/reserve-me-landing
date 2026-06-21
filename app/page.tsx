import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import FeaturesSection2 from "./components/FeaturesSection2";
import CTATextian from "./components/CTATextian";
import PremiumAppSelection from "./components/PremiumAppSelection";
import ContactSection from "./components/ContactUsSection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ReserveMe - Smart Reservation Management",
  description:
    "Choose your world with ReserveMe. Select either the Restaurant App for managing your business, or the Client App for discovering and booking amazing dining experiences.",
  keywords:
    "reservation system, booking management, restaurant management, customer app, dining experience",
  openGraph: {
    title: "ReserveMe - Smart Reservation Management",
    description:
      "Choose your world - Restaurant App for management, Client App for discovery",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <PremiumAppSelection />
      <FeaturesSection />
      <FeaturesSection2 />
      <CTATextian />
      <ContactSection />
      <Footer />
    </div>
  );
}
