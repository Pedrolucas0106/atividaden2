const mongoose = require('mongoose');

// Definir o esquema para o modelo Animal
const animalSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  habitat: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    required: true
  }
});

// Criar o modelo Animal com base no esquema
const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
