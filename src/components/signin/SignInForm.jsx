
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const SignInForm = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(username, password)
        localStorage.setItem('session', true)
        history.push("/schedules");
    }

    return (
        <form className="signInForm">
            <label htmlFor="username">Username</label>
            <input
                autoFocus
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <input className="button-primary" onClick={handleSubmit}
                type="submit" value="Sign In"></input>
        </form>
    );
};

export default SignInForm;