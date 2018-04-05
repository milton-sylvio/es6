/**************************************************************************************************
 * CAPÍTULO 9
 * 
 * MANIPULAÇÃO DE TEXTOS COM TEMPLATE STRINGS
 *
 **************************************************************************************************/

/**
 * 9.1 TEMPLATE STRINGS SIMPLES
 */
const nome = 'Diego';
// console.log(`Bem vindo ${nome}`);

const n1 = 1, n2 = 2;
// ,console.log( `${n1} + ${n2} = ${n1 + n2}` );

/*console.log(`
exibindo
uma
palavra
por
linha
`);*/


/*
 * 9.2 TEMPLATE STRINGS MARCADO
 */

const horas = new Date().getHours();
// const mensagem = `Bom dia são ${horas} horas`;

function defineMensagem(strings, ...values) {
	const hora = values[1];

	if(hora >= 6 && hora <= 12) {
		values[0] = "Bom dia";
	} else if (hora > 12 && hora <= 18) {
		values[0] = "Boa tarde";
	} else {
		values[0] = "Boa noite";
	}

	values[0] = `${values[0]}, são `;

	return `${values[0]}${strings[0]}${hora}${strings[2]}`;
}

const mensagem = defineMensagem `${""}${horas} horas`;
console.log(mensagem);