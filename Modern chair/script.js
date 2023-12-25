const color1 = document.getElementById("c1");
const color2 = document.getElementById("c2");
const color3 = document.getElementById("c3");
const color4 = document.getElementById("c4");
const color5 = document.getElementById("c5");
const color6 = document.getElementById("c6");

color1.addEventListener('click', () => {
    resetBorders();
    resetopacity()
    document.getElementById("main").style.background = 'linear-gradient(196deg, #f1a9a9, #e66767)';
    color1.style.border='3px solid #333';
    color1.style.scale='1.2';
    document.getElementById('ch-1').style.opacity='1';
    document.getElementById('ch-1').style. animation= 'shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';

    document.getElementById('cart-box').style.background=' #944852';

});


color2.addEventListener('click', () => {
    resetBorders();
    resetopacity()
    document.getElementById("main").style.background = 'linear-gradient(196deg, #454545, #242424)';
    color2.style.border='3px solid #333';
    color2.style.scale='1.2';
    document.getElementById('ch-2').style.opacity='1';
    document.getElementById('ch-2').style. animation= 'shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
    document.getElementById('cart-box').style.background=' #1a1a1a';
});


color3.addEventListener('click', () => {
    resetBorders();
    resetopacity();
    document.getElementById("main").style.background = 'linear-gradient(196deg, #7689A1, #2D4154)';
    color3.style.border='3px solid #333';
    color3.style.scale='1.2';
    document.getElementById('ch-3').style.opacity='1';
    document.getElementById('ch-3').style. animation= 'shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
    document.getElementById('cart-box').style.background='#40566e';
});


color4.addEventListener('click', () => {
    resetBorders();
    resetopacity();
    document.getElementById("main").style.background = 'linear-gradient(196deg, #88A3B5, #344959)';
    color4.style.border='3px solid #333';
    color4.style.scale='1.2';
    document.getElementById('ch-4').style.opacity='1';
    document.getElementById('ch-4').style. animation= 'shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
    document.getElementById('cart-box').style.background=' #5e89b2';
});


color5.addEventListener('click', () => {
    resetBorders();
    resetopacity();
    document.getElementById("main").style.background = 'linear-gradient(196deg, #90877F, #665D56)';
    color5.style.border='3px solid #333';
    color5.style.scale='1.2';
    document.getElementById('ch-5').style.opacity='1';
    document.getElementById('ch-5').style. animation= 'shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
    document.getElementById('cart-box').style.background=' #8c7f76';
    
});


color6.addEventListener('click', () => {
    resetBorders();
    resetopacity();
    document.getElementById("main").style.background = 'linear-gradient(196deg, #707472, #464948)';
    color6.style.border='3px solid #333';
    color6.style.scale='1.2';
    document.getElementById('ch-6').style.opacity='1';
    document.getElementById('ch-6').style. animation= 'shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
    document.getElementById('cart-box').style.background=' #5d6160';
});


function resetBorders() {
    
    var colorButtons = document.getElementsByClassName('color-img');
    for (var i = 0; i < colorButtons.length; i++) {
      colorButtons[i].style.border = 'none';
      colorButtons[i].style.scale = '1';
      
    }
  }

function resetopacity(){
    var colorButtons = document.getElementsByClassName('chair-img');
    for (var i = 0; i < colorButtons.length; i++) {
      colorButtons[i].style.opacity = '0';
      colorButtons[i].style.animation = 'none';
      
    } 
} 