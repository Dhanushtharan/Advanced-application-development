import "../assets/css/contact.css"; 
import Navigation from "./navbar";

function ContactPage() {
    // Static admin details
    const adminDetails = {
        name: "Dhanush",
        email: "dcr221003@gmail.com"
    };

    return (
        <div>
            <Navigation/>
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, please feel free to reach out to us using the form below:</p>
                <form className="contact-form" action="/submit" method="post">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <div>
                        <h1>Admin Details!</h1>
                    </div>
                    <div className="form-group">
                        <label>Admin Name:</label>
                        <input type="text" value={adminDetails.name} readOnly />
                    </div>
                    <div className="form-group">
                        <label>Admin Email:</label>
                        <input type="email" value={adminDetails.email} readOnly />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
