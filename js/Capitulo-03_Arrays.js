/**
 * FOREACH 
 */
var nomes = ['Maria', 'José', 'João'];
nomes.forEach(function(nome){
	// console.log(nome);
	// document.getElementById('forEach').innerHTML += nome + '\n';
});

var canais = ['Globo', 'SBT', 'Record'];
canais.forEach(function(chanel){
	canais.push('RedeTV');
	// console.log(chanel);
});

// console.log( canais );


/**
 * MAP 
 */
var numeros = [1,2,3];
var dobro = numeros.map(function(nros){
	return nros * 2;
});

// console.log(numeros);
// console.log(dobro);


/**
 * FILTER 
 */
var alunos = [
	{ nome: 'João', idade: 15 },
	{ nome: 'José', idade: 18 },
	{ nome: 'Maria', idade: 20 }
];

var alunosDeMaior = alunos.filter(function(aluno){
	return aluno.idade >= 18;
});

// console.log( alunosDeMaior );


/**
 * FIND 
 */
var alunos = [
	{ nome: 'João' },
	{ nome: 'José' },
	{ nome: 'Maria' }
];

var students = alunos.find(function(aluno){
	return aluno.nome === 'José';
});

// console.log( students );


/**
 * EVERY 
 */
var alunos = [
	{ nome: 'João',  idade: 19 },
	{ nome: 'Maria', idade: 20 },
	{ nome: 'Pedro', idade: 24 }
];

var todosAlunosDeMaior = alunos.every(function(a) {
	return a.idade > 18;
});

// console.log( todosAlunosDeMaior );


/**
 * SOME 
 */
var pesoDasMalas = [12,32,21,29];

var temMalaAcimaDoPeso = pesoDasMalas.some(function(pm) {
	return pm > 20;
});

// console.log( temMalaAcimaDoPeso );


/**
 * REDUCE 
 */
var numeros = [1,2,3,4,5];
var soma = 0;

soma = numeros.reduce(function(soma, nro) {
	return soma + nro;
}, 0);

// console.log( soma );

var alunos = [
	{ nome: 'Maria', idade: 20 },
	{ nome: 'Pedro', idade: 24 },
	{ nome: 'João',  idade: 19 }
];

var nomes = alunos.reduce(function(arrayNomes, aluno){
	arrayNomes.push(aluno.nome);
	return arrayNomes.sort();
}, []);

console.log( nomes );
