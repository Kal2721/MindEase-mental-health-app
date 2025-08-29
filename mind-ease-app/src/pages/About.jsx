import React from 'react'
import NavBar from '../components/NavBar'
import Button from '../components/ui/Button'
import image11 from '../assets/images/image8.jpg'

const About = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen bg-gray-200 px-6 py-12">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-8">About MindEase</h1>
                <p className="mt-4 text-lg text-center text-gray-600">Your trusted companion for mental wellness and professional support.</p>
                <div className="max-w-5xl mx-auto mt-12 grid md:gri-col-2 gap-8 items-center">
                    <div className="m-6 md:mb-0">
                        <img
                            src={image11}
                            alt="MindEase Mission"
                            className="rounded-xl shadow-lg w-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-6">At <span className="font-semibold">MindEase</span>, our Mission is to make mental health more accessible, supportive, and personalized. We connect patients with licensend psychiatrists and psychologists through a safe and easy-to-use platform. Whether you need a quick chat or a scheduled session, we're here to support your journey toward emotional well-being.</p>
                    </div>
                </div>
                {/* Value Section */}
                <div className="max-w-5xl mx-auto mt-16 text-center">
                    <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-[#1D3557] mb-2">Accessibility</h3>
                            <p className="text-gray-600">Mental health support should be available to everyone, anytime, anywhere.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-[#1D3557] mb-2">Confidentiality</h3>
                            <p className="text-gray-600">Your privacy is our priority. We ensure all interactions are secure and confidential.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-[#1D3557] mb-2">Empathy</h3>
                            <p className="text-gray-600">We foster a supportive environment where you can feel heard, understood, and valued.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-[#1D3557] mb-2">Compassion</h3>
                            <p className="text-gray-600">We create a safe, non-judgmental space for patient and providers to connect.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-[#1D3557] mb-2">Professionalism</h3>
                            <p className="text-gray-600">Every doctor on MindEase is verified, qualified, and committed to high-quality care.</p>
                        </div>
                    </div>
                </div>
                {/* Call to Action */}
                <div className="max-w-3xl mx-auto mt-16 text-center">
                    <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">Why choose MindEase?</h2>
                    <p className="text-gray-700 mb-6">Because your mental well-being matters. MindEase combines modern technology with compassionate care to help you feel supported at every step. From first-time consultations to ongoing therapy, we make it easy to connect with trusted professionals.</p>
                    <Button variant="primary" size="lg" className="px-8 py-4 text-lg" onClick={() => {
                        console.log("Button clicked")
                        navigate("/home")
                    }}
                    >
                        Get Started Today
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default About;