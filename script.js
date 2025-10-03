// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });





let elemcontainer =document.querySelector("#elem-container");
let fixed=document.querySelector("#fixed")
    elemcontainer.addEventListener("mouseenter",function(){
       fixed.style.display = "block"
    })

    elemcontainer.addEventListener("mouseleave",function(){
       fixed.style.display = "none"
    })
let elem =document.querySelectorAll(".elem");
     elem.forEach(function(e){
      e.addEventListener("mouseenter",function(){
          var image=e.getAttribute("data-image")
       fixed.style.backgroundImage =`url(${image})`
    })

     })


 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


   let loader=document.querySelector("#loader")
   setTimeout(function(){
      loader.style.top="-100%"
   },4000)


// let menu=document.querySelector("#menu")
// let menubar=document.querySelector("#menubar")
// let flag=1;
// if(flag==1)
// menu.addEventListener("click",function(){
//    menubar.style.top="-100%"
//    flag=0
// else{

// }
// })


let menu = document.querySelector("#menu")
let menubar = document.querySelector("#menubar")
let navimg = document.querySelector("#nav img")

let flag = 1;

menu.addEventListener("click", function() {
    if(flag === 1) {
        menubar.style.top = "0"; // menubar show
        navimg.style.opacity="0"
        flag = 0;
    } else {
        menubar.style.top = "-100%"; // menubar hide
                   navimg.style.opacity="1"
        flag = 1;
    }
})





// let menu = document.querySelector("#menu");
// let menubar = document.querySelector("#menubar");

// // by default menubar hidden hona chahiye
// menubar.style.top = "-100%";

// menu.addEventListener("click", function () {
//   if (menubar.style.top === "-100%") {
//     menubar.style.top = "0";   // show
//   } else {
//     menubar.style.top = "-100%"; // hide
//   }
// });
