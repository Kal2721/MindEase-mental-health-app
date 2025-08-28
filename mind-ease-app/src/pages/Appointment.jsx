import React, { useState } from 'react';
import NavBar from '../components/NavBar'

const Appointment = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Appointment booked!');
        // You can add further logic here
    };

    return (
        <div>
            <NavBar />
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Book Appointment</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full p-2 border rounded"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="w-full p-2 border rounded"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="w-full p-2 border rounded"
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="w-full p-2 border rounded"
                        type="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                    />
                    <button
                        className="w-full bg-blue-600 text-white py-2 rounded font-semibold"
                        type="submit"
                    >
                        Book Appointment
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Appointment;
