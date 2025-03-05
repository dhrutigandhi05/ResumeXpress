import React from "react";
import { useState } from "react";
import SignupForm from "../components/SignupForm";
import API_URL from "../config";
import axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/signup`, {
                email,
                password,
                name,
            });
            
            setMessage(response.data.message);
            setIsConfirmed(true);
        } catch (error) {
            setMessage(error.response?.data?.detail || "Signup failed.");
        }
    };

    const handleConfirm = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/confirm`, {
                email,
                confirmation_code: confirmationCode,
            });

            setMessage("Account confirmed successfully! You can now log in.");
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);
        } catch (error) {
            setMessage(error.response?.data?.detail || "Confirmation failed.");
        }
    };

    return (
        <SignupForm
            handleSubmit={handleSubmit}
            handleConfirm={handleConfirm}
            isConfirmed={isConfirmed}
            confirmationCode={confirmationCode}
            setConfirmationCode={setConfirmationCode}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            message={message}
        />
    );
};

export default Signup;