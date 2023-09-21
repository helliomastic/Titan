let nav = document.querySelector(".navbar");
window.onscroll= function(){
    if(document.documentElement.scrollTop > 20){
    nav.classList.add("header-scrolled");
}
else{
    nav.classList.remove("header-scrolled");
}
}
//  nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse= document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})
window.addEventListener("scroll", function(){
    var header_wrapper= document.querySelector("header_wrapper");
    header_wrapper.classList.toggle("sticky", window.scrollY > 0);
})