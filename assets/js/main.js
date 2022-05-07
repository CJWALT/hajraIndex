//dom element
const btn = document.querySelector('.menu-btn'); 
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav'); 
const navItems = document.querySelectorAll('.menu-nav__items');




let showMenu = false; 

btn.addEventListener('click', toggleMenu); 

function toggleMenu(){
    if(!showMenu){
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));



        showMenu = true;
    }else{
        nav.classList.remove('open'); 
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.add('open'));


        showMenu = false;
    }
}