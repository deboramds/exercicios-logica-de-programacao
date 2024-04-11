
// Dada uma "sentença" de string contendo apenas letras minúsculas em inglês,
// retorne `true` _se_ `sentence` _é um **pangrama**, ou_ `false` _caso contrário_.

// solução do exercício 4 da sessão 5 (pangram)
function checkIfPangram(sentence) {
    
    const alphabetMap = new Array(26).fill(false); 
    
    
    sentence = sentence.toLowerCase();
    
    
    for (let i = 0; i < sentence.length; i++) {
        const charCode = sentence.charCodeAt(i);
  
        if (charCode >= 97 && charCode <= 122) {
            const charIndex = charCode - 97; 
            alphabetMap[charIndex] = true; 
        }
    }
   
    for (let i = 0; i < 26; i++) {
        if (!alphabetMap[i]) {
            return false; 
        }
    }
    
    return true; 
}