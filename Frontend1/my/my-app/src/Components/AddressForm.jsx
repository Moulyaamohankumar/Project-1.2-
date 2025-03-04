import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = () => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const addressDetails = { address:address,
             city:city,
              state : state, 
            zip:zip, country:country };
        axios.post('http://localhost:3000/api/address', addressDetails)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Address Form</h1>
            <div>
                <form>
                    <label>Address:</label>
                    <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                    <label>City:</label>
                    <input type='text' value={city} onChange={(e) => setCity(e.target.value)} />
                    <label>State:</label>
                    <input type='text' value={state} onChange={(e) => setState(e.target.value)} />
                    <label>Zip:</label>
                    <input type='text' value={zip} onChange={(e) => setZip(e.target.value)} />
                    <label>Country:</label>
                    <input type='text' value={country} onChange={(e) => setCountry(e.target.value)} />
                    <button onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddressForm;