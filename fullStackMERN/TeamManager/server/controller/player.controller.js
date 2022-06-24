const { Player } = require('../models/player.model');

    // The method below is new
module.exports.createPlayer = (request, response) => {
    const { name, position, status} = request.body;
    console.log(request.body)
    Player.create({
        name,
        position,
        status
    })
        .then(player => response.json(player))
        .catch(err => response.json(err));
}
module.exports.getAllPlayers=(request,response)=> {
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.json(err))
}
// module.exports.getProduct=(request,response)=>{
//     Product.findOne({_id:request.params.id})
//     .then(person => response.json(person))
//     .catch(err => response.json(err))
// }
module.exports.deletePlayer=(request,response)=>{
    console.log(request.params.id)
    Player.deleteOne({_id:request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}

module.exports.updatePlayer = (request, response) => {
    console.log(request.body)
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.json(err))
}