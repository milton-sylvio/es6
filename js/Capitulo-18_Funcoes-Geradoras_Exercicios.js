/**************************************************************************************************
 * CAPÍTULO 18
 * 
 * FUNÇÕES GERADORAS
 * 
 * Exercícios
 * Url: https://bit.ly/2Hh3TvL
 * 
 **************************************************************************************************/
/**
 * Exercício 3 - Corre Bolt! Corre!
 */
function* correBolt(){
    console.log("Usain passou no Checkpoint 1");
    yield 'Checkpoint 1';
    console.log("Usain passou no Checkpoint 2");
    yield 'Checkpoint 2';
    console.log("Usain passou no Checkpoint 3");
    yield 'Checkpoint 3';
    console.log("Usain passou no Checkpoint 4");
    yield 'Terminooooouuuu!';
}
let corrida = correBolt();
corrida.next();
corrida.next();
corrida.next();
corrida.next();

/**
 * Exercício 5 - Símbolos dizem até demais
 */
const equipe = {
  gerente: "Gilberto",
  estagiario: "Fernanda",
  senior: "Paulo",
  pleno: "Camila",
  junior: "Adão",
  [Symbol.iterator]: function*() {
    yield this.gerente;
    yield this.estagiario;
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
};

for(let integrante of equipe) {
  console.log(integrante);
}

