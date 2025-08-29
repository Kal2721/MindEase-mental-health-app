🧘 MindEase – Mental Health Support App

MindEase is a mental health platform designed to connect patients with psychiatrists and psychologists. It provides a safe space where patients can browse available doctors, chat online, or book appointments for in-person consultations.


🌟 Features

Welcome Page → friendly introduction to the app

Home Page → browse all doctors with interactive doctor cards

Doctor Detail Page → doctor’s bio, specialty, rating, reviews, and experience

Chatbot Modal → patients can start a conversation with a doctor

Booking Modal → schedule a consultation with date & time

About Page → learn about MindEase’s mission and values

Responsive UI → mobile-first design built with TailwindCSS


🛠️ Tech Stack

Frontend: React, TailwindCSS

UI/UX Design: Figma

Authentication (planned): Firebase Auth / Clerk

APIs (planned):

ZEGOCLOUD → real-time chat & video consultations

Mock REST API (JSON-Server / MockAPI.io) → doctor & appointment data


Deployment: Vercel / Netlify


📂 Project Structure

MindEase/
 ├── public/                # Static assets  
 ├── src/  
 │   ├── components/        # Reusable UI components (DoctorCard, Button, Modal, etc.)  
 │   ├── pages/             # Welcome, Home, Doctor Detail, About, etc.  
 │   ├── data/              # Mock doctor data (JSON)  
 │   ├── App.jsx            # Routing setup  
 │   └── index.js           # Entry point  
 ├── tailwind.config.js     # Tailwind setup  
 ├── package.json           # Dependencies  
 └── README.md              # Project info


🚀 Getting Started

1. Clone the repo

git clone https://github.com/your-username/mindease.git
cd mindease

2. Install dependencies

npm install

3. Start the development server

npm run dev

4. Build for production

npm run build


🧑‍⚕️ Mock Doctor Data Example

{
  "id": 1,
  "name": "Dr. Sarah Johnson",
  "specialty": "Clinical Psychologist",
  "rating": 4.9,
  "reviews": 128,
  "experience": "10 years",
  "available": ["Mon 10:00 AM", "Wed 2:00 PM"],
  "price": "$50/hr",
  "languages": ["English", "Spanish"],
  "education": "PhD in Clinical Psychology - Harvard University",
  "location": "New York, USA"
}

📅 Development Roadmap

[x] Welcome Page

[x] Home Page with Doctor Cards

[x] Doctor Detail Page

[x] Appointment Form

[ ] Chatbot & Booking Modal Integration

[ ] API Integration (ZEGOCLOUD, Firebase)

[ ] Deployment


📖 About MindEase

MindEase’s mission is to make mental healthcare accessible, supportive, and professional. By combining modern technology with compassionate care, we aim to create a safe space for patients to connect with trusted professionals.


🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change