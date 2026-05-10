import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import CartSidebar from './components/CartSidebar';
import { products } from './data/products';
import { useCart } from './context/CartContext';
import './styles/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart } = useCart();

  return (
    <BrowserRouter>
      <div className="app">
        <Header 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage 
                  products={products}
                  searchTerm={searchTerm}
                />
              }
            />
            <Route
              path="/category/:category"
              element={<CategoryPage products={products} searchTerm={searchTerm} />}
            />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        <CartSidebar 
          isOpen={isCartOpen}
          onClose={toggleCart}
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
