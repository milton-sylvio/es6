/**************************************************************************************************
 * CAPÍTULO 18
 * 
 * FUNÇÕES GERADORAS
 * 
 **************************************************************************************************/
function* percorrerLinha477 (){
    console.log('Passei pela rua 1');
    yield 'Parada 1';

    console.log('Passei pela rua 2');
    yield 'Parada 2';

    console.log('Passei pela rua 3');
    yield 'Parada 3';

    console.log('Passei pela rua 4');
    yield 'Fim da linha';
}

const linha477 = percorrerLinha477();
// let next = linha477.next(); console.log(next);
// next = linha477.next(); console.log(next);
// next = linha477.next(); console.log(next);
// next = linha477.next(); console.log(next);
// next = linha477.next(); console.log(next);

/**
 * 18.2 ITERAÇÕES COM GERADORES
 */
function* percorrerLinha488() {
    console.log("Passei pela rua 5");
    yield "Parada 5";

    console.log("Passei pela rua 6");
    yield "Parada 6";

    console.log("Passei pela rua 7");
    yield "Parada 7";

    console.log("Passei pela rua 8");
    yield "Fim da linha novamente!";
}
const linha488 = percorrerLinha488();
/* let prox = linha488.next();
while(!prox.done) {
    console.log(prox);
    prox = linha488.next();
} */
// for (let parada of linha488) {
//     // console.log(parada)
// }

/**
 * 18.3 ENTENDENDO O SYMBOL.ITERATOR
 */
const primos = [2,3,5];
const iterador = primos[Symbol.iterator]();
// console.log(iterador.next()); // { value: 2, done: false }
// console.log(iterador.next()); // { value: 3, done: false }
// console.log(iterador.next()); // { value: 5, done: false }
// console.log(iterador.next()); // { value: undefined, done: true }

const equipe = {
    quantidade: 3,
    maturidade: 'alta',
    senior: 'Luiz',
    pleno: 'Márcia',
    junior: 'Christian',
    [Symbol.iterator]: function* () {
        yield this.senior;
        yield this.pleno;
        yield this.junior;
    }
}
for(let integrantes of equipe) {
    //console.log(integrantes);
}

/**
 * 18.4 DELEGAÇÃO DE FUNÇÕES GERADORAS
 */
const time_desensevolvimento = {
    qtd: 3,
    senior: "Luiz",
    pleno: "Márcia",
    junior: "Christian",
    [Symbol.iterator]: function* () {
        yield this.senior;
        yield this.pleno;
        yield this.junior;
    }
};

const time_negocios = {
    qtd: 2,
    diretor: 'Marcelo',
    vice: 'Guilherme',
    [Symbol.iterator]: function* () {
        yield this.diretor;
        yield this.vice;
    }
}

const equipes = {
    time_desensevolvimento,
    time_negocios,
    [Symbol.iterator]: function* () {
        yield* time_desensevolvimento;
        yield* time_negocios;
    }
}

for(let integrantes of equipes) {
    console.log(integrantes);
}