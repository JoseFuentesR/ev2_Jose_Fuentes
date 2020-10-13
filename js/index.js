import ejercicio1 from './modules/uno.js';

var caja = document.getElementById("caja");
window.cargarTabla = ejercicio1.cargar;


document.getElementById("uno").addEventListener("click",() => {
    caja.innerHTML = ejercicio1.data
    ejercicio1.cargar();

});