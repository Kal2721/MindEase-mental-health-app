import React from "react";

const Button = ({ children, variant = "default", size = "default", className ="", ...props }) => {
	const variants = {
		default: "inline-flex items-center justify-center px-5 py-3 rounded-md shadow-md transition active:scale-95",
		primary: "inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#1D3557] text-white hover:bg-blue-700",
		secondary: "inline-flex items-center justify-center px-5 py-3 rounded-md shadow-md transition active:scale-95 bg-yellow-300 text-gray-800 hover: bg-yellow-400"
	}

	const sizes = {
		small: "h-8 px-3 py-1 text-sm rounded-md",
		default: "h-9 px-4 py-2 text-base rounded-md",
		large: "h-10 px-6 py-3 text-lg rounded-md",
	};

	return (
		<button
			className={`${variants[variant]} ${sizes[size]} font-medium transition ${className} {...props}`}
		>
		{children}
		</button>
	);
}

export default Button;
