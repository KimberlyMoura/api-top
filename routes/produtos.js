const express = require('express');
const router = express.Router();

let produtos = [
  { id: 1, nome: "Pizza Margherita", tipo: "comida", preco: 35.00 },
  { id: 2, nome: "Suco de Laranja", tipo: "bebida", preco: 8.50 }
];

router.get('/', (req, res) => {
  res.json(produtos);
});

router.post('/', (req, res) => {
  const novo = { id: produtos.length + 1, ...req.body };
  produtos.push(novo);
  res.status(201).json(novo);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex(p => p.id === id);
  if (index !== -1) {
    produtos[index] = { id, ...req.body };
    res.json(produtos[index]);
  } else {
    res.status(404).send("Produto não encontrado.");
  }
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  produtos = produtos.filter(p => p.id !== id);
  res.status(204).send();
});

module.exports = router;
