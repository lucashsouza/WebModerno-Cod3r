console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Lucas', 'Jéssica', 'Sofia', 'Stella');
console.log(aprovados);

aprovados = ['Lucas', 'Jéssica', 'Sofia', 'Stella'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);
console.log(aprovados[4]);

aprovados[4] = 'Luan';
aprovados.push('José');
console.log(aprovados.length);

aprovados[9] = 'Paulo';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort();

console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Lucas', 'Jéssica', 'Sofia', 'Stella'];
aprovados.splice(2, 0, 'Elemento 1', 'Elemento 2');
console.log(aprovados);