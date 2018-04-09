/**************************************************************************************************
 * CAPÍTULO 20
 * 
 * METAPROGRAMAÇÃO COM PROXIES
 * 
 **************************************************************************************************/
class Usuario {
    constructor(login, senha){
        this.login = login;
        this.senha = senha;
    }
}

const usuario = new Usuario('SuperJS', '123');

const proxys = new Proxy(usuario, {
  get(alvo, propriedade) {
    console.log(`${propriedade} foi solicitada!`);
    return alvo[propriedade];
  }
});

// console.log(proxys.login);
// console.log(proxys.senha);

const validador = {
    set(alvo, propriedade, valor) {
        if (propriedade === 'idade') {
            if(!Number.isInteger(valor)) {
                throw new TypeError('A idade não é um número!');
            }
        }

        alvo[propriedade] = valor;
    }
}
const usuarios = new Proxy({}, validador);
usuarios.idade = 10;
// console.log(usuarios.idade);	//	10
// usuarios.idade	=	'dez';	//	TypeError:	A	idade	não	é	um	número!
// usuarios.idade	=	{};	//	TypeError:	A	idade	não	é	um	número!
// usuarios.idade	=	true;	//	TypeError:	A	idade	não	é	um	número!

/**
 * 20.4	DESATIVANDO	UM	PROXY
 * 
 * É possível revocar um proxy,	ou seja, desligá-lo	de certa forma. 
 * Para isso, construir	nosso proxy	com um Proxy.revocable.	
 * 
 * const {proxy, revoke} = Proxy.revocable(alvo, handler);
 */

const {proxy, revoke} = Proxy.revocable({}, {});
proxy.teste = "teste";
console.log(proxy.teste);	//	teste
revoke();
console.log(proxy.teste);	//	TypeError: Cannot perform 'get' on	a proxy	that has been revoked