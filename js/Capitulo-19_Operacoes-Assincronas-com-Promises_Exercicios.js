/**************************************************************************************************
 * CAPÍTULO 19
 * 
 * OPERAÇÕES ASSÍNCRONAS COM PROMISES
 * 
 * Exercícios
 * Url: https://bit.ly/2HnnDhs
 * 
 **************************************************************************************************/
/**
 * Exercício 3 - Você cumpre as suas promessas?
 */

function simulaPromise(sucesso = true) {
    
    let promise = new Promise((resolve, reject) => {
        
        if(sucesso) {
            resolve('ok!');
        } else {
            reject('not ok!')
        }
    });
    
    promise
        .then(data => {
            console.log(data);
        })
        .catch(data => {
            console.log(data);
        });
}

// simulaPromise(); // ok
// simulaPromise(false); // not ok
// simulaPromise(true); // ok

/**
 * Exercício 4 - Você cumpre as suas promessas em tempo?
 */
function simulaPromiseNew(sucesso = true, delay) {

  let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sucesso) {
                resolve("ok!");
            } else {
                reject("not ok!");
            }
        }, delay);
  });

  promise
    .then(data => {
        console.log(data);
    })
    .catch(data => {
        console.log(data);
    });
}

simulaPromiseNew(true, 2000); // ok
simulaPromiseNew(false, 1000); // not ok
