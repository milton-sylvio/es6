/**************************************************************************************************
 * CAPÍTULO 20
 * 
 * METAPROGRAMAÇÃO COM PROXIES
 * 
 **************************************************************************************************/
/**
 * 19.3	O ESQUELETO	DE	UMA	PROMISE
 */
let promise = new Promise((resolve, reject) => {
    
    resolve("ok!");
});

promise
    .then(data => {
        console.log(`resultado positivo: ${data}`);
        throw new Error("Moio!");
        return data;
    })
    .then(data => {
        console.log(`resultado positivo 2: ${data}`);
    })
    .catch(data => {
        console.log(`resultado negativo: ${data}`);
    });