/*Generators: São funções que podemos utilizar para controlar iterações por exemplo
    quando temos um for ele executa na hora e não podeser pausado e com o generators
    podemos controlar quantas iterações serão executadas ao se chamar o metodo

    A diferença entre o return e o Yield nos Generators: 
    o return ao ser usado termina a execução do que esteja a ser executado e o yield ao ser
    executado pausa a execução na linha em que esta ser executado e na proxima vez que a
    função for chamada ele volta a execução ate ao proximo yield senado assim posso ter mais
    de uma função geradora e cada vez que eu quiser pegar um dado o proximo yield é
    executado.
    Quando se trata da função Generators é sempre importante atribui-la em uma variavel
    antes de executar.
    o next() executa o metodo ate atingir o yield e retorna esse valor que ja é executado
    e pegar ele com a propriedade value
*/
/*
function iteraNumeros(total){
    for(let i = 1; i <= total; i++){

        console.log(i);
    }
}

console.log(iteraNumeros(10));*/

//Transformando a função em um Generator
function *iteraGenerator(total){
    for(let i = 1; i <= total; i++){
        yield console.log(i);
    }
}

const totalGenerator = iteraGenerator(5);

for(let j = 1; j <= 5; j++){

    console.log(totalGenerator.next());

}


