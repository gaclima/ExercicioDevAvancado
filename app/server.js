const express = require('express');
const app = express();
const productController = require('./controllers/productController');

app.use(express.json());

// Rotas
app.post('/products', productController.addProduct);
app.get('/products', productController.getProducts);

// Start do servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
 
