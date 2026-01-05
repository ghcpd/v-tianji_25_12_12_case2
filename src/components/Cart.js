import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import './Cart.css';

function Cart({ items, isOpen, onClose, onUpdateQuantity, onRemoveItem }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-panel">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        <div className="cart-items-container">
          {items.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-icon">🛒</span>
              <p>Your cart is empty</p>
              <button className="continue-shopping" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <span>{item.image}</span>
                  </div>

                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="quantity-control">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity for ${item.name}`}
                      className="qty-button"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity for ${item.name}`}
                      className="qty-button"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="remove-button"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="price-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="checkout-button">
              Proceed to Checkout
            </button>

            <button className="continue-button" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
