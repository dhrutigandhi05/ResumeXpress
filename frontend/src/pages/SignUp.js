import React from "react";
import { useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        
    }
};