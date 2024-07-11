let title = document.querySelector('h1')
title.innerHTML = 'Hora del Desafío';


function clickButton() {
    console.log('El botón fue clicado')
}

function ciudadDoBrasil() {
    let ciudadBrasil = prompt('Indique el nombre de una ciudad de brasil');
    alert(`Estuve en ${ciudadBrasil} y me acordé de ti`);
}

function loveJS() {
    alert('Yo amo JS');
}

function sumNumber() {
    let n1 = prompt('Ingrese el primer número');
    let n2 = prompt('Ingrese el segundo número');
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    let result = (n1 + n2);
    alert(`La suma entre ${n1} y ${n2} dio un total de ${result}`);
};