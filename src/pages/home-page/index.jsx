import React from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="transparent" />
      <main id="main-content" className="flex-grow">
        <HeroSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;