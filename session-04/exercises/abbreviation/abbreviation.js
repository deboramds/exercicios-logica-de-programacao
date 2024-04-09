
// Escreva uma função que converte um nome em iniciais. Esta função leva
// exatamente duas palavras com um espaço entre elas.

// A saída deve ser duas letras maiúsculas com um ponto separando-as.


// Solução exercício 1  da sessão 04 (abreviation) 

function abbrevName(name){
    return name.split(' ').map(word => word[0].toUpperCase()).join('.');
      
  }