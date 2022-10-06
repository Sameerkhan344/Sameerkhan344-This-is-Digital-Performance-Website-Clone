function show() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#bg"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#bg", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
show();

//MENU

var menu = document.querySelector("#menu")
var nav = document.querySelector("#nav-cover")
var line1 = document.querySelector("#menu1")
var line2= document.querySelector("#menu2")
var line3= document.querySelector("#menu3")
flag=0;
menu.addEventListener("click",function(e){
    if(flag===0){
    nav.style.top = "0%";
    nav.style.position = "fixed";
   line1.style.transform="rotate(-45deg) translate(-35%,0%) ";
    line3.style.transform="rotate(47deg) translate(-30%,0%)";
    line1.style.transition = "0.5s ease"
    line2.style.transition = "0.5s ease"
    line3.style.transition = "0.5s ease"
    line3.style.width="35px";
    line2.style.opacity=0;
    flag=1;
    }
    else{
        nav.style.top = "100%";
        line1.style.transform="rotate(0deg)";
        line3.style.transform="rotate(0deg)";
        line3.style.width="15px";
        line2.style.opacity=1;
        flag=0;
    }
})


nav
var service = document.querySelector("#service");
var navContent = document.querySelector("#nav-content");
var flag;
service.addEventListener("click", function () {
    if (flag === 0) {
        navContent.style.display = "block";
        flag = 1
    }
    else {
        navContent.style.display = "none";
        flag = 0
    }
    
})



gsap.from("#nav h1", {
    // y: 100,
    duration: 1,
    opacity:0
})
    gsap.from("#page1 #img1", {
    y: 100,
    duration: 1,
    opacity:0
},"-=.5")
gsap.from("#page1 #img2", {
    x: 100,
    duration: 1.5,
    opacity:0
},"-=1")
gsap.from("#page1 #img3", {
    y: -100,
    duration: 1.5,
    opacity:0
}, "-=1.5")

gsap.from("#page2 #dot, #page2 #text-content #dot-content, #page2 #text-content h1, #about-us", {
        scrollTrigger:{
         trigger:"#page2",
         scroller:"#bg",
        start: "top 50%",
        // end:"top 100%",
        // markers: true,
            
     },
        y: 50,
    duration: 1,
        opacity: 0,
    stagger: {
       amount:1 
    },
})
gsap.from("#page3 #image-div1 img,#image-div2 img, #page3-right h1, #page3-right p, #page3-right #lear-div", {
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#bg",
        start: "top 50%",
        // end:"top 10%",
        //  markers: true,
    },
    y: 50,
    duration: 0.5,
    stagger: {
        amouont: 1
    },
    opacity:0
    // ease: Expo.easeInOut
})

gsap.from("#page4 h1", {
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#bg",
        start: "top 50%",
        // end:"top 10%",
        //  markers: true,
    },
    y: 50,
    duration: 0.5,
    stagger: .5,
    ease: Expo.easeInOut,
    opacity:0
})
gsap.from("#page4 #logo-div img", {
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#bg",
        start: "top 50%",
        // end:"top 30%",
        //  markers: true,
    },
    y:50,
    scale: 0.4,
    opacity: 0,
    duration: 2,  
     ease: Expo.easeInOut
})
gsap.from("#page5 #ctop, #page5 #cbtm", {
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#bg",
        start: "top 50%",
        end:"top 10%",
        //  markers: true,
    },
    y:50,
    // scale: 0.4,
    opacity: 0,
    duration: 1.2,  
    stagger:.5,
     ease: Expo.easeInOut
})

gsap.from("#page7 #one, #two, #three, #four, #five", {
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#bg",
        start: "top 60%",
        end:"top 30%",
        //  markers: true,
    },
    y:50,
    scale: 0.4,
    opacity: 0,
    duration: 2,  
    stagger:.5,
     ease: Expo.easeInOut
})







//swiper
var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });