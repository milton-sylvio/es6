/**************************************************************************************************
 * CAPÍTULO 7
 * 
 * LISTAS SEM REPETIÇÕES COM SETS E WEAKSETS
 *
 **************************************************************************************************/

/**
 * 7.1 - SET 
 */
var set = new Set();
set.add( 2 );
set.add( 1 );
set.add( 2 );

// console.log( 'size: ' + set.size );
// console.log( 'has: ' + set.has( 3 ) );

for( let key of set.keys() ){
	// console.log( 'keys:', key );
}

var sets = new Set([3,4,3]);

// console.log( 'size: ' + sets.size );
// console.log( 'has: ' + sets.has( 3 ) );

for( let key of sets.keys() ){
	// console.log( 'keys:', key );
}

/**
 * 7.2 - WEAKSET 
 */
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

console.log( ws.has(window) );
console.log( ws.has(foo) );

ws.delete(window);
console.log( ws.has(window) );