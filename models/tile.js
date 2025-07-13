// models/tile.js
const mongoose = require('mongoose');

const tileSchema = new mongoose.Schema({
  modelNumber: { type: String, required: true, unique: true },
  size: { type: String, required: true },
  pricePerBox: { type: Number },
  boxesInStock: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tile', tileSchema);