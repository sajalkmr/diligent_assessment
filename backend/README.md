# E-Commerce Backend API

RESTful API backend for the E-Commerce website built with Node.js, Express, and MongoDB.

## Features

- Product CRUD operations
- Cart validation
- MongoDB integration with Mongoose
- Error handling middleware
- CORS enabled
- Environment variable configuration

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variables
- **CORS** - Cross-origin resource sharing

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB URI:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

## Running the Server

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## Seeding the Database

To populate the database with sample products:
```bash
node seed.js
```

## API Endpoints

### Products

**Get all products**
```http
GET /api/products
```

**Get product by ID**
```http
GET /api/products/:id
```

**Create product**
```http
POST /api/products
Content-Type: application/json

{
  "name": "Product Name",
  "description": "Product Description",
  "price": 99.99,
  "category": "Electronics",
  "image": "https://example.com/image.jpg",
  "stock": 50
}
```

**Update product**
```http
PUT /api/products/:id
Content-Type: application/json
```

**Delete product**
```http
DELETE /api/products/:id
```

### Cart

**Validate cart items**
```http
POST /api/cart/validate
Content-Type: application/json

{
  "items": [
    {
      "productId": "507f1f77bcf86cd799439011",
      "quantity": 2
    }
  ]
}
```

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── models/
│   └── Product.js         # Product schema
├── routes/
│   ├── products.js        # Product routes
│   └── cart.js            # Cart routes
├── middleware/
│   └── errorHandler.js    # Error handling
├── .env                   # Environment variables
├── .env.example           # Environment template
├── server.js              # Entry point
├── seed.js                # Database seeder
└── package.json
```

## Error Handling

All errors return JSON:
```json
{
  "success": false,
  "error": "Error message"
}
```

## Deployment

### Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set environment variables
5. Deploy

## License

MIT

