/**************************************************************************************************
 * CAPÍTULO 13
 * 
 * PARÂMETROS INFINITOS COM OPERADOR REST
 *
 **************************************************************************************************/
function montaQuerySelect(){
	const tabela = arguments[0],
		  qt_args = arguments.length;

	let cols = '';

	if(qt_args > 1) {
		for (let index = 1; index < qt_args; index++) {
			cols += `${arguments[index]}, `;
		}

		cols =  cols.substring(0, cols.length - 2);
	} else {
		cols = '';
	}

	return `SELECT ${cols} FROM ${tabela}`
}

// const query1 = montaQuerySelect('tabela');
// const query2 = montaQuerySelect('tabela', 'col1');
// const query3 = montaQuerySelect('tabela', 'col1', 'col2');

// console.log(query1);
// console.log(query2);
// console.log(query3);

/**
 * 13.1 ENTENDA O QUE ARGUMENTS FAZ
 */
function logarTodosArgumentos() {
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

// logarTodosArgumentos(1,2,3); // 1,2,3

function somar() {
	let soma = 0;
	const qtd = arguments.length;

	for (let i = 0; i < qtd; i++) {
		soma += arguments[i];	
	}

	return soma;
}

// console.log( somar(1,2) ); // 3
// console.log( somar(1,2,3) ); // 6
// console.log( somar(1,2,3,4) ); // 10

/**
 * 13.2 ARGUMENTS X OPERADOR REST
 */
function somar(...valores) {
	return valores.reduce( (soma, valor) => {
		return soma + valor;
	}, 0);
}

// console.log( somar(1,2) ); // 3
// console.log( somar(1,2,3) ); // 6
// console.log( somar(1,2,3,4) ); // 10

/*
 * 13.3 PARTICULARIDADES DO OPERADOR REST
 */
// O correto para este caso é:
function numerosELetras(...numerosELetras) {
	// corpo da função
}

/*
 * 13.4 PODEMOS UTILIZAR EM CONJUNTO COM PARÂMETROS “FIXOS”
 */
function somaTudoEMultiplicaPor(multiplicador, ...valores) {
	return valores.reduce( (soma, valor) => {
		return soma + (valor * multiplicador);
	}, 0);
}

console.log(somaTudoEMultiplicaPor(2,1,2)); // 6
console.log(somaTudoEMultiplicaPor(2,6,7)); // 26

function montaQuerySelect(tabela, ...cols) {
	let cols_query = '';

	if ( cols.length > 0 ) {
		cols_query = cols.reduce((cols_query, coluna) => {
			return cols_query += `${coluna}, `;
		}, '');

		cols_query = cols_query.substring(0, cols_query.length - 2);
	} else {
		cols_query = '*';
	}

	return `SELECT ${cols_query} FROM ${tabela}`;
}

console.log( montaQuerySelect('tabela') ); 					// SELECT * FROM tabela
console.log( montaQuerySelect('tabela', 'col1') ); 			// SELECT col1 FROM tabela
console.log( montaQuerySelect('tabela', 'col1', 'col2') ); 	// SELECT col1, col2 FROM tabela
