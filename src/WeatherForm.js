// WeatherForm.js
import React, { useState } from 'react';
import axios from 'axios';

function WeatherForm({ userPreferences, updateUserPreferences }) {
	const [destination, setDestination] = useState('');
	const [travelDate, setTravelDate] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Make a request to your backend to save user preferences
		/*const response = await axios.post('http://localhost:3001/preferences', {
			destination,
			travelDate,
		});*/

		// TODO use backend above
		const response = { data: { preferences: { destination, travelDate } } };

		updateUserPreferences([response.data.preferences]);
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
