You are an expert full-stack engineer and system architect.

# Task
Create an **E-Commerce Website** that enables users to explore products, view product details, and manage a shopping cart.

The site should have a clean and responsive UI, a lightweight backend to handle data operations, and basic state management for cart functionality.

Use the following **design brief** for UI and theme (Diligent-inspired color scheme: white, red, black, light gray):

Create a clean, modern e-commerce website design inspired by the Diligent theme.

Use a white, red, black, and light gray color scheme:
- Primary background: #FFFFFF
- Accent color (buttons, highlights, offers): #E53935
- Text color: #111111
- Subtle borders/backgrounds: #F5F5F5

Design elements:
1. Header:
   - White background with left-aligned logo, centered navigation (Home, Shop, Categories, About, Contact), and right-aligned cart + login buttons.
   - Cart icon has a small red badge for item count.
   - Hover effects in red.

2. Hero section:
   - Left side: bold heading “Elevate your style. Simplify shopping.”
   - Subtext: “Discover premium products at the best prices — fast, easy, reliable.”
   - Prominent red “Shop Now” button (rounded corners).
   - Right side: large product image or rotating carousel.

3. Product grid:
   - White cards with light gray borders.
   - Each product card includes an image, product name (black), price (red), and “Add to Cart” button (red, rounded).
   - Grid layout: 3–4 products per row.

4. Offer banner:
   - Full-width red strip with white text: “🔥 Flat 50% Off on New Arrivals! Shop Now →”

5. Footer:
   - Light gray background with three columns:
     - Quick Links
     - Customer Support
     - Newsletter signup
   - Bottom copyright line in black.

Typography:
- Use a clean sans-serif font (Inter, Poppins, or Nunito Sans).
- Bold uppercase headings, regular-weight body text.
- Red used for CTAs, prices, and hover accents.

Style:
- Minimalist, professional, and user-friendly.
- Rounded corners, subtle shadows, consistent spacing.
- Responsive layout suitable for desktop and mobile.

Overall vibe:
Simple, trustworthy, and modern — an elegant retail website that uses the Diligent color palette and clean layout.

# Artifacts to Deliver
- Technical architecture documentation
- Code base (frontend + backend)
- Prompts used for generating tech documentation and code base

# Tech Stack Recommendations
**Frontend:**
- React.js (or Next.js)
- React Router for navigation

**Backend:**
- Node.js with Express.js

**Database:**
- MongoDB Atlas

# Output Requirements
1. **Technical Architecture Document**  
   Include system overview, architecture diagram (ASCII/Markdown), API design, data models, and folder structure.

2. **Code Base**  
   Provide modular, production-ready code for frontend and backend with comments, following best practices.

3. **Prompts Used**  
   List all prompts used to generate documentation and code base for reproducibility.

# Constraints
- Must be responsive and lightweight (suitable for deployment on Vercel / Render / MongoDB Atlas).
- Use modern ES6 syntax.
- Include `.env` variable usage where needed.
- Code should be clean, modular, and easy to extend.

# Deliver Format
Markdown documentation with code blocks and clear instructions to run locally.

Begin by outlining:
1. The overall system architecture
2. Data flow between frontend, backend, and database
3. Key decisions and assumptions before writing any code
