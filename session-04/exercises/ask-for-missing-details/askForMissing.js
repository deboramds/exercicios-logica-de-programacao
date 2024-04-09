


// Adiciona a propriedade `question` a cada objeto na matriz de entrada onde o
//   desenvolvedor não forneceu os detalhes relevantes (marcados com um valor
//   `null`). O valor da propriedade `question` deve ser a seguinte string


// Solução exercício 2 da sessão 4 (ask for missing details)



function askForMissingDetails(list) {
    let missingDetails = [];
  
    list.forEach(objeto => {
        if (objeto.firstName === null || objeto.firstName === '') {
           missingDetails.push({
              firstName: null,
              lastName: objeto.lastName,
              country: objeto.country,
              continent: objeto.continent,
              age: objeto.age,
              language: objeto.language,
              question: 'Hi, could you please provide your firstName.'
           });
        }
        
        if (objeto.language === null || objeto.language === '') {
           missingDetails.push({
              firstName: objeto.firstName,
              lastName: objeto.lastName,
              country: objeto.country,
              continent: objeto.continent,
              age: objeto.age,
              language: null,
              question: 'Hi, could you please provide your language.'
           });
        }
    });
  
    return missingDetails;
  }
  