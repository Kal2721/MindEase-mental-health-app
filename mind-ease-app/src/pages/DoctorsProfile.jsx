import React from "react";
import { useParams } from "react-router-dom";
import doctorsData from "../mockData.json";

const DoctorProfile = () => {
    const { id } = useParams();
    const doctor = doctorsData.doctors.find((doc) => String(doc.id) === id);


    if (!doctor) {
        return <div className="text-center mt-10">Doctor not found.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
            <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200"
            />
            <h2 className="text-3xl font-bold text-center mb-2">{doctor.name}</h2>
            <p className="text-center text-gray-600 mb-4">{doctor.specialty}</p>
            <p className="text-center text-gray-500 mb-4">{doctor.experience} of experience</p>
            <p className="text-center text-green-600 font-semibold mb-4">{doctor.price}</p>
            <p className="mb-4">{doctor.about}</p>
            <div className="mb-2"><strong>Location:</strong> {doctor.location}</div>
            <div className="mb-2"><strong>Languages:</strong> {doctor.languages.join(", ")}</div>
            <div className="mb-2"><strong>Education:</strong> {doctor.education.join(", ")}</div>
            <div className="mb-2"><strong>Rating:</strong> {doctor.rating} ({doctor.reviewCount} reviews)</div>
            {/* Add more details as needed */}
        </div>
    );
};

export default DoctorProfile;