const alvo = {a: 1, b: 2};
const dados = {b: 5, c: 4};
//const resultado = Object.assign(alvo, dados);
//resultado.a = 'a';
//console.log(resultado);


//Criando um novo objeto
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const resultado = Object.assign({}, obj1, obj2);


//Trabalahndo com dados do aluno e as suas notas

//Objeto representando dados do aluno
const estudante = {

    name: "Ernesto",
    age: 20
};

//Objeto representando as notas do aluno

const notas = grades = {

    Matematica: 17,
    BaseDeDados: 19,
    PesquisaOpera: 18
};

//Usando o Object.assign para combinar os objetos

const estudantecomNotas = Object.assign({}, estudante, notas);

console.log(resultado);
console.log(estudantecomNotas);