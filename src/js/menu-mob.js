// .menu__wrapper-mob--active

const menuWrapperRef = document.querySelector('.menu__wrapper-mob');
const btnBurgerRef = document.querySelector('.header__btn-burger');
const btnCloseMenuRef = document.querySelector('.menu__btn-close');

btnBurgerRef.addEventListener('click', openMenu);
btnCloseMenuRef.addEventListener('click', closeMenu);

function openMenu() {
    menuWrapperRef.classList.add('menu__wrapper-mob--active');
}
function closeMenu() {
    menuWrapperRef.classList.remove('menu__wrapper-mob--active');
}
