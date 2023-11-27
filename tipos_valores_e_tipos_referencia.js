/*var x = 10; //mem.0001 = nome é x, e o valor é 10;
var y = x;
x = 20;

console.log(x, y);*/

var x = {valor: 10};
var y = x;

x.valor = 20;
y.valor = 40;
x.valor = 50;

console.log(x);
console.log(y);