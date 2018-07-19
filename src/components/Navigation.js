import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <div className="navigation">
                <Link to="/">Home</Link>
                <Link to ="/login">Login</Link>
                <Link to ="/profile">Profile</Link>
                <Link to ="/words">Words</Link>
        </div>
    )
}