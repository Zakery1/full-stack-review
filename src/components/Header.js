import React from 'react';
import logo from '../assets/northern.jpg'
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <h1>Word Bank</h1>
            <img className="image" src={logo} alt="Hands with words on them" />
        </div>
    )
}