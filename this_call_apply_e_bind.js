/*console.log(this);

this.nome = 'Ernesto';
console.log(this.nome);

function teste() {console.log(this)}
teste();

const dados = {funcao: teste}

dados.funcao();*/

//Call

const dados = {nome: 'Ernesto'};
const saudacao = function(idade){

    console.log(`Bem Vindo ${this.nome} a sua idade é ${idade}`);
}

const meusDados = {nome: 'Mateus', sobrenome: 'Ndula', morada: '1 de Maio'};
const resposta = function(idade){

    console.log(`Olá ${this.nome} com o sobrenome ${this.sobrenome} com morada no bairro ${this.morada} e a sua idade é ${idade}`);
}

saudacao.call(dados, 26);
resposta.call(meusDados,28);


//Apply

const dados2 = {nome2: 'Kloriano'};
const argumentos = [25];
const saudacao2 = function(idade){

    console.log(`Bem vindo ${this.nome2} a sua idade é ${idade}`);
}

saudacao2.apply(dados2, argumentos);

const dados3 = {nome3: 'Jailson'};
const saudacao3 = function(idade){

    console.log(`Bem Vindo ${this.nome3} e a sua idade é ${idade}`);
}

const bound = saudacao3.bind(dados3);
bound(23);