const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/allProducts',ProductController.getAllProducts);
    app.get('/api/product/:id',ProductController.getProduct);
    app.delete('/api/product/:id',ProductController.deleteProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
}