import React, { useState } from 'react'
import productsData from './data/products'
import ProductList from './components/ProductList'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'
import { motion, AnimatePresence } from 'framer-motion'

function useCart(initial = []) {
  const [items, setItems] = useState(initial)

  function add(product) {
    setItems((s) => {
      const existing = s.find((x) => x.id === product.id)
      if (existing) {
        return s.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x))
      }
      return [...s, { ...product, qty: 1 }]
    })
  }

  function inc(id) {
    setItems((s) => s.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x)))
  }
  function dec(id) {
    setItems((s) => s.map((x) => (x.id === id ? { ...x, qty: Math.max(1, x.qty - 1) } : x)))
  }
  function remove(id) {
    setItems((s) => s.filter((x) => x.id !== id))
  }

  return { items, add, inc, dec, remove }
}

export default function App() {
  const [open, setOpen] = useState(true)
  const cart = useCart()

  return (
    <div className="container">
      <Header count={cart.items.reduce((s, it) => s + it.qty, 0)} onToggleCart={() => setOpen((v) => !v)} />

      <div className="app" style={{ marginTop: 18 }}>
        <div>
          <div className="panel">
            <div className="hero">
              <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4f7c2a5a6b7c9d8e3f1a2b3c4d5e6f7a" alt="hero" />
              <div className="hero-content">
                <h2>Discover beautifully crafted gear</h2>
                <p className="muted">Curated electronics and accessories with premium materials and modern design.</p>
                <div style={{ marginTop: 12 }}>
                  <button className="add-btn" onClick={() => alert('Explore collections coming soon!')}>Explore Collections</button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: 18 }} />

          <div className="panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 900 }}>Featured Products</div>
                <div className="muted">Handpicked for you</div>
              </div>
              <div className="muted">4 items</div>
            </div>

            <ProductList
              products={productsData}
              onAdd={(p) => {
                cart.add(p)
              }}
            />
          </div>
        </div>

        <div>
          <AnimatePresence>
            <motion.div
              key="cart"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
            >
              <CartDrawer open={open} items={cart.items} onInc={cart.inc} onDec={cart.dec} onRemove={cart.remove} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
