const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: String,
  image: String,
  price: {
    type: Number,
    required: true
  },
  quantity: {
    value: String,
    unit: String
  },
  status: {
    type: String,
    enum: ['Available', 'Sold Out', 'Coming Soon'],
    default: 'Available'
  },
  specialTag: [{
    type: String,
    enum: ['flash_deal', 'deal_of_the_day', 'summer_specials', 'everyday_essentials']
  }],
  isOrganic: Boolean,
  season: String,
  origin: String,
  originalPrice: {
    type: Number,
    default: null
  },
  discountPercentage: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Product', productSchema);