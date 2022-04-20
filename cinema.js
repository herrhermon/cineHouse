var catalogo = require("./database/catalogo.json") // colocar o endereço do arquivo a ser chamado "." É a pasta que você está
console.log(catalogo)

var catalogoString = JSON.stringify(catalogo)
console.log(catalogoString)

var catalogoobj = JSON.parse(catalogoString)
console.log(catalogoobj)