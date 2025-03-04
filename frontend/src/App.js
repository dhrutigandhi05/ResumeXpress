import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ProfilePage from "./pages/ProfilePage.js";

console.log("AWS Config:", awsConfig);
console.log("Region:", awsConfig.Auth.region);
console.log("User Pool ID:", awsConfig.Auth.userPoolId);
console.log("Client ID:", awsConfig.Auth.userPoolWebClientId);
console.log("Auth Flow Type:", awsConfig.Auth.authenticationFlowType);
console.log("AWS Auth Config:", awsConfig.Auth);
console.log("Amplify Config:", Amplify.configure());

Amplify.configure(awsConfig);

const App = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={signOut}>Sign Out</button>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
          </Routes>
        </Router>
      )}
    </Authenticator>
  );
};

export default App;
