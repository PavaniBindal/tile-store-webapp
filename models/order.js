const mongoose = require('mongoose');

// models/order.js
const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  slipNumber: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },

  items: [
    {
      tileId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tile', required: true },
      modelNumber: String,
      size: String,
      quantity: Number,
      pricePerBox: Number,
      amount: Number
    }
  ],

  totalAmount: { type: Number, required: true },
  amountPaid: { type: Number, required: true },
  paymentMode: { type: String, enum: ['Cash', 'UPI', 'Online'], required: true },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);