import React , { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function SignupPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && password) {
      login(username); // साइनअप के बाद सीधे लॉग इन करें
      alert('Signup successful!');
      navigate('/');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
     <div className="css-152">
      <h2 className="css-153">Signup</h2>
      <form onSubmit={handleSignup} className="css-154">
        <div>
          <label className="css-155">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="css-156"
            placeholder="Choose a username"
          />
        </div>
        <div>
          <label className="css-157">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="css-158"
            placeholder="Create a password"
          />
        </div>
        <button type="submit" className="css-159">
          Signup
        </button>
      </form>
    </div>
  )
}

export default SignupPage
