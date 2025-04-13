const products = [];

exports.add = (product) => {
    products.push(product);
};

exports.getAll = () => {
    return products;
};

exports.findByName = (name) => {
    return products.find(p => p.name === name);
};
 
