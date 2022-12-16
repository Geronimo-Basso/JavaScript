//Listas, array o arreglo
const lista = [1,"hola",true, undefined, null];
const lista2 = new Array(2, "hola",true,undefined, null);
const lista3 = new Array(3);
const lista4= [lista,lista2,lista3];

//define a object
const movil ={
    altura:10,
    anchura:5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Geronimo","martin","raul"],
    tarjeta:{
        marca : "sandisk",
        almacenamiento: 32
    }
}

console.log(movil.tarjeta.marca);

//fechas
//moment.js
const ahora = new Date()