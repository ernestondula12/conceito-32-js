
function Usuario(nome){

    this.nome = nome;
    this.log = function(){

        console.log(this);
    }
}

const ernesto = new Usuario('Ernesto');
//console.log(ernsto);
console.log(ernesto instanceof Usuario);

/*const nome = 'Ernesto';

const novoNome = new String('Ernesto');

console.log(nome);
console.log(novoNome);*/