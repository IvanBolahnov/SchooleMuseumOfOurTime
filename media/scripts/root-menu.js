let 
menu__button__open = document.querySelector("#header__buttons__menu"),
menu__button__close = document.querySelector("#menu__header__buttons__menu"),
menu = document.querySelector("#wrapper-menu");

menu__button__open.addEventListener("click", () => {
    menu.classList.add("menu-open");
    menu.classList.remove("menu-close");
    menu__button__close.focus();
}); 

menu__button__close.addEventListener("click", () => {
    menu.classList.add("menu-close");
    menu.classList.remove("menu-open");
    menu__button__open.focus();
}); 

