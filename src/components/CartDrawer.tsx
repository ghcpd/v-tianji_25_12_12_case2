import React from 'react'
import { useCart } from '../lib/cart-context'

export default function CartDrawer() {
  const { items, increase, decrease, remove, total, clear } = useCart()
  return (
    <aside className="cart-drawer" aria-label="Cart">
      <h3>Cart</h3>
      {items.length === 0 ? (
        <div className="empty">Your cart is empty</div>
      ) : (
        <div>
          {items.map(item => (
            <div className="cart-item" key={item.product.id}>
              <img src={item.product.image} alt={item.product.name} />
              <div style={{flex:1}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div style={{fontWeight:700}}>{item.product.name}</div>
                  <div style={{fontWeight:700}}>${(item.product.price * item.qty).toFixed(2)}</div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:8}}>
                  <div className="qty-control">
                    <button aria-label={`decrease-${item.product.id}`} className="qty-btn" onClick={() => decrease(item.product.id)}>-</button>
                    <div aria-label={`qty-${item.product.id}`}>{item.qty}</div>
                    <button aria-label={`increase-${item.product.id}`} className="qty-btn" onClick={() => increase(item.product.id)}>+</button>
                  </div>
                  <button className="qty-btn" onClick={() => remove(item.product.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:12}}>
            <div style={{fontWeight:700}}>Total</div>
            <div style={{fontWeight:700}}>${total.toFixed(2)}</div>
          </div>
          <div style={{marginTop:12}}>
            <button className="checkout-btn">Checkout</button>
            <div style={{height:8}}/>
            <button className="qty-btn" onClick={clear} style={{width:'100%'}}>Clear Cart</button>
          </div>
        </div>
      )}
    </aside>
  )
}
