import React from "react";
import { Link } from "react-router-dom"

export default function SignUp() {
    return(
        <header>
            <nav>
                <div className="nav-links">
                    <Link to="/">Signup</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
            <h1>Sign up Here</h1>
        </header>
    )
}