let navBar = document.querySelector('.header-container');
let mobileNav = document.querySelector('.mobile-menu-2');

window.onscroll = function(){
    let scrollWindow = window.pageYOffset;
    let screenWidth = window.screen.width;
    if (scrollWindow > 1 && navBar.style.backgroundColor != '#484848' && screenWidth > 768){
            // if (screenWidth > 1023){
                navBar.classList.add('blackNav');
            // } else if (screenWidth < 768){
            //     mobileNav.classList.add('blackNav');
            // }
    } else if(scrollWindow < 1 && navBar.style.backgroundColor != 'none' && screenWidth > 768){
        // if (screenWidth > 1023){
            navBar.classList.remove('blackNav');
        // }
        // else if (screenWidth < 768){
        //     mobileNav.classList.remove('blackNav');
        // }
    }
};
window.onresize = function(){
    let screenWidth = window.screen.width;
    if (screenWidth > 1023){
        mobileNav.classList.remove('blackNav');
    }
};