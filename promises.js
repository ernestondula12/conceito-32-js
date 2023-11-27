/*
    As Promises tem tres estados: 
    1- Realizado: Recebido o que se esperava
    2-Pendente: A espera do solicitado ou andamento
    3-Reject: rejeitado: não retorna o que se esperava
*/

const mamaeLembrou = true;

const passarParaComprarBrinquedo = new Promise((resolve, reject) => {
    if(mamaeLembrou){
        resolve(true);
    }else{
        reject(false);
    }
});

const sairParaBrincar = ((resultado) => {
    return new Promise((resolve) => {
        if(resultado){
            resolve('vou sair para brinacr');
        }else {
            resolve('Não vou sair para brincar');
        }
    })
})

console.log('indo para loja');
passarParaComprarBrinquedo
.then(sairParaBrincar)
.catch(sairParaBrincar)
.then(resultado => console.log(resultado));
console.log('voltei da loja');

/*
passarParaComprarBrinquedo.then(lembrou => {

    console.log('lembrou');

}).catch(naoLembrou => {

    console.log('nãoLembrou');

})*/