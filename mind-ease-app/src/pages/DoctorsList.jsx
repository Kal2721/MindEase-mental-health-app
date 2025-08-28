import React from "react";
import doctors from "../mockData.json";
import DoctorCard from "../components/ui/DoctorCard";

const DoctorsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorsList;
