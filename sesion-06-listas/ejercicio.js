/*
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
 */
let listaCompra = [ "banana" , "manzana" , "pollo" , "carne" , "arroz" ]
console.log( listaCompra )
console.log( "-------------------------------------------------------------------------------------------------" )

listaCompra.push(" aceite de girasol" )
console.log( listaCompra )
console.log( "-------------------------------------------------------------------------------------------------" )

listaCompra.splice( 5 , 5 )
console.log( listaCompra )
console.log( "-------------------------------------------------------------------------------------------------" )

let peliculasFavoritas = [
    {titulo : "Movie1" , director: "director1" , fecha: new Date("1995-01-01")},
    {titulo : "Movie2" , director: "director2" , fecha: new Date("2001-01-01")},
    {titulo : "Movie3" , director: "director3" , fecha: new Date("2012-01-01")}
]
console.log( peliculasFavoritas )
console.log( "-------------------------------------------------------------------------------------------------" )

const peliculasFavoritasPos2010 = peliculasFavoritas.filter(pelicula => pelicula.fecha >= new Date("2010-01-01"))
console.log( peliculasFavoritasPos2010 )
console.log( "-------------------------------------------------------------------------------------------------" )

const directoresMAP = peliculasFavoritas.map((pelicula, indice) => `${indice + 1} - ${pelicula.director}`)
console.log( directoresMAP )
console.log( "-------------------------------------------------------------------------------------------------" )

/*
otra forma de hacerlo, usando que map llame a otra funcion.
 */
const directoresMAP2 = peliculasFavoritas.map(addMapToDirectores)
console.log( directoresMAP2 )
console.log( "-------------------------------------------------------------------------------------------------" )
function addMapToDirectores ( pelicula ) {
    var i = 0
    return `${i + 1} - ${pelicula.director}`
}

const peliculasMAP = peliculasFavoritas.map((pelicula, indice) => `${indice + 1} - ${pelicula.titulo}`)
console.log( peliculasMAP )
console.log( "-------------------------------------------------------------------------------------------------" )

const peliculasYdirectores = directoresMAP.concat( peliculasMAP )
console.log( peliculasYdirectores )

console.log( "-------------------------------------------------------------------------------------------------" )
const peliculasYdirectores2 = [...directoresMAP , ...peliculasMAP]
console.log( peliculasYdirectores )