import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import doctorsData from "../mockData.json";


const DoctorProfile = () => {
    const { id } = useParams();
    const doctor = doctorsData.doctors.find((doc) => String(doc.id) === id);
    const navigate = useNavigate();

    const educationArray = doctor.education;

    if (!doctor) {
        return <div className="bg-gradient-to-br from-[#A9ACB6] via-[#E2BB7B] to-[#BEC3C6] text-center mt-10">Doctor not found.</div>;
    }

    return (
        <div className="min-h-screen mx-auto p-6 bg-gradient-to-br from-[#A9ACB6] via-[#E2BB7B] to-[#BEC3C6] rounded-lg shadow-lg mt-10">
            <NavBar />
            <div className="max-w-4xl mx-auto p-6 mt-16 bg-white/80 rounded-2xl shadow-lg backdrop-blur">
                {/* Profile Header */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-36 h-36 rounded-full border-4 border-[#3B4F7A] shadow-md mb-4 object-cover"
                    />
                    <h2 className="text-3xl text-[#3B4F7A] font-extrabold">
                        {doctor.name}
                    </h2>
                    <p className="text-lg text-gray-700 font-medium">{doctor.specialty}</p>
                    <p className="text-sm text-gray-600">
                        ⭐ {doctor.rating} ({doctor.reviewCount} reviews)
                    </p>
                </div>

                {/* About */}
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-[#3B4F7A] mb-2">About</h3>
                    <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
                </div>

                {/* Details */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-xl shadow">
                        <strong className="block text-[#3B4F7A]">Experience</strong>
                        <p>{doctor.experience}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl shadow">
                        <strong className="block text-[#3B4F7A]">Price</strong>
                        <p>{doctor.price}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl shadow">
                        <strong className="block text-[#3B4F7A]">Location</strong>
                        <p>{doctor.location}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl shadow">
                        <strong className="block text-[#3B4F7A]">Languages</strong>
                        <p>{doctor.languages.join(", ")}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl shadow sm:col-span-2">
                        <strong className="block text-[#3B4F7A]">Education</strong>
                        <ul className="list-disc list-inside text-gray-700">
                            {educationArray.map((edu, index) => (
                                <li key={index}>{edu}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Availability */}
                {doctor.available && (
                    <div className="mt-6">
                        <h3 className="text-xl font-bold text-[#3B4F7A] mb-2">
                            Availability
                        </h3>
                        <div className="space-y-3">
                            {doctor.available.map((slot, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-4 rounded-xl shadow flex justify-between items-center"
                                >
                                    <span className="font-medium text-gray-800">{slot.date}</span>
                                    <div className="flex gap-2 flex-wrap">
                                        {slot.times.map((time, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-sm bg-[#3B4F7A] text-white rounded-full shadow"
                                            >
                                                {time}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {/* Call to Action  */}
                <div className="mt-4 flex justify-center gap-3">
                    <Button
                        variant="primary"
                        size="default"
                        onClick={() => navigate(`/appointment/${doctor.id}`)}
                    >
                        Book
                    </Button>
                    <Button
                        variant="primary"
                        size="default"
                        onClick={() => navigate('/Chat')}
                    >
                        Chat
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default DoctorProfile;