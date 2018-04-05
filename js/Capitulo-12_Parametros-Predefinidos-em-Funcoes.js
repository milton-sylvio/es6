/**************************************************************************************************
 * CAPÍTULO 12
 * 
 * PARÂMETROS PREDEFINIDOS EM FUNÇÕES
 *
 **************************************************************************************************/
/**
 * 12.1 ATRIBUINDO VALORES PADRÕES
 */
function nomeCompleto(nome, sobrenome, nome_do_meio = ""){
	// console.log( `${nome} ${nome_do_meio} ${sobrenome}` );
}

nomeCompleto('João','da Silva', 'Aparecido');
nomeCompleto('João','da Silva');
nomeCompleto('João','', '');

/**
 * 12.2 ATRIBUINDO VALORES PADRÕES
 */
function multiplicaPor(valor, multiplicador = 2) {
	const result = valor * multiplicador;

	// console.log(result);
}

multiplicaPor(2,2); // 4
multiplicaPor(2,undefined); // 4


function print(valor = ''){
	// console.log(valor)
}

print();
print(null);

/**
 * 12.3 REFERENCIANDO OUTROS VALORES PADRÕES
 */
function calculaPotencia(x = 2, y = x){
	// console.log(Math.pow(x, y));
}

calculaPotencia();
calculaPotencia(2);
calculaPotencia(2,4);

/**
 * 12.4 REFERENCIANDO VARIÁVEIS INTERNAS
 */
const v = 'valor = 1';

function rvi(x = v) {
	const v = 'valor = 2';
	console.log(x);
}

rvi(); // valor = 1

/**
 * 12.5 UTILIZANDO FUNÇÕES COMO VALORES PADRÕES
 */
function facaAlgo(nome, callback = z => {
	console.log(z)
}){
	callback(nome);
}

facaAlgo('Milton');

/**
 * 12.5 TORNANDO PARÂMETROS OBRIGATÓRIOS
 */
function parametroObrigatorio(parametro){
	throw new Error(`O parametro "${parametro}" é obrigatório!`);
}

function inserirNaTabela(objeto = parametroObrigatorio("objeto")) {

}

inserirNaTabela();