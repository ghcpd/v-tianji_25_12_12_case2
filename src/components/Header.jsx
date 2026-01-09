import React from 'react'

export default function Header({ count, onToggleCart }) {
  return (
    <div className="header">
      <div className="brand">
        <div className="logo">SC</div>
        <div>
          <div className="title">Studio Cart</div>
          <div className="subtitle">Sleek items, exceptional design</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div className="muted">Free shipping over $100</div>
        <button className="cart-btn" onClick={onToggleCart} aria-label="Open cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="#dfe9f5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="20" r="1" fill="#dfe9f5" />
            <circle cx="18" cy="20" r="1" fill="#dfe9f5" />
          </svg>
          <div className="cart-badge" data-testid="cart-count">{count}</div>
        </button>
      </div>
    </div>
  )
}
