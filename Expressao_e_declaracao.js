/*Em JavaScript uma expressão pode se comportar como uma declaração mas, uma declaração não pode
se comportar como uma expressão

Expressão: É todo um pedaço de codigo que retorna apenas um valor unico 

Declaração: São pedaços de codigos que performam uma ação que fazem alguma coisa
*/

//Expressão
/*
console.log(1 + 1);
console.log(Math.random() + 5);

function expressao(){

    return 1 + 1;
}
console.log(expressao());*/

/*
var variavel = 20;

if(true){

    variavel = 30;
}*/

/*
function soma(a){

    return a + 10;
}

console.log(soma(Math.random()));*/

//Expressão se comportando como uma declaração
var a = 40;
var b = 60;

function soma(){

    return a + b;
}

console.log("O resultado da soma é: ", soma());


//Declaração

var c = 100;

function mostrar(){

    return c;

}

console.log("O nosso retorno é ", mostrar());
console.log(c);

var nota1 = 10;
var nota2 = 5;
var nota3 = 6;
var nota4 = 3;

function calcularMedia(){

   
    var media = (nota1 + nota2 + nota3 + nota4) / 4;


    console.log("A media das notas informadas é: ", media);

    if(media >= 16){

        console.log("O Estudante esta aprovado");

    }else if(media <= 10){

        console.log("Reprovado!");
    }
}

calcularMedia();




