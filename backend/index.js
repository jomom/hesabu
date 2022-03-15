
const express = require('express');
const config = require('./config/database')

//connect & start database
const mongoose = require('mongoose');
mongoose.connect(config.database, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose: Database status:200'))

const app = express()
const port = 3000
app.use(express.json()) 



// Create Routes
const routes = require('./routes/auth')

//Implement Routes 
app.use("/" , routes)

//start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})