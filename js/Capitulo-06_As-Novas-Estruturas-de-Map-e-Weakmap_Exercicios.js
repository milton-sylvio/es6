/**************************************************************************************************
 * CAPÍTULO 6
 * 
 * AS NOVAS ESTRUTURAS DE MAP E WEAKMAP
 *
 * EXERCÍCIOS
 *
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2006%20-%20As%20novas%20estruturas%20de%20Map%20e%20WeakMap/exercicios.md
 *
 *
 **************************************************************************************************/

/**
 * Exercício 1 - Você tem esse produto?
 */
var produtos = new Map();
produtos.set( 'Arroz', 7.10 );
produtos.set( 'Feijão', 2.30 );
produtos.set( 'Macarrão', 4.70 );
produtos.set( 'Refrigerante', 3.00 );

function possuiProduto(nome) {
	
	return produtos.has( nome );
}

var produtoDesejado = 'Macarrão';

// console.log( possuiProduto( produtoDesejado ) );

/**
 * Exercício 2 - Comprinhas online
 */
var caixa = new Map();
caixa.set( 'Arroz', 7.10 );
caixa.set( 'Feijão', 2.30  );
caixa.set( 'Macarrão', 4.7  );
caixa.set( 'Refrigerante', 3.00 );

var frete = new Map();
frete.set( 'São Paulo', 10.10 );
frete.set( 'Rio de Janeiro', 12.30 );
frete.set( 'Brasília', 14.70 );
frete.set( 'Outros', 13.00 );

function calculaValorTotalDaCompra( name, city, productList, shippingList ) {
	
	var total = 0;
	for(var produto of name) {
		total += productList.get(produto);
	}

	var frete;
	if(shippingList.has(city)) {
		frete = shippingList.get(city);
	}

	return(total + frete);
}

// console.log( calculaValorTotalDaCompra( ['Arroz'], 'São Paulo', caixa, frete ) );


/**
 * Exercício 5 - Não vou mais com a sua cara.
 */
var amigos = new Map();
amigos.set( 'João Silva', {idade: 23, sexo: 'masculino'} );
amigos.set( 'Luisa Pimenta', {idade: 18, sexo: 'feminino'} );
amigos.set( 'Julio Marinho', {idade: 52, sexo: 'masculino'} );
amigos.set( 'Marcela Mel', {idade: 27, sexo: 'feminino'} );

function deletaAmigos(amigo, exAmigos) {
	
	if( amigo.has(exAmigos) ) {
		amigo.delete(exAmigos);
		console.log(amigo.has(exAmigos), exAmigos + ' foi deletado!');
	} else {
		console.log(exAmigos + ' não é seu amigo!');
	}
}

deletaAmigos(amigos, 'Vilma');
