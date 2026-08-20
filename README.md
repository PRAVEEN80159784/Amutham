# AMUTHAM â€” Food delivery demo

AMUTHAM is a responsive food-ordering application for a Tamil-first local delivery use case. It currently uses a curated local catalog as its database boundary and is ready to replace with MongoDB or another persistent store.

## Project structure

```text
amutham-app/
â”œâ”€â”€ frontend/                       # React + Vite customer application
â”‚   â”œâ”€â”€ public/amutham-logo.png     # Brand asset
â”‚   â”œâ”€â”€ src/main.jsx                # Views, menu filtering, cart state and API client
â”‚   â””â”€â”€ src/style.css               # Responsive design system
â”œâ”€â”€ backend/                        # Express API
â”‚   â””â”€â”€ src/
â”‚       â”œâ”€â”€ server.js               # HTTP routes and validation
â”‚       â””â”€â”€ data/catalog.js         # Development catalog implementation
â”œâ”€â”€ database/                       # Data boundary, independent of UI/API
â”‚   â”œâ”€â”€ catalog.js                  # Catalog adapter (36 products, 8 categories)
â”‚   â””â”€â”€ README.md                   # Persistence migration notes
â””â”€â”€ README.md
```

## API

- `GET /api/health`
- `GET /api/categories`
- `GET /api/products?q=&category=`
- `GET /api/restaurants`
- `POST /api/orders` with `{ "items": [...] }`

The frontend reads `VITE_API_URL`, falling back to `http://localhost:5000/api`.

## Run locally

In one terminal:

```bash
cd backend
npm install
npm start
```

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

## Production next steps

Move `backend/src/data/catalog.js` into a persistent database repository, validate checkout identity and prices on the server, restrict CORS with `CLIENT_ORIGIN`, and add authentication, payment, maps and real-time order status before launch. The present Unsplash image URLs are external media; preserve source/licensing requirements or replace them with licensed, self-hosted restaurant photography for production.

