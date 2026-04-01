import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [bookings, setBookings] = useState([]);
    const [reviews, setReviews] = useState([]); // New state for reviews
    const [activeTab, setActiveTab] = useState('bookings'); // Toggle between 'bookings' and 'reviews'

    useEffect(() => {
        const loggedIn = localStorage.getItem('isAdmin');
        if (loggedIn === 'true') {
            setIsAuthenticated(true);
            fetchAllData();
        }
    }, []);

    const fetchAllData = () => {
        fetchBookings();
        fetchReviews();
    };

    const fetchBookings = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/bookings/all');
            setBookings(res.data);
        } catch (err) {
            console.error("Error fetching bookings");
        }
    };

    const fetchReviews = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/reviews');
            setReviews(res.data);
        } catch (err) {
            console.error("Error fetching reviews");
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'adwaith123') { 
            setIsAuthenticated(true);
            localStorage.setItem('isAdmin', 'true');
            fetchAllData();
        } else {
            alert("Wrong Password!");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        setIsAuthenticated(false);
    };

    // --- DELETE LOGIC ---
    const deleteItem = async (id, type) => {
    // Add this to see if the ID is being captured correctly in the console (F12)
    console.log(`Deleting ${type} with ID:`, id);

    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
        try {
            // Ensure these URLs exactly match your backend routes
            const endpoint = type === 'booking' 
                ? `http://localhost:5000/api/bookings/${id}` 
                : `http://localhost:5000/api/reviews/${id}`;
            
            const res = await axios.delete(endpoint);
            console.log("Delete Response:", res.data);
            
            if (type === 'booking') {
                setBookings(prev => prev.filter(b => b._id !== id));
            } else {
                setReviews(prev => prev.filter(r => r._id !== id));
            }
        } catch (err) {
            console.error("Delete Error:", err.response ? err.response.data : err.message);
            alert("Failed to delete item. Check the console for details.");
        }
    }
};

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

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <h1>Captured Chronicles Admin</h1>
                <div className="header-actions">
                    <button className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`} onClick={() => setActiveTab('bookings')}>Bookings</button>
                    <button className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </div>

            <div className="table-container">
                {activeTab === 'bookings' ? (
                    <>
                        <h3>Recent Inquiries</h3>
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((b) => (
                                    <tr key={b._id}>
                                        <td style={{ fontWeight: '600' }}>{b.name}</td>
                                        <td>{b.email}</td>
                                        <td><span className="tag">{b.service}</span></td>
                                        <td>{b.message}</td>
                                        <td><button className="delete-icon-btn" onClick={() => deleteItem(b._id, 'booking')}>🗑</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <>
                        <h3>Customer Reviews</h3>
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Rating</th>
                                    <th>Comment</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((r) => (
                                    <tr key={r._id}>
                                        <td style={{ fontWeight: '600' }}>{r.name}</td>
                                        <td>{r.rating} ★</td>
                                        <td>{r.comment}</td>
                                        <td><button className="delete-icon-btn" onClick={() => deleteItem(r._id, 'review')}>🗑</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default Admin;