dados = [{nome: 'Caramelo', idade: 3, tipo: 'cachorro'},
        {nome: 'Rex', idade: 6, tipo: 'cachorro'},
        {nome: 'Bolota', idade: 1, tipo: 'gato'},
        {nome: 'Thor', idade: 3, tipo: 'cachorro'}
];

//Filtrando
const cachorros = dados.filter((dado, index) => dado.tipo === 'cachorro');
//Mapeando os dados por intermedio de uma manipulação
const idadeReal = cachorros.map((cachorro) => ({nome: cachorro.nome, idade: cachorro.idade * 7}));
//Somando todas as idades
const totalIdades = idadeReal.reduce((soma = 0, dado) => {

    return soma + dado.idade;

}, 0);

//Chamando um outro array
//Encadeamento criando assim menos variaveis e menos refencias na nossa memoria 
const idade = dados.filter((dado, index) => dado.tipo === 'cachorro')
.map((cachorro) => ({nome: cachorro.nome, idade: cachorro.idade * 7}))
.reduce((soma = 0, dado) => {

    return soma + dado.idade;

}, 0);

console.log(totalIdades);
//Console com encadeamentos(chain);
console.log(idade);''




