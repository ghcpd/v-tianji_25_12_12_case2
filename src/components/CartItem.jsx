import React from 'react'

export default function CartItem({ item, onInc, onDec, onRemove }) {
  return (
    <div className="cart-item" data-testid={`cart-item-${item.id}`}>
      <div className="ci-thumb">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="ci-meta">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 800 }}>{item.name}</div>
            <div className="muted">${item.price.toFixed(2)}</div>
          </div>
          <div style={{ marginLeft: 12, textAlign: 'right', fontWeight: 800 }}>${(item.price * item.qty).toFixed(2)}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, alignItems: 'center' }}>
          <div className="qty">
            <button aria-label="decrease" onClick={() => onDec(item.id)}>-</button>
            <div style={{ minWidth: 26, textAlign: 'center', fontWeight: 700 }}>{item.qty}</div>
            <button aria-label="increase" onClick={() => onInc(item.id)}>+</button>
          </div>
          <button className="ghost" onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      </div>
    </div>
  )
}
