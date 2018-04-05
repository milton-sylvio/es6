/**************************************************************************************************
 * CAPÍTULO 14
 * 
 * EXPANSÃO COM O OPERADOR SPREAD
 *
 **************************************************************************************************/

const argumentos = [1,2,3];
// console.log(...argumentos); // 1,2,3

/**
 * 14.1 FAZENDO COMPRAS COM O SPREAD
 */
const lista_mae = ['leite', 'ovos', 'papel'];
const lista_namorada = ['arroz','feijão', 'suco'];
const list_escritorio = ['adesivos', 'canetas', 'fita adesiva'];
const lista_compras = [...lista_mae, ...lista_namorada, ... list_escritorio];

const listaCompras = [lista_mae, lista_namorada, list_escritorio];

// com spread
//console.log(lista_compras); // ['leite', 'ovos', 'papel','arroz','feijão', 'suco','adesivos', 'canetas', 'fita adesiva']

// sem spread
// console.log(listaCompras); //  ["leite", "ovos", "papel"], ["arroz", "feijão", "suco"], ["adesivos", "canetas", "fita adesiva"]

/**
 * 14.2 ADICIONANDO ITENS A UM ARRAY
 */
const produto_selecionado = {
    descricao: 'Blusa de Lã',
    preco: '59,90'
};

const carrinho = [
    { descricao: 'Bota de Cano Médio', preco: '199,90' },
    { descricao: 'Saia Colorida', preco: '29,90' },
    { descricao: 'Vestido Longo', preco: '399,90' },
];

const carrinho_atualizado = [...carrinho, produto_selecionado];

for(let produtos of carrinho_atualizado){
    // console.log(produtos.descricao);
}

/**
 * 14.3 OPERADOR SPREAD EM CHAMADAS DE FUNÇÕES
 */
function soma(a,b) {
    // console.log(a + b);
}
const numeros = [1,2];
soma(...numeros); // 3

// Vamos criar uma função que calcula a quantidade de vogais não acentuadas em uma palavra
function contaQtdeVogaisSemAcento(palavra) {
    let qtd_vogais = 0;
    const palavra_lowercase = palavra.toLowerCase(),
          letras = [...palavra_lowercase];
    
    for(let letra of letras){
        if ("aeiou".indexOf(letra) !== -1) {
            qtd_vogais++;
        }
    }

    // console.log(qtd_vogais);

    return qtd_vogais;
}

contaQtdeVogaisSemAcento('ecmascript'); // 3
contaQtdeVogaisSemAcento('javascript'); // 3
contaQtdeVogaisSemAcento('SWIFT'); // 1
contaQtdeVogaisSemAcento('jAvA'); // 2

/**
 * 14.4 OPERADOR REST X OPERADOR SPREAD
 */
// Vamos mudar a lógica da funcao anterio para  que calcula a quantidade de vogais não acentuadas em várias palavras
function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
    let qtd_vogais = 0;

    for(let palavra of palavras) {
        let palavra_lowercase = palavra.toLowerCase();
        const letras = [... palavra_lowercase];

        for(let letra of letras) {
            if("aeiou".indexOf(letra) !== -1) {
                qtd_vogais++;
            }
        }
    }

    console.log(qtd_vogais);

    return qtd_vogais;
}

contaQuantidadeVogaisNaoAcentuadas('es6'); // 1
contaQuantidadeVogaisNaoAcentuadas('java', 'javascript', 'delphi'); // 7
contaQuantidadeVogaisNaoAcentuadas('NãO ConSideRa AcentUADoS'); // 10