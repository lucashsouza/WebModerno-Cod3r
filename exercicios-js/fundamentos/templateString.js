const nome = 'Lucas';
const concatenacao = 'Olá ' + nome + "!";
const template = `
    Olá
    ${nome}!`;

console.log(concatenacao, template);

// Expressões
console.log(`1 + 1 = ${1+1}`);

// Função Arrow
const up = texto => texto.toUpperCase();
console.log(`Ei.. ${up('Cuidado!')}`);
