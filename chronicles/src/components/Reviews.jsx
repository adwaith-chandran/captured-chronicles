import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './style.css'
const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });

  // Example: Fetching existing reviews from your Node.js backend
  useEffect(() => {
    // fetch('/api/reviews').then(res => res.json()).then(data => setReviews(data));
    const mockReviews = [
      { id: 1, name: "Aflah", rating: 5, comment: "Amazing wedding shots! Highly recommended." },
      { id: 2, name: "thasli", rating: 4, comment: "Great portraits and very professional." },
      { id: 3, name: "Adwaith", rating: 5, comment: "Great portraits and very professional." },
      { id: 4, name: "Sradha", rating: 4, comment: "Great portraits and very professional." },
      { id: 5, name: "Mishal", rating: 5, comment: "Great portraits and very professional." },
      { id: 6, name: "Amar", rating: 5, comment: "Great portraits and very professional." },
      { id: 7, name: "Amal", rating: 4, comment: "Great portraits and very professional." },
      { id: 8, name: "Akash", rating: 5, comment: "Great portraits and very professional." }
    
    ];
    setReviews(mockReviews);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to POST formData to your backend
    console.log("Review Submitted:", formData);
    alert("Thank you for your review!");
  };

  return (
    <div className="reviews-container">

            <div>
                <Navbar/>
            </div>    

      <h2>Client Testimonials</h2>
      
      {/* Display Section */}
      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <h4>{review.name}</h4>
            <div className="stars">{"★".repeat(review.rating)}</div>
            <p>"{review.comment}"</p>
          </div>
        ))}
      </div>

      <hr />

      {/* Submission Section */}
      <section className="add-review">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            required 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <select onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
          </select>
          <textarea 
            placeholder="Share your experience..." 
            required 
            onChange={(e) => setFormData({...formData, comment: e.target.value})}
          ></textarea>
          <button type="submit">Post Review</button>
        </form>
      </section>
    </div>
  );
};

export default ReviewsPage;








// import React from 'react'
// import axios from 'axios';
// import Navbar from './Navbar'
// import video from '../assets/background-video.mp4'
// import Footer from './Footer'
// import './style.css'
// function Reviews() {
//   return (
//     <div className='review-container'>
//         <div className='video-background3'>
//         <div>
//             <Navbar/>
//         </div>
//         <video autoPlay loop muted playsInline>
//         <source src={video} type="video/mp4"/>
//         </video> 
//         </div>
//     </div>
//   )
// }

// export default Reviews
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './style.css';

// const Review = () => {
//     const [reviews, setReviews] = useState([]);
//     const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });

//     useEffect(() => {
//         fetchReviews();
//     }, []);

//     const fetchReviews = async () => {
//         try {
//             const res = await axios.get('http://localhost:5000/api/reviews/all');
//             setReviews(res.data);
//         } catch (err) {
//             console.error("Error fetching reviews");
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/reviews/add', formData);
//             setFormData({ name: '', rating: 5, comment: '' });
//             fetchReviews();
//         } catch (err) {
//             alert("Submission failed");
//         }
//     };

//     return (
//         <div className="review-page">
//             {/* Background Video - Matching Home/About Pages */}
//             <video autoPlay loop muted playsInline className="background-video">
//                 <source src="chronicles\src\assets\background-video.mp4" type="video/mp4" />
//             </video>

//             <div className="review-overlay">
//                 <div className="review-content">
//                     <h1 className="page-title">Client Chronicles</h1>
                    
//                     <div className="review-list">
//                         {reviews.map((r) => (
//                             <div key={r._id} className="review-card glass-morphism">
//                                 <p className="stars">{"★".repeat(r.rating)}</p>
//                                 <p className="comment">"{r.comment}"</p>
//                                 <h4 className="client-name">- {r.name}</h4>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="form-container glass-morphism">
//                         <h3>Share Your Experience</h3>
//                         <form onSubmit={handleSubmit}>
//                             <input type="text" placeholder="Name" value={formData.name} 
//                                 onChange={(e) => setFormData({...formData, name: e.target.value})} required />
//                             <textarea placeholder="Your story..." value={formData.comment}
//                                 onChange={(e) => setFormData({...formData, comment: e.target.value})} required />
//                             <button type="submit">Submit Review</button>
//                         </form>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Review;