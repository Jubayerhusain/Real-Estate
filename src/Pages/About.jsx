import React from "react";
import AboutHero from "./../Components/About/AboutHero";
import AdviceSection from "./../Components/About/AdviceSecton";
import ClientsSuccess from "./../Components/About/ClientsSuccess";
import DiscoverFeatured from "../Components/About/DiscoverFeatured";
import AgentsSection from "./../Components/About/AgentsSection";
import PersonalizedSection from "../Components/About/PersonalizedEstate";
import BlogNews from './../Components/Shared/BlogNews';

const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <AboutHero />
      <AdviceSection />
      <ClientsSuccess />
      <DiscoverFeatured />
      <AgentsSection />
      <PersonalizedSection />
      <BlogNews />
    </div>
  );
};

export default About;
