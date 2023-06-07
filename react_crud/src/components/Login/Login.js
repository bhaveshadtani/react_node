import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const API_Url = 'http://localhost:4000/login' ;

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const inputChangeHandle = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(API_Url, formData)
            .then(data => {
                console.log(data.data);
                
                navigate('/dashboard');

            })
            .catch(error => console.error(error));
    };

    return (
        <div className="form-box">
            <form className="form" onSubmit={handleSubmit}>
                <span className="title">Sign in</span>
                <div className="form-container">
                    <input type="email" name='email' value={formData.email} onChange={inputChangeHandle} className="input" placeholder="Email" />
                    <input type="password" name='password' value={formData.password} onChange={inputChangeHandle} className="input" placeholder="Password" />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <div className="form-section">
                <p>New User? <Link to="/">Sign Up</Link> </p>
            </div>
        </div>

    );
}

export default Login;
