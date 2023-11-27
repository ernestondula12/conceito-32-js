var nome = 'Ernesto';
function olaPessoa(){
    console.log('Olá ' + nome);
}

olaPessoa();

function buscaItem(){

    var numeroItem = 150;
    fetch('/minha/url/do/banco?item=' + numeroItem, {
        method: 'GET'
    }),then(resultado => {
        console.log('Busca pelo item ' + numeroItem + ' deu certo!');
    });
}

function exterior(){

    let mensagem = "Olá, ";

    //Função closure(interna)
    function interior(nome){
        console.log(mensagem + nome);
    }

    return interior;
}

//A função closure é atribuida a uma variavel

let cumprimento = exterior();

//A closure ainda tem acesso a variavel "mensagem"
cumprimento("Maria");


function mostrarDadosPessoais(){

    var nome = '';
    var sobrenome = '';
    var morada = '';

    function recebendoDadosEmanipulando(nome, sobrenome, morada){

            console.log(`Olá seu nome é ${nome} ${sobrenome} e tu morras na ${morada}`);
    }

    return recebendoDadosEmanipulando;

}

let mostrar = mostrarDadosPessoais();

mostrar("Ernesto", "Ndula", "Rua dos Ministros");
