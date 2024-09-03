import React from "react";
import HeroSection from "./landingpage/Hero";
import FeaturesSection from "./landingpage/FeaturesSection";
import CollaborateSection from "./landingpage/CollaborateSection";
import TestimonialsSection from "./landingpage/TestimonialsSection";
import CTASection from "./landingpage/CTASection";
import Footer from "./landingpage/Footer";
import Header from "./landingpage/Header";
import Clients from "./landingpage/Clients";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Clients />
      <FeaturesSection />
      <CollaborateSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
