import React, { useState, useEffect } from 'react';
import { productService } from '../services/api';
import Hero from './Hero';
import OfferBanner from './OfferBanner';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['All', 'Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Sports', 'Beauty', 'Toys', 'Other'];

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const category = selectedCategory === 'All' || selectedCategory === '' ? '' : selectedCategory;
      const response = await productService.getAllProducts(category);
      setProducts(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === 'All' ? '' : category);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">⚠️ {error}</p>
        <button onClick={fetchProducts} className="retry-button">Retry</button>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <OfferBanner />
      
      <div className="product-list-container">
        <div className="container">
          <div className="header-section">
            <h2 className="page-title">FEATURED PRODUCTS</h2>
            <p className="page-subtitle">Explore our premium collection</p>
          </div>

          <div className="filter-section">
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${(category === 'All' && !selectedCategory) || category === selectedCategory ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {products.length === 0 ? (
            <div className="empty-state">
              <p className="empty-message">No products found in this category</p>
            </div>
          ) : (
            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;

