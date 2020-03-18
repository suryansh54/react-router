import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
    const navStyle = {
        color: '#fff',
        textDecoration: 'none'
    }
    return (
        <div className="custom-nav-wrapper">
            <ul>
                <li>
                    <Link style={navStyle} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link style={navStyle} to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link style={navStyle} to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link style={navStyle} to="/employees">
                        Employees 
                    </Link>
                </li>
            </ul>
        </div>
    )
}