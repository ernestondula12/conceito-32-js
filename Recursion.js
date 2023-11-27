//Recursion: Habilidade de uma função chamar ela mesma dentro dela

/*function contagem(numero){

    console.log(numero);
    if(numero > 0){
        contagem(numero - 1);
    }
}
contagem(5);*/

function contagem(numero){

    for(; numero >= 0; numero--){

        console.log(numero);
    }
}

contagem(5);

