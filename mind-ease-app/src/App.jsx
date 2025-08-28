import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Button from './components/ui/Button'
import NavBar from './components/NavBar'
import Home from "./pages/Home"
import DoctorsList from "./pages/DoctorsList"
import DoctorsProfile from "./pages/DoctorsProfile"
import ChatBot from "./pages/ChatBot"
import Appointment from "./pages/Appointment"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import WelcomePage from "./pages/WelcomePage"
import About from "./pages/About"
import './index.css'

function App() {
	return (
		<div>
			<Router>
				<div className="pt-20 px-6">
					<Routes>
						<Route path="/" element={<WelcomePage />} />
						<Route path="/home" element={<Home />} />
						<Route path="/doctors-list" element={<DoctorsList />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/appointment" element={<Appointment />} />
						<Route path="/doctors-profile/:id" element={<DoctorsProfile />} />
						<Route path="/Chat" element={<ChatBot />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
			</Router>
		</div>
	)
}

export default App
