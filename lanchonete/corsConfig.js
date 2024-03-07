const cors = require('cors');

// Habilitar CORS para todas as origens
const allOrigins = cors();

// Ou, habilitar CORS para uma origem específica
const specificOrigin = cors({
  origin: 'http://localhost:5173'
});

module.exports = { allOrigins, specificOrigin };