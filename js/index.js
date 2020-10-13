import ejercicio1 from './modules/uno.js';
import ejercicio2 from './modules/dos.js';
var caja = document.getElementById("caja");

window.cargarTabla = ejercicio1.cargar;
window.estado = ejercicio2.piedra;
document.getElementById("uno").addEventListener("click",() => {
    caja.innerHTML = ejercicio1.data
    ejercicio1.cargar();

});
document.getElementById("dos").addEventListener("click",() => {
caja.innerHTML = ejercicio2.data
ejercicio2.piedra();
});