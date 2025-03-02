const awsConfig = {
    Auth: {
        region: process.env.REACT_APP_AWS_REGION,
        userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
        userPoolWebClientId: REACT_APP_COGNITO_CLIENT_ID,
        authenticationFlowType: "USER_PASSWORD_AUTH",
    },
};

export default awsConfig;