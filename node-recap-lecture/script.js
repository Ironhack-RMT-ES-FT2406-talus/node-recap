console.log("ejecutando JS desde node") // 1.

let oneNumber = 10;
oneNumber += 200

const { book1, book2 } = require("./data.js") 
// buscar un modulo/archivo y ejecuta todo el código que haya dentro.
// si creamos una variable antes del require, busca data que ese module esté exportando y la almacena en la variable.

// console.log(book1.title) // 3.
// console.log(book2.title) // 4.

const functionParaDescribirLibro = require("./data2.js")

functionParaDescribirLibro( book1 )
functionParaDescribirLibro( book2 )

console.log(oneNumber) // 5.