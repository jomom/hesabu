const mongoose = require('mongoose');

const productSchema  =  mongoose.Schema({

	productname: {
        type: String,
      
    },
    productdesc: {
        type: String,
      
    },
    productprice: {
        type: Number,
      
    },
    // productimage: {
    //     type: String,
    // },
    productqty: {
        type: Number,
        default: 0
    },
    productavail: {
        type: Boolean, default: false
    },
    unlimited: {
        type: Boolean, default: false
    },
    createdAt: {type: Date, default: Date.now}

});

module.exports = mongoose.model('product',productSchema)