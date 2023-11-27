const valor = 5;

const helloWorld = function(){

    console.log("Olá Mundo!");

}

const multiplica = function(x){

    console.log(x * valor);
}

//Exportando as nossas funções
//export{helloWorld, multiplica};

//Exportando por padrão: Exportando um unico metodo ou função

export default helloWorld;