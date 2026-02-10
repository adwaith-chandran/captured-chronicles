import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

const Contact = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Portrait',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            await axios.post('http://localhost:5000/api/bookings/contact', formData);
            setStatus('Inquiry Sent Successfully!');
            setFormData({ name: '', email: '', phone: '', service: 'Portrait', message: '' });
        } catch (err) {
            setStatus('Failed to send. Please try again.');
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-overlay">
                <div className="contact-content">
                    <div className="contact-info">
                        <h2>GET IN TOUCH</h2>
                        <p>Based in Kadavanthara, Ernakulam</p>
                        <p>Specializing in Lifestyle Portraits & Dark Landscape Art</p>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                        
                        <select name="service" value={formData.service} onChange={handleChange}>
                            <option value="Portrait">Lifestyle Portraits</option>
                            <option value="Event">Event Coverage</option>
                            <option value="Food">Commercial Food Photography</option>
                            <option value="Landscape">Dark Landscape Art</option>
                        </select>

                        <textarea name="message" placeholder="Describe your vision..." value={formData.message} onChange={handleChange} rows="5"></textarea>
                        
                        <button type="submit" className="contact-btn">Send Message</button>
                        {status && <p className="form-status">{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;