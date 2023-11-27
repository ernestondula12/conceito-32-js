console.log(3 == '3');

// 1- Se ambos são do mesmo tipo
// null == undefined, se for, ele retorna true
//number == string, se for, ele vai converter a string em numero
//boolean == number, se for, ele converte o boolean num numero
//boolean == string, se for, ele converte a string pra boolean
//objeto == primitivo, se for, ele converte o objeto numa string

// ===

console.log(3 === '3');
console.log(3 === 3);

// É Necessário que os valores e os tipos seja iguais para ser true.

//typeof: é otimo para validação de tipos

console.log(typeof 'Ernesto' === 'string');
