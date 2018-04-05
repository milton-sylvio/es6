/**************************************************************************************************
 * CAPÍTULO 9
 * 
 * MANIPULAÇÃO DE TEXTOS COM TEMPLATE STRINGS
 *
 * Exercícios
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2009%20-%20Manipula%C3%A7%C3%A3o%20de%20textos%20com%20template%20strings/exercicios.md
 *
 **************************************************************************************************/

/**
 * Exercício 1 - Lista de compras
 */
const compras = "leite,feijão,arroz,mandioca";

function listaDeCompras(strings, ...values){
	let produtos = values[0].split(',');

	let lista = produtos.map(function(prod){
		return `<li>${prod}</li>`;
	}).join("");

	return `<ul>${lista}</ul>`;
}

let elemento = listaDeCompras`${compras}`;

// console.log(elemento); // <ul><li>leite<li><li>feijão<li><li>arroz<li><li>mandioca<li></ul>

/**
 * Exercício 2 - Maçaroca de Strings
 */
function criaMacaroca(arr){

	let string = '';

	for(let arrs of arr) {
		string = `${string}${arrs}`;
	}

	return string
}

// console.log( criaMacaroca(['a','b','c','d']) );


/**
 * Exercício 3 - Quero o seu endereço completo
 */
function montaEnderecoCompleto(rua, cidade, numero, cep){

	return `${rua}, ${numero} - ${cidade} - ${cep}`;
}

// console.log( montaEnderecoCompleto( 'Rua Prof. Henrique Moriza', 'Osasco', '117', '06080-190' ) );


/**
 * Exercício 4 - Seja muito bem-vindo!
 */
// Refatore o código a seguir para utilizar template strings.
// let nome = 'usuario';
// console.log('Bem-vindo ' + usuário + '!');

let nome = 'Usuario';
console.log( `Bem-vindo ${nome}!`);

/**
 * Exercício 5 - Cálculo interpolado
 */
const n1 = 1, n2 = 2;

function soma(v1, v2) {
	return `${v1} + ${v2} = ${v1 + v2}`;
}

console.log( soma(n1, n2) );
