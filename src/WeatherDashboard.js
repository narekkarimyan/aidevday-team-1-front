// WeatherDashboard.js
import React, { useEffect, useState } from 'react';

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
		<div>
			<h2>Weather Dashboard</h2>
			{/* Display weather information based on userPreferences */}
			{userPreferences.map((preference, index) => (
				<div key={index}>
					<p>Destination: {preference.destination}</p>
					<p>Start Date: {preference.travelDate}</p>
					<p>End Date: {preference.endTravelDate}</p>
					{/* Display demo weather data for each destination */}
					{weatherData[index] && (
						<div>
							<p>Current Temperature: {weatherData[index].currentTemperature}°C</p>
							<p>Forecast: {weatherData[index].forecast}</p>
							{/* Add more demo weather information as needed */}
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default WeatherDashboard;
