import React from "react";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import API_URL from "../config";
import axios from "axios";

const Login = ({setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password,
            });

            setUser(response.data);
            setMessage("Login successful!");
            
        } catch (error) {
            setMessage(error.response?.data?.detail || "Login failed.");
        }
    };

    return (
        <LoginForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            message={message}
        />
    );
};

export default Login;