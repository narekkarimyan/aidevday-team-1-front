// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WeatherForm from './WeatherForm';
import WeatherDashboard from './WeatherDashboard';
import RegistrationForm from './RegistrationForm'; // Import the RegistrationForm component

function App() {
  const [userPreferences, setUserPreferences] = useState([]);

  const updateUserPreferences = (newPreferences) => {
    setUserPreferences(newPreferences);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<WeatherForm userPreferences={userPreferences} updateUserPreferences={updateUserPreferences} />}
          />
          <Route
            path="/dashboard"
            element={<WeatherDashboard userPreferences={userPreferences} />}
          />
          {/* Add a new route for the RegistrationForm */}
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
