import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Product = {
  id: string
  name: string
  price: number
  image: string
  description?: string
}

export type CartItem = {
  product: Product
  qty: number
}

type CartContextType = {
  items: CartItem[]
  add: (product: Product) => void
  remove: (productId: string) => void
  clear: () => void
  increase: (productId: string) => void
  decrease: (productId: string) => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function add(product: Product) {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id)
      if (idx < 0) {
        return [...prev, { product, qty: 1 }]
      }
      const next = [...prev]
      next[idx] = { ...next[idx], qty: next[idx].qty + 1 }
      return next
    })
  }

  function remove(productId: string) {
    setItems((prev) => prev.filter((i) => i.product.id !== productId))
  }

  function increase(productId: string) {
    setItems((prev) => prev.map((i) => i.product.id === productId ? { ...i, qty: i.qty + 1 } : i))
  }

  function decrease(productId: string) {
    setItems((prev) => prev.map((i) => {
      if (i.product.id === productId) return { ...i, qty: Math.max(1, i.qty - 1) }
      return i
    }))
  }

  function clear() {
    setItems([])
  }

  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ items, add, remove, clear, increase, decrease, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside a CartProvider')
  return ctx
}
