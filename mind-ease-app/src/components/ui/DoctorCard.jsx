import { useNavigate } from "react-router-dom";
import Button from "./Button";
import PropTypes from 'prop-types';

const DoctorCard = ({ doctor }) => {
	const navigate = useNavigate();

	return (
		<div className="max-w-xs rounded-2xl shadow-lg bg-white relative">
			<div className="h-32 bg-[#A9ACB6]"></div>

			<div className="absolute top-16 left-1/2 transform -translate-x-1/2">
				<div className="relative">
					<img
						className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
						src={doctor.image}
						alt={doctor.name}
					/>
				</div>
			</div>

			<div className="pt-20 pb-6 px-6 text-center">
				<h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
				<p className="text-sm text-gray-500">{doctor.specialty} • {doctor.experience} of experience</p>


				<div className="flex justify-center items-center mt-2 space-x-1 text-yellow-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 24 24"
						className="w-5 h-5"
						aria-hidden="true"
					>
						<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
					</svg>
					<span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
				</div>

				<p className="mt-2 text-sm text-gray-600">📍 {doctor.location}</p>

				<p className="mt-1 text-base font-semibold text-green-600">{doctor.price}</p>

				<div className="mt-4 flex justify-center gap-3">
					<Button
						variant="primary"
						size="small"
						onClick={() => navigate()}
					>
						Book
					</Button>
					<Button
						variant="primary"
						size="small"
						onClick={() => navigate()}
					>
						Chat
					</Button>
					<Button
						variant="primary"
						size="small"
						onClick={() => navigate()}
					>
						Profile
					</Button>
				</div>
			</div>
		</div>
	);
};

DoctorCard.propTypes = {
	doctor: PropTypes.shape({
		name: PropTypes.string,
		specialty: PropTypes.string,
		experience: PropTypes.string,
		rating: PropTypes.number,
		location: PropTypes.string,
		price: PropTypes.string,
		image: PropTypes.string,
	}).isRequired,
};

export default DoctorCard;