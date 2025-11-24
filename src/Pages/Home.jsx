import React from "react";
import HomeHero from "../Components/HomeHero";
import FeaturedProperty from "../Components/FeaturedProperty";
import SatisfactionSection from "../Components/SatisfactionSection ";
import Testimonial from './../Components/Testimonial';
import CommercialProperty from './../Components/CommercialProperty';
import ContactHero from './../Components/ContactHero';
import AllCity from "../Components/AllCity";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <HomeHero></HomeHero>
      <FeaturedProperty />
      <SatisfactionSection />
      <Testimonial />
      <CommercialProperty />
      <ContactHero />
      <AllCity />
    </div>
  );
};

export default Home;
