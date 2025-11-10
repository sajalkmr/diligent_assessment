import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const productService = {
  getAllProducts: async (category = '') => {
    const params = category ? { category } : {};
    const response = await api.get('/products', { params });
    return response.data;
  },

  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  createProduct: async (productData) => {
    const response = await api.post('/products', productData);
    return response.data;
  }
};

export const cartService = {
  validateCart: async (items) => {
    const response = await api.post('/cart/validate', { items });
    return response.data;
  }
};

export default api;

