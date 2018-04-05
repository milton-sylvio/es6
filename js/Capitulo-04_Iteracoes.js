/**
 * ITERACOES 
 */
// var times = ['Palmeiras', 'São Paulo', 'Corinthians'];
// var iteradorTimes = times[Symbol.iterator]();
// var done = false;
// var proximo = iteradorTimes.next();
// do {
// 	var time = proximo.value;
// 	estadioSeletor.fazerSelecaoDoEstadio(times);
// 	proximo = iterador.next();
// } while (!proximo.done);

// console.log( iteradorTimes.next() );
// console.log( iteradorTimes.next() );
// console.log( iteradorTimes.next() );
// console.log( iteradorTimes.next() );

var numeros = [1,2,3,4,5];
for(var numero of numeros) {
	// console.log(numero);
}

var perfilDoFacebook = {
	nome: 'Carlos',
	idade: 22
}
for(var dado of perfilDoFacebook){
	// console.log(dado);
}