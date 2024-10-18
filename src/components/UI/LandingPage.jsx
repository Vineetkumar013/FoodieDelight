import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
