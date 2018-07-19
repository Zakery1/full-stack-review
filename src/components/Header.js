import React from 'react';
import logo from '../assets/northern.jpg'
import './Header.css'

export default function Header() {
    return (
        <div>
            <h1>Word Bank</h1>
            <img src={logo} alt="Hands with words on them" />
        </div>
    )
}