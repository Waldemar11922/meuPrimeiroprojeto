function normal(){
    return "Eu sou normal"
}

let arrowFunction = () => "Eu sou uma arrowFunction"

let arrowFunctionMaisDeUM = (parametro) => {
    let frase = "você digitou " + parametro

    return "Eu sou uma arrowFunction com mais de uma linha e... " + frase
}
console.log(arrowFunction()) 
console.log(arrowFunctionMaisDeUM("Banana"))