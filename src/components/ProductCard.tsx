import React from 'react'
import type { Product } from '../lib/cart-context'
import { useCart } from '../lib/cart-context'

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  return (
    <div className="card">
      <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} />
      <div className="product-name">{product.name}</div>
      <div className="product-desc">{product.description}</div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:12}}>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button className="add-btn" onClick={() => add(product)}>Add</button>
      </div>
    </div>
  )
}
