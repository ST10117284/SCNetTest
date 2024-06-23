import React, { useState } from 'react';
import axios from 'axios';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1400,
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  width: '300px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  position: 'relative',
};

const closeBtnStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  fontSize: '20px',
  color: '#333',
};

const LoginModal = ({ closeModal, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://scnetwebapi.azure-api.net/api/DeveloperTest/DeveloperTest/LoginUser',
        { Username: username, Password: password },
        {
          headers: {
            'Ocp-Apim-Subscription-Key': '91a75aab8cf248d2aca799f8546b1f6c',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Login successful:', response.data);
      onLoginSuccess(); // Call onLoginSuccess prop to update parent component
    } catch (error) {
      console.error('Login failed:', error);
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <span style={closeBtnStyle} onClick={closeModal}>
          &times;
        </span>
        <h2 style={{ color: 'red' }}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
        />
        {error && (
          <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>
        )}
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: 'red',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
