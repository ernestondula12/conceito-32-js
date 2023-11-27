//Correção em javaScipt é quando javascript tenta converter um tipo de valor para o tipo esperado
//Implicito: Metodos que não dizemos ou especificamos concretamente o que queremos


//CORREÇÃO
/*
console.log('5' - 5);
console.log('5' + 5);
console.log(true + 1);
console.log(true + true);
console.log([] + {});
console.log([] + []);*/

//IMPLICITO
/*
console.log(+"5") //Entendo como string
console.log(5 + "");
console.log(123 && "oi");
console.log(null || true);*/

//EXPLICITA

console.log(Number('50'));
console.log(String(50));