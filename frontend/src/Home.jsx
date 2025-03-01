import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email, department, year };
        try {
            const response = await axios.post('http://localhost:5000/user/register', user);
            console.log(response);
            window.alert('User registered successfully');   
            setName('');
            setEmail('');
            setDepartment('');
            setYear('');
        } catch (err) {
            console.error(err);
        }   
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='department'>Department</label>
                <input 
                    type='text'
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='year'>Year</label>
                <input 
                    type='number'
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <button type='submit'>Register</button> 
        </form>
    );
};

export default Home;


