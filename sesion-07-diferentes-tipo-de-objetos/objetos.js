// Trabajando con Objetos
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: false,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id)
console.log(obj["4-juegos"])

const prop = "isDeveloper"
console.log(obj[prop])

/*
Esto es muy particular, no se crea el obj2 en una nueva posicion de memoria, sino que lo que ocurre es que
el ob2 se le asigna la misma posicion de memoria que el obj. Por lo tanto si realizo cambios en el obj o obj2
afecta a los dos. Esto no pasa con valores primitivos, pero si con los objetos.
 */
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo"
console.log(obj2.nombre)
console.log(obj.nombre)

let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)
console.log(val2)

//////////////
/*
Usando la propagacion tenemos que lo que mencionamos en las lineas 18,18,20 no ocurre. Cada objeto queda por separado y no se afectan los valores.
 */

const obj3 = { ...obj }

console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Gorka"

console.log(obj.nombre)
console.log(obj3.nombre)

/////////////
// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", anyo: 1939 },
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Moana", anyo: 2016 },
    { titulo: "El efecto mariposa", anyo: 2004 },
    { titulo: "TED", anyo: 2012 }
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

//Forma de ordernar una lista por un atributo en especial
listaPeliculas.sort((a, b) => a.anyo - b.anyo)

console.log(listaPeliculas)