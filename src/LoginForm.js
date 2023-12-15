// LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
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
		// Handle login logic here (e.g., send data to the server)

		// For demonstration purposes, log the form data to the console
		console.log('Submitted Login Form Data:', formData);
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
