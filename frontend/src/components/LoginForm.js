import React from "react";

const LoginForm = ({handleSubmit, email, setEmail, password, setPassword, message}) => {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default LoginForm;