/**************************************************************************************************
 * CAPÍTULO 12
 * 
 * PARÂMETROS PREDEFINIDOS EM FUNÇÕES
 *
 * Exercícios
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2012%20-%20Par%C3%A2metros%20predefinidos%20em%20fun%C3%A7%C3%B5es/exercicios.md
 *
 **************************************************************************************************/
/**
 * Exercício 1 - Quem é você?
 */
function mostraNome(nome) {
    console.log(`Meu nome é: ${nome}`);
}

mostraNome(); // undefined


/**
 * Exercício 2 - Me passa uns parâmetros ae
 */

/*
function soma(a,b) {
	if(a === undefined) {
		a = 0;
	}

	if(b === undefined) {
		b = 0;
	}

	return a + b;
}
*/

function soma(a = 0,b = 0) {

  return a + b;
}


/**
 * Exercício 3 - Tá aqui a minha identidade
 */
/*
function imprimeNomeCompleto(nomeTratado, sobrenome, nomeDoMeio) {
  let nomeTratado = nomeTratado || '';
  let sobrenomeTratado = sobrenome || '';
  let nomeDoMeioTratado = nomeDoMeio || '';

  console.log(`${nomeTratado} ${nomeDoMeioTratado} ${sobrenomeTratado}`);
}

*/

function imprimeNomeCompleto(nomeTratado = "", sobrenome = "", nomeDoMeio = ""){

	console.log(`${nomeTratado} ${nomeDoMeio} ${sobrenome}`);
}

imprimeNomeCompleto('João'); // João

/**
 * Exercício 4 - Adivinha em quem eu estou pensando?
 */
const v = 'valor 1';
function funcao(x = v) {
	const v = 'valor 2';
	console.log(x);
}

funcao(); // qual valor será mostrado?


/**
 * Exercício 5 - Pare de me imitar!
 */
function subtrair(a = 0,b = a) {
  return a + b;
}