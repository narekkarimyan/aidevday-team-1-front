// App.js
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import WeatherForm from './WeatherForm';
import WeatherDashboard from './WeatherDashboard';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import {Home} from "./Home"; // Import the LoginForm component


 function App() {
    const [userData, setUser] = useState(null);


    if (!userData) {
        return (<Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>

                    </ul>
                </nav>
                <Routes>
                    <Route path="/register" element={<RegistrationForm/>}/>
                    {/* Add a new route for the LoginForm */}
                    <Route path="/" element={<LoginForm/>}/>
                </Routes>
            </div>
        </Router>);

    }

    return (
        <div className="main">
            <Router>
                <Home/>
            </Router>
        </div>
    );
}

export default App