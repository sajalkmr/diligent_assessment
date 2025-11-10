# E-Commerce Website - Technical Architecture

## System Overview

Full-stack e-commerce application with Diligent-inspired design (white/red/black color scheme). Three-tier architecture: React.js frontend, Node.js/Express.js API, MongoDB Atlas database.

**Color Palette:**
- White: `#FFFFFF`, Red: `#E53935`, Black: `#111111`, Gray: `#F5F5F5`

---

## Architecture Diagram

```
┌─────────────────────────────────────┐
│  React.js Frontend (SPA)            │
│  - ProductList, ProductDetail, Cart │
│  - CartContext (State Management)   │
│  - localStorage persistence         │
└─────────────────────────────────────┘
              │ HTTP REST API
              ▼
┌─────────────────────────────────────┐
│  Node.js + Express.js API           │
│  - GET/POST /api/products           │
│  - POST /api/cart/validate          │
│  - CORS, Error Handler              │
└─────────────────────────────────────┘
              │ MongoDB Driver
              ▼
┌─────────────────────────────────────┐
│  MongoDB Atlas                      │
│  - products collection              │
└─────────────────────────────────────┘
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (optional `?category=` filter) |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product |
| POST | `/api/cart/validate` | Validate cart items against stock |

**Response Format:**
```json
Success: { "success": true, "data": {...} }
Error:   { "success": false, "error": "message" }
```

---

## Data Models

**Product:**
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  stock: Number,
  createdAt: Date
}
```

**Cart Item (Frontend):**
```javascript
{
  product: { _id, name, price, image, stock },
  quantity: Number
}
```

---

## Tech Stack

**Frontend:** React 18, React Router 6, Context API, Axios  
**Backend:** Node.js 18, Express 4, MongoDB 6, Mongoose 8, CORS  
**Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas

---

## Project Structure

```
backend/
├── config/db.js
├── models/Product.js
├── routes/products.js, cart.js
├── middleware/errorHandler.js
└── server.js

frontend/
├── src/
│   ├── components/Navbar, ProductCard, ProductList, ProductDetail, Cart
│   ├── context/CartContext.jsx
│   └── services/api.js
└── public/
```

---

## Key Decisions

1. **State Management:** Context API (lightweight, no Redux needed)
2. **Cart Persistence:** localStorage (client-side, survives refresh)
3. **Database:** MongoDB Atlas (free tier, flexible schema)
4. **Images:** External URLs (Unsplash, no upload needed)
5. **Theme:** Diligent colors - professional white/red/black design

---

## Environment Variables

**Backend (.env):**
```
PORT=5000
MONGODB_URI=mongodb+srv://...
NODE_ENV=development
```

**Frontend (.env):**
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Deployment

**Frontend (Vercel):** Connect GitHub repo, set `REACT_APP_API_URL`  
**Backend (Render):** Connect GitHub repo, set `MONGODB_URI`  
**Database:** MongoDB Atlas free cluster

---

## Future Enhancements

- User authentication
- Payment integration (Stripe)
- Product search
- Reviews & ratings
- Admin dashboard
