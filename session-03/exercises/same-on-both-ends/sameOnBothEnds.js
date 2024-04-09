// Dada uma frase, retorne o número de palavras que possuem a primeira e a última
// letra iguais.

// Solução exercício 5 da sessão 3(same-on-both-ends)

function countSameEnds(s) {
	return (s.match(/\b([a-z])\w*\1\b/ig)||[]).length
}