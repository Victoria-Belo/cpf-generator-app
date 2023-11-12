const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Servir arquivos estáticos da pasta 'public'
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Configurar rota para evitar o erro 'Cannot GET /src/index.js'
app.get('/src/*', (req, res) => {
  res.sendFile(path.join(__dirname, req.url));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
