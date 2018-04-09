/**************************************************************************************************
 * CAPÍTULO 20
 * 
 * METAPROGRAMAÇÃO COM PROXIES
 * 
 * Exercícios
 * Url: 
 * 
 **************************************************************************************************/

/**
 * Exercício 3 - Sorria, você está sendo filmado
 */
class Livro {
    constructor(titulo, autor) {
        this.titulo = "ECMAScript 6 - Entre de cabeça no futuro do JavaScript";
        this.autor = "Diego Martins de Pinho";
    }
}

const livro_proxy = new Proxy(Livro, {
    get(alvo, propriedade) {
        console.log(`${propriedade} acessado!`);
        return alvo[propriedade];
    },

    set(alvo, propriedade) {
        console.log(`${propriedade} setada!`);
        return alvo[propriedade];
    }
});

livro_proxy.titulo; // titulo foi solicitado!
livro_proxy.autor; // autor foi solicitado!

livro_proxy.titulo = "ECMAScript 7"; // titulo foi setada!

/**
 * Exercício 5 - Só aceitamos dinheiro vivo
 */
class Compras {
    constructor(itens, valor_a_pagar, valor_pago) {
        this.itens = itens;
        this.valor_a_pagar = valor_a_pagar;
        this.valor_pago = valor_pago;
    }
}

const validador = {
    set(Compras, prop, val){
        let valor_a_pagar = Compras.valor_a_pagar;
        if(prop === 'valor_pago' && val < valor_a_pagar) {
            throw new TypeError('Saldo insuficiente!');
        }

        Compras[prop] = val;
    }
};

// let compras_validador = new Proxy({}, validador);
// compras_validador.valor_a_pagar = 100;
// compras_validador.valor_pago = 10;

/**
 * Exercício 6 - Fim da farsa, Usurpadora!
 */
class PaolaBracho {
    constructor(dinheiro, marido){
        this.dinheiro = 1000000;
        this.marido = 'Carlos Daniel Bracho';
    }
}

const usurpadora = {
    get(PaolaBracho, prop){
        if(prop === 'dinheiro' || prop === 'marido'){
            console.error('A Ursupadora está atacando!')
        }
    }
}

const { proxy:paola, revoke } = Proxy.revocable({}, usurpadora);
paola.dinheiro; // A Usurpadora está atacando!
revoke();
paola.marido;

