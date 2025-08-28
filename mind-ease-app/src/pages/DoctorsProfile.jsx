import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import doctors from "../mockData.json";

const DoctorProfile = () => {
    const { id } = useParams();
    const doctor = doctorsData.doctors.find((doc) => String(doc.id) === id);
    const navigate = useNavigate();

    if (!doctor) {
        return <div className="bg-gradient-to-br from-[#A9ACB6] via-[#E2BB7B] to-[#BEC3C6] text-center mt-10">Doctor not found.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-[#A9ACB6] via-[#E2BB7B] to-[#BEC3C6] rounded-lg shadow-lg mt-10">
            <NavBar />
            <div className="left-1/2 justify-center">
                <div>
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
                <h2 className="text-3xl text-[#3B4F7A] font-extrabold text-center mb-2">{doctor.name}</h2>
                <p className="text-center text-[#3B4F7A] font-bold mb-4">{doctor.specialty}</p>
                <p className="text-center text-[#3B4F7A] font-bold mb-4">{doctor.experience} of experience</p>
                <p className="text-center text-[#3B4F7A] font-bold mb-4">{doctor.price}</p>
                <p className="mb-4">{doctor.about}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
                <div className="mb-2"><strong>Location:</strong> {doctor.location}</div>
                <div className="mb-2"><strong>Languages:</strong> {doctor.languages.join(", ")}</div>
                <div className="mb-2"><strong>Education:</strong> {doctor.education.join(", ")}</div>
                <div className="mb-2"><strong>Rating:</strong> {doctor.rating} ({doctor.reviewCount} reviews)</div>
            </div>
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
                    size="lg"
                    onClick={() => navigate('/Chat')}
                >
                    Chat
                </Button>
            </div>

        </div>
    );
};

export default DoctorProfile;