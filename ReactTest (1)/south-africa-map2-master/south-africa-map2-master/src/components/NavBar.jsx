import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';
import logo from '../images/SCNet Logo 2024 Paths w.png';
import LoginModal from './LoginModal';
import homeIcon from '../images/home.png';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleLogout = () => {
    // Perform logout actions here, e.g., clear session, reset state
    setLoggedIn(false);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    closeModal(); // Close modal after successful login
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Company Logo" className="logo" />
      </Link>
      <Link to="/" className="navbar-brand">
        <img
          src={homeIcon}
          alt="Home"
          className="navbar-icon"
          style={{ width: '24px', height: '24px' }}
        />
      </Link>
      <Link to="/Map" className="navbar-link">
        SA&nbsp;Map&nbsp;Stats
      </Link>
      <Link to="/DataTable" className="navbar-link">
        Health&nbsp;Report
      </Link>
      {loggedIn ? (
        <>
          <span className="navbar-label">Logged&nbsp;in</span>
          <button
            onClick={handleLogout}
            className="navbar-link"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              marginTop: '5px',
            }}
          >
            Log&nbsp;out
          </button>
        </>
      ) : (
        <button
          onClick={openModal}
          className="navbar-link"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            marginTop: '5px',
          }}
        >
          Login
        </button>
      )}
      {showModal && <LoginModal closeModal={closeModal} onLoginSuccess={handleLoginSuccess} />}
    </nav>
  );
};

export default NavBar;
