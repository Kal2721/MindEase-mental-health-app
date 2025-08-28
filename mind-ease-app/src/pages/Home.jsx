import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import DoctorsList from "./DoctorsList";
import ViewAllDoctors from "../components/ViewAllDoctors";

const Home = () => {
  return (
    <div className="text-center">
      <NavBar />
      <div className="bg-gray-200 h-full pb-10">
        <HeroSection />
        <DoctorsList isHome={true} />
        <ViewAllDoctors />
      </div>
    </div>
  );
};

export default Home;
