##Github shortcuts
```
git remote add origin https://github.com/jomom/hesabu.git
git branch -M main
git push -u origin main
```
### Angular flex and Header
(https://zoaibkhan.com/portfolio/)

### mongo db credentials 
admin
hesabusoftware2022

### stock yangu
firdobepsi@vusra.com
milionimoja2877

### ethereal
nkgcgvmdqdyqdr3z@ethereal.email

###shopify
xuwonusy@musiccode.me
Readme2022

Your account details:

URL: xuwonusy.myshopify.com
Login: xuwonusy.myshopify.com/admin

shopify 2
kexosi7636@f1xm.com
killman



### authentication links
(https://betterprogramming.pub/how-to-create-a-signup-confirmation-email-with-node-js-c2fea602872a)
important! authentication + other tuts
(https://github.com/bezkoder/node-js-jwt-auth-mongodb)
node + angular  email authentication
(https://github.com/harshal77/email-verification-node-angular)
full stack react + mern app
https://www.youtube.com/watch?v=EjP8mZBtJjo&list=PLaAoUJDWH9WpmAUayPDh8zrwZoH_PZ4ON&index=
Routing  Documentation
(https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#create_the_route-handler_callback_functions)
Data alidation
(https://www.topcoder.com/thrive/articles/data-validation-in-nodejs-and-express-using-joi)
customizie mongodb
(https://youtu.be/5yU-P0grJjk)
uodate login registration
(https://youtu.be/kmAzuH2Lzug)
jwt 
(https://medium.com/swlh/nodejs-with-jwt-authentication-feb961763541)
ng series
(https://www.youtube.com/watch?v=cznobRuS0UQ)
lazy loading 
(https://www.youtube.com/watch?v=ibn2yAomxp8)
(https://www.youtube.com/watch?v=ibn2yAomxp8&t=115s)

authentication
(https://www.youtube.com/watch?v=7al2_2t2AME)
full nest angular project
(https://www.youtube.com/watch?v=6ySmc_vvssA)

mean stack project
(https://www.youtube.com/watch?v=Pv86FBPyWUA&list=PLp50dWW_m40XVtnF0aWp3t1oJIl2lqWe4&index=11)

mean stack orders
(https://www.youtube.com/results?search_query=mean+stack+orders+)
simple apppointment app
(https://github.com/codebubb/appointment-booking/blob/master/api/package.json)

test terinal transaction
(https://www.youtube.com/watch?v=Gc3pBH4ddi0&t=5s)
modules and serices


modelling schemamas
(https://www.infoq.com/articles/data-model-mongodb/)
(https://mongodb-documentation.readthedocs.io/en/latest/use-cases/product-catalog.html#gsc.tab=0)

helpfuljs(https://howtojs.io/how-to-properly-set-the-data-type-to-the-data-received-inside-subscribe-in-angular-13-application/)

###Reading list 
lazy loading angular modules
small change


## Create Models
-> users
-> customers
-> Products
-> Settings 
-> Orders
tut no 5

Create Routes and api
## Views
Product start here ...add product
Orders

require('dotenv').config()
const express = require('express');
const config = require('./config/database');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const helmet = require("helmet");

const app = express()
// socket connection
const http = require('http')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit('Test Event', 'This is some new data sockets on!!')

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

/* var io = require('socket.io')(server,
    {
    cors: {
      origin:'*',
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  }

  ); */

/* app.set('io', io); */
/* io.on('connection', socket => {
  console.log("new  sockeet connection...");
  socket.emit("test event", "hey sockets on");
}); */

app.use(express.json())
app.use(cors({ origin: '*' }))
//add & use helmet
app.use(helmet());


//bodyparser middleware
// parse application/x-www-form-urlencoded/ // parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//add cookie-parser
app.use(cookieParser())

// Create Routes
const routes = require('./routes/routes');

//Implement Routes
app.use("/", routes)

//start the server
const port = 3000
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
