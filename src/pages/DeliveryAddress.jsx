import React, { useState } from 'react';

const DeliveryAddress = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your server
        console.log({
            name,
            address,
            city,
            state,
            zipCode,
            country,
            phone,
        });
        alert('Address saved successfully!');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Delivery Address Details</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">City</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">State</label>
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Zip Code</label>
                    <input
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Country</label>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Phone Number</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Save Address
                </button>
            </form>
        </div>
    );
};

export default DeliveryAddress;
