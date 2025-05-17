const div=document.querySelector('.counter');
let numero=0;

const bottone=document.createElement('button');
bottone.textContent='-';
div.appendChild(bottone);
bottone.setAttribute('class','pulsante decremento');

const display=document.createElement('div');
display.textContent=(numero);
div.appendChild(display);
display.setAttribute('class','schermo');

const bottone2=document.createElement('button');
bottone2.textContent='+';
div.appendChild(bottone2);
bottone2.setAttribute('class','pulsante incremento');

bottone2.addEventListener('click', ()=>{
    numero++;
    display.textContent=(numero);

} );

bottone.addEventListener('click', ()=>{
    numero--;
    display.textContent=(numero);

} );


