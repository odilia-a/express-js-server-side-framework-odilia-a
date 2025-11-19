const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    id: {
        type: Number, unique: true, required: true
    },
    description: {
        type: String, required: true
    },
    price: {
        type: Number, required: true
    },
    category: {
        type: String, required: true
    },
    instock: {
        type: Boolean, required: true
    },

},
{ timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

