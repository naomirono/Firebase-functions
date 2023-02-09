// const express=require("express");
// const bodyParser=require("body-parser");
// const path = require('path');

// const mongoose = require('mongoose');

// const app=express()

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname + '/public')));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// mongoose.set('strictQuery', false);

// mongoose.connect("mongodb+srv://admin-wanderlust:wanderlust123@cluster0.qwiy8tb.mongodb.net/BookingDB", {
//     useNewUrlParser: true
//  });

//  const db=mongoose.connection;
//  db.on('error', console.log.bind(console, "connection error"));
//  db.once('open', function(callback){
//         console.log("connection succeeded");
//     })

// app.post('/booking', function(req,res){
//     const nameInput = req.body.name;
//     const email= req.body.email;
//     const phone= req.body.phone;
//     const address= req.body.address;
//     const location = req.body.location;
//     const guest = req.body.guest;
//     const arrival = req.body.arrival;
//     const leaving = req.body.leaving;
  
//     const client = {
//         name : nameInput,
//         email : email,
//         phone : phone,
//         address : address,
//         location : location,
//         guest : guest,
//         arrival : arrival,
//         leaving : leaving
//     }
// db.collection('Clients').insertOne(client,(err, collection) => {
//         if (err)
//             throw err;
//         console.log("Record inserted Successfully");

//     });
          
//     return res.redirect('book.html');
// })
  
// app.get('/',function(req,res){
//     res.set({
//             'Allow-access-Allow-Origin': '*'
//             });
//             return res.redirect('/src/index.html');
//     }).listen(3000)
  
// console.log("server listening at port 3000");


let menu = "";
let navbar = "";
if (typeof document !== "undefined") {
  menu = document.querySelector('#menu-btn');
  navbar = document.querySelector('.header .navbar');

  menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 };
 window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
 };

}

var swiper = "";
if (typeof Swiper !== "undefined") {
    swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
       
        loop:true,
      });

      swiper = new Swiper(".review-slider", {
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
}

let loadMoreBtn = "";
let currentItem = 3;

if (typeof document !== "undefined") {
    loadMoreBtn = document.querySelector('.packages .load-more .btn');

    loadMoreBtn.onclick = () =>{
        let boxes = [...document.querySelectorAll('.packages .box-container .box')];
        for (var i = currentItem; i < currentItem + 3; i++){
           boxes[i].style.display = 'inline-block';
        };
        currentItem += 3;
        if(currentItem >= boxes.length){
           loadMoreBtn.style.display = 'none';
        }
     }
}

// Make a POST request to the API endpoint
// Get the values from the input fields
// const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const phone = document.getElementById("phone").value;
// const address = document.getElementById("address").value;
// const location = document.getElementById("location").value;
// const guest = document.getElementById("guest").value;
// const arrival = document.getElementById("arrival").value;
// const leaving = document.getElementById("leaving").value;

// fetch('https://your-endpoint-url.com/booking', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: name,
//     email: email,
//     phone: phone,
//     address: address,
//     location: location,
//     guest: guest,
//     arrival: arrival,
//     leaving: leaving
//   })
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.error('Error:', error);
// });


