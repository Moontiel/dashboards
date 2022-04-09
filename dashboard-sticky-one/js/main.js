// ------------------ start show and close menu ----------- //

/* 
    almacenamos en variables los elementos html con ID
    icon-menu y ul-navbar
*/
let $iconMenu = document.querySelector('#icon-menu');
let $ulNavbar = document.querySelector('#ul-navbar');

/* 
    generamos un evento click en el $iconMenu y definimos
    una función
*/
$iconMenu.addEventListener('click', () => {
    /* 
        añadimos o removemos $ulNavbar la clase 
        js_close_menu definida en la hoja de estilos
    */
    $ulNavbar.classList.toggle('js_close_menu');
})