const express=require("express");
const bodyParser=require("body-parser");

const mongoose = require('mongoose');

const app=express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://admin-wanderlust:wanderlust123@cluster0.qwiy8tb.mongodb.net/BookingDB", {
    useNewUrlParser: true
 });

 const db=mongoose.connection;
 db.on('error', console.log.bind(console, "connection error"));
 db.once('open', function(callback){
        console.log("connection succeeded");
    })

app.post('/booking', function(req,res){
    const nameInput = req.body.name;
    const email= req.body.email;
    const phone= req.body.phone;
    const address= req.body.address;
    const location = req.body.location;
    const guest = req.body.guest;
    const arrival = req.body.arrival;
    const leaving = req.body.leaving;
  
    const client = {
        name : nameInput,
        email : email,
        phone : phone,
        address : address,
        location : location,
        guest : guest,
        arrival : arrival,
        leaving : leaving
    }
db.collection('Clients').insertOne(client,(err, collection) => {
        if (err)
            throw err;
        console.log("Record inserted Successfully");

    });
          
    return res.redirect('book.html');
})
  
app.get('/',function(req,res){
    res.set({
            'Allow-access-Allow-Origin': '*'
            });
            return res.redirect('home.html');
    }).listen(3002)
  
console.log("server listening at port 3002");

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
 
  loop:true,
});


var swiper = new Swiper(".review-slider", {
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

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

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

