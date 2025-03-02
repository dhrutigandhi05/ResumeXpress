// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {Amplify} from "aws-amplify";
import awsConfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ProfilePage from "./pages/ProfilePage";

Amplify.configure(awsConfig);

const App = ({signOut, user}) => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={signOut}>Sign Out</button>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage user={user}/>} />
      </Routes>
    </Router>
  );
};

export default withAuthenticator(App);
