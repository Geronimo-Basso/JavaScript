const ahora = new Date();

const libro = {
    titulo: "Lord of the rings",
    autor: "George lucas",
    fecha : new Date("25 may 1991"),
    url : "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
}

const lista = ["Geronimo",
                21,
                true,
                ahora,
                libro
                ];

console.log(lista)

//---------------------------------------------- Solucion profe --------------------------------------------------------------------------------------------
const lista2 = [
    "Gorka",
    34,
    true,
    new Date(1987, 10, 20),
    {
        titulo: "El monje que vendió su Ferrari",
        autor: "Robin S. Sharma",
        fecha: new Date(1996, 0, 1),
        url: "https://www.amazon.es/dp/B0062XBS32/"
    },
];