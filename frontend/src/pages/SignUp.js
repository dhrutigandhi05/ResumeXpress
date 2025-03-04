import React from "react";
import { useState } from "react";
import UserPool from "../cognito";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import SignupForm from "../components/SignupForm";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const attributeList = [
            new CognitoUserAttribute({Name: "email", Value: email}),
            new CognitoUserAttribute({Name: "name", Value: name}),
        ];

        UserPool.Signup(email, password, attributeList, null, (err, data) =>{
            if (err) {
                setMessage(`Error: ${err.message}`);
            } else {
                setMessage("Signup was successful. Check your email for the confirmation code");
            }
        });
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

export default Signup;