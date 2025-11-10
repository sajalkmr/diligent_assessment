# E-Commerce Website - Diligent Theme

A full-stack e-commerce application built with the MERN stack featuring a clean, modern Diligent-inspired design (white, red, black color scheme).

## Screenshots

![Homepage](pic1.png)
*Product listing with Diligent theme*

![Product Details](pic2.png)
*Product detail page and shopping cart*

## Features

- Browse products with category filtering
- Add to cart with quantity selection
- Persistent cart using localStorage
- Fully responsive design
- Hero section with call-to-action
- Promotional offer banner

## Tech Stack

**Frontend:** React.js, React Router, Context API, Axios  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Theme:** Diligent colors - `#FFFFFF` (white), `#E53935` (red), `#111111` (black), `#F5F5F5` (gray)

## Quick Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier)

### 1. MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. Add database user
4. Whitelist IP (or use 0.0.0.0/0)
5. Copy connection string

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your MongoDB URI
node seed.js
npm run dev
```
Server runs on http://localhost:5000

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```
App opens at http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product |
| POST | `/api/cart/validate` | Validate cart items |

## Environment Variables

**Backend (.env)**
```
PORT=5000
MONGODB_URI=your_mongodb_uri
NODE_ENV=development
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Troubleshooting

**Cannot connect to MongoDB:**
- Check MongoDB URI in `backend/.env`
- Verify IP is whitelisted in MongoDB Atlas

**Port 5000 in use:**
- Change PORT in `backend/.env`

**Products not loading:**
- Ensure backend is running
- Check `REACT_APP_API_URL` in `frontend/.env`

## Deployment

**Backend (Render):** Deploy from GitHub, set `MONGODB_URI` env var  
**Frontend (Vercel):** Deploy frontend directory, set `REACT_APP_API_URL` env var  
**Database:** MongoDB Atlas (already cloud-hosted)

## Documentation

- [Technical Architecture](TECHNICAL_ARCHITECTURE.md) - System design
- [Prompts Documentation](PROMPTS_DOCUMENTATION.md) - All prompts used


## License

MIT

---

**Built with the MERN Stack**
