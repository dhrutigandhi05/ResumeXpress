import React from "react";

const ProfilePage = ({user}) => {
    return (
        <div>
            <h1>Profile</h1>
            <p>Email: {user.attributes.email}</p>
        </div>
    );
};

export default ProfilePage;