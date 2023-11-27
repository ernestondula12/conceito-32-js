//SetTimeout: Serve para executar um código apenas uma vez depois de terminar o tempo
//SetInterval: Executa o mesmo tipo de código num intervalo de tempo que continue executando ate ser cancelado.
//requestAnimationFrame: Ela executa o metodo toda vez que o browser esta apto a fazer ipent da tela
/*const mostraAlerta = (nome) =>{
  
  alert('Set time out - ' + nome);
  
};

const timeout = setTimeout(mostraAlerta, 2000, 'Ernesto');

setTimeout(() => {
    
  clearTimeout(timeout);
  
}, 1500);*/

/*

const interval = setInterval(() => {

    console.log('Teste');

}, 1000);

setTimeout(() => {

    clearInterval(interval);

}, 5000);

//requestAnimationFrame

let contador = 0;

function animation(){

  contador += 1;
  console.log(contador);
  loop = requestAnimationFrame(animation);

}

var loop = requestAnimationFrame(animation);

setTimeout(() => {

  cancelAnimationFrame(loop);

}, 5000);*/


const mostraAlerta = setInterval((nome) =>{

    console.log('Olá - ', 'Ernesto');

}, 1000);

setTimeout(() => {

  clearInterval(mostraAlerta);

}, 5000);