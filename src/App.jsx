import React from "react";
import Navbar from "./components/Navbar";
import ProfileDescription from "./components/ProfileDescription";
import ProfileImage from "./components/ProfileImage";
import TechnologiesSection from "./components/TechnologiesSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Navbar />

      <main className="container mx-auto px-6 pt-24 pb-20 relative z-10">
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
      </main>
    </div>
  );
}

export default App;
