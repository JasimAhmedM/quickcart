import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';
import '../styles/CategoryPage.css';

function CategoryPage({ products, searchTerm }) {
  const { category } = useParams();
  const { addToCart } = useCart();
  const normalizedCategory = category ? category.toLowerCase() : '';

  const filteredProducts = products.filter((product) => {
    const matchesCategory = product.category.toLowerCase() === normalizedCategory;
    const matchesSearch = searchTerm
      ? product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="category-page">
      <h2 className="category-title">{category} Products</h2>

      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p>😕 No products found in this category.</p>
          <Link to="/" className="back-home-link">
            ← Back to all products
          </Link>
        </div>
      ) : (
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      )}
    </div>
  );
}

export default CategoryPage;
