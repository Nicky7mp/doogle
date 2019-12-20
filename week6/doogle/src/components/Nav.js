import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/advice">Advice</Link>
            </li>
            <li>
                <Link to="/doggoSearch">Dog Search</Link>
            </li>
            <li>
                <Link to="/crossbreedGenerator">Crossbreed Generator</Link>
            </li>
            <li>
                <Link to="/ageCalculator">Age Calculator</Link>
            </li>
        </ul>
    )
}
