
//Função Pura

/*const soma = (x,y) => x + y;
let nome = '';
const alteraNome = (novoNome) => {

    nome = novoNome;

}*/

//Função Impura

//const usuario = {nome: 'Ernesto', sobrenome: 'Ndula', ponto: 0};
/*const alteraUsuario = (usuario) => {
    usuario.nome = usuario.nome.toUpperCase();
    usuario.ponto += 1;
    return usuario;
}*/

//Vantagem de usar uma função pura: legibilidade

/*
const nomeMaiusculo = (nome) => nome.toUpperCase();
const incrementaPontos = (ponto) => ponto + 1;
const MaisculoSobrenome = (sobrenome) => sobrenome.toUpperCase();

usuario.nome = nomeMaiusculo(usuario.nome);
usuario.ponto = incrementaPontos(usuario.ponto);
usuario.sobrenome = MaisculoSobrenome(usuario.sobrenome);
console.log(usuario);*/

//Função pura com maior legibilidade evitando assim efeitos colaterais

const usuario = {nome: 'Ernesto', sobrenome: 'Ndula', morada: 'Rua dos Ministros', pontos: 10};

const maisculoNome = (nome) => nome.toUpperCase();
const maisculoSobrenome = (sobrenome) => sobrenome.toUpperCase();
const maisculoMorada = (morada) => morada.toUpperCase();
const incrementaPontos = (pontos) => pontos + 10;

usuario.nome = maisculoMorada(usuario.nome);
usuario.sobrenome = maisculoSobrenome(usuario.sobrenome);
usuario.morada = maisculoMorada(usuario.morada);
usuario.pontos = incrementaPontos(usuario.pontos);

console.log(usuario);


const product = {nomePro: 'Full stack JavaScript', price: 1999};

const nomeMaisculo = (nomePro) => product.nomePro.toUpperCase();
const mostrarPreco = (price) => product.price + 10;

product.nomePro = nomeMaisculo(product.nomePro);
product.price = mostrarPreco(product.price);

console.log(product);



