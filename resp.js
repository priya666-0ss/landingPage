burger=document.querySelector(".burger")
rightNav=document.querySelector(".rightNav")
navbar=document.querySelector(".navbar")
navlist=document.querySelector(".nav-list")

burger.addEventListener('click',()=>{
    rightNav.classList.toggle("v-class-resp");
    navlist.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-hav-resp");
})