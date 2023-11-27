const alfabeto = new Set(['a', 'b', 'c', 'd']);
let dados = [1, 2, 3, 3, 4, 4, 5];

const numero = new Set(dados);

dados = Array.from(numero);

alfabeto.add('a');

/*No set nós temos um comando que nos facilta encontrar ou verificar a existencia de um dado no array
    e com o Set nós não temos indexação dos dados.(has)

    metodos do Set que facilitam a manipulação dos dados no Array
    1-add();
    2-delete();
    3-forEach

*/
//console.log(alfabeto.has('a'));
//console.log(alfabeto.delete('a'));
//console.log(alfabeto.add('e'));
//console.log(alfabeto);
//console.log(numero);
//console.log(dados);

//Trabalhando com o Map

const informacoes = new Map([['nome', 'Ernesto'], ['idade', 28]]);

informacoes.set('Cidade', 'Cabinda');

informacoes.forEach((chave, informacoes) => console.log(chave, informacoes));

console.log(informacoes);
console.log(informacoes.get('nome'));
console.log(informacoes.get('idade'));
console.log(informacoes.get('Cidade'));