/*===========Muestra/Ocultamiento de menu===========*/
// variables navMenu, navToggle, navClose y nav-link
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLink = document.querySelectorAll('.nav-link')

//Validador if de mostrar

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//Validador if de Ocultar

if(navToggle){
    navMenu.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*===========Remover menu===========*/
function linkAction(){
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))