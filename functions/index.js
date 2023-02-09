const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const axios = require('axios');


// Create the Navigation Bar Firebase Function
exports.createNavbar = functions.https.onRequest((request, response) => {
    // Get the navigation bar toggle button
    var toggleButton = document.querySelector('.header .navbar');
  
    // Add a click event listener to the toggle button
    toggleButton.addEventListener('click', function () {
      // Toggle the "active" class on the navigation bar
      document.querySelector('#menu-btn').classList.toggle('active');
    });
  
    // Send a success response
    response.send('Navigation bar with toggle created successfully!');
  });

  //Import the Swiper library
const Swiper = require('swiper');

// Create the Swiper Firebase Function
exports.createHomeSwiper = functions.https.onRequest((request, response) => {
  // Initialize the Swiper
  var swiper = new Swiper('.home-slider', {
    // Swiper options
    spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        loop:true,
    });
  // Send a success response
  response.send('Home swiper created successfully!');
});

// Create the Swiper Firebase Function
exports.createReviewSwiper = functions.https.onRequest((request, response) => {
    // Initialize the Swiper
    var swiper = new Swiper('.review-slider', {
      // Swiper options
      spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        loop:true,
        breakpoints: {
          0: {
              slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    // Send a success response
    response.send('Review swiper created successfully!');
  });

const app = express();
app.use(cors({ origin: true }));

app.post('/Booking', (req, res) => {
  const { 
    name,
    email,
    phone,
    address,
    location,
    guest,
    arrival,
    leaving  } = req.body;

  // Store data in MongoDB
  axios
    .post('mongodb+srv://admin-wanderlust:wanderlust123@cluster0.qwiy8tb.mongodb.net/BookingDB', {
        name,
        email,
        phone,
        address,
        location,
        guest,
        arrival,
        leaving 
    })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

exports.booking = functions.https.onRequest(app);

