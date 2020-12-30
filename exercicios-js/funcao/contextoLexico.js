const valor = "Global";

function minhaFuncao() {
    console.log(valor);
}

function execucao() {
    const valor = "Local";
    minhaFuncao();
}

execucao();