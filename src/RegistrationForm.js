// RegistrationForm.js
import React, {useState} from 'react';
import axios from "axios";
import {baseUrl} from "./Constrants";
import Modal from "./Modal";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: 'User',
        lastName: 'Testovich',
        email: 'user@test.com',
        password: '1234',
    });
    const [isExpiryModalShown, setVisible] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to the server)

        // For demonstration purposes, log the form data to the console
        console.log('Submitted Form Data:', formData);
        try {
            // const response = await axios.post(`${baseUrl}/users/register`, {
            //     username: `${formData.firstName} ${formData.lastName}`,
            //     email: formData.email,
            //     password: formData.password,
            // });
            // console.log(response);
            setVisible(true)
            setTimeout(
                function () {
                    setVisible(false)
                    window.location.href = '/';
                }, 2000,
            )

        } catch (error) {
            console.error(error);
        }
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

            <Modal open={isExpiryModalShown} onClose={() => setVisible(false)} />
        </div>
    );
};

export default RegistrationForm;
