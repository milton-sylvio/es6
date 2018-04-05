/**************************************************************************************************
 * CAPÍTULO 5
 * 
 * ITERAÇÃO COM O LAÇO FOR...OF
 *
 * EXERCÍCIOS
 *
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2005%20-%20Itera%C3%A7%C3%A3o%20com%20o%20la%C3%A7o%20for...of/exercicios.md
 *
 *
 **************************************************************************************************/

/**
 * Exercício 1 - Contando o faturamento
 */
function somaFaturamento(lista){

	var total = 0;

	for(var list of lista) {
		total += list;
	}

	return total;
}

// console.log( somaFaturamento([1,2,3,4]) );

/**
 * Exercício 3 - Agora vai funcionar
 */
var Casa = {
	metrosQuadrados: 4000,
	altura: 3000,
	nQuartos: 4,
	nBanheiros: 2
}

for(var atributo in Casa) {
	// console.log(atributo + ': ' + Casa[atributo]);
}

/**
 * Exercício 4 - Pare aqui senhor motorista
 */
function percorreRuas(lista, param) {
	
	for( var list of lista ) {
		console.log( list );
		if( list === param ) {
			break;
		}
	}
}

console.log( percorreRuas(['Rua 1, Rua 2', 'Rua 3'], 'Rua 2') );
