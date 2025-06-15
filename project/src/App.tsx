import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnersCarousel from './components/PartnersCarousel';
import TestimonialSection from './components/TestimonialSection';
import ServiceGrid from './components/ServiceGrid';
import UniqueAngles from './components/UniqueAngles';
import TeamSection from './components/TeamSection';
import ConsultForm from './components/ConsultForm';
import BlogPosts from './components/BlogPosts';
import FAQAccordion from './components/FAQAccordion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0f1c16]">
      <Navbar />
      <HeroSection />
      <PartnersCarousel />
      <TestimonialSection />
      <ServiceGrid />
      <UniqueAngles />
      <PartnersCarousel />
      <TeamSection />
      <ConsultForm />
      <BlogPosts />
      <FAQAccordion />
      <Footer />
    </div>
  );
}

export default App;