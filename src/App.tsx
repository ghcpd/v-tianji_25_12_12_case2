import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import { CartProvider } from './lib/cart-context'

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main className="content">
          <ProductList />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
