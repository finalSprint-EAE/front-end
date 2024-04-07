import React, { useState } from "react";

function Register() {
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform form submission handling
        // For demonstration, just setting a message
        setMessage("Registration successful!");

        // Reset form fields
        setFormData({
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: ""
        });
    };

    return (
        <div className="container">
            <h1 className="page-title">CineMart</h1>

            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit} className="registration-form">
                <label htmlFor="username" className="form-label">Username:</label>
                <input type="text" name="username" id="username" className="form-input" value={formData.username} onChange={handleChange} required />
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" name="password" id="password" className="form-input" value={formData.password} onChange={handleChange} required />
                <label htmlFor="email" className="form-label">Email Address:</label>
                <input type="email" name="email" id="email" className="form-input" value={formData.email} onChange={handleChange} required />
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <input type="text" name="firstName" id="firstName" className="form-input" value={formData.firstName} onChange={handleChange} />
                <label htmlFor="lastName" className="form-label">Last Name:</label>
                <input type="text" name="lastName" id="lastName" className="form-input" value={formData.lastName} onChange={handleChange} />
                <br />
                <input type="submit" value="Register" className="form-button" />
            </form>
        </div>
    );
}

export default Register;
