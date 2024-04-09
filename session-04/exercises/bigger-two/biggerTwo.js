
// Comece com 2 arrays de números inteiros, `a` e `b`, cada um com comprimento 2.
// Calcule a soma dos valores em cada array. Retorne o array que tem a
// maior soma. No caso de um empate, retorne o array `a`.


// Exercício 3 da sessão 4 (bigger-two)

function maiorDois(a, b) {
 
    const somaA = a[0] + a[1];
    const somaB = b[0] + b[1];
  
   
    if (somaA >= somaB) {
      return a;
    } else {
      return b;
    }
  }
  