import React from "react";

const ProfileView = ({user, handleSignOut}) => {
    return (
        <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p><strong>Email:</strong> {user.getUsername()}</p>
                    <p><strong>Authentication Status:</strong> Authenticated</p>
                    <button onClick={handleSignOut}>SignOut</button>
                </div>
            ) : (
                <p>Log in to see your profile</p>
            )}
        </div>
    );
};

export default ProfileView;