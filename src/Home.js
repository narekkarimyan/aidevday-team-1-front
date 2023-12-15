import {Link, Route, Routes} from "react-router-dom";
import WeatherForm from "./WeatherForm";
import WeatherDashboard from "./WeatherDashboard";
import React, {useState} from "react";

export const Home = (props) => {
    const [userPreferences, setUserPreferences] = useState([]);

    const updateUserPreferences = (newPreferences) => {
        setUserPreferences(newPreferences);
    };

    return (
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

            <div className="main">
                <Routes>
                    <Route
                        path="/"
                        element={<WeatherForm userPreferences={userPreferences}
                                              updateUserPreferences={updateUserPreferences}/>}
                    />
                    <Route
                        path="/dashboard"
                        element={<WeatherDashboard userPreferences={userPreferences}/>}
                    />
                </Routes>
            </div>
        </div>
    );
}
