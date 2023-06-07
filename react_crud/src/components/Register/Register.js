import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './register.css';

const API_URL = 'http://localhost:4000/register' ;

const Register = () => {

    const navigate = useNavigate();

const [formData,setFormData] =useState ({
    name:'',
    email: '',
    number: '',
    password: '',
});

const handleInputChange = (event) => {
    const {name,value} = event.target;
    setFormData(prevState => ({...prevState,[name]: value}))
};

const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(API_URL,formData)
    .then(data => {
        console.log(data.data);
        navigate('/login');
    })
    .catch(error => console.log(error.message));
}

    
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app. </p>
                <div className="flex">
                    <label>
                        <input required="" placeholder="" name='name' onChange={handleInputChange} value={formData.name} type="text" className="input" />
                        <span>Firstname</span>
                    </label>

                </div>

                <label>
                    <input required="" placeholder="" name='email' onChange={handleInputChange} type="email" value={formData.email}className="input" />
                    <span>Email</span>
                </label>

                <label>
                    <input required="" placeholder="" name='number' onChange={handleInputChange} type="number" value={formData.number} className="input" />
                    <span>Number</span>
                </label>


                <label>
                    <input required="" placeholder="" name='password' onChange={handleInputChange} type="password" value={formData.password} className="input" />
                    <span>Password</span>
                </label>
            
                <button type='submit' className="submit">Submit</button>
                <p className="signin">Already have an acount ? <Link to="/login">Signin</Link> </p>
            </form>
        </div>
    );
}

export default Register;
