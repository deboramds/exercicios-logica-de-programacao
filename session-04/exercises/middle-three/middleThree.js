
// Dada uma string de comprimento ímpar, retorne a string de comprimento 3 do seu
// centro, de modo que "Candy" retorne "and". O comprimento da string será
// de pelo menos 3.

// exrcício 4 da sessão 4 (middle-three)

function middleThree(str) {
    
    const startIndex = Math.floor((str.length - 3) / 2);
    return str.substring(startIndex, startIndex + 3);
}
