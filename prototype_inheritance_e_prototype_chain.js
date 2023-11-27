
const Usuario = function(nome, sobrenome){

        this.nome = nome;
        this.sobrenome = sobrenome;
}

const ernesto = new Usuario('Ernesto', 'Ndula');
Usuario.prototype.getNome = function(){console.log(this.nome)}
Usuario.prototype.getSobreNome = function(){console.log(this.sobrenome)}

console.log(ernesto.getNome());
console.log(ernesto.getSobreNome());