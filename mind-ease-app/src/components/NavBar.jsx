import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
	const location = useLocation();
	const isWelcomePage = location.pathname === "/";

	return (
		<div style={{ backgroundImage: "url(/../assets/images/image7.jgp')" }}  className="bg-cover bg-center w-full">
			<nav className="fixed top-0 left-0 w-full shadow-md px-6 py-4 flex justify-between items-center z-50">
				<div className="text-xl font-bold text-gray-600">MindEase</div>
				<div className="flex space-x-6">
					{isWelcomePage ? (
						<div>
							<Link to="/login" className="text-gray-700 hover:text-blue-600 transition">Login</Link>
							<Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">Sign Up</Link>
						</div>
					) : (
						<div>
							<Link to="/home" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
							<Link to="/doctors-list" className="text-gray-700 hover:text-blue-600 transition">Doctors and Psychiatrists</Link>
						</div>
					)}
				</div>
			</nav>
		</div>
	)
}

export default NavBar;
