
// Neste exercício você escreverá uma função que recebe um array de 10
// caracteres (os valores estarão entre 0 e 9), como resultado ele retorna
// uma string com os números no formato de número de telefone.

// solução exercício 2 da sessão 5 (create Phone Number)
function createPhoneNumber(numbers) {
   
    numbers.splice(0, 0, "(");
    numbers.splice(4, 0, ") ");
    numbers.splice(8, 0, "-");

 
    let phoneNumber = numbers.join("");

    return phoneNumber;
}

