import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Chat.css";
import { FaBookOpen } from 'react-icons/fa';
import Header from "../components/Header";

const Chat = () => {
    const navigate = useNavigate(); 
    const [messages, setMessages] = useState([
        {
            type: "incoming",
            profile: "https://static.vecteezy.com/system/resources/previews/038/282/119/non_2x/smiling-manager-portrait-photo.jpg",
            name: "Sarah Johnson",
            text: "Hey everyone! Ready for our study session?"
        },
        {
            type: "outgoing",
            name: "You",
            text: "Yes, I've prepared all the materials we discussed last time."
        },
        {
            type: "incoming",
            profile: "https://assets.entrepreneur.com/content/3x2/2000/20190905193906-Carlos-Gil-image-crop.jpeg",
            name: "Emily Davis",
            text: "Great! Should we start with chapter 5?"
        }
    ]);

    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = () => {
        if (inputValue.trim() === "") return;
        setMessages((prevMessages) => [
            ...prevMessages,
            { type: "outgoing", name: "You", text: inputValue }
        ]);
        setInputValue("");
    };
    const handleSidebarClick = (tab) => {
        if (tab === 'dashboard') {
            navigate('/dashboard'); 
        }
        
    };

    return (
        <div className="chat-container">
            <Header />
            <aside className="dashboard-sidebar">
                <a className="navbar-brand s" href="/">
                    <FaBookOpen className="logo-icon" /> Notesphere
                </a>
                <nav className="menu">
                    <button onClick={() => handleSidebarClick('dashboard')}>Explore Groups</button>
                    <button onClick={() => handleSidebarClick('profile')}>My Profile</button>
                    <button onClick={() => handleSidebarClick('notes')}>Notes Sharing</button>
                    <button onClick={() => handleSidebarClick('events')}>Events</button>
                </nav>
            </aside>

            <div className="chat-area b">
                <div className="messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.type}`}
                        >
                            {message.type === "incoming" && (
                                <img
                                    src={message.profile}
                                    alt="profile"
                                />
                            )}
                            <p>
                                <span>{message.name}</span>
                                {message.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") handleSendMessage();
                        }}
                    />
                    <button
                        className="send-btn"
                        onClick={handleSendMessage}
                    >
                        ➤
                    </button>
                </div>
            </div>

            <div className="right-panel">
                <div className="active-members-section">
                    <h4 className="he">Active Members</h4>
                    <div className="member-card">
                        <img
                            src="https://thumbs.dreamstime.com/z/photo-satisfied-man-dressed-beige-pullover-arms-behind-head-look-empty-space-dream-vacation-isolated-blue-photo-315700057.jpg"
                            alt="Sarah Johnson"
                            className="member-image"
                        />
                        <div className="member-info">
                            <p className="member-name">Lalit</p>
                            <span className="member-status">Online</span>
                        </div>
                    </div>
                    <div className="member-card">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/038/282/119/non_2x/smiling-manager-portrait-photo.jpg"
                            alt="Michael Chen"
                            className="member-image"
                        />
                        <div className="member-info">
                            <p className="member-name">Akash</p>
                            <span className="member-status">Online</span>
                        </div>
                    </div>
                    <div className="member-card">
                        <img
                            src="https://assets.entrepreneur.com/content/3x2/2000/20190905193906-Carlos-Gil-image-crop.jpeg"
                            alt="Emily Davis"
                            className="member-image"
                        />
                        <div className="member-info">
                            <p className="member-name">Sagar</p>
                            <span className="member-status">Busy</span>
                        </div>
                    </div>
                </div>

                <div className="upcoming-events-section">
                    <h4 className="he">Upcoming Events</h4>
                    <div className="event-card">
                        <p className="event-title">Group Study Session</p>
                        <p className="event-time">Tomorrow, 3 PM</p>
                    </div>
                    <div className="event-card">
                        <p className="event-title">Mock Test Review</p>
                        <p className="event-time">Friday, 5 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
