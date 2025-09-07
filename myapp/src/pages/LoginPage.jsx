import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // यहाँ हम एक साधारण लॉगिन चेक कर रहे हैं
    // असली प्रोजेक्ट में आप इसे सर्वर से कनेक्ट करेंगे
    if (username) {
      login(username);
      navigate('/'); // लॉगिन के बाद होमपेज पर रीडायरेक्ट करें
    } else {
      alert('Please enter a username');
    }
  };

  return (
   <div className="css-108">
      <h2 className="css-109">Login</h2>
      <form onSubmit={handleLogin} className="css-110">
        <div>
          <label className="css-111">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="css-112"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className="css-113">Password</label>
          <input
            type="password"
            className="css-114"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="css-115">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
