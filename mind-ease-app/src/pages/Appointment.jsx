import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from './../components/ui/Button';
import NavBar from '../components/NavBar'
import doctorsData from '../mockData.json';

const Appointment = () => {
    const { doctorId } = useParams();

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        doctor: '',
        service: '',
        month: '',
        day: '',
        time: '',
        reason: '',
        terms: ''
    });

    // preselect doctor if doctorId exists
    useEffect(() => {
        if (doctorId) {
            const selectedDoctor = doctorsData.doctors.find(
                (doc) => String(doc.id) === doctorId
            );
            if (selectedDoctor) {
                setForm((prev) => ({ ...prev, doctor: selectedDoctor.name }));
            }
        }
    }, [doctorId]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Appointment booked with ${form.doctor}!`);
    };

    return (
        <div>
            <NavBar />
            <div className="bg-gradient-to-br from-[#A9ACB6] via-[#E2BB7B] to-[#BEC3C6] bg-cover bg-content min-h-screen flex items-center justify-center p-6">
                <div className="w-full max-w-2xl bg-gray-100 shadow-lg rounded-xl p-8">
                    {/* <!-- Title --> */}
                    <h2 className="text-2xl font-bold text-center text-[#3B4F7A] mb-2">Book Your Appointment</h2>
                    <p className="text-center text-gray-600 mb-6">Fill out the form below to schedule your consultation.</p>

                    <form onSubmit={handleSubmit} action="#" className="space-y-6">
                        {/* <!-- Patient Information --> */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#3B4F7A] mb-2">Patient Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3B4F7A] focus:outline-none"
                                />
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3B4F7A] focus:outline-none"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3 md:col-span-2 focus:ring-2 focus:ring-[#3B4F7A] focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* <!-- Doctor & Service --> */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#3B4F7A] mb-2">Doctor & Service Selection</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <select
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3B4F7A] focus:outline-none"
                                    name="doctor"
                                    value={form.doctor}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Doctor</option>
                                    {doctorsData.doctors.map((doc) => (
                                        <option key={doc.id} value={doc.name}>
                                            {doc.name}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3B4F7A] focus:outline-none"
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                >
                                    <option>Service Type</option>
                                    <option>General Consultation</option>
                                    <option>Therapy Session</option>
                                    <option>Follow-up</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Preferred Date & Time --> */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#3B4F7A] mb-2">Preferred Date & Time</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <select
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3B4F7A] focus:outline-none"
                                    name="month"
                                    value={form.month}
                                    onChange={handleChange}
                                >
                                    <option>Month</option>
                                    <option>August</option>
                                    <option>September</option>
                                </select>
                                <select
                                    name="day"
                                    value={form.day}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3B4F7A] focus:outline-none"
                                >
                                    <option>Day</option>
                                    <option>21</option>
                                    <option>22</option>
                                </select>
                                <select
                                    name="time"
                                    value={form.time}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3B4F7A] focus:outline-none">
                                    <option>Time</option>
                                    <option>9:00 AM</option>
                                    <option>2:00 PM</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Reason --> */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#3B4F7A] mb-2">Reason for Appointment</h3>
                            <textarea
                                placeholder="Briefly describe your reason for seeking an appointment (e.g., anxiety, stress management, therapy follow-up...)"
                                rows="4"
                                name='reason'
                                value={form.reason}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3B4F7A] focus:outline-none"></textarea>
                        </div>

                        {/* <!-- Terms --> */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="terms"
                                value={form.terms}
                                onChange={handleChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-[#3B4F7A]"
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-600"
                            >
                                I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a> and
                                <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
                            </label>
                        </div>

                        {/* <!-- Submit --> */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition"
                        >
                            Confirm Appointment
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;