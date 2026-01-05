import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { mockProducts, categories } from './data/mockProducts';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const categoryMatch =
        selectedCategory === 'All Products' ||
        product.category === selectedCategory;

      const searchMatch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Header
        cartCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
      />

      <div className="main-content">
        <Filters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="content-area">
          <ProductList
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;
