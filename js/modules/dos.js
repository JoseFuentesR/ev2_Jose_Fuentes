export default{
        mario:[{estado:"normal",vidas:3}],


    data:`
   <h1>Autor: Jose Fuentes </h1>
   <h3 id="txt1">Estado :normal</h3>
   <h3 id=txt2>vidas:3</h3> 
   <button id="flor">Flor</button><br>
    <button id="papel">Pluma</button><br>
    <button onclick="piedra()">Pierde</button><br>
    <img src="img/mario1.png" alt="" id="imagen"/>
    
    `,
    piedra:function(){
        var imagen = document.getElementById("imagen")
       var estado = document.getElementById("txt1");
       var vidas = document.getElementById("txt2");
       estado = "estado:volador"
       vidas = "vidas:3"
       imagen.innerHtml='<img src="img/mario2.jpg">' 
    },
};