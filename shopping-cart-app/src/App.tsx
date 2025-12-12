import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onCartClick={handleCartClick} />
        <main>
          <ProductList />
        </main>
        <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
      </div>
    </CartProvider>
  );
}

export default App;
