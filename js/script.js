let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop:true,
  autoplay:{
   delay: 3000,
  disableOnInteraction:false,
}
});


var swiper = new Swiper(".reviewswiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  loop:true,
  autoplay:{
   delay: 3000,
  disableOnInteraction:false,
}
});

// Projects and client section
var customer = setInterval(projectDone, 0)
var experience = setInterval(happyClients, 150)
var project = setInterval(cupsCoffee, 0)
let count1 = 100;
let count2 = 1;
let count3 = 50;

function projectDone() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 718) {
        clearInterval(customer)
    }

}

function happyClients() {
    count2++
    document.querySelector("#number2").innerHTML = count2 
    if (count2 == 5) {
        clearInterval(experience)
    }
}

function cupsCoffee() {
    count3++
    document.querySelector("#number3").innerHTML = count3
    if (count3 == 540) {
        clearInterval(project)
    }
}



// Pop up form



const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
//  setTimeout(function(){
//    loginPopup.classList.add("show");
//  },5000)

})

function showPopup(){
      const timeLimit = 5 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})


