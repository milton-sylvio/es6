/**************************************************************************************************
 * EXERCÍCIOS
 *
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2003%20-%20M%C3%A9todos%20auxiliares%20para%20Array/exercicios.md
 *
 *
 **************************************************************************************************/


/**
 * Exercício 1 - Par ou ímpar? 
 */
var numeros = [0,1,2,3,4,5];

numeros.forEach(function(nros) {
	var p_i = (nros % 2 === 0) ? 'par' : 'ímpar';
	// console.log( nros + ' é ' + p_i ); 
});

/**
 * Exercício 2 - Quero o dobro 
 */
function dobrar(numeros) {
	return numeros.map(function(nros) {
		return nros * 2;
	});
}

// console.log( dobrar(numeros) );

/**
 * Exercício 3 - NÃO ESTOU BRAVO 
 */
function caps(texto) {
	return texto.map(function(txt) {
		return txt.toUpperCase();
	});
}

// console.log( caps(['oi', 'tudo', 'bem?']) );

/**
 * Exercício 4 - Equilibrio de parênteses 
 */
function validaParenteses(parenteses){
	var arrayParenteses = parenteses.split('');

	var balenceado = !arrayParenteses.reduce(function(soma, parentese){

	 	// if(soma < 0) { return soma } // para o caso de começar com ")"
	    if( parentese == "(" ) { soma++; }
	    if( parentese ==  ")" ) { soma--; }

	 	return soma;
	}, 0);

	return balenceado;
}
// console.log( validaParenteses(")()()()") );


/**
 * Exercício 5 - Sem duplicações 
 */
function removeDuplicatas(numeros) {

	return numeros.reduce(function(anterior, valor) {
		var achaDuplicado = anterior.find(function(outroValor) {
			return valor === outroValor;
		});

		if(!achaDuplicado) {
			anterior.push(valor);
		}

		return anterior;
	}, []);
}

var nros = [1,2,3,3,4,4,5];
// console.log( removeDuplicatas(nros) );


/**
 * Exercício 6 - Reprovado! 
 */
function aprovados(alunos, nota) {

	var students = alunos.find(function(aluno){
		return aluno.media >= nota;
	});

	return students;
}

var alunos = [
	{ nome: 'Diogo', media: 5.5 },
	{ nome: 'Julia', media: 9.5 },
	{ nome: 'Roberto', media: 1.5 },
	{ nome: 'Tiago', media: 6.0 }
];

// console.log( aprovados(alunos, 5.5) );


/**
 * Exercício 7 - Dados precisos 
 */
function buscar(propriedade, valor, lista) {
	
	var proprieties = lista.find(function(p) {
		return p[propriedade] === valor;
	});

	return proprieties;
}

var lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
];

// console.log( buscar('nome', 'Tânia', lista) );


/**
 * Exercício 8 - Calculadora humana 
 */
function calculaAreaTotal(medidas) {

	var somados = medidas.reduce(function( valores, soma ) {
		return valores + ( soma.altura * soma.comprimento );
	}, 0);

	return somados;
}

var dimensoes = [
	{ altura: 10, comprimento: 20 },
	{ altura: 02, comprimento: 04 },
	{ altura: 01, comprimento: 01 },
	{ altura: 50, comprimento: 50 }
];

// console.log( calculaAreaTotal(dimensoes) );


/**
 * Exercício 9 - Raízes quadradas 
 */
function calculaRaizesQuadradas(numeros) {
	
	return numeros.map(function(nros) {
		return Math.sqrt(nros);
	});
}

var raizes = [4,9,16,81,25,64,100];

// console.log( calculaRaizesQuadradas(raizes) );


/**
 * Exercício 11 - A pequena ovelha Dolly 
 */
function clonaObjeto(arr) {

	var propriedade = Object.getOwnPropertyNames(arr);
	var copia = {};
	
	propriedade.forEach(function(newArr){
		return copia[newArr] = arr[newArr];
	});

	return copia;
}

// console.log( clonaObjeto() )


/**
 * Exercício 11 - A pequena ovelha Dolly 
 */
function existeProdutosDatados(produtos, dataReferencia){

	var date_ref;

	if(dataReferencia) {
		var dR = dataReferencia.split('-');
		date_ref = new Date( dR[0], dR[1], dR[2] );
	} else {
		date_ref = new Date();
	}

	return produtos.some(function(prod) {
		var data = prod.dataValidade;
		data = data.split('/');
		var validade = new Date( data[2], data[1], data[0] );

		return validade < date_ref;
	});
}

var produtos = [
	{ nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
	{ nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
	{ nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
];

// console.log( existeProdutosDatados(produtos, '2017-03-01') ); // true
console.log( existeProdutosDatados(produtos, '2016-01-01') ); // false
// console.log( existeProdutosDatados(produtos) ); // false
