import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

// Rota 1: A página inicial (http://localhost:3001)
app.get('/', (req, res) => {
  res.send('O Backend do Meu Mercado está online e funcionando!');
});

// Rota 2: A API de produtos (http://localhost:3001/produtos)
app.get('/produtos', (req, res) => {
  const listaDeProdutos = [
    { id: 1, nome: 'Feijão Preto 1kg', preco: 7.90 },
    { id: 2, nome: 'Arroz Integral 5kg', preco: 22.50 },
    { id: 3, nome: 'Leite Integral 1L', preco: 4.80 }
  ];

  res.json(listaDeProdutos);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`);
});