import React from "react";
import HeroSection from "./landingpage/Hero"; // Importing the HeroSection component
import FeaturesSection from "./landingpage/FeaturesSection"; // Importing the FeaturesSection component
import CollaborateSection from "./landingpage/CollaborateSection"; // Importing the CollaborateSection component
import TestimonialsSection from "./landingpage/TestimonialsSection"; // Importing the TestimonialsSection component
import CTASection from "./landingpage/CTASection"; // Importing the CTASection component
import Footer from "./landingpage/Footer"; // Importing the Footer component
import Header from "./landingpage/Header"; // Importing the Header component
import Clients from "./landingpage/Clients"; // Importing the Clients component

const Home = () => {
  return (
    <>
     {/* Rendering the Header component*/ }
      <Header /> 
     {/* Rendering the HeroSection component*/ }
      <HeroSection /> 
     {/* Rendering the Clients component*/ }
      <Clients /> 
     {/* Rendering the FeaturesSection component*/ }
      <FeaturesSection /> 
     {/* Rendering the CollaborateSection component*/ }
      <CollaborateSection /> 
     {/* Rendering the TestimonialsSection component*/ }
      <TestimonialsSection /> 
     {/* Rendering the CTASection component*/ }
      <CTASection /> 
     {/* Rendering the Footer component*/ }
      <Footer /> 
    </>
  );
};

export default Home; // Exporting the Home component as the default export
