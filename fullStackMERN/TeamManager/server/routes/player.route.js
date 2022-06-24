const PlayerController = require('../controller/player.controller');
module.exports = function(app){
    app.post('/api/player', PlayerController.createPlayer);
    app.get('/api/allPlayers',PlayerController.getAllPlayers);
    // app.get('/api/product/:id',ProductController.getProduct);
    app.delete('/api/player/:id',PlayerController.deletePlayer);
    app.put('/api/player/:id', PlayerController.updatePlayer);
    
}