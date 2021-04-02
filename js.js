const menu = document.querySelector('.menu');
const menuLinks = document.querySelector('ul');

menu.addEventListener('Click', function (){
        menuLinks.classList.toggle('aberto');
})