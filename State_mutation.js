//Mutação, imutabilidade, mutação de estado: 

const pedido = {titulo: 'meu pedido', status: false};
const copiaPedido = (pedido) => {
    const novoPedido = Object.assign({}, pedido);
    novoPedido.status = true;
    return novoPedido;
}

let pessoa = {
    nome: "Maria",
    idade: 30
}

let novaPessoa = {...pessoa, idade: 31}

const novoPedido = copiaPedido(pedido);
novoPedido.titulo = 'Segundo Pedido';
console.log(pedido);
console.log(novoPedido);

console.log(pessoa);
console.log(novaPessoa);