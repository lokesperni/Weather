🌤 Weather App

A modern and responsive weather application built with React Hooks and the OpenWeather API. The app allows users to search for any city and view the current weather conditions with a beautiful, dark/light themed UI.

Features

• Search weather by city name

• Toggle between °C (Metric) and °F (Imperial)

• Dark/Light mode toggle

• Display weather details:

• Temperature

• Weather condition

• Wind speed

• Humidity

• styling using App.css

• Real-time updates using React Hooks (useState)

Screenshots: Light Mode , Dark Mode

Technologies Used

• React (Functional Components & Hooks)

• OpenWeather API for weather data

• CSS for styling

• JavaScript ES6+

• Optional: Vercel for deployment 

Clone the repository: git clone https://github.com/

Navigate to the project directory: cd weather-app

Install dependencies: npm install

Start the development server: npm run dev

API Setup

Replace the API_KEY in App.jsx:

const API_KEY = "YOUR_API_KEY_HERE";

Project Structure
weather-app/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md