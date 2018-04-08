/**************************************************************************************************
 * CAPÍTULO 17
 * 
 * MÓDULOS
 * 
 **************************************************************************************************/
/**
 * 17.2 IMPORTAR E EXPORTAR MÓDULOS
 */
export const PI = 3.14;

function comprimento(raio) {
    return 2 * PI * raio;
}

function area() {
    return PI * (raio * raio);
}

export default comprimento; // padrão
export {area, PI}; // nomeado

import comprimento from './circunferencia';

comprimento(2); // ~12,5

import {comprimento, somar , PI} from './circunferencia';

comprimento(2); // 12,5
raio(2); // ~ 12,5
console.log(PI); // 3.14

// Também podemos usar o * (asterisco) para importar tudo que o módulo expõe.
import * as circunferencia from './circunferencia';

circunferencia.comprimento(2);
circunferencia.raio(2);
console.log(circunferencia.PI);

/**
 * 17.3 EXPORTANDO CLASSES
 * 
 * Exemplos abaixo com base num player de vídeo
 */
class Controles {
    // implementação dos botões
}

export default Controles; // exportação padrão pois tudo está dentro da classe

import Controles from './Controles';
import Titulos from './Titulo';
import Links from './Links';

class Player {
    // implementação do player
}

/**
 * 17.4 RÓTULOS EM MÓDULOS
 */

// Não é necessário usar o nome exato das propriedades do módulo quando o importamos para dentro do nosso código;
// é possível utilizar rótulos.

class Perfil {
    // implementação do Perfil
}

export default  Perfil;

/*  
    Se não quisemos usar o nome Perfil da classe no nosso projeto,
    podemos rotulá-la com outro nome por meio da palavra reservada AS.
*/
import Perfil as Jogador from './profile';

// E o mesmo princípio pode ser aplicado para importações nomeadas.
import {adicionarPerfil as adicionarJogador} from './profile';

adicionarPerfil(); // ERRO!
adicionarJogador(); // OK