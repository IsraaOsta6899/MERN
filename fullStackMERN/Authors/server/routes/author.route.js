const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.post('/api/new', AuthorController.createAuthor);
    app.get('/api/authors',AuthorController.getAllAuthors);
    app.get('/api/getOne/:id',AuthorController.getAuthor);
    app.delete('/api/authors/:id',AuthorController.deleteAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
}