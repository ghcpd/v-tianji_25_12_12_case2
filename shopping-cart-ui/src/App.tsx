import React, { useMemo, useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CartDrawer from './components/CartDrawer'
import { products, Product } from './data/products'

type CartItem = { product: Product; quantity: number }

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [items, setItems] = useState<CartItem[]>([])

  const cartCount = useMemo(() => items.reduce((s, it) => s + it.quantity, 0), [items])

  function addToCart(product: Product) {
    setItems((prev) => {
      const existing = prev.find((p) => p.product.id === product.id)
      if (existing) {
        return prev.map((p) => (p.product.id === product.id ? { ...p, quantity: p.quantity + 1 } : p))
      }
      return [...prev, { product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  function updateQty(productId: string, qty: number) {
    setItems((prev) => prev.map((p) => (p.product.id === productId ? { ...p, quantity: qty } : p)).filter((p) => p.quantity > 0))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600 mb-4">Hand-picked items with elevated design and quality.</p>
          </div>
          <ProductList products={products} onAdd={addToCart} />
        </section>
      </main>
      <CartDrawer open={cartOpen} items={items} onClose={() => setCartOpen(false)} onUpdate={updateQty} />
    </div>
  )
}
