/*
    IIFE: Imediatly Inovoqued Function Expression => Expressão de Função imediatamente invocada.
*/

/*function alerta(){
  
    alert('Olá Mundo!');
  
}

alerta();*/

/*const alerta = function(){
    
    alert('Olá Mundo!');
  
}

function alerta(){

    alert('Olá Mundo!');
}

alerta();*/

/*
(function(){

    console.log('Olá Mundo');

}());

!function(){

    console.log('Olá Pessoal');
}();

!function teste(){

    console.log('Eu estou testando!');

}();

var variavel = 20;

!function teste(){

    variavel = 30;
}();

console.log(variavel);

var dados = (function(){

    var contador = 0;
    var contador2 = 3;

    return {

        incrementar: function(){

            contador = contador + 1;
            return contador;

        },

        decrementando: function(){

            contador2 = contador2 - 1;
            return contador2;
        }
    }

}());

console.log("Incrementando" ,dados.incrementar());
console.log("Incrementado", dados.incrementar());
console.log("Incrementando", dados.incrementar());

console.log("Dcrementando", dados.decrementando());
console.log("Decrementando", dados.decrementando());
console.log("Decrementando", dados.decrementando());*/


console.log('Olá estou trabalhando com IIFE');

var dados = (function(){

    var contador = 0
    var contador2 = 10;

    return {

        incrementar: function(){

            contador = contador + 1;
            return contador;

        },

        decrementar: function(){

            contador2 = contador2 - 1;
            return contador2;

        }
    }
}());

console.log(dados.incrementar());
console.log(dados.incrementar());
console.log(dados.incrementar());
console.log(dados.incrementar());

console.log(dados.decrementar());
console.log(dados.decrementar());
console.log(dados.decrementar());
console.log(dados.decrementar());
console.log(dados.decrementar());
console.log(dados.decrementar());
console.log(dados.decrementar());
console.log(dados.decrementar());
console.log(dados.decrementar());
console.log(dados.decrementar());