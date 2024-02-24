import "../assets/css/feedback.css";
import { useState } from "react";
import Navigation from "./navbar";

function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bookingId: '',
        rating: '',
        feedback: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            bookingId: '',
            rating: '',
            feedback: ''
        });
    };

    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <h1 className="feed">Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="bookingId">Booking ID:</label>
                    <input type="text" id="bookingId" name="bookingId" value={formData.bookingId} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <select id="rating" name="rating" value={formData.rating} onChange={handleChange} required>
                        <option value="">Select rating</option>
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Very Good</option>
                        <option value="3">3 - Good</option>
                        <option value="2">2 - Fair</option>
                        <option value="1">1 - Poor</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea id="feedback" name="feedback" rows="5" value={formData.feedback} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}

export default FeedbackForm;
