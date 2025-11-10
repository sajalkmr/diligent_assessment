import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    updateQuantity(productId, newQuantity);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-cart-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Add some products to get started!</p>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.product._id} className="cart-item">
              <img 
                src={item.product.image} 
                alt={item.product.name}
                className="cart-item-image"
              />
              
              <div className="cart-item-details">
                <Link to={`/product/${item.product._id}`} className="cart-item-name">
                  {item.product.name}
                </Link>
                <p className="cart-item-price">${item.product.price.toFixed(2)}</p>
              </div>

              <div className="cart-item-actions">
                <div className="cart-quantity-controls">
                  <button 
                    onClick={() => handleQuantityChange(item.product._id, item.quantity, -1)}
                    className="cart-quantity-btn"
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="cart-quantity-value">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.product._id, item.quantity, 1)}
                    className="cart-quantity-btn"
                    disabled={item.quantity >= item.product.stock}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </div>

                <button 
                  onClick={() => removeFromCart(item.product._id)}
                  className="remove-item-btn"
                  title="Remove item"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          
          <div className="summary-row">
            <span>Tax</span>
            <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
          </div>
          
          <div className="summary-divider"></div>
          
          <div className="summary-row total">
            <span>Total</span>
            <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

          <Link to="/" className="continue-shopping-link">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

