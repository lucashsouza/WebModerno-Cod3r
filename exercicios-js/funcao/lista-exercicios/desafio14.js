/* 
    14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
    casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções. Crie também um default, que retornará uma mensagem de erro no console.
*/

function verificarFrutas(fruta) {

    fruta = fruta.toLowerCase().trim();

    switch (fruta) {
        case "maça":
            return "Não vendemos esta fruta aqui.";
            break;
        case "kiwi":
            return "Estamos com escassez de kiwis";
            break;
        case "melancia":
            return "Aqui está, são 3 reais o quilo";
            break;
        default:
            return "Valor informado inválido, favor verificar!";
            break;
    }
}

console.log(verificarFrutas("maça"));
console.log(verificarFrutas("KIWI"));
console.log(verificarFrutas("melancia "));
console.log(verificarFrutas("fruta"));