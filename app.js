const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const navLink= document.querySelectorAll(".nav-item");

console.log(navLink)

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
    navLink.forEach(function(link, index) {
        if(link.style.animation){
            link.style.animation="";
        }else{
            link.style.animation=`linkFade 0.5s ease forwards ${(index/2)+0.3}s`;
        }
    })
});