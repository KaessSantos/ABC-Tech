"user strict"

let menu = document.querySelector('.fa-solid');
let closeMenu = document.querySelector('nav')

menu.addEventListener('click', (event)=>{
    event.preventDefault();
    closeMenu.classList.toggle('remove')
});