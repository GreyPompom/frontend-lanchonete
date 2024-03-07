const express = require('express');
const { allOrigins, specificOrigin } = require('./corsConfig');
const { router } = require('./routes'); // Supondo que você tenha um arquivo de rotas separado

const app = express();

app.use(allOrigins); // Habilita o CORS para todas as origens
// Ou app.use(specificOrigin); para habilitar o CORS para uma origem específica

app.use(express.json());

// Rotas da sua aplicação
app.use('/api', router); // Exemplo de uso de rotas

const PORT = process.env.PORT || 1523;

app.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});