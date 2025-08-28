import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Button from './components/ui/Button'
import NavBar from './components/NavBar'
import Home from "./pages/Home"
import DoctorsList from "./pages/DoctorsList"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import WelcomePage from "./pages/WelcomePage"
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
        			</Routes>
    			</div>
		</Router>
	  </div>
  )
}

export default App
