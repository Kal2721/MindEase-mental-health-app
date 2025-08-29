import React from "react";
import NavBar from '../components/NavBar'
import doctorsData from "../mockData.json";
import image15 from '../assets/images/image15.jpg';
import DoctorCard from "../components/ui/DoctorCard";

const DoctorsList = ({ isHome = false }) => {
  const doctors = isHome
    ? doctorsData.doctors.slice(0, 3)
    : doctorsData.doctors;

  return (
    <div className="overflow-hidden mt-16">
      {!isHome && <NavBar />}
      <div style={{ backgroundImage: `url(${image15})` }} className="bg-center justify-center align-center h-24 w-full rounded-lg shadow-md mb-8 text-center flex items-center p-6">
        <h1 className="text-4xl font-bold mb-6 text-[#1D3557] #col-span-full">Available Doctors</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:justify-between sm:items-center">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
