/**************************************************************************************************
 * CAPÍTULO 10
 * 
 * ARROW FUNCTIONS
 *
 **************************************************************************************************/
/**
 * 10.1 SÃO MENOS VERBOSAS
 */
var boasVindas = nome => `Seja bem vindo, ${nome}`;
console.log( boasVindas('Luiz') );

/**
 * 10.2 O CONTEXTO DE EXECUÇÃO É DIFERENTE
 */

const equipe = {
	nome: "Dragon Ball Z",
	membros: ["Goku", "Vegeta", "Kuririn"],
	membrosEquipe: function () {
		this.membros.forEach(membro => {
			console.log(`${membro} é a equipe ${this.nome}`);
		});
	}
};

equipe.membrosEquipe();