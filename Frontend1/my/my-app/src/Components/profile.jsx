import React, { useState } from 'react';

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>
            <h1>Profile</h1>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email:</label>          
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
    );
}

export default Profile;
