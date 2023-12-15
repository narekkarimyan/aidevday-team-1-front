// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WeatherForm from './WeatherForm';
import WeatherDashboard from './WeatherDashboard';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
