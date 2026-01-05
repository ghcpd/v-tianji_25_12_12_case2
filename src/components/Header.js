import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import './Header.css';

function Header({ cartCount, onCartClick, onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="logo">
            <span className="logo-emoji">🛍️</span>
            <h1>ShopHub</h1>
          </div>
        </div>

        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
            aria-label="Search products"
          />
        </div>

        <button 
          className="cart-button"
          onClick={onCartClick}
          aria-label={`Shopping cart with ${cartCount} items`}
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="mobile-menu">
          <a href="#" className="menu-item">Home</a>
          <a href="#" className="menu-item">Categories</a>
          <a href="#" className="menu-item">Deals</a>
          <a href="#" className="menu-item">About</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
