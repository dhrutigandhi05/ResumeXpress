import React, { useState, useEffect } from "react";
import API_URL from "../config";
import axios from "axios";
import ProfileView from "../components/ProfileView";

const ProfilePage = ({ user }) => {
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (user) {
            axios.get(`${API_URL}/protected`, {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => setUserData(response.data.user))
            .catch((error) => setMessage("Failed to load user data."));
        }
    }, [user]);

    return (
        <ProfileView user={userData} />
    );
};

export default ProfilePage;