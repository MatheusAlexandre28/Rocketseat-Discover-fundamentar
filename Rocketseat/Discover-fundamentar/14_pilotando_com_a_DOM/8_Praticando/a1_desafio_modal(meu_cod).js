const button = document.querySelector('#openmodal') // puxei o button

button.addEventListener('click', invisible)  // adicionei evento para quando eu clicar nele
function invisible() {                       // puxei o evento 
    const invisible = document.querySelector('div') // selecionei a div que tinha o invisible
    invisible.classList.remove('invisible')         // removi o invisible da class
};


const body = document.querySelector('body')     // puxei o body todo
body.addEventListener('keydown', notinvisible)  // coloquei um evento nele para clicar em uma tecla
function notinvisible(event) {      // puxei o evento
    var tecla = event.keyCode;      // peguei o codigo da tecla com essa variavel
    if(tecla === 27){               // falei que se o codigo da tecla fosse igual ao que eu queria poderia rodar
        const notinvisible = document.querySelector('div')  // puxei aonde eu queria colocar o invisible caso o codigo codasse
        notinvisible.classList.add('invisible')  // recoloquei o invisible ao clicar na tecla desejada
    }
}








