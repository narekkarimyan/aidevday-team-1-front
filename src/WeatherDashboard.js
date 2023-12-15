// WeatherDashboard.js
import React, { useEffect, useState } from 'react';
import './WeatherDashboard.css';
import WebSocketClient from "./WebsocketClient"; // Import the CSS file for WeatherDashboard

function WeatherDashboard({ userPreferences }) {
	const [weatherData, setWeatherData] = useState([]);

	useEffect(() => {
		// Simulating fetching weather data based on user preferences
		const fetchWeatherData = async () => {
			// In a real application, you would make an API call here
			// For demo purposes, let's use static data
			const demoWeatherData = [
				{ currentTemperature: 25, forecast: 'Sunny' },
				{ currentTemperature: 15, forecast: 'Partly Cloudy' },
				// Add more demo data as needed
			];

			setWeatherData(demoWeatherData);
		};

		fetchWeatherData();
	}, [userPreferences]);

	return (
		<div className="weather-dashboard-container">
			<h2>Weather Dashboard</h2>
			{/* Display weather information based on userPreferences */}
			{userPreferences.map((preference, index) => (
				<div key={index} className="destination-card">
					<p className="destination-info">Destination: {preference.destination}</p>
					<p className="destination-info">Start Date: {preference.travelDate}</p>
					<p className="destination-info">End Date: {preference.endTravelDate}</p>
					{/* Display demo weather data for each destination */}
					{weatherData[index] && (
						<div className="weather-info">
							<p>Current Temperature: {weatherData[index].currentTemperature}°C</p>
							<p>Forecast: {weatherData[index].forecast}</p>
							{/* Add more demo weather information as needed */}
						</div>
					)}
				</div>
			))}
			<WebSocketClient />
		</div>
	);
}

export default WeatherDashboard;
