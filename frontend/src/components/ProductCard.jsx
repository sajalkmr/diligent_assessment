import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
          {product.stock < 10 && product.stock > 0 && (
            <span className="stock-badge low-stock">Only {product.stock} left</span>
          )}
          {product.stock === 0 && (
            <span className="stock-badge out-of-stock">Out of Stock</span>
          )}
        </div>
      </Link>
      
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <Link to={`/product/${product._id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-description">
          {product.description.substring(0, 80)}...
        </p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <Link to={`/product/${product._id}`} className="view-details">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

