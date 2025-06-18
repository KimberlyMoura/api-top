const express = require('express');
const cors = require('cors');
const app = express();
const produtosRoutes = require('./routes/produtos');

app.use(cors());
app.use(express.json());

app.use('/api/produtos', produtosRoutes);

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000/api/produtos');
});
