import { useState } from 'react'
import Button from './components/Button'
import NavBar from './components/NavBar'
import './App.css'
import './index.css'

function App() {
  return (
    <>
	  <Router>
	  	<NavBar />
	  	<div className="pt-20 px-6">
	  		<Routes>
	  			<Route path="/" element={<Welcome />} />
	  			<Route path="/home" element={<Home />} />
	  			<Route path="/doctors-list" element={<DoctorsList />} />
	  			<Route path="/login" element={<Login />} />
	  			<Route path="/signup" element={<SignUp />} />
			</Routes>
	  	</div>
	  </Router>
    </>
  )
}

export default App
