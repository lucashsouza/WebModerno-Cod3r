const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

// Massa quebrou o carro!
pilotos.pop();  
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

// Remove o primeiro elemento da lista
pilotos.shift();
console.log(pilotos);

// Add em primeiro
pilotos.unshift('Hamilton') 
console.log(pilotos);

// Slice pode adicionar ou remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

pilotos.splice(3, 1,); // massa quebrou :(
console.log(pilotos);

// novo array
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);