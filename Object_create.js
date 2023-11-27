/*let Usuario = function(nome, idade){

    this.nome = nome;
    this.idade = idade;
}

const ernesto = new Usuario('Ernesto', 26);
const novoernesto = Object.create(ernesto);

console.log(novoernesto instanceof Usuario);
console.log(novoernesto.nome);
console.log(novoernesto.idade);*/

//Criando Objeto utilizando o prototipo do nosso constructor com argumento no create.

function Carro(cor){

    this.cor = cor;
    this.descricao = descricao;
}

Carro.prototype.pegaInformacoes = function(){
    return this.descricao + ' e a cor ' + this.cor;
}

let meuCarro = Object.create(Carro.prototype);
meuCarro.cor = 'Azul';
//console.log(meuCarro.pegaInformacoes());

//Populando o objeto que eu estou criando
//Propriedade descritoria: Escrevendo do jeito como uma propriedade deve se comportar
//Valor e de dados

const novoCarro = Object.create(Carro, {

    cor: {
        writable: true, configurable: true, value: 'vermelho'
    },
    descricaoPadrao: {writable: false, configurable: true, value: 'Meu Carro'},
    descricao: {
        configurable: true,
        get: function() {
            return this.descricaoPadrao.toUpperCase();
        },
        set: function(valor){
            this.descricaoPadrao = valor.toLowerCase();
        }
    }
});

//Definindo um objeto protótipo
/*
const animal = {

    makeSound: function () {

        console.log('Some generic sound');
    }
};

//Criando um novo objeto com animal como 

const dog = Object.create(animal);

//Adicionando uma propriedade especifica ao objeto dog
dog.breed = "Labrador";

//O objeto dog herda a função makeSound do objeto protótipo animal
dog.makeSound();*/

//novoCarro.descricaoPadrao = 'Nova descricao'; 


//Populando um objeto

const animal = {

    makeSound: function(){

        console.log("Some generic sound");
    },

    sleep: function(){

        console.log("Zzzz");
    },
    eat: function(food){

        console.log(`Eating ${food}`);
    }
};

//Criando um novo objeto com animal como protótipo
const dog = Object.create(animal);

//Adicionando propriedades especificas ao objeto animal
animal.species = "Generic Species";
animal.color = "Brown";

//Adicionando propriedades especificas ao objeto dog
dog.breed = "Labrador";
dog.color = "Golden";

//Chamando metodos dos objetos

dog.makeSound();
dog.sleep();
dog.eat('ração');

console.log(novoCarro.descricao);
//Acessando propriedades dos objetos
console.log(dog.breed);
console.log(dog.color);
console.log(animal.species);
//console.log(dog.breed);
