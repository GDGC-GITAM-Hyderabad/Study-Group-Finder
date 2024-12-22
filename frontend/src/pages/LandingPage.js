import React from 'react';
import './LandingPage.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BanImg from '../images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBook, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <div className="home-page">
                <div className="banner-container">
                    <img src={BanImg} alt="Banner" className="banner-img" />
                    <div className="overlay"></div>
                    <div className="text-container">
                        <h1>Connect, Collaborate, and Conquer with Smart Study Groups!</h1>
                        <p>Find study partners, share resources, and achieve your academic goals together.</p>
                        <a href="/login" className="btn-main bg-light text-black">Get Started!</a>
                    </div>
                </div>

                <section className="features-section">
                    <div className="container">
                        <div className="feature">
                            <FontAwesomeIcon icon={faUsers} className="feature-icon" />
                            <h2>Group Discovery</h2>
                            <p>Easily discover and join study groups based on your interests and goals.</p>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faBook} className="feature-icon" />
                            <h2>Resource Sharing</h2>
                            <p>Upload and access shared notes, documents, and resources with your group.</p>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCalendarCheck} className="feature-icon" />
                            <h2>Events & Scheduling</h2>
                            <p>Stay updated on group meetings and study sessions with our built-in scheduler.</p>
                        </div>
                    </div>
                </section>

                <section className="testimonials-section">
                    <div className="container">
                        <h2 className="section-title">What Our Users Say!</h2>
                        <div className="testimonials-grid">
                            <div className="testimonial-card">
                                <div className="testimonial-header">
                                    <img
                                        src="https://thumbs.dreamstime.com/z/photo-satisfied-man-dressed-beige-pullover-arms-behind-head-look-empty-space-dream-vacation-isolated-blue-photo-315700057.jpg"
                                        alt="Priya S."
                                        className="user-image"
                                    />
                                    <h5>Allen S.</h5>
                                </div>
                                <p className="testimonial-text">
                                    <i className="quote-icon">“</i>The Smart Study Group Finder helped me connect with like-minded peers and ace my exams!
                                </p>
                            </div>
                            <div className="testimonial-card">
                                <div className="testimonial-header">
                                    <img
                                        src="https://assets.entrepreneur.com/content/3x2/2000/20190905193906-Carlos-Gil-image-crop.jpeg"
                                        alt="Rahul M."
                                        className="user-image"
                                    />
                                    <h5>Rahul M.</h5>
                                </div>
                                <p className="testimonial-text">
                                    <i className="quote-icon">“</i>Sharing resources and study schedules has never been easier. This app is a game-changer!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="cta-section">
                    <div className="container">
                        <h2>Join the Revolution in Collaborative Learning!</h2>
                        <p>Find your perfect study group and unlock your academic potential.</p>
                        <a href="/signup" className="btn-main bg-light text-black">Get Started Now</a>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;
