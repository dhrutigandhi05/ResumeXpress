const express = require ("express");
const router = express.Router();
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const userPool = require("../config/awsCognito");

router.post("/signup", (req, res) => {
    const {email, password} = req.body;
    const attributeList = [
        new AmazonCognitoIdentity.CognitoUserAttribute({Name: "email", Value: email})
    ];

    userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
            return res.status(400).json({error: error.message});
        }

        res.status(200).json({message: "Signup Successful", user: result.user});
    });
});