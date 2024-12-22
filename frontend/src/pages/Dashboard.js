import React, { useState } from 'react';
import './Dashboard.css';
import Header from '../components/Header';
import { FaBookOpen, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('groups');
  const navigatetogroup = () => {
    navigate('/chat');
  };

  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-container">
        <aside className="dashboard-sidebar">
          <a className="navbar-brand s" href="/">
            <FaBookOpen className="logo-icon" /> Notesphere
          </a>
          <nav className="menu">
            <button
              className={activeTab === 'groups' ? 'active' : ''}
              onClick={() => setActiveTab('groups')}
            >
              Explore Groups
            </button>
            <button
              className={activeTab === 'profile' ? 'active' : ''}
              onClick={() => setActiveTab('profile')}
            >
              My Profile
            </button>
            <button
              className={activeTab === 'notes' ? 'active' : ''}
              onClick={() => setActiveTab('notes')}
            >
              Notes Sharing
            </button>
            <button
              className={activeTab === 'events' ? 'active' : ''}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
          </nav>
        </aside>
        <main className="dashboard-main">
          <header className="dashboard-header">
            
          </header>
          <section className="dashboard-content">
            {activeTab === 'groups' && (
              <div className="groups">
                <div className="group-card">
                  <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230706095706/intro-data-structure-%E2%80%93-1.png" alt="Math Study Group" />
                  <h3>Data Structures and Algorithms</h3>
                  <p>Java, C++, Python</p>
                  <button onClick={navigatetogroup}>Join Group</button>
                </div>
                <div className="group-card">
                  <img src="https://www.goclasses.in/s/store/courses/60fdd8ab0cf2c7989e1f109f/cover.jpg?v=1" alt="Science Enthusiasts" />
                  <h3>Database Management System</h3>
                  <p>MySQL, RDBMS, Queries</p>
                  <button onClick={navigatetogroup}>Join Group</button>
                </div>
                <div className="group-card">
                  <img src="https://www.golearnerz.com/s/store/courses/67017e6f7d44c87884ada888/cover.jpg?v=2" alt="Computer Networks" />
                  <h3>Computer Networks</h3>
                  <p>OSI/TCP Model, Bandwidth, Packet Loss</p>
                  <button onClick={navigatetogroup}>Join Group</button>
                </div>
                <div className="group-card">
                  <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/a/z/h/formal-language-and-automata-theory-original-imah3jepf7grfw7h.jpeg?q=20&crop=false" alt="Formal Languages" />
                  <h3>Formal Languages and Automata Theory</h3>
                  <p>NFA, DFA, Mealy and Moore Machines</p>
                  <button onClick={navigatetogroup}>Join Group</button>
                </div>
              </div>
            )}
            {activeTab === 'profile' && (
              <div className="profile">
                <h2>Welcome, Lalit!</h2>
                <p>Manage your profile and preferences here.</p>
              </div>
            )}
            {activeTab === 'notes' && (
              <div className="notes">
                <h2>Shared Notes</h2>
                <form
                  className="upload-notes-form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    try {
                      const response = await fetch('/api/notes/upload', {
                        method: 'POST',
                        body: formData,
                      });
                      if (response.ok) {
                        alert('Note uploaded successfully!');
                        e.target.reset(); 
                      } else {
                        const errorData = await response.json();
                        alert(`Failed to upload note: ${errorData.message}`);
                      }
                    } catch (error) {
                      console.error('Error uploading note:', error);
                    }
                  }}
                >
                  <input type="text" name="title" placeholder="Enter note title" required />
                  <input type="file" name="note" accept=".pdf,.ppt,.pptx" required />
                  <button type="submit" className="upload-notes-button">
                    Upload Notes
                  </button>
                </form>
                <ul>
                  <li>Introduction to React - PDF</li>
                  <li>Physics Notes - Chapter 1</li>
                </ul>
              </div>
            )}
            {activeTab === 'events' && (
              <div className="events">
                <h2>Upcoming Events</h2>
                <ul>
                  <li>Math Study Group - Algebra Discussion</li>
                  <li>Science Enthusiasts - Chemistry Quiz</li>
                </ul>
              </div>
            )}
            <div className="recent-activity">
              <h2>Recent Activity</h2>
              <ul>
                <li>Uploaded a new note: "Advanced Calculus Notes"</li>
                <li>Joined the Physics Study Group</li>
                <li>Updated profile picture</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
