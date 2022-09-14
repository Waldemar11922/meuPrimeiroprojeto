var saudacao = "Olá turma"
console.log(saudacao + "," + "como vocês estão!")

function mudarSaudacao(){
    saudacao = "Oi galera!"
    
}
mudarSaudacao()
console.log(saudacao)

const fs = require("fs")

const frutas = ["Banana, limão, Abacate, Mamão"]

for( i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

fs.writeFileSync("testeModulo.txt", "conteúdo do arquivo texto")
