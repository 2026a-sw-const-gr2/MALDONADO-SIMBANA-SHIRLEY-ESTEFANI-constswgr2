'use strict';

const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT ?? 4000;

// Sirve index.html y app.js como archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta raíz por si alguien abre /
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ AudioHub Frontend corriendo en http://localhost:${PORT}`);
  console.log(`   Conectando al Event Manager en http://localhost:3000/events`);
});
