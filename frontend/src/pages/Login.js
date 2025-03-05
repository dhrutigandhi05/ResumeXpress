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
            console.log("Sending request to:", `${API_URL}/login`);

            const response = await axios.post(`${API_URL}/login`, {
                email,
                password,
            });

            console.log("Login response:", response.data);

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                setMessage("Login successful! Redirecting...");
                setTimeout(() => {
                    window.location.href = "/profile";
                }, 2000);
            } else {
                setMessage("Login failed: No token received.");
            }
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message); 
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