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
}