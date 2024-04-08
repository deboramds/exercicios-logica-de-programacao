
// Implementar a função `comboString` para que ela receba duas cordas, a e b, e
// retornar um fio da forma `curto + longo + curto`, com o fio mais curto no
// fio no exterior e o fio mais longo no interior. As cordas não
// ser de igual comprimento, mas pode estar vazio (comprimento 0).


// Solução do exercicio 1 da sessão 3 (combo-string)

function comboString(a, b){
    if(a.length > b.length)
      return b+a+b
    else
      return a+b+a
  }