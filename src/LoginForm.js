// LoginForm.js
import React, { useState } from 'react';
import { weatherWiseApi } from "./WeatherWiseApiClient";

const LoginForm = ({ setUserData }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// call loginUser with form data
		weatherWiseApi.loginUser(formData)
			.then(response => setUserData(response.data))
			.catch(error => console.error(error));
	};

	return (
		<div>
			<h2>Login Form</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</label>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
