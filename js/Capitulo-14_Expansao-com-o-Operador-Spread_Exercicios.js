/**************************************************************************************************
 * CAPÍTULO 14
 * 
 * EXPANSÃO COM O OPERADOR SPREAD
 *
 * Exercícios
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2014%20-%20Expans%C3%A3o%20com%20o%20operador%20Spread/exercicios.md
 * 
 **************************************************************************************************/

/**
 * Exercício 1 - Hora do ditado
 */
const letras = ['e','c','m','a','s','c','r','i','p','t'];
// console.log(... letras);

/**
 * Exercício 3 - Contador de Vogais
 */
function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
    let qtde_vogais = 0;

    for (let palavra of palavras) {
        const palavra_lowercase = palavra.toLowerCase(),
              letras = [...palavra_lowercase];

        for(let letra of letras) {
            if("aeiou".indexOf(letra) !== -1){
                qtde_vogais++;
            }
        }
    }

    // console.log(qtde_vogais);
    
    return qtde_vogais;
}

contaQuantidadeVogaisNaoAcentuadas('Milton');
contaQuantidadeVogaisNaoAcentuadas('Milton Sylvio da Silva JÚnior');
contaQuantidadeVogaisNaoAcentuadas('Milton ViLMa GIULIA');


/**
 * Exercício 3 - Contador de Vogais
 */

const equipe_marketing = ['Joana', 'Marcela', 'Bruna'];
const equipe_comercial = ['Talita', 'Luisa', 'Vitória'];

const time_completo = [...equipe_marketing, ...equipe_comercial];

realizaBrainstorm(time_completo);
