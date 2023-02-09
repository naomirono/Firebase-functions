// const functions = require('firebase-functions');
// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));

// exports.app = functions.https.onRequest(app);

const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://admin-wanderlust:wanderlust123@cluster0.qwiy8tb.mongodb.net/BookingDB', {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

app.post('/booking', (req, res) => {
  const nameInput = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const location = req.body.location;
  const guest = req.body.guest;
  const arrival = req.body.arrival;
  const leaving = req.body.leaving;

  const client = {
    name: nameInput,
    email: email,
    phone: phone,
    address: address,
    location: location,
    guest: guest,
    arrival: arrival,
    leaving: leaving,
  };

  db.collection('Clients').insertOne(client, (error, collection) => {
    if (error) {
      throw error;
    }
    console.log('Record inserted successfully');
  });

  return res.redirect('/src/book.html');
});


app.get('/', (req, res) => {
  res.set({
    'Allow-access-Allow-Origin': '*'
  });
  res.redirect('/src/index.html');
}).listen(3002);

console.log("server listening at port 3002");


exports.app = functions.https.onRequest(app);
