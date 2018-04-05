/**************************************************************************************************
 * ITERACOES
 *
 * EXERCÍCIOS
 *
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2004%20-%20Itera%C3%A7%C3%A3o%20com%20iteradores%20e%20iter%C3%A1veis/exercicios.md
 *
 *
 **************************************************************************************************/


/**
 * Exercício 1 - Você está muito longe 
 */
function calculaDistancia(street) {

	var iterador = street[Symbol.iterator](),
		distanciaTotal = 0,
		rua = iterador.next();

	do {
		distanciaTotal += rua.value.tamanho;
		rua = iterador.next();
	} while(!rua.done)
	
	return distanciaTotal;
}
	
var ruas = [
  { nome:'Rua 1', tamanho: 2500 },
  { nome:'Rua 2', tamanho: 3400 },
  { nome:'Rua 3', tamanho: 1400 }
];

// console.log( calculaDistancia(ruas) );

/**
 * Exercício 2 - Tem alguém ai? 
 */
function isListaVazia(lista){

	return iteradorLista = lista[Symbol.iterator]().next().done;
}

var numeros = [];

// console.log( isListaVazia(numeros) );

/**
 * Exercício 3 - S-o-l-e-t-r-a-n-d-o 
 */
function soletraPalavra(string) {

	var iteradorLista = string[Symbol.iterator](),
		caps = iteradorLista.next();

	do {
		console.log(caps.value);
		caps = iteradorLista.next();
	} while(!caps.done);

}

// console.log( soletraPalavra('palmeiras') );


/**
 * Exercício 4 - Eu prefiro o meu 
 */
function criaIterador(lista) {
	return lista[Symbol.iterator]();
}

console.log( criaIterador([1,2]).next() );