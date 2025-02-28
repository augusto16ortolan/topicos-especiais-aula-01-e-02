//Debugar o código
/*console.log("Hello World");

objeto = { nome: "Augusto", sobrenome: "Ortolan" };
console.log(objeto);

console.error("Ocorreu um erro");
console.warn("Aviso");

array = [
  { nome: "Augusto", sobrenome: "Ortolan" },
  { nome: "João", sobrenome: "Santos" },
];
console.table(array);*/

//Variáveis e tipagens
/*console.log(typeof "Augusto"); //string
console.log(typeof 1); //number
console.log(typeof true); //boolean

usuario = { nome: "Augusto", sobrenome: "Ortolan" };
console.log(typeof usuario); //object

usuarios = [
  { nome: "Augusto", sobrenome: "Ortolan" },
  { nome: "João", sobrenome: "Santos" },
];
console.log(typeof usuarios); //object
console.log(Array.isArray(usuarios)); //isArray = true
console.log(Array.isArray(usuario)); //isArray = false

idade = 18;

if (typeof idade == "number") {
  console.log("É numérico");
} else {
  console.log("Não é numérico");
}*/

//Estruturas de condições = IF, ELSE IF, ELSE - SWITCH CASE

//IF
/*idade = 16;
nome = "Maria";

if (idade >= 18 || (idade >= 14 && nome == "João")) {
  console.log("É adulto ou adolescente e seu nome é João");
} else if (idade >= 3) {
  console.log("É criança");
} else {
  console.log("É bebê");
}*/

//SWITCH CASE - sempre vai usado para valores únicos/estáticos

//PENDENTE, AGUARDAMENTO PAGAMENTO, PAGAMENTO CONCLUIDO, PEDIDO REALIZADO, EM SEPARAÇÃO, EM TRANSPORTE, ENTREGUE
/*statusPedido = "AGUARDAMENTO_PAGAMENTO";

switch (statusPedido) {
  case "PENDENTE":
    console.log("O seu pedido está pendente!");
    break;
  case "AGUARDAMENTO_PAGAMENTO":
    console.log("O seu pedido está aguardando pagamento!");
    break;
  default:
    console.log("Status não reconhecido, entre em contato com o suporte.");
    break;
}*/

//Estruturas de repetição: WHILE, FOR OF, FOR IN, FOR LOOP

//while = usamos quando não sabemos "quantas vezes" vamos ter que iterar/percorrer.
//for = usamos quando temos uma lista ou sabemos o tamanho.

//WHILE
/*contador = 18;

while (contador <= 18) {
  console.log(contador);
  contador++;
}*/

//FOR

//FOR LOOP

//0, 1, 2, 3
lista = ["Maça", "Banana", "Melancia", "Laranja"];

lista2 = [];

/*for (let index = 0; index < lista.length; index++) {
  fruta = lista[index];

  if (fruta == "Melancia") {
    lista2.push(fruta);
  }
}

console.log(lista2);*/

/*for (fruta of lista) {
  if (fruta == "Melancia") {
    lista2.push(fruta);
  }
}

console.log(lista2);*/

/*objeto = { a: 1, b: 2, c: 3, d: 4 };

for (chave in objeto) {
  console.log(objeto[chave]);
}*/

//FUNÇÕES

//FUNÇÃO TRADICIONAL
/*function digaOla() {
  return "Olá Mundo!";
}

ola = digaOla();

console.log(ola);

//FUNÇÃO TRADICIONAL
function somaNumeros(a, b) {
  return a + b;
}

console.log(somaNumeros(10, 5));

//ARROW FUNCTIONS
soma = (a, b) => {
  return a + b;
};

console.log(soma(15, 5));*/

//Nomenclatura

//Camel Case - funções ou variáveis
nome = "Auguto";
nomeCompleto = "Augusto Ortolan";
dataNascimento = "01/01/01";
quantidadeVenda = 1;

//Pascal Case - Classes e enums
//Pessoa
//Veiculo
NomeCompleto = "Augusto Ortolan";
DataNascimento = "01/01/01";
QuantidadeVenda = 1;

//Upper Case E Upper Snake Case - constantes
TOKEN = "fsdfsdf65sdf5d6fsdQHDASJDHSJAD";
NOMECOMPLETO = "Augusto Ortolan";
NOME_COMPLETO = "Augusto Ortolan";
IDADE_PARA_SER_MAIOR_DE_IDADE = 18;

//Boas práticas
//manter um padrão de nomenclatura
//manter um padrão de idioma no projeto
//utilizar nomes significativos e explicativos - (qtd) = quantidade, (vlrProduto) = valorProduto, x = nome
