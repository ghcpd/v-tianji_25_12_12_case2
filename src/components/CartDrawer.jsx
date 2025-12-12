import React from 'react'
import CartItem from './CartItem'

export default function CartDrawer({ open, items, onInc, onDec, onRemove }) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0)
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 9.99
  const total = subtotal + shipping

  return (
    <div className="panel cart-panel card-spotlight">
      <div className="glow" />
      <div style={{ display: open ? 'block' : 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 18 }}>Your Cart</div>
            <div className="muted">Items ready for checkout</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="muted">Subtotal</div>
            <div style={{ fontWeight: 900 }}>${subtotal.toFixed(2)}</div>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          {items.length === 0 ? (
            <div className="cart-empty">
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Your cart is empty</div>
              <div className="muted">Add items to get started — checkout is just a few clicks away.</div>
            </div>
          ) : (
            <div className="cart-items" data-testid="cart-items">
              {items.map((it) => (
                <CartItem key={it.id} item={it} onInc={onInc} onDec={onDec} onRemove={onRemove} />
              ))}
            </div>
          )}
        </div>

        <div className="cart-footer">
          <div>
            <div className="muted">Shipping</div>
            <div style={{ fontWeight: 900 }}>${shipping === 0 ? 'FREE' : shipping.toFixed(2)}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="muted">Total</div>
            <div style={{ fontWeight: 900, fontSize: 18 }}>${total.toFixed(2)}</div>
            <div style={{ marginTop: 10 }}>
              <button className="checkout">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
