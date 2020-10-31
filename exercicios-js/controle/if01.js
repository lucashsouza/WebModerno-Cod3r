function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    }
}

soBoaNoticia(8);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`É verdade... ${valor} `);
    }
}

// Falso
seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);

// Verdadeiro
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});