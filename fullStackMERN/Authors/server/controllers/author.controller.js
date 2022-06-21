const { Author } = require('../models/author.model');

    // The method below is new
    
module.exports.createAuthor = (request, response) => {
    const { name} = request.body;
    console.log("name = ", name)
    Author.create({
        name,
       
    })
        .then(product => response.json(product))
        .catch(err => {response.status(400).json(err)
        })
}
module.exports.getAllAuthors=(request,response)=> {
    Author.find({})
        .then(Authors => response.json(Authors))
        .catch(err => response.json(err))
}
module.exports.getAuthor=(request,response)=>{
    Author.findOne({_id:request.params.id})
    .then(author => response.json(author))
    .catch(err => response.json(err))
}
module.exports.deleteAuthor=(request,response)=>{
    Author.deleteOne({_id:request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.status(400).json(err))
}