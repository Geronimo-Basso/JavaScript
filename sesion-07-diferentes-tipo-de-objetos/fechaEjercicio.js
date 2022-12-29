let dateToday = new Date()
console.log( dateToday )

let dateBorn = new Date("11-13-2001")
console.log( dateBorn )

console.log(dateToday.getTime() > dateBorn.getTime()) // OK - Esta es la forma de comparar la igualdad entre fechas

let dayBorn = dateBorn.getDay()
let monthBorn = dateBorn.getMonth() + 1
let yearBorn = dateBorn.getFullYear()
console.log( dayBorn )
console.log( monthBorn )
console.log( yearBorn )


