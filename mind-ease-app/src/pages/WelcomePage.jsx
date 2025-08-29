import React from "react";
import { useNavigate } from "react-router-dom"
import Button from "./../components/ui/Button"
import image9 from "./../assets/Images/image15.jpg"

const WelcomePage = () => {
	const navigate = useNavigate();

	return (
		<div style={{ backgroundImage: `url(${image9})` }} className="min-h-screen mt-0 bg-cover bg-center object-fit h-64">
			<header className="container mx-auto px-4 py-6 mt-0">
				<div className="flex items-center justify-between">
					<h1 className="text-center text-2xl font-bold text-[#1D3557]">MindEase</h1>
					<div className="flex gap-4">
						<Button variant="primary" size="small">Login</Button>
						<Button variant="primary" size="small">Sign Up</Button>
					</div>
				</div>
			</header>

			<main className="container mt-0 pt-20 px-4 py-12 text-center">
				<div className="flext items-center justify-center max-w-4xl mx-auto">
					<h1 className="text-xl text-center lg:text-6xl sm:text-4xl font-bold text-black-600 mb-6">MindEase Mental Health App</h1>

					<p className="text-xl text-black-600 mb-8 max-w-2xl mx-auto">Connect with licensed mental health professionals from the comfort of your home. Get the support you deserve with secure, confidential and personalized care.</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
						<Button variant="primary" size="lg" className="px-8 py-4 text-lg" onClick={() => {
							console.log("Button clicked")
							navigate("/home")
						}}
						>
							Get Started Today
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}

export default WelcomePage;
