import React from 'react'
import { useCart } from '../lib/cart-context'

export default function Header() {
  const { items, total } = useCart()
  const count = items.reduce((s, i) => s + i.qty, 0)
  return (
    <header className="header">
      <div className="logo">
        <div style={{width:44,height:44,background:'linear-gradient(90deg,#06b6d4,#3b82f6)',borderRadius:10}}></div>
        <h1>Prism Store</h1>
      </div>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <div className="search">Search products</div>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <div style={{textAlign:'right'}}>
            <div style={{fontWeight:700}}>${total.toFixed(2)}</div>
            <div style={{fontSize:12, color:'var(--muted)'}}>{count} items</div>
          </div>
        </div>
      </div>
    </header>
  )
}
