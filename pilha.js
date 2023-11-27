function funcao1(){

    funcao2();
    console.log('Chamando a função 1')
}

function funcao2(){

    funcao3();
    console.log('chamando a função 2');
}

function funcao3(){

    console.log('chmando a função 3');
}

funcao1();
