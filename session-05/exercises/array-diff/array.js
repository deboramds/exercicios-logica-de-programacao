
// Seu objetivo neste exercício é implementar uma função de diferença, que
// subtrai um array de outro e retorna o resultado.

// Lembre-se que você deve remover todos os valores do array `a`, que estão
// presentes na array `b` mantendo sua ordem.

// Solução do exercício 1 da sessão 05(array-diff)

function arrayDiff(a, b) {
    let diff = [];
    
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            diff.push(a[i]);
        }
    }
    
    return diff;
}