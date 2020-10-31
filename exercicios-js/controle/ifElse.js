const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com nota final: ${nota}`);
    } else {
        console.log(`Reprovado com nota final: ${nota}`);
    }
}

imprimirResultado(10);
imprimirResultado(4);