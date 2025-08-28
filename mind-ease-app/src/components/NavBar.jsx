import React from "react";
import image15 from "./../assets/Images/image15.jpg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="bg-cover bg-center w-full">
			<nav className="bg-gradient-to-br from-[#A9ACB6] via-[#E2BB7B] to-[#BEC3C6] fixed top-0 left-0 bg-cover bg-center w-full shadow-md px-6 py-4 flex justify-center items-center">
				<div className="flex space-x-6">
					<NavLink
						to="/home"
						className={({ isActive }) => `hover:text-[#3B4F7A] transition ${isActive ? "text-[#3B4F7A] font-bold" : "text-[#3B4F7A] font-semibold"}`}
					>
						Home
					</NavLink>

					<NavLink
						to="/doctors-list"
						className={({ isActive }) => `hover:text-[#3B4F7A] transition ${isActive ? "text-[#3B4F7A] font-bold" : "text-[#3B4F7A] font-semibold"}`}
					>
						Doctors and Psychiatrists
					</NavLink>
					<NavLink
						to="/appointment"
						className={({ isActive }) => `hover:text-[#3B4F7A] transition ${isActive ? "text-[#3B4F7A] font-bold" : "text-[#3B4F7A] font-semibold"}`}
					>
						Appointment
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) => `hover:text-[#3B4F7A] transition ${isActive ? "text-[#3B4F7A] font-bold" : "text-[#3B4F7A] font-semibold"}`}
					>
						About
					</NavLink>
				</div>
			</nav>
		</div>
	)
}

export default NavBar;
