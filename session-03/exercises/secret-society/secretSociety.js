// Crie uma função que receba um array de nomes e retorne o nome da sociedade
// secreta.


// Solução do exercício 5 da sessão 3 (secret-society)


function societyName(friends) {
    return friends.map((friend) => friend[0]).sort().join('') 
    }