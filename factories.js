const mamifero = function(nome, som){

    return {nome, som};

}

const cachoro = mamifero('cachoro', 'auau');
console.log(cachoro);

const elefante = mamifero('elefante', 'Uuuuu');
console.log(elefante);

const Pessoa = function(nome, sobrenome, email, morada){

    return {nome, sobrenome, email, morada};
}

const pessoa1 = Pessoa('Ernesto', 'Ndula', 'ernestondulandula@gmail.com', 'Rua dos Ministros');
console.log(pessoa1);

const pessoa2 = Pessoa('Kloriano', 'Brás', 'kloriano@gmail.com', 'Rua dos Ministros');
console.log(pessoa2);