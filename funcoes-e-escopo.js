// Exercício 1

function converterParaMaiusculas(string) {
    return string.toUpperCase();
}

let testar = "teste";
let resultado = converterParaMaiusculas(testar)
console.log(resultado)

// Exercício 1B

const converterParaMaiusculas = (string) => string.toUpperCase();

// Exercício 1C

function escopo(){
    let mensagem = "Tente acessar esta mensagem fora dessa função!"
}

console.log(mensagem)

// Não é possivel mostrar essa mensagem, pois ela só pode ser acessada dentro da função na qual ela foi criada.

