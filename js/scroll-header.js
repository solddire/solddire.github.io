let navBar = document.querySelector('.header-container');
let mobileNav = document.querySelector('.mobile-menu-2');

window.onscroll = function(){
    let scrollWindow = window.pageYOffset;
    let screenWidth = window.screen.width;
    if (scrollWindow > 1 && navBar.style.backgroundColor != 'none'){
            if (screenWidth > 1023){
                navBar.classList.add('blackNav');
                if (screenWidth < 1024){
                    mobileNav.classList.add('blackNav');
                }
            }
    }else if(scrollWindow < 1 && navBar.style.backgroundColor != '#ffebcf'){
        if (screenWidth > 1023){
            navBar.classList.remove('blackNav');
            if (screenWidth < 1024){
                mobileNav.classList.remove('blackNav');
            }
        }
    }
};
window.onresize = function(){
    let screenWidth = window.screen.width;
    if (screenWidth > 1024){
        mobileNav.classList.remove('blackNav');
    }
};