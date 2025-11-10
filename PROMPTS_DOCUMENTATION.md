# Prompts Documentation - Diligent E-Commerce Website

All prompts used to generate this project.

## Architecture Prompts

**Prompt 1: System Architecture**
- Design three-tier architecture (React, Express, MongoDB)
- Define data flow and API structure
- Plan state management with Context API

**Prompt 2: Data Models**
- Create Product schema (name, description, price, category, image, stock)
- Add validation rules and indexes

**Prompt 3: API Endpoints**
- Design REST API: GET/POST /api/products, POST /api/cart/validate
- Define JSON request/response formats

---

## Backend Prompts

**Prompt 4: Express Server**
- Set up server with MongoDB, CORS, error handling
- Configure dotenv and middleware

**Prompt 5: Product Model**
- Create Mongoose schema with validation
- Add category enum and timestamps

**Prompt 6: Product Routes**
- Implement CRUD operations with error handling

**Prompt 7: Cart Validation**
- Create endpoint to validate cart items against stock

**Prompt 8: Database Seeder**
- Script to seed 12 sample products with Unsplash images

**Prompt 9: Error Handler**
- Centralized middleware for consistent error responses

---

## Frontend Prompts

**Prompt 10: React App Structure**
- Set up React Router, Context API, Axios service layer

**Prompt 11: Cart Context**
- Create CartContext with localStorage persistence
- Functions: addToCart, removeFromCart, updateQuantity

**Prompt 12: API Service**
- Axios client with getAllProducts, getProductById, validateCart

**Prompt 13-17: Core Components**
- Navbar with cart badge
- ProductCard with hover effects
- ProductList with category filtering
- ProductDetail with quantity selector
- Cart page with order summary

---

## Diligent Theme Prompts

**Prompt 18: Color Scheme**
- Apply Diligent colors: White (#FFFFFF), Red (#E53935), Black (#111111), Gray (#F5F5F5)
- Update all CSS with variables

**Prompt 19: Header Redesign**
- White background, grid layout (logo left, nav center, cart right)
- Black text with red hover effects

**Prompt 20: Hero Section**
- Two-column layout with heading and CTA
- "Elevate your style. Simplify shopping."

**Prompt 21: Product Cards**
- White cards with gray borders, red accents
- Hover: border turns red, subtle shadow

**Prompt 22: Offer Banner**
- Full-width red strip with promotional text

**Prompt 23: Footer**
- Three columns: Quick Links, Support, Newsletter
- Light gray background

**Prompt 24-28: Design Standards**
- Typography (Inter font, bold headings)
- Button styles (primary red, outlined)
- Responsive breakpoints
- ProductDetail and Cart page redesigns

---

## Documentation Prompts

**Prompt 29: Technical Architecture**
- System overview, diagrams, API specs, data models

**Prompt 30-31: READMEs**
- Backend and frontend documentation

**Prompt 32: Main README**
- Project overview with setup instructions

**Prompt 33: Quick Start**
- 10-minute setup guide

**Prompt 34: Prompts Documentation**
- This file - all prompts used

**Prompt 35: Project Summary**
- Deliverables checklist and statistics

---

## Diligent Theme Specs

**Colors:**
```css
--color-white: #FFFFFF   /* Background */
--color-red: #E53935     /* Accent, buttons */
--color-black: #111111   /* Text */
--color-gray: #F5F5F5    /* Subtle backgrounds */
```

**Typography:**
- Font: Inter
- Headings: Bold (700-800), uppercase
- Buttons: Semi-bold (600), uppercase

**Components:**
- Header: White, centered nav
- Hero: Two-column, red CTA
- Cards: White with gray borders, red on hover
- Banner: Full-width red
- Footer: Three columns, gray

---

*Total Prompts: 35*
