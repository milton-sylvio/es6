/**************************************************************************************************
 * CAPÍTULO 13
 * 
 * PARÂMETROS INFINITOS COM OPERADOR REST
 * Exercícios
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2013%20-%20Par%C3%A2metros%20infinitos%20com%20operador%20Rest/exercicios.md 
 *
 **************************************************************************************************/
/**
 * Exercício 1 - Gastando até o que não tem
 */
function calculaPrecoTotal (...precos) {
	
	return precos.reduce((total, preco) => {
		return total + preco;
	}, 0);
}

// console.log( calculaPrecoTotal(1,2,3,4,5) ); // 15

/**
 * Exercício 2 - Eu sou maior do que você, lero lero!
 */
function todosSaoMaioresQue(ref, ...nros) {
	
	let averigua = nros.every(nro =>{
		return nro > ref;
	});

	console.log(averigua);
}

// todosSaoMaioresQue(2,3,4,5,6,7); // resultado esperado: true
// todosSaoMaioresQue(5,4,3,2,1); // resultado esperado: false
// todosSaoMaioresQue(1,2); // resultado esperado: true

/**
 * Exercício 2 - Eu sou maior do que você, lero lero!
 */
function anunciaBolasSorteadas (...bolas) {

	bolas.forEach(bola => {
		console.log( `A bola escolhida foi: ${bola}`);
	});
}

//anunciaBolasSorteadas(1,2,3);