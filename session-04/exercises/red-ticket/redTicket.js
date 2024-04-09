// Você tem um bilhete de loteria vermelho mostrando os números inteiros
// `1`, `2` e `3`, cada um dos quais é a, b ou c. Se todos eles tiverem o valor 2,
// o resultado é 10. Se todos forem iguais, o resultado é 5. Se `b` e `c` são
// diferentes de `a`, o resultado é 1. Caso contrário, o resultado é 0.


// solução exercício 5 da sessão 4(red-ticket)

function redTicket(a, b, c){
    if (a === 2 && b === 2 && c === 2) {
        return 10;
    } else if (a === b && b === c) {
        return 5;
    } else if (a !== b && a !== c) {
        return 1;
    } else {
        return 0;
    }
}