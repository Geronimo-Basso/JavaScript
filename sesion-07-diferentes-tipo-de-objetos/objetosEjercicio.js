let datosPersonales = {
    nombre:"Geronimo",
    apellido: "Basso",
    edad: 21,
    altura: 2,
    eresDesarrollador: true
}


console.log( datosPersonales )

let edadObjeto = datosPersonales.edad
console.log( edadObjeto )

let arrayConDatosPersonales = [datosPersonales.nombre,datosPersonales.apellido,datosPersonales.edad,datosPersonales.altura,datosPersonales.eresDesarrollador]
console.log( arrayConDatosPersonales )

let mejoresAmigos = [
    {    nombre:"nombre1",
        apellido: "apellido1",
        edad: 31,
        altura: 2,
        eresDesarrollador: false
    },
    {    nombre:"nombre2",
        apellido: "apellido2",
        edad: 11,
        altura: 2,
        eresDesarrollador: true
    }
]

console.log( mejoresAmigos )

console.log(mejoresAmigos.sort((a,b) => b.edad - a.edad))