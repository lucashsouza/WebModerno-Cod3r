const pessoa = {
    nome: 'Lucas',
    idade: 21,
    peso: 75
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '29/10/2019'
});

pessoa.dataNascimento = '01/01/2007';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const destino = { a: 1 }
const objeto1 = { b: 2 }
const objeto2 = { c: 3, a:4 }
const objeto = Object.assign(destino, objeto1, objeto2);
console.log(objeto);

Object.freeze(objeto);
objeto.c = 1234;
console.log(objeto);

