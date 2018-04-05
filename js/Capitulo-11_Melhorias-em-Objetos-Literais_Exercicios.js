/**************************************************************************************************
 * CAPÍTULO 10
 * 
 * ARROW FUNCTIONS
 *
 * Exercícios
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2010%20-%20Arrow%20Functions/exercicios.md
 *
 **************************************************************************************************/

/**
 * Exercício 1 - Hora de usar as setas
 *
 * Utilize o que foi aprendido neste capítulo e refatore a função imprimeProduto para utilizar arrow functions. 
 * Não deixe de customizar o método para utilizar templates strings.
 */
let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

let imprimeProduto = (nome, preco) => {
    console.log(`Produto: ${nome} | Preço: ${preco}`);
}

carrinho.forEach(function(produto) {
    imprimeProduto(produto.nome, produto.preco);
})

/**
 * Exercício 1 - Hora de usar as setas novamente
 *
 */
let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach( item => console.log(item) );

/**
 * Exercício 4 - Vou lavar sua boca com sabão!
 *
 * Utilize as arrow funcions para deixar o código a seguir ainda menor
 *
 */
let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos = palavroes.map( palavrao => palavrao.length );

console.log(tamanhos); // [ 22, 22, 44, 28 ]

/**
 * Exercício 5 - Tudo dentro do seu escopo
 *
 * Utilize as arrow funcions para deixar o código a seguir ainda menor
 *
 */
const equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    imprimeNomes: function() {
        this.membros.forEach( membro => {
            console.log( `${membro} é da equipe ${this.nome}` );
        })
    }
}

equipe.imprimeNomes();

