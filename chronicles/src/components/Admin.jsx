import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [bookings, setBookings] = useState([]);

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
        if (password === 'adwaith123') { 
            setIsAuthenticated(true);
            localStorage.setItem('isAdmin', 'true');
            fetchBookings();
        } else {
            alert("Wrong Password!");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        setIsAuthenticated(false);
    };

    // --- LOGIN VIEW ---
    if (!isAuthenticated) {
        return (
            <div className="login-container">
                <div className="login-card">
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
            </div>
        );
    }

    // --- DASHBOARD VIEW ---
    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <h1>Captured Chronicles</h1>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>

            <div className="table-container">
                <table className="styled-table">
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
                                <td style={{ fontWeight: '600' }}>{b.name}</td>
                                <td>{b.email}</td>
                                <td><span className="tag">{b.service}</span></td>
                                <td>{b.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;