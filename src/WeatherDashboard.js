// WeatherDashboard.js
import React from 'react';

function WeatherDashboard({ userPreferences }) {
	return (
		<div>
			<h2>Weather Dashboard</h2>
			{/* Display weather information based on userPreferences */}
			{userPreferences.map((preference, index) => (
				<div key={index}>
					<p>Destination: {preference.destination}</p>
					<p>Travel Date: {preference.travelDate}</p>
					{/* Fetch and display weather information from the backend */}
				</div>
			))}
		</div>
	);
}

export default WeatherDashboard;
