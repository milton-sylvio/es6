/**************************************************************************************************
 * CAPÍTULO 6
 * 
 * AS NOVAS ESTRUTURAS DE MAP E WEAKMAP
 *
 **************************************************************************************************/

/**
 * 6.1 - MAP 
 */
 var mapa = new Map();
 function funcao(){};
 var objeto = {};

 // SET
 mapa.set( 'string', 'sou uma string' );
 mapa.set( funcao, 	 'sou uma função' );
 mapa.set( objeto, 	 'sou um objeto' );


 // GET
 console.log( mapa.get( 'string' ) ); // sou uma string
 console.log( mapa.get( funcao ) ); // sou uma função
 console.log( mapa.get( objeto ) ); // sou um objeto

  // SIZE
  console.log( "Tamanho: " + mapa.size ); // Tamanho: 3

  // HAS
  console.log( mapa.has( 'string' ) ); // true
  console.log( mapa.has( 'abc' ) ); // false

  // DELETE
  mapa.delete( 'string' );
  console.log( mapa.has( 'string' ) ); // false

  // CLEAR
  mapa.clear();
  console.log( 'Tamanho: ' + mapa.size ); // Tamanho: 0


// ITERAÇÕES
var map = new Map();
map.set( 'um', 1 );
map.set( 'dois', 2 );
map.set( 'três', 3 );

for( var chave of map.keys() ){
	console.log( chave );
}

for( var valor of map.values() ){
	console.log( valor );
}

for( var entradas of map.entries() ){
	console.log( entradas );
}


/**
 * 6.2 - WEAKMAP 
 */
var weak_map = new WeakMap();
function funccao() {};
var objjeto = {};

weak_map.set( 'string', 'isso é uma string' );
weak_map.set( funccao, 'isso é uma função' );
weak_map.set( objjeto, 'isso é um objeto' );

console.log( weak_map.get( 'string' ) );
console.log( weak_map.get( funccao ) );
console.log( weak_map.get( objjeto ) );
