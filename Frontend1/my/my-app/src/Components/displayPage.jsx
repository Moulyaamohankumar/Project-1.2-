import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayPage = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = () => {
        axios.post('http://localhost:3000/api/address', { address, city, state, zip, country, product, quantity })
            .then(res => console.log("Response:", res.data))
            .catch(err => console.error("Error submitting data:", err));
    };

    useEffect(() => {
        axios.get('http://localhost:3000/api/product')
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <h1>Display Page</h1>

     
            <div className="form-section">
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

                <label>Quantity:</label>
                <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />

                <button onClick={handleSubmit}>Submit</button>
            </div>

    
            <div className="product-list">
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error: {error}</h1>}
                
                {!loading && !error && product.length > 0 ? (
                    product.map((item) => (
                        <div key={item.id} className="product-card">
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price}</p>
                            <img src={item.image} alt={item.name} className="product-image" />
                        </div>
                    ))
                ) : (
                    !loading && <h2>No products available</h2>
                )}
            </div>

            <div className="address-display">
                <h2>Submitted Address</h2>
                <p>{address}, {city}, {state}, {zip}, {country}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </div>
    );
}

export default DisplayPage;
