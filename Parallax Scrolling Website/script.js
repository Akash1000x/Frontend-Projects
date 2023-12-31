let texti = document.getElementById('texti');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    texti.style.transform = 'translateY(' + value * 0.5 + 'px)';
    leaf.style.transform = 'translate(' + value * 0.5 + 'px, ' + value * -0.5 + 'px)';
    hill5.style.transform = 'translateX(' + value * 0.5 + 'px)';
    hill4.style.transform = 'translateX(' + value * -0.5 + 'px)';
    hill1.style.transform = 'translateY(' + value * 0.2 + 'px)';
});
