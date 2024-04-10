import '../styles/style.css'

const addEventOnElements = function (element, eventType, callBack){
  for(let i = 0, len = element.length; i < len; i++) {
    element[i].addEventListener(eventType, callBack);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglerNavbar = function() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-acive");
}

addEventOnElements(navTogglers, "click", togglerNavbar);


const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function(){
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom){
    header.classList.add("hide");
  }else {
    header.classList.remove("hide")
  }

  lastScrollPos = window.scrollY
}

window.addEventListener("scroll", function(){
  if (this.window.scrollY >= 50){
    header.classList.add("active");
    hideHeader();
  } else{
    header.classList.remove("active");
  }
})
