
/*document.getElementById('img').addEventListener('click', function(){

    alert('clicou na imagem');
});*/

function mostrarAlerta()
{
    alert('Clicou na imagem');
}

//document.getElementById('img').addEventListener('click', mostrarAlerta);

function chamarAlerta(){

    document.getElementById('img').addEventListener('click', mostrarAlerta);
}

//chamarAlerta();

function Notificacao(){

    document.getElementById('img').addEventListener('click', chamarAlerta);

}

Notificacao();

const maisculo = function(texto){

    return texto.toUpperCase();
}
console.log(maisculo("ernesto"));