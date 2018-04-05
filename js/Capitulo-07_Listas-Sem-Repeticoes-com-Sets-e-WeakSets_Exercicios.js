/**************************************************************************************************
 * CAPÍTULO 6
 * 
 * LISTAS SEM REPETIÇÕES COM SETS E WEAKSETS
 *
 * EXERCÍCIOS
 *
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2007%20-%20Listas%20sem%20repeti%C3%A7%C3%B5es%20com%20Sets%20e%20WeakSets/exercicios.md
 *
 *
 **************************************************************************************************/

/**
 * Exercício 1 - Retirando o excesso
 */
function removeDuplicatas( numeros ) {
	
	let s = new Set( numeros );

	return s;

}

console.log( 'removeDuplicatas:', removeDuplicatas([1,1,2,2,3,3]) );
