export default {
                   
        trabajadores:[                     
            {numero :1 ,nombre:'Rigby', sueldo:300000},                     
            {numero :2 ,nombre:'Papaleta', sueldo:450000},                     
            {numero :3 ,nombre:'Mordecay', sueldo:350000},                     
            {numero :4 ,nombre:'Thomas', sueldo:270000},                     
            {numero :5,nombre:'Benson', sueldo:700000},                     
            {numero :6,nombre:'Skip', sueldo:450000}         
                ],
    data:`
    <h3>autor : Jose Fuentes</h3>
    <h1>Nombre:El Parque Web</h1>
    <h1>Empresa : Cartoon</h1>
    <div id="result"></div>
    `,
    cargar:function(){
        var result = document.getElementById('result');
        var total = "";



        var tabla =`
            <table border='1' width='400'>
            <tr>
                <th>id</th>
                <th>nombre</th>
                <th>sueldo</th>
            </tr>
        `;
        this.trabajadores.forEach(item => {
            tabla +=`
            <tr class="${item.sueldo > 350000 ? "sueldo_alto" : "sueldo_bajo"}">
                 <td>${item.numero}</td>
                 <td>${item.nombre}</td>
                 <td>${item.sueldo}</td> 
            </tr>
            `
               
        });
        tabla +=`</table>`;

        result.innerHTML = tabla;
    },            

};