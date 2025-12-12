import React from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'
import CartDrawer from './CartDrawer'

export default function ProductList(){
  return (
    <div>
      <section style={{marginBottom:24}}>
        <h2 style={{margin:0}}>Featured Products</h2>
        <p style={{color:'var(--muted)'}}>Handpicked items for your daily life</p>
      </section>
      <div className="products-grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      <CartDrawer />
    </div>
  )
}
