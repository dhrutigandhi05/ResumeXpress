import React from "react";
import ProfileView from "../components/ProfileView";
import UserPool from "../cognito";

const ProfilePage = ({user, setUser}) => {
    const handleSignOut = () => {
        const currentUser = UserPool.getCurrentUser();

        if (currentUser) {
            currentUser.signOut();
            setUser(null);
        }
    };

    return <ProfileView user={user} handleSignOut={handleSignOut} />;
};

export default ProfilePage;