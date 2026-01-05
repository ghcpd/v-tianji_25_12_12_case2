import React, { useState } from 'react';
import { Plus, Star, Check } from 'lucide-react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="product-card" role="article" aria-label={`Product: ${product.name}`}>
      <div className="product-image">
        <span className="emoji">{product.image}</span>
      </div>

      <div className="product-content">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-category">{product.category}</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
            />
          ))}
          <span className="rating-text">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="product-footer">
          <div className="price-section">
            <span className="currency">$</span>
            <span className="price">{product.price.toFixed(2)}</span>
          </div>

          <button
            className={`add-button ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdded}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <Check size={18} />
                <span>Added!</span>
              </>
            ) : (
              <>
                <Plus size={18} />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
