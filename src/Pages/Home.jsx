import React from "react";
import HomeHero from "../Components/Home/HomeHero";
import FeaturedProperty from "../Components/Home/FeaturedProperty";
import SatisfactionSection from "../Components/Home/SatisfactionSection ";
import Testimonial from '../Components/Home/Testimonial';
import CommercialProperty from '../Components/Home/CommercialProperty';
import ContactHero from '../Components/Home/ContactHero';
import AllCity from "../Components/Home/AllCity";

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
