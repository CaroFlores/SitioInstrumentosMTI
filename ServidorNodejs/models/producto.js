'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductoSchema=  Schema({
_creator:  { type: Schema.ObjectId, ref: 'Establecimiento' },
codigo: Number,
nombre: String,
precio: Number,
descripcion: String,
marca: String,
modelo: String,
origen: String
});



module.exports = mongoose.model('Producto', ProductoSchema, 'producto');