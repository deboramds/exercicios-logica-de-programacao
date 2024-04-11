
// Escreva um algoritmo que receba um array com elementos e mova todos os zeros
// no final, preservando a ordem dos demais elementos não nulos.


// solução do exercício 3 da sessão 5 (move-zeros)

function moveZeros(arr) {
    let arrZero = 0;
  
  
   const zeros = arr.filter (arr => arr === 0);
      const others = arr.filter (arr => arr !== 0);
      return others.concat(zeros);
  }
