const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/valor', (req, res) => {
  const { valor } = req.body;
  const query = 'INSERT INTO valores (valor) VALUES (?)';
  db.query(query, [valor], (err, result) => {
    if (err) {
      console.error('Erro ao inserir valor:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }
    res.status(201).json({ message: 'Valor inserido com sucesso' });
  });
});

module.exports = router;
