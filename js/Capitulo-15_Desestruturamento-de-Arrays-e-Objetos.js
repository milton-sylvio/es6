/**************************************************************************************************
 * CAPÍTULO 15
 * 
 * DESESTRUTURAMENTO DE ARRAYS E OBJETOS
 *
 **************************************************************************************************/
const Usuario = {
    nome: 'Giulia',
    sobrenome: 'Alves da Silva',
    senha: 'unicornio',
    email: 'giulia.alves@gmail.com',
    profissao: 'Analista de Sistemas',
    github: 'https://github.com/giulia-alves'
};

const {email} = Usuario;
// console.log(email);

const {senha, profissao} = Usuario;
// console.log(senha);
// console.log(profissao);

const {nro_cartao} = Usuario;
// console.log(nro_cartao); // undefined

/**
 * 15.1 ROTULANDO PROPRIEDADES
 */
const People = {
    name: 'Vilma'
}

const {name:nome} = People;
// console.log(name);
// console.log(nome);

/**
 * 15.2 DESESTRUTURAMENTO DE VÁRIOS OBJETOS
 */
const suco = {
    sabor: 'uva',
    quantidade: '500ml'
}

const doce = {
    tipo: 'açúcar'
}

function descreveSuco({sabor, quantidade}, {tipo}) {
    return `Este suco é de sabor ${sabor} e possui ${quantidade}, adocicado com ${tipo}.`;
}

//console.log( descreveSuco(suco, doce) );

/**
 * 15.3 DESESTRUTURAMENTO EM RETORNO DE CHAMADAS DE MÉTODOS
 */
function recuperaDadosAPITempo(){

    const tokenClimaTempo = "03eef6b91f1007eb82013e14d593771e",
          URL = `http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3735/current?token=${tokenClimaTempo}`,
          ajax = new XMLHttpRequest();
    
    let response = '{"id":3735,"name":"Osasco","state":"SP","country":"BR","data":{"temperature":22,"wind_direction":"SE","wind_velocity":11,"humidity":78,"condition":"Muitas nuvens","pressure":1014,"icon":"2r","sensation":22,"date":"2018-04-03 20:28:09"}}';
    return JSON.parse(response);

    // //Cria um evento para receber o retorno.
    // ajax.onreadystatechange = function() {
    //     // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    //     if (ajax.readyState == 4 && ajax.status == 200) {
    //         const data = JSON.parse(ajax.responseText);
    //         console.log(data)
    //         return data;
    //     }
    // }

    // // Seta tipo de requisição e URL com os parâmetros
    // ajax.open("GET", URL, true);

    // // Envia a requisição
    // ajax.send(null);

    // fetch(URL)
    // .then(response => response.json())
    // .then(result => {
    //     return result;
    // })
    // .catch(function(ex) {
    //     console.log('parsing failed', ex)
    // });
}

//usage:
const {name, state, country} = recuperaDadosAPITempo();
// console.log( name );
// console.log( state );
// console.log( country );

/**
 * 15.4 DESESTRUTURAMENTO DE ARRAYS
 */
const [cor1,,,cor2, cor3] = ['verde','vermelho','azul','branco'];
//console.log(cor1,cor2,cor3);

const contatos = [
    {
        nome: 'Alex Júnior',
        numero: '1234-5678'
    },
    {
        nome: 'Carolina Moya',
        numero: '1234-6789'
    },
    {
        nome: 'Fernando Jorge',
        numero: '1234-5567'
    }
];

const [,Carol] = contatos;

function mostraNumero({numero}) {
    // console.log(numero);
}

mostraNumero(Carol);

const rotas = {
    rapidas: ['Rodovia', 'Estrada X', 'Estrada Y']
};

const { rapidas:[rapida] } = rotas;
console.log(rapida);