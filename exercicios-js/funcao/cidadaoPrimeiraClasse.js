// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar forma literal
function function1() {};

// Armazenar em uma variável
const function2 = function() {};

// Armazenar dentro de um array
const array = [function(a, b) { return a + b }, function1, function2];
console.log(`array[0](1, 2)`);

// Armazenar em atributo de objeto
const pessoa = {};
pessoa.falar = function() { return 'Olá!' };
console.log(pessoa.falar());

// Funcao como param
function run(fun) {
    fun();
}

run(function() { console.log('Executando...') });

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}

soma(1, 2)(4);