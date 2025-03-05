import React from "react";
import { useState } from "react";
import SignupForm from "../components/SignupForm";
import API_URL from "../config";
import axios from "axios";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/signup`, {
                email,
                password,
                name,
            });
            
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.detail || "Signup failed.");
        }
    };

    return (
        <SignupForm
            handleSubmit={handleSubmit}
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

export default SignUp;