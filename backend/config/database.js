/* module.exports ={
    database: 'mongodb+srv://admin:hesabusoftware2022@cluster0.rwenx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  // database:'mongodb://localhost:27017/storedb' ,
} */
require('dotenv').config()

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose: Database status:200'))