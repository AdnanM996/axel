const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu__container');
const menuText = document.querySelector('.menu--text');
const menuLines = document.querySelectorAll('.menu--line');
const menuLineTop = document.querySelector('.menu--line--top');
const menuLineBottom = document.querySelector('.menu--line--bottom');
const nav = document.querySelector('.nav');
const navOpen = document.querySelector('.nav--open');

menu.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    menuLineTop.classList.toggle('menu--line--top--close');
    menuLineBottom.classList.toggle('menu--line--bottom--close');

    if (nav.classList.contains('nav--open')) {

        document.body.style.overflow = 'hidden';
        logo.style.color = '#fff';
        menuText.style.color = '#fff';
        menuText.innerText = 'close';
    
        menuLines.forEach(e => {
            e.style.backgroundColor = '#fff';
        })
    
    } else {
    
        document.body.style.overflow = 'visible';
        logo.style.color = '#080808';
        menuText.style.color = '#080808';
        menuText.innerText = 'menu';
    
        menuLines.forEach(e => {
            e.style.backgroundColor = '#080808';
        })
    
    }
});