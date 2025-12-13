import React from "react";
import ProfileDescription from "../components/ProfileDescription";
import ProfileImage from "../components/ProfileImage";
import TechnologiesSection from "../components/TechnologiesSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <div className="container mx-auto px-6 pt-24 pb-20 relative z-10">
      <div className="profile-section mt-4 md:mt-10 mb-12">
        <ProfileDescription />
        <ProfileImage />
      </div>

      <div className="space-y-0">
        <TechnologiesSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <ServicesSection />
      </div>
    </div>
  );
};

export default Home;
