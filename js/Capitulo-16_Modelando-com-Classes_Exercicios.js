/**************************************************************************************************
 * CAPÍTULO 16
 * 
 * MODELANDO COM CLASSES
 * 
 * Exercícios
 * Url: https://bit.ly/2GDZyld
 *
 **************************************************************************************************/

/**
 * Exercício 1 - Dando uma transformada nos objetos
 */
class VideoGame {
    constructor(marca, nControles, tipoMidia) {
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
    }
}
// let playstation = new VideoGame('sony', 2, 'dvd');
// console.log(playstation);

/**
 * Exercício 2 - O meu videogame é muito melhor que o seu
 */
class PlayStation extends VideoGame {
    constructor(marca, nControles, tipoMidia, nEntradasUSB, voltagem, adicionais) {
        super(marca, nControles, tipoMidia);

        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
}

let playstation = new PlayStation("sony", 2, "dvd", 2, 110, ["Volante, Óculos"]);
console.log(playstation);

/**
 * Exercício 3 - Tem alguém ai?
 */
class Porta {
    static toctoc () {
        console.log('Quem é?');
    }
}

Porta.toctoc();

/**
 * Exercício 5 - Declarações anônimas
 */
const Computador = class {
    
}
