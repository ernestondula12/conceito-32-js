/*
class Animal{

    constructor(quant_de_patas, cor){

        this.quant_de_patas = quant_de_patas;
        this.cor = cor;
    }

    mostrarQuantPatas(){

        console.log('Esse animal tem: ' + this.quant_de_patas + 'pés/patas');
    }

    mostrarCor(){

        console.log('Esse animal tem a cor: ' + this.cor);
    }

}


class Mamifero extends Animal {

    constructor(nome, som, quant_de_patas, cor){
        super(quant_de_patas, cor);
        this.nome = nome;
        this.som = som;
    }

    emitirSom() {
        
        console.log('Esse animal faz este som: ' + this.som);
    }
}

const cachoro = new Mamifero('cachoro', 'auau', 4, 'marrom');

cachoro.emitirSom();
cachoro.mostrarQuantPatas();
cachoro.mostrarCor();*/

class SerHumano{

    constructor(cor_pele){

        this.cor_pele = cor_pele;
    }

    mostrarCorPele(){

        console.log('Este jovem é de cor: ' +this.cor_pele);
    }
}

class Pessoa extends SerHumano{

    constructor(nome, sobrenome, idade, cor_pele){

        super(cor_pele);
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    mostrarIdade(){

        console.log('A idade deste jovem é: ' + this.idade);
    }
}

const pessoa = new Pessoa('Ernesto', 'Ndula', 29, 'negra');
console.log(pessoa);
pessoa.mostrarIdade();
pessoa.mostrarCorPele();
