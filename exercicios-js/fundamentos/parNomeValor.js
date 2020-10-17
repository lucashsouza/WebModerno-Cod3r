// par nome/valor
const saudacao = "olá"; // contexto léxico 1 

function exec() {
    const saudacao = "Falaaa"; // contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de chave/valor
const cliente = {
    nome: "Lucas",
    idade: 20,
    endereco: {
        logradouro: "Av. Paulista",
        cep: 01310 - 918,
        numero: 1708
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);