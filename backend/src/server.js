const express = require('express');
const cors = require('cors');
const { categories, products } = require('../../database/catalog');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }));
app.use(express.json());
app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'AMUTHAM API' }));
app.get('/api/categories', (_req, res) => res.json(categories));
app.get('/api/products', (req, res) => {
  const q = String(req.query.q || '').trim().toLowerCase(), category = String(req.query.category || '').trim().toLowerCase();
  res.json(products.filter(p => (!q || `${p.name} ${p.restaurant} ${p.category} ${p.tags.join(' ')}`.toLowerCase().includes(q)) && (!category || category === 'all' || p.category.toLowerCase() === category)));
});
app.get('/api/restaurants', (_req, res) => res.json([...new Map(products.map(({ restaurant, category, rating, eta }) => [restaurant, { restaurant, category, rating, eta }])).values()]));
app.post('/api/orders', (req, res) => {
  if (!Array.isArray(req.body.items) || !req.body.items.length) return res.status(400).json({ message: 'Add at least one item before placing an order.' });
  res.status(201).json({ message: 'Order created', orderId: `AMU-${Date.now()}`, status: 'placed' });
});
app.listen(port, () => console.log(`AMUTHAM API running on port ${port}`));

