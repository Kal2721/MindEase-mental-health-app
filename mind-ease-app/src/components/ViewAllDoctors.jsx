import { Link } from "react-router-dom";

const ViewAllDoctors = () => {
    return (
        <div className="mx-auto max-w-lg my-10 px-6 text-center">
            <Link to="/doctors-list" className="inline-block bg-gray-300 font-bold text-[#1D3557] text-center rounded-xl hover:bg-gray-700 hover:text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300">
                View All Doctors
            </Link>
        </div>
    );
}
export default ViewAllDoctors;