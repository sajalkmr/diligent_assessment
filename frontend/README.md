# E-Commerce Frontend

Modern React.js frontend for the E-Commerce website with responsive design and intuitive user experience.

## Features

- Browse products with category filtering
- View detailed product information
- Add products to shopping cart
- Manage cart (update quantities, remove items)
- Persistent cart using localStorage
- Fully responsive design
- Context API for state management

## Tech Stack

- **React.js** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management
- **CSS3** - Styling with modern layouts

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your API URL:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the App

Development mode:
```bash
npm start
```

The app will open at `http://localhost:3000`

Build for production:
```bash
npm run build
```

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.jsx
│   │   └── Cart.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Routes

- `/` - Product listing page
- `/product/:id` - Product detail page
- `/cart` - Shopping cart page

## State Management

Uses React Context API for cart management:
- Add items to cart
- Remove items from cart
- Update item quantities
- Calculate cart total
- Persist cart to localStorage

## Responsive Design

Mobile-first approach with breakpoints:
- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## Deployment

### Vercel

1. Push code to GitHub
2. Import project on Vercel
3. Set environment variable: `REACT_APP_API_URL`
4. Deploy

### Build Output

The `build` folder contains optimized production build.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

