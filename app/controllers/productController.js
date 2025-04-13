const productService = require('../services/productService');

exports.addProduct = (req, res) => {
    const { name, price } = req.body;

    try {
        const product = productService.addProduct(name, price);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getProducts = (req, res) => {
    const products = productService.getAllProducts();
    res.status(200).json(products);
};
 
