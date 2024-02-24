import "../assets/css/about.css"; 
import Navigation from "./navbar";
import { Link } from "react-router-dom";

function AboutPage() {
    const founderDetails = {
        name: "Dhanush",
        position: "Founder and CEO"
    };

    const availableCities = ["Kerala", "Udupi", "Goa", "Pichavaram"];

    return (
        <div>
            <Navigation/>
            <div className="about-container">
                <div className="background-image">
                    <img src="https://res.cloudinary.com/duhmcxwo3/image/upload/v1708671148/pexels-vinicius-nascimento-20268522_uxmujk.jpg" alt="Background" />
                </div>
                <div className="overlay"></div>
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>Welcome to SailStay, your ultimate destination for boat house bookings!</p>
                    <p>At SailStay, we offer a wide range of luxurious boat houses for rent, providing you with the perfect getaway experience on the water.</p>
                    <p>Our mission is to make your vacation unforgettable by offering exceptional accommodations and personalized services. Whether you are planning a romantic escape, a family vacation, or a group outing, we have the perfect boat house for you.</p>
                    <p>Explore our website to discover our collection of stunning boat houses and start planning your next waterfront adventure with SailStay!</p>
                    <br></br>
                    <p><strong>Founded by {founderDetails.name}, {founderDetails.position}.</strong></p>
                    <p><strong>Available cities: {availableCities.join(", ")}</strong></p>
                    <br></br>
                    <br></br>
                    <p>For any inquiries or assistance, feel free to <Link to="/contactpage">contact us</Link>. We are here to help you make the most of your sailing experience.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
    