import React from 'react';
import './Footer.css';
import { FaBookOpen } from 'react-icons/fa';
import LinkedIn from '../images/linkedin.png';
import Insta from '../images/instagram.png';
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <h1 href="/"><FaBookOpen className="footer-icon" /> NoteSphere</h1>
                </div>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: <a href="mailto:support@studygroups.com">support@studygroups.com</a></p>
                        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com" className="social-link"><img src={LinkedIn} alt="LinkedIn" /></a>
                            <a href="https://www.facebook.com" className="social-link"><img src={Facebook} alt="Facebook" /></a>
                            <a href="https://www.twitter.com" className="social-link"><img src={Twitter} alt="Twitter" /></a>
                            <a href="https://www.instagram.com" className="social-link"><img src={Insta} alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Google Dveloper Groups,GITAM Hyderabad</p>
            </div>
        </footer>
    );
};

export default Footer;
