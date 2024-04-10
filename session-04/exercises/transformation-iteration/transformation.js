// Escreva uma função que receba duas strings como parâmetros e transforme a string
// `source` na string `target`, retornando um array de strings de cada iteração.


// Solução do exercício 07 da sessão 4 (transformation iteration)


function transform(source, target) {
    if (source.length !== target.length) {
        return "As strings não têm o mesmo comprimento.";
    }
    
    let iterations = [source]; 
    
    for (let i = 0; i < target.length; i++) {
        if (source[i] !== target[i]) {
            let temp = source.substring(0, i) + target[i] + source.substring(i + 1);
            iterations.push(temp);
            source = temp; 
        }
    }
    
    return iterations;
}


/*Verificação do comprimento das strings:
Antes de iniciar o processo de transformação, a função verifica se as 
strings source e target têm o mesmo comprimento. Isso é importante porque a 
transformação só é possível se ambas as strings tiverem o mesmo comprimento. 
Caso contrário, a função retorna uma mensagem indicando que as strings não têm o mesmo comprimento.
Inicialização do array de iterações:
A função cria um array chamado iterations para armazenar as diferentes iterações da transformação. 
 primeira iteração é a string original source.
 A função itera sobre cada caractere das strings source e target simultaneamente usando um loop for.
  A variável i é usada como um índice para percorrer as strings.
  Substituição de caracteres:
Dentro do loop, a função verifica se o caractere em source na posição i é diferente do caractere em target na mesma posição. 
Se forem diferentes, significa que uma substituição é necessária.
A função então cria uma nova string temp onde o caractere em source na 
posição i é substituído pelo caractere correspondente em target.
Essa nova string temp é adicionada ao array de iterações iterations.
A variável source é atualizada para a nova string temp, para que na próxima iteração seja baseada na última transformação realizada.
Após completar todas as iterações necessárias, a função retorna o array de iterações 
iterations, que contém todas as etapas da transformação.*/
