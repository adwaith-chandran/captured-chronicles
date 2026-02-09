import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Admin.css'
const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [bookings, setBookings] = useState([]);

    // Check if user previously logged in
    useEffect(() => {
        const loggedIn = localStorage.getItem('isAdmin');
        if (loggedIn === 'true') {
            setIsAuthenticated(true);
            fetchBookings();
        }
    }, []);

    const fetchBookings = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/bookings/all');
            setBookings(res.data);
        } catch (err) {
            console.error("Error fetching data");
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Set your simple project password here
        if (password === 'adwaith123') { 
            setIsAuthenticated(true);
            localStorage.setItem('isAdmin', 'true');
            fetchBookings();
        } else {
            alert("Wrong Password!");
        }
    };

    if (!isAuthenticated) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <input 
                        type="password" 
                        placeholder="Enter Admin Password" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Client Inquiries (Captured Chronicles)</h2>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((b) => (
                        <tr key={b._id}>
                            <td>{b.name}</td>
                            <td>{b.email}</td>
                            <td>{b.service}</td>
                            <td>{b.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => {
                localStorage.removeItem('isAdmin');
                setIsAuthenticated(false);
            }}>Logout</button>
        </div>
    );
};

export default Admin;