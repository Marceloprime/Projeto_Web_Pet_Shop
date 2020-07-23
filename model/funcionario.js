const Mongoose = require("mongoose")
const Schema = Mongoose.Schema;

const schema = new Schema({
    id: { type:String, required:true, unique: true, index: true },
    cpf: { type:String, required:true, unique:true, index:true },
    nome: { type:String, required: true },
    dataNascimento: { type:String },
    sexo: { type:String, default:"Não informado" },
    salario: { type:Number, default:-1 },
    email: { type:String, default:"Não informado" },
    senha: { type:String, required:true }
})

module.exports = {
    model: Mongoose.model('Funcionario', schema)
}

/*
type
required
trim - tira espaços das extremidades
index - cria um indíce
unique
default
*/