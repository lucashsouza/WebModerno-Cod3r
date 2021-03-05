const quaseArray = { 0: 'Lucas', 1:'Jessica' };
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Stella', 'Luan', 'Gilberto'];
//console.log(quaseArray.toString(), meuArray);
console.log(quaseArray.toString(), meuArray);