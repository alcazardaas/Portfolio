
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const SignInForm = ({ users }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMesage, setErrorMesage] = useState('')
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        if (users.find(u => u.username === username && u.password === password)) {
            localStorage.setItem('session', users.find(u => u.username === username).id)
            history.push("/schedules");
        } else {
            setErrorMesage('Username or password wrong. Please try again')
            setTimeout(() => setErrorMesage(''), 5000)
        }
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

            {errorMesage && <p className='error-mesage'>{errorMesage}</p>}

            <input className="button-primary" onClick={handleSubmit}
                type="submit" value="Sign In"></input>
        </form>
    );
};

export default SignInForm;