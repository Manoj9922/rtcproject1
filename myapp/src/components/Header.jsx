import React, { useState, useContext } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // AuthContext को इंपोर्ट करें
import { CartContext } from '../context/CartContext';
import logo from '../assets/logo.png'
import '../App.css';


function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useContext(AuthContext); // useContext से user और logout फंक्शन को प्राप्त करें
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };



  return (
    <header className="header-container">
      {/* डेस्कटॉप मेनू (मोबाइल पर छिपा हुआ) */}
      <div className="header-desktop-menu">
        <div className="header-left">
      <h1 className="logo-title">
      <Link to="/" className="css-007"><img src={logo} alt="RTC" style={{ height: '60px' }}/></Link>
      </h1>
          <nav className="nav-menu-desktop">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/categories" className="nav-link">Category</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>
        </div>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="header-right">
          <Link to="/cart" className="cart-icon">
            <span role="img" aria-label="cart">🛒</span>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </Link>
          {user ? (
            <div className="auth-status">
              <span className="user-name">Hi, {user.username}!</span>
              <Link to="/dashboard" className="dashboard-link">Dashboard</Link>
              <button onClick={logout} className="logout-button">Logout</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="login-link"><button>Login</button></Link>
              <span>/</span>
              <Link to="/signup" className="signup-link"><button>Signup</button></Link>
            </div>
          )}
        </div>
      </div>

      {/* मोबाइल मेनू (डेस्कटॉप पर छिपा हुआ) */}
      <div className="header-mobile-menu">
        <div className="mobile-top-row">
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <h1 className="logo-title">
      <Link to="/" className="css-007"><img src={logo} alt="RTC" style={{ height: '60px'}}/></Link>
      </h1>
          <div className="mobile-auth-links">
            {user ? (
              <div className="auth-status">
                <span className="user-name">Hi, {user.username}!</span>
                <button onClick={logout} className="logout-button">Logout</button>
              </div>
            ) : (
              <div className="auth-links">
                <button style={{borderRadius: '70px', width:'80px', height: '60px', backgroundColor:'snow'}}>
                <Link to="/login" className="login-link">Login</Link><br />
                <span style={{color:'black'}}></span>
                <Link to="/signup" className="signup-link">Signup</Link>
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* मोबाइल सर्च और कार्ट */}
        <div className="mobile-bottom-row">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
          <Link to="/cart" className="cart-icon">
            <span role="img" aria-label="cart">🛒</span>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </Link>
        </div>

        {/* मोबाइल ड्रॉपडाउन मेनू */}
        <nav className={`nav-menu-mobile ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link-mobile" onClick={toggleMenu}>Home</Link>
          <Link to="/categories" className="nav-link-mobile" onClick={toggleMenu}>Category</Link>
          <Link to="/contact" className="nav-link-mobile" onClick={toggleMenu}>Contact</Link>
          <Link to="/about" className="nav-link-mobile" onClick={toggleMenu}>About</Link>
        </nav>
      </div>
    </header>
  );
};
    

export default Header




