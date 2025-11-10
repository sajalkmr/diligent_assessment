const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium over-ear headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals.',
    price: 79.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    stock: 50
  },
  {
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracker with heart rate monitor, GPS, sleep tracking, and smartphone notifications. Water-resistant up to 50 meters.',
    price: 149.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    stock: 35
  },
  {
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable 100% organic cotton t-shirt. Available in multiple colors. Breathable fabric perfect for everyday wear.',
    price: 24.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    stock: 100
  },
  {
    name: 'Leather Crossbody Bag',
    description: 'Handcrafted genuine leather crossbody bag with adjustable strap. Multiple compartments for organization. Timeless design.',
    price: 89.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500',
    stock: 25
  },
  {
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free, leak-proof design. 32 oz capacity.',
    price: 29.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    stock: 75
  },
  {
    name: 'Non-Stick Cookware Set',
    description: 'Professional-grade 10-piece non-stick cookware set. Dishwasher safe, oven safe up to 400°F. Includes pots, pans, and lids.',
    price: 129.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500',
    stock: 20
  },
  {
    name: 'The Science of Productivity',
    description: 'Bestselling guide to maximizing productivity and achieving your goals. Evidence-based strategies from leading researchers.',
    price: 16.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
    stock: 60
  },
  {
    name: 'Yoga Mat Premium',
    description: 'Extra-thick yoga mat with superior cushioning and non-slip surface. Eco-friendly TPE material. Includes carrying strap.',
    price: 39.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    stock: 45
  },
  {
    name: 'Resistance Bands Set',
    description: 'Complete set of 5 resistance bands with different resistance levels. Perfect for home workouts, physical therapy, and strength training.',
    price: 19.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500',
    stock: 80
  },
  {
    name: 'Natural Face Serum',
    description: 'Anti-aging face serum with vitamin C, hyaluronic acid, and natural botanicals. Hydrates, brightens, and reduces fine lines.',
    price: 34.99,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    stock: 40
  },
  {
    name: 'Wireless Gaming Mouse',
    description: 'High-precision wireless gaming mouse with customizable RGB lighting, 16000 DPI sensor, and ergonomic design for extended gaming sessions.',
    price: 59.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    stock: 30
  },
  {
    name: 'Portable Bluetooth Speaker',
    description: 'Compact waterproof Bluetooth speaker with 360° sound, 12-hour battery life, and built-in microphone. Perfect for outdoor adventures.',
    price: 44.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    stock: 55
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    await Product.deleteMany();
    console.log('Existing products deleted');

    await Product.insertMany(products);
    console.log('Sample products added successfully');

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedProducts();

