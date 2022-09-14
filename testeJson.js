
// json = require("./package.json")
//console.log(json)

let json2 = `{
    "id": 1,
    "nome": "Luke",
    "sobrenome": "Skywalker",
    "idade": 19
}`

let jsonTransformado = JSON.parse(json2)
//console.log(jsonTransformado)
//console.log(json2)


let objeto = {
    id: 1,
    nome: "Waldemar",
    idade: 18
}
let objetoTransformado = JSON.stringify(objeto)
console.log(objetoTransformado)