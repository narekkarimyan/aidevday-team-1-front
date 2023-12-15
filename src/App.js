// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WeatherForm from './WeatherForm';
import WeatherDashboard from './WeatherDashboard';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm'; // Import the LoginForm component

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
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <div className="main">
          <Routes>
            <Route
              path="/"
              element={<WeatherForm userPreferences={userPreferences} updateUserPreferences={updateUserPreferences} />}
            />
            <Route
              path="/dashboard"
              element={<WeatherDashboard userPreferences={userPreferences} />}
            />
            <Route path="/register" element={<RegistrationForm />} />
            {/* Add a new route for the LoginForm */}
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
