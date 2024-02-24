import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import "../assets/css/footer.css";

function Footer() {
    return (
        <footer className="footer">
                    <div className="footer-icons">
                        <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="mailto:your_email@example.com">
                            <FaEnvelope />
                        </a>
                    </div>
                <p>&copy; 2024 SailStay. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
