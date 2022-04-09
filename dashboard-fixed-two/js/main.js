// ------------------ start show and close menu ----------- //

/* 
    almacenamos en variables los elementos html con ID
    icon-menu, ul-navbar, header-component y dashboard-components
*/
let $iconMenu = document.querySelector('#icon-menu');
let $ulNavbar = document.querySelector('#ul-navbar');
let $headerComponent = document.querySelector('#header-component');
let $dashboardComponents = document.querySelector('#dashboard-components');

/* 
    generamos un evento click en el $iconMenu y definimos
    una función
*/
$iconMenu.addEventListener('click', () => {
    /* 
        añadimos o removemos de $ulNavbar la clase 
        js_close_menu definida en la hoja de estilos
    */
    $ulNavbar.classList.toggle('js_close_menu');

    /* 
        añadimos o removemos de $headerComponent la clase 
        js_header_position definida en la hoja de estilos
    */
        $headerComponent.classList.toggle('js_header_position');

    /* 
        añadimos o removemos de $ulNavbar la clase 
        js_resize_components definida en la hoja de estilos
    */
    $dashboardComponents.classList.toggle('js_resize_components');
})