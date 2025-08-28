import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import DoctorsList from "./Doctorslist";

const Home = () => {
  return (
    <div className="text-center py-10">
      	<NavBar />
	  <HeroSection />
	  <DoctorList />
    </div>
  );
};

export default Home;
