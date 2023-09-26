let mobileMenu = document.querySelector('.mobile-menu');
let buttonBurger = document.querySelector('.button-burger');

buttonBurger.onclick = function() {
    if (mobileMenu.style.background == "rgb(72, 72, 72)"){
        mobileMenu.style.background = "none";
    } else{
        mobileMenu.style.background = "#484848";
    }
}
