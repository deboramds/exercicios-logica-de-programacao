

// Dadas duas temperaturas, o retorno é verdadeiro se uma for inferior a 0 e a
// outra superior a 100.

// Solução exercicio 2 sessão 03 (icyHot)
function icyHot(temp1, temp2){
    if(temp1 < 0 && temp2 > 100 || temp1 > 0 && temp2 < 100 )
      return true
    else
      return false
  }