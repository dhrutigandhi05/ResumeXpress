const awsConfig = {
    Auth: {
        authenticationFlowType: "USER_PASSWORD_AUTH",
        region: process.env.REACT_APP_AWS_REGION || "ca-central-1",
        userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID || "ca-central-1_6xyTF7aYM",
        userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID || "5u19hb6l1ls3lmphce1l1me4bn",
    },
};

console.log("AWS Config Loaded:", awsConfig);

export default awsConfig;