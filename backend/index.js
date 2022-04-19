require('dotenv').config()
const express = require('express');
const config = require('./config/database');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const helmet = require("helmet");
const http = require('http')

const app = express()
const port = 3000
app.use(express.json())
//add & use helmet 
app.use(helmet());


//bodyparser middleware
// parse application/x-www-form-urlencoded/ // parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
//add cookie-parser
app.use(cookieParser())
// socket connection
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server,
 {
  cors: {
    origin: 'http://localhost:4200',
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
   
  }
}
);


app.set('io',io);
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('Test Event', 'This is some new data!!')
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
/* app.set('io', io);
io.on('connection', socket => {
  console.log("new  sockeet connection...");
  socket.emit("test event", "hey sockets on");
}); */

// Create Routes
const routes = require('./routes/routes');

//Implement Routes 
app.use("/", routes)

//start the server
/* app.listen(port, () => {
  console.log(`App listening on port ${port}`)
}) */
server.listen(port, () => {
  console.log(`listening on ${port}`);
});