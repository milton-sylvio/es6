// desenvolva aqui seus códigos para os exercícios
import nome, { chave, url as link } from "./src/config";
console.log(nome);
console.log(chave);

// import {url as link} from './src/config';
console.log(link);

import Telefone from "./src/classe";
const tel = new Telefone('iPhone', 1198088888);
console.log(`Meu celular é um ${tel.modelo} e o número dele é ${tel.numero}`);

import printer from './src/printer';
printer('Lula preso!!!');

