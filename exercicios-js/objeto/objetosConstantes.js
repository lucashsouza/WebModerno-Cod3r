// pessoa -> 123 -> {...}, pode ser alterado o Objeto mas não a constante pessoa
const pessoa = { nome: 'Lucas' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}, não é possivel, pois já está apontando para 123
//pessoa = { nome: 'Sofia' };

Object.freeze(pessoa); // Objeto constante

pessoa.nome = 'Maria';
pessoa.endereco = 'Rua ABC, 1234';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Lucas' }); // Objeto nasce constante
pessoaConstante.nome = 'Jéssica';
console.log(pessoaConstante);