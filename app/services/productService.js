const productRepository = require('../repositories/productRepository');

exports.addProduct = (name, price) => {
    if (!name || price === undefined) {
        throw new Error('Nome e preço são obrigatórios.');
    }

    if (price < 0) {
        throw new Error('O preço não pode ser negativo.');
    }

    const exists = productRepository.findByName(name);
    if (exists) {
        throw new Error('Produto com este nome já existe.');
    }

    const product = { name, price };
    productRepository.add(product);
    return product;
};

exports.getAllProducts = () => {
    return productRepository.getAll();
};
 
