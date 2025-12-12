import React from 'react'
import { Product } from '../data/products'

type CartItem = { product: Product; quantity: number }

type Props = {
  open: boolean
  items: CartItem[]
  onClose: () => void
  onUpdate: (productId: string, qty: number) => void
}

export default function CartDrawer({ open, items, onClose, onUpdate }: Props) {
  const total = items.reduce((s, it) => s + it.product.price * it.quantity, 0)
  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-lg transform transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        } p-6 flex flex-col`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose} aria-label="close-cart" className="text-gray-500">✕</button>
        </div>
        <div className="flex-1 overflow-auto">
          {items.length === 0 ? (
            <div className="text-gray-500">Your cart is empty. Add something delightful!</div>
          ) : (
            items.map((it) => (
              <div key={it.product.id} className="flex items-center gap-3 py-3 border-b">
                <div className="h-12 w-12 bg-gray-100 rounded flex items-center justify-center">🛍️</div>
                <div className="flex-1">
                  <div className="font-medium">{it.product.name}</div>
                  <div className="text-sm text-gray-500">${it.product.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    aria-label={`dec-${it.product.id}`}
                    onClick={() => onUpdate(it.product.id, Math.max(0, it.quantity - 1))}
                    className="px-2 py-1 bg-gray-100 rounded"
                  >
                    −
                  </button>
                  <div>{it.quantity}</div>
                  <button
                    aria-label={`inc-${it.product.id}`}
                    onClick={() => onUpdate(it.product.id, it.quantity + 1)}
                    className="px-2 py-1 bg-gray-100 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2 text-lg">
            <div className="text-gray-600">Total</div>
            <div className="font-bold">${total.toFixed(2)}</div>
          </div>
          <button className="w-full py-2 bg-pink-500 text-white rounded-md">Checkout</button>
        </div>
      </aside>
    </div>
  )
}
