let familiares = ["Ricardo","Susana","Nicolas","Facundo","Geronimo","Francesca"]
console.log( familiares )
console.log("-----------------------------------")

let familiaresSet = new Set( familiares )
console.log( familiaresSet )
console.log("-----------------------------------")

familiaresSet.add( "Geronimo" )
console.log( familiaresSet )
console.log("-----------------------------------")

familiaresSet.add( "JavaScript" )
console.log( familiaresSet )
console.log("-----------------------------------")