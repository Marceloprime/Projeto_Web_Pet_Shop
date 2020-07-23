const Mongoose = require("mongoose")
const Schema = Mongoose.Schema;

const schema = new Schema({
    titulo: { type:String, required:true, trim:true },
    slug: { type:String, required:true, trim: true, index:true, unique:true },
    description: { type:String, required:true, trim:true },
    
})

module.exports = {
    model: Mongoose.model('Produto', schema)
}