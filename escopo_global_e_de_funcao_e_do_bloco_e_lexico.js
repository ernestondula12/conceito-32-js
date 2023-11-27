/*
Escopo: É acessibilidade das variaveis, funções e objetos, e uma parte do meu codigo enquanto
esta sendo executado. em outras palavras o escopo determina a visibilidade das variaveis e outros
recursos nas areas do meu codigo ou bloco de codigos 

var: Ela funciona como escopo global;
let e const: são variaveis de bloco pois elas só se limitan entre os blocos de uma determinada
função, condição, metodos e tantos os outros.

Escopos Lexico: Significa que o senario onde temos funções aninhadas que quer dizer funções dentro
de funções os recursos das variaveis e funções mais acima estão disponiveis nas funções que estão
mais a dentro.

Escopo Global: Quando começamos a escrever o nosso código é porque estamos no escopo global
pois ela é o escopo do meu objeto window(minha janela) pois todas as variaveis criadas no escopo
global elas estão disponiveis totalmente para qualquer parte do nosso programa

Escopo de função: Este escopo funciona como lexico pois todas as variaveis que criamos dentro de
uma função ela só fica disponivel para aquela função.

Escopos de Bloco: Onde o const e Let entram e elas só ficam disponiveis entre os blocos a qual foram
declaradas e também aninhadas dentro dela.
Hoisting: Elevado
*/

//Nesta Bloco temos o Escopo Lexico

/*
var nome = "Ernesto";

function teste(){

    var sobrenome = "sobrenome";
    if(sobrenome === "sobrenome"){

        const valor = 10;

        console.log(valor);
    }

    //console.log(valor);
}
teste();*/

//Neste bloco temos o Escopo global
/*
var a = 0;

function alterar(){

    a = 10;
}

console.log(a);
alterar();
console.log(a);*/

//Neste bloco temos Escopo de Bloco
/*
function bloco(){

    var teste;

    if(true){

        teste = 'teste';
        var teste2 = 'teste2';
    }

    console.log('teste', teste);
    console.log('teste2', teste2);
}
bloco();*/

//Neste Bloco temos HOISTING

function hoisting(){

    var teste1;

    if(true){

        teste1 = 'teste1';
        var teste2 = 'teste2';
    }

    console.log("Teste1", teste1);
    console.log("Teste2", teste2);
}

hoisting();