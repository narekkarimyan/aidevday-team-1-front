// RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
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
		// Handle form submission logic here (e.g., send data to the server)

		// For demonstration purposes, log the form data to the console
		console.log('Submitted Form Data:', formData);
	};

	return (
		<div>
			<h2>Registration Form</h2>
			<form onSubmit={handleSubmit}>
				<label>
					First Name:
					<input
						type="text"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Last Name:
					<input
						type="text"
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
						required
					/>
				</label>
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
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default RegistrationForm;
