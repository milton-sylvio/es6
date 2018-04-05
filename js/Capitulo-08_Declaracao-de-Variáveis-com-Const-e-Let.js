/**************************************************************************************************
 * CAPÍTULO 8
 * 
 * DECLARAÇÃO DE VARIÁVEIS COM CONST E LET
 *
 **************************************************************************************************/

/**
 * 8.1 - CONSTANTES COM CONST 
 */
const data_nascimento = '21/07/1995';
// data_nascimento = '25/09/1996'; // Uncaught TypeError: Assignment to constant variable.
//const data_nascimento = '25/09/1996'; // Uncaught SyntaxError: Identifier 'data_nascimento' has already been declared.

console.log( 'A data de nascimento é: ' + data_nascimento ); // A data de nascimento é: 21/07/1995

/**
 * 8.2 - LET É O NOVO VAR 
 */
// function soma(valor1, valor2){
// 	return valor1 + valor2;
// }

// let resultado = 0;
// resultado = soma(2,3);
// console.log( resultado );

var id = 2;
console.log(id); // 2
let id = 1;
// const id = 1; // SyntaxError: Identifier 'id' has already been declared