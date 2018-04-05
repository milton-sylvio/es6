/**************************************************************************************************
 * CAPÍTULO 16
 * 
 * MODELANDO COM CLASSES
 * 
 **************************************************************************************************/
function Carro(modelo, chassi, qtd_portas) {
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtd_portas = qtd_portas;
}

const prototipo = new Carro('prototipo', '1290381209', 2);
/* console.log(prototipo.modelo);
console.log(prototipo.chassi);
console.log(prototipo.qtd_portas);*/

Carro.prototype.andar = function () {
    console.log('vrum vrum');
}

//prototipo.andar();

function Sonix(modelo, chassi, qtd_portas) {
    Carro.call(this, modelo, chassi, qtd_portas);
}
Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constructor = Sonix;

const sonix = new Sonix('Sonix', '9120219', 4);
// console.log(sonix.modelo);
// sonix.andar();

/* NOVA ABORDAGEM, DO ES6 */
class Car {
    constructor(model, chassi, doors) {
        this.model = model;
        this.chassi = chassi;
        this.doors = doors;
    }

    walking () {
        console.log('vrum vrum');
    }
}

const car = new Car('Fiesta', '123654', 2);
// console.log(car.model);
// console.log(car.chassi);
// console.log(car.doors);
// car.walking();

/*
 * 16.2	ESTENDENDO CLASSES
 **/
class SUV extends Car {
    constructor(model, chassi, doors){
        super(model, chassi, doors);
    }

    cambio () {
        console.log('Todos tem câmbio automático!');
    }
}

// const suv = new SUV('IZ35', '69853213', 4);
// suv.cambio();
// suv.walking();
// console.log(suv.model);

/*
 * 16.5	MÉTODOS	ESTÁTICOS
 **/
class Casa {
    static abrirPorta(){
        console.log('Abriram a porta!!!')
    }
}
Casa.abrirPorta();

/*
 * 16.6	ATRIBUTOS PRIVADOS COM WEAKMAP
 **/
/* 
    A atual sintaxe "class" do ES não tem suporte à propriedades privadas, nesse caso, podemos
    utilizar o WeakMap.
*/

const propriedades = new WeakMap();
class VideoGame {
    constructor(nome, controles, saida, midia){
        propriedades.set(this, {
            nome, controles, saida, midia
        });
    }

    recuperaPropriedade(propriedade) {
        return propriedades.get(this)[propriedade];
    }
}

const v_g = new VideoGame('XBox 360', 2, 'hdmi', 'DVD');
console.log(v_g.recuperaPropriedade('nome'));