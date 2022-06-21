const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String ,
        min:[3,
            "name at least 3 characters"],
        required: [
            true,
            "Title is required"
        ],
        
        

    },
    
    
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);