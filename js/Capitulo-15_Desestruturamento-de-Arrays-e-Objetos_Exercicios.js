/**************************************************************************************************
 * CAPÍTULO 15
 * 
 * DESESTRUTURAMENTO DE ARRAYS E OBJETOS
 *
 * Exercícios
 * Url: https://github.com/DiegoPinho/entendendo-es6/blob/master/Cap%C3%ADtulo%2015%20-%20Desestruturamento%20de%20Arrays%20e%20Objetos/exercicios.md
 * 
 **************************************************************************************************/

/**
 * Exercício 2 - Pegando a propriedade na lata
 */
//const { email, nome, idade } = usuario;

/**
 * Exercício 3 - Não gostei desse nome não
 */
const usuarios = {
    nome: 'Toreto',
    email: 'velozesefuriososparasempre@gmail.com'
}
const { nome:nick, email:login } = usuarios;
// console.log(nick,login);

/**
 * Exercício 4 - Minha mãe mandou eu escolher esse daqui...
 */
const contatos = [
    {
        nome: 'Mario Antonio',
        numero: '1234-5678'
    },
    {
        nome: 'Reinalda Silva',
        numero: '1234-6789'
    },
    {
        nome: 'Bárbara Lopes',
        numero: '1234-5567'
    }
];
  
const [,Rei] = contatos;
// console.log(Rei);

/**
 * Exercício 5 - Cara-Crachá
 */
const profissional = {
    titulo: 'Engenheiro de Software',
    departamento: 'Engenharia'
};

function isEngenheiro({titulo, departamento}) {  
    return titulo.indexOf("Engenheiro") > -1 && departamento === 'Engenharia';
}
  
// console.log(isEngenheiro(profissional)); // true
profissional.titulo = 'Marketing';
// console.log(isEngenheiro(profissional)); // false

/**
 * Exercício 6 - Mas o que são estes dados!?
 */
const corpoDocente = [
    [ 'Gramática', '9:00', 'Sueli' ],
    [ 'Matemática', '10:15', 'Amilton'],
    [ 'Educação Física', '11:30', 'Bruno' ]
];

function mostraGradeProfessores(aulas) {
    
    return aulas.forEach(([materia, hora, nome]) => {
        console.log(`Aula de ${materia} às ${hora} com professor(a) ${nome}`);
    });    
}

mostraGradeProfessores(corpoDocente);
