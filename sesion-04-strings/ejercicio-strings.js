var nombre = "Geronimo"
var apellido = "Basso"
let estudiante = `${nombre} ${apellido}`
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
let estudiante_caracteres = estudiante.length
let nommbre0 = nombre[0]
let apellidoLast = apellido[4]
let estudiante_crop = estudiante.replace(/ /g,"")
let boolean_nombre = estudiante.includes( nombre )

console.log( nombre )
console.log( apellido )
console.log( estudiante )
console.log( estudianteMinus )
console.log( estudianteMayus )
console.log( estudiante_caracteres )
console.log( nommbre0 )
console.log( apellidoLast )
console.log( estudiante_crop )
console.log( boolean_nombre )