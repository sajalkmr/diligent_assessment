const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/validate', async (req, res, next) => {
  try {
    const { items } = req.body;
    
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid cart items format'
      });
    }

    const validationResults = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findById(item.productId);
        
        if (!product) {
          return {
            productId: item.productId,
            available: false,
            reason: 'Product not found'
          };
        }
        
        if (product.stock < item.quantity) {
          return {
            productId: item.productId,
            available: false,
            reason: 'Insufficient stock',
            currentStock: product.stock
          };
        }
        
        return {
          productId: item.productId,
          available: true,
          currentStock: product.stock
        };
      })
    );

    const allValid = validationResults.every(result => result.available);

    res.status(200).json({
      success: true,
      valid: allValid,
      items: validationResults
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

