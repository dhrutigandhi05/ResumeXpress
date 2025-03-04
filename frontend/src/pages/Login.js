import React from "react";
import { useState } from "react";
import { AuthenticationDetails } from "amazon-cognito-identity-js";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../cognito";
import LoginForm from "../components/LoginForm";

const Login = ({setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                setUser(data);
                setMessage("Login Successful");
            },
            
            onFailure: (err) => {
                setMessage(`Error: ${err.message}`);
            },
        });
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