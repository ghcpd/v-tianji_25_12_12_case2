import React from 'react'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product" data-testid={`product-${product.id}`}>
      <div className="thumb">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="meta">
        <h3>{product.name}</h3>
        <div className="muted">{product.desc}</div>
        <div className="price">${product.price.toFixed(2)}</div>
      </div>
      <div className="actions">
        <button
          className="add-btn"
          data-testid={`add-btn-${product.id}`}
          onClick={() => onAdd(product)}
        >
          Add to Cart
        </button>
        <button className="ghost">Details</button>
      </div>
    </div>
  )
}
