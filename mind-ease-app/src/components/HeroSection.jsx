import React from "react";
import HeroCard from "./ui/HeroCard";
import image15 from "../assets/Images/image15.jpg";

const HeroSection = ({
	title = "Your Safe Space for Mental Well-being",
	subtitle = "Connect with psychiatrists and psychologists . Book visits or start a supportive chat-confidential and convenient.",
}) => {
	return (
		<>
			<section style={{ backgroundImage: `url(${image15})` }} className="py-20 mt-0 mb-8 bg-cover bg-center w-full">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
					<div className="text-center">
						<h1 className="text-4xl font-extrabold text-[#1D3557] sm:text-5xl md:text-6xl">{title}</h1>
						<p className="my-4 text-xl text-white">{subtitle}</p>
					</div>
				</div>
			</section>
			<HeroCard />
		</>
	);
};

export default HeroSection;

