// WeatherForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function WeatherForm({ updateUserPreferences }) {
	const [destination, setDestination] = useState('');
	const [travelDate, setTravelDate] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Make a request to your backend to save user preferences
			// but for now, use a fake response
			const response =  {
				data: {
					preferences: {
						destination,
						travelDate,
					},
				},
			};

			updateUserPreferences([response.data.preferences]);
			navigate('/dashboard'); // Navigate to the dashboard after submitting the form
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	return (
		<div>
			<h2>WeatherWise</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Destination:
					<input
						type="text"
						value={destination}
						onChange={(e) => setDestination(e.target.value)}
					/>
				</label>
				<label>
					Travel Date:
					<input
						type="text"
						value={travelDate}
						onChange={(e) => setTravelDate(e.target.value)}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default WeatherForm;
