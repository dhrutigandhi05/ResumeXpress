import React from "react";

const SignupForm = ({handleSubmit, handleConfirm, isConfirmed, confirmationCode, setConfirmationCode, name, setName, email, setEmail, password, setPassword, message }) => {
    return (
        <div>
            <h2>Signup</h2>
            {!isConfirmed ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Sign Up</button>
                </form>
            ) : (
                <form onSubmit={handleConfirm}>
                    <input type="text" placeholder="Enter Confirmation Code" value={confirmationCode} onChange={(e) => setConfirmationCode(e.target.value)} required />
                    <button type="submit">Confirm</button>
                </form>
            )}
            <p>{message}</p>
        </div>
    );
};

export default SignupForm;