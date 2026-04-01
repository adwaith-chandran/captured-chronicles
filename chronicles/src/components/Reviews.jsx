import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './style.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
  const [loading, setLoading] = useState(true);

  // Fetch reviews from your Node.js backend
useEffect(() => {
  const mockReviews = [
    { id: 'm1', name: "Aflah", rating: 5, comment: "Amazing wedding shots!" },
    { id: 'm2', name: "Thasli", rating: 4, comment: "Great portraits and very professional." },
    { id: 3, name: "Adwaith", rating: 5, comment: "Great portraits and very professional." },
    { id: 4, name: "Sradha", rating: 4, comment: "Great portraits and very professional." },
    { id: 5, name: "Mishal", rating: 5, comment: "Great portraits and very professional." },
    { id: 6, name: "Amar", rating: 5, comment: "Great portraits and very professional." },
    { id: 7, name: "Amal", rating: 4, comment: "Great portraits and very professional." },
    { id: 8, name: "Akku", rating: 5, comment: "Great portraits and very professional." }    
  ];

  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/reviews');
      if (response.ok) {
        const dbData = await response.json();
        // Merge: DB data first, then Mock data
        setReviews([...dbData, ...mockReviews]);
      } else {
        setReviews(mockReviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews(mockReviews); // Show mocks even if backend is down
    } finally {
      setLoading(false);
    }
  };

  fetchReviews();
}, []);


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const newReview = await response.json(); // Get the saved review from backend
      
      // REAL-TIME UPDATE: Add the new review to the top of the list
      setReviews((prevReviews) => [newReview, ...prevReviews]);

      alert("Thank you! Your review is now live.");
      setFormData({ name: '', rating: 5, comment: '' });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Could not connect to the server.");
  }
};

  return (
    <div className="reviews-page-wrapper">
      
      <Navbar />
      
      <div className="reviews-container">
        <h2>Client Testimonials</h2>
        
        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading stories...</p>
        ) : (
          <div className="reviews-grid">
            {reviews.map((review, index) => (
                <div key={review._id || review.id || index} className="review-card">    
                <div className="stars">{"★".repeat(review.rating || 5)}</div>
                <p>"{review.comment}"</p>
                <h4 className="client-name">- {review.name}</h4>
              </div>
            ))}
          </div>
        )}

        <hr />

        <section className="add-review">
          <h3>Share Your Experience</h3>
          <form className="review-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={formData.name}
              required 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <select 
              value={formData.rating}
              onChange={(e) => setFormData({...formData, rating: parseInt})}
            >
              <option value="5">5 Stars (Excellent)</option>
              <option value="4">4 Stars (Great)</option>
              <option value="3">3 Stars (Good)</option>
              <option value="2">2 Stars (Average)</option>
              <option value="1">1 Star (Poor)</option>
            </select>
            <textarea 
              placeholder="How was your session with Captured Chronicles?" 
              value={formData.comment}
              required 
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
            ></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ReviewsPage;







// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import './style.css'

// const ReviewsPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
//   const [loading, setLoading] = useState(true);
//   // Example: Fetching existing reviews from your Node.js backend
//   useEffect(() => {
//     // fetch('/api/reviews').then(res => res.json()).then(data => setReviews(data));
//     const mockReviews = [
//       { id: 1, name: "Aflah", rating: 5, comment: "Amazing wedding shots! Highly recommended." },
//       { id: 2, name: "thasli", rating: 4, comment: "Great portraits and very professional." },
//       { id: 3, name: "Adwaith", rating: 5, comment: "Great portraits and very professional." },
//       { id: 4, name: "Sradha", rating: 4, comment: "Great portraits and very professional." },
//       { id: 5, name: "Mishal", rating: 5, comment: "Great portraits and very professional." },
//       { id: 6, name: "Amar", rating: 5, comment: "Great portraits and very professional." },
//       { id: 7, name: "Amal", rating: 4, comment: "Great portraits and very professional." },
//       { id: 8, name: "Akku", rating: 5, comment: "Great portraits and very professional." }
    
//     ];
//     setReviews(mockReviews);
//   }, []);

   

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to POST formData to your backend
//     console.log("Review Submitted:", formData);
//     alert("Thank you for your review!");
//   };

//   return (
//     <div className="reviews-container">

//             <div>
//                 <Navbar/>
//             </div>    

//       <h2>Client Testimonials</h2>
      
//       {/* Display Section */}
//       <div className="reviews-grid">
//         {reviews.map(review => (
//           <div key={review.id} className="review-card">
//             <h4>{review.name}</h4>
//             <div className="stars">{"★".repeat(review.rating)}</div>
//             <p>"{review.comment}"</p>
//           </div>
//         ))}
//       </div>

//       <hr />

//       {/* Submission Section */}
//       <section className="add-review">
//         <h3>Leave a Review</h3>
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             placeholder="Your Name" 
//             required 
//             onChange={(e) => setFormData({...formData, name: e.target.value})}
//           />
//           <select onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}>
//             <option value="5">5 Stars</option>
//             <option value="4">4 Stars</option>
//             <option value="3">3 Stars</option>
//           </select>
//           <textarea 
//             placeholder="Share your experience..." 
//             required 
//             onChange={(e) => setFormData({...formData, comment: e.target.value})}
//           ></textarea>
//           <button type="submit">Post Review</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default ReviewsPage;

