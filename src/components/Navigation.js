import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&response_type=code&scope=openid%20profile%20email&redirect_uri=${encodeURIComponent(`${window.location.origin}/auth/callback`)}`
    return (
        <div className="navigation">
                <Link to="/">Home</Link>
                <a href={auth0LoginUrl}>Login</a>
                <Link to="/profile">Profile</Link>
                <Link to="/words">Words</Link>
        </div>
    )
}