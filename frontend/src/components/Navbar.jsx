import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartItemsCount } = useCart();
  const itemCount = getCartItemsCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🛍️</span>
          <span className="logo-text">Diligent</span>
        </Link>
        
        <div className="navbar-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">Shop</Link>
          <Link to="/" className="nav-link">Categories</Link>
          <Link to="/" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Contact</Link>
        </div>

        <div className="navbar-right">
          <Link to="/cart" className="nav-link cart-link">
            <span className="cart-icon">🛒</span>
            <span>Cart</span>
            {itemCount > 0 && (
              <span className="cart-badge">{itemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

