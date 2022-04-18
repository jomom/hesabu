const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   
    email: { type: String,required: true},
    token: { type: String,unique: true, required: true}
   
});


module.exports = mongoose.model('ResetModel', schema);