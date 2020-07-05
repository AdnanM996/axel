//Scroll
var Scrollbar = window.Scrollbar;

var options = {
    damping: 0.1,
    thumbMinSize: 200,
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: true,
}

Scrollbar.init(document.querySelector('#my-scrollbar'), options);

//loader
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.style.transform = 'translateY(-100%)';
    loader.style.opacity = '0';
});

//Animations
window.addEventListener('DOMContentLoaded', ()=> {
    let controller = new ScrollMagic.Controller();
let timeLine = new TimelineMax();

timeLine
.staggerTo('.grid__item--overlay', 1.5, {
    x: '100%',
    ease: Power3.easeInOut
}, 0.25)

.from('.hero--small-text', 0.7, {
    y: -30,
    opacity: 0,
    ease: Power3.easeInOut
})

.staggerFrom('.hero--heading', 0.7, {
    y: 50,
    opacity: 0,
    ease: Power3.easeInOut
}, 0.25)

.from('#heroCta', 1, {
    x: -60,
    opacity: 0,
    ease: Power3.easeInOut
})
        
let scene = new ScrollMagic.Scene({})

.setTween(timeLine)
.addTo(controller);

//Timeline 2

let timeLine2 = new TimelineMax();

timeLine2
.staggerFrom('.what-we-do-img', 0.7,{
    opacity: 0,
    ease: Power3.easeInOut
}, 0.25)

.from('#whatWeDoHeading', 0.7, {
    y: 50,
    opacity: 0,
    ease: Power3.easeInOut
}, 0.50)

.from('#whatWeDoTextBig', 0.7, {
    y: 30,
    opacity: 0,
    ease: Power3.easeInOut
})

.from('#whatWeDoTextSmall', 0.7, {
    opacity: 0,
    ease: Power3.easeInOut
})

.from('#whatWeDoCta', 0.7, {
    x: -60,
    opacity: 0,
    ease: Power3.easeInOut
})

let scene2 = new ScrollMagic.Scene({
    triggerElement: '#heroGridItem3',
})

.setTween(timeLine2)
.addTo(controller);

//Parallax
let tl = new TimelineMax();
let parallax = document.querySelector('#parallax');

tl.to(parallax, 1, { y: '-180px', ease: Linear.easeNone});
let timeline45 = new ScrollMagic.Scene({
    triggerElement: '#heroGridItem3',
    triggerHook: 0.5,
    duration: '100%'
})
.setTween(tl)
.addTo(controller);



//Timeline 3

let timeLine3 = new TimelineMax();

timeLine3
.from('#ourWorkHeading', 1, {
    y: 60,
    opacity: 0,
    ease: Power3.easeInOut
})

.staggerFrom(['.our-work-img, .our-work-heading, .our-work-small' ], 1, {
    opacity: 0,
    ease: Power3.easeInOut
},0.25)


let scene3 = new ScrollMagic.Scene({
    triggerElement: '#whatWeDoCta'
})

.setTween(timeLine3)
.addTo(controller);

//Timeline 4

let timeLine4 = new TimelineMax();

timeLine4
.from('#ourClientsHeading', 1, {
    opacity: 0,
    y: 50,
    ease: Power3.easeInOut
})

.staggerFrom('.our-client-img', 0.35, {
    opacity: 0
}, 0.10)


let scene4 = new ScrollMagic.Scene({
    triggerElement: '#ourWorkBtn'
})
.setTween(timeLine4)
.addTo(controller);

//Timeline 5
let timeLine5 = new TimelineMax();

timeLine5
.from('.our-services--heading', 1, {
    opacity: 0,
    y: 50,
    ease: Power3.easeInOut
})

.staggerFrom('.our-services__item', 0.50, {
    opacity: 0,
    ease: Power3.easeInOut
}, 0.25)

.from('#ourServicesCta', 0.5, {
    opacity: 0,
    x: -60,
    ease: Power3.easeInOut
})

.from('.our-services-img', 1, {
    opacity: 0,
    x: 150,
    ease: Power3.easeInOut
})

let scene5 = new ScrollMagic.Scene({
    triggerElement: '#ourServices',
    offset: '-25%'
})

.setTween(timeLine5)
.addTo(controller);

//Timeline 6
let timeLine6 = new TimelineMax();

timeLine6
.from('#getStartedHeading', 0.7, {
    opacity: 0,
    y: 60,
    ease: Power3.easeInOut
})

.from('#getStartedP', 0.7, {
    opacity: 0,
    ease: Power3.easeInOut
})

.from('#getStartedCta', 0.7, {
    opacity: 0,
    x: -60,
    ease: Power3.easeInOut
})

let scene6 = new ScrollMagic.Scene({
    triggerElement: '#ourServicesCta'
})

.setTween(timeLine6)
.addTo(controller);
});

const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu__container');
const menuText = document.querySelector('.menu--text');
const menuLines = document.querySelectorAll('.menu--line');
const menuLineTop = document.querySelector('.menu--line--top');
const menuLineBottom = document.querySelector('.menu--line--bottom');
const nav = document.querySelector('.nav');
const navOpen = document.querySelector('.nav--open');
const navItems = document.querySelectorAll('nav ul li');

menu.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    menuLineTop.classList.toggle('menu--line--top--close');
    menuLineBottom.classList.toggle('menu--line--bottom--close');
    
    if (nav.classList.contains('nav--open')) {

        logo.style.color = '#fff';
        menuText.style.color = '#fff';
        menuText.innerText = 'close';
    
        menuLines.forEach(e => {
            e.style.backgroundColor = '#fff';
        })

        for(let i = 0; i < navItems.length; i++) {
            setTimeout(() => {
                navItems[i].style.opacity = '1';
                navItems[i].style.transform = 'translateY(0px)';
            }, i * 50);
        }
    
    } else {

        logo.style.color = '#080808';
        menuText.style.color = '#080808';
        menuText.innerText = 'menu';
    
        menuLines.forEach(e => {
            e.style.backgroundColor = '#080808';
        })

        for(let i = 0; i < navItems.length; i++) {
            navItems[i].style.opacity = '0';
            navItems[i].style.transform = 'translateY(-25px)';
        }
    }
});