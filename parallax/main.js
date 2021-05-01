let star = document.getElementById('star');
let moon = document.getElementById('moon');
let mounb = document.getElementById('mounb');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mounf = document.getElementById('mounf');
let header = document.querySelector('header');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    star.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mounb.style.top = value * 0.5 + 'px';
    mounf.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.Top = value * 0.5 + 'px';
})
