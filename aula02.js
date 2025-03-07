const axios = require("axios");

/*//Declaração de variáveis

//const - CONSTANTES
const nomeConst = "Augusto Ortolan";
console.log(nomeConst);

console.log("============================");

//var - VARIÁVEIS
var nomeVar = "João Paulo";
console.log(nomeVar);
nomeVar = "Luiz Santos";
console.log(nomeVar);
nomeVar = 500;
console.log(nomeVar);

console.log("============================");

//VAR não respeita o escopo do código
var x = "Augusto";
if (true) {
  var x = "João";
  console.log(x);
}
console.log(x);

console.log("============================");

//LET - variáveis que respeitam o escopo.
let quantidade = 5;
console.log("Quantidade: ", quantidade);
quantidade = 10;
console.log("Quantidade atualizada: ", quantidade);

let y = "Augusto";
if (true) {
  let y = "João";
  console.log("Escopo de dentro: ", y);
}
console.log("Escopo de fora: ", y);
*/

//Assincronismo com setTimeOut
/*function mostraInter() {
  setTimeout(() => {
    console.log("Internacional");
  }, 3000);
}

function mostraGremio() {
  console.log("Gremio");
}

function main() {
  mostraInter();
  mostraGremio();
}

main();*/

//Promisses

/*const retornaInter = new Promise((resolve, reject) => {
  //resolve: resolver a promise, retornar os dados esperados da promessa.
  //reject: rejeitar a promise, seria como retornar um erro para quem está esperando a promessa.
  reject("Internacional com erro");
});

retornaInter
  .then((time) => console.log(time)) //capturando o resolve da promise
  .catch((error) => console.log(error)); //capturando o reject da promise

function exemploTryCatch() {
  try {
    const json = '{"nome":  "Augusto", "idade":'; //json inválido
    const usuario = JSON.parse(json); //método para deserializar json, transformar em objeto
    console.log(usuario);
  } catch (error) {
    console.error(
      "Ocorreu um erro ao fazer parse no json, message: ",
      error.message
    );
  }
}

exemploTryCatch();*/

/*async function buscaCep(cep) {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const endereco = await response.json();

    console.log(endereco.localidade, endereco);
  } catch (error) {
    console.error("Ocorreu um erro, ", error.message);
  }
}

buscaCep("99070120");
buscaCep("99560000");*/

//iniciar npm na pasta = npm init
//instalar o axios = npm install axios

/*async function buscaCep(cep) {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await axios.get(url);

    console.log(response.data.localidade);
  } catch (error) {
    console.error("Ocorreu um erro, ", error.message);
  }
}

buscaCep("99070120");
// buscaCep("99560000");*/
