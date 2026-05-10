import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

function Header({ searchTerm, onSearchChange }) {
  const { getTotalItems, toggleCart } = useCart();
  const categories = ['Electronics', 'Accessories', 'Home', 'Sports'];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <Link to="/" className="header-logo">
              <h1 className="header-title">🛒 QuickCart</h1>
            </Link>
            <p className="header-subtitle">Your one-stop shop for everything</p>
          </div>
          
          <button className="cart-icon-btn" onClick={toggleCart}>
            🛒
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </button>
        </div>

        <div className="nav-and-search">
          <nav className="header-nav">
            <Link to="/" className="nav-link">Home</Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${encodeURIComponent(category)}`}
                className="nav-link"
              >
                {category}
              </Link>
            ))}
            <Link to="/cart" className="nav-link">Cart</Link>
          </nav>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;