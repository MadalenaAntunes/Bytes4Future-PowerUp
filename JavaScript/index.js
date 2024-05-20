console.log("Olá, Bytes4Future");
//Comentário de uma linha só
/*Comentário de 
 mais que uma linha*/

const O_MEU_NOME = "Madalena";
let aMinhaIdade = 20;

console.log(O_MEU_NOME, aMinhaIdade);

let firstName = "Benjamim";
let age = 6;
let message = `Hello, my name is ${firstName} and I'm ${age} years old`;
console.log(message);

firstName = "Tiago";
age = 11;
message =
  "Hello, my name is" +
  " " +
  firstName +
  " " +
  "and I'm" +
  " " +
  age +
  " " +
  "years old";
console.log(message);

const NUM = 7;
const DEC_NUM = 2.2;
const VAR = "Favorite numbers";
console.log(typeof NUM, typeof DEC_NUM, typeof VAR);

let a = 5;
let b = 3;
let soma = a + b;
let produto = a * b;

let x = 10;
x += 5;

// a = a + b é a mesma coisa que a + = b

if (true && true) {
  //true
}

if (false || true) {
  //false
}

//Programa
let running = true;

if (!running) {
  //fecha o programa
}

//Exercício

let e = "Olá";
let f = "Mundo";
let g = e + " " + f;
console.log(g);

let num = 100;
let str = "100";
str = 100;
let somar = num + str;
console.log(somar);

let n1 = 8;
let n2 = 7;
let media = (n1 + n2) / 2;
console.log(media);

//Array
let arr = ["maçã", true, 5];
let frutas = ["pêra", "morango", "melão"];
//Para aceder:
let primeiraFruta = frutas[0]; //pêra
let segundaFruta = frutas[1]; //morango
//Para adicionar:
frutas.push("banana");
//Para remover:
frutas.pop("banana");
//Para saber o tamanho do array:
let tamanho = frutas.length; // 3
//Para modificar elementos do array:
frutas[2] = "uva"; //Altera "melão" para "uva"

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1

//Exercícios
let comida = ["lasanha", "pizza", "bolonhesa"];
comida.push = "carbonara";
console.log(comida);

let numeros = [1, 2, 3, 4, 5];
numeros.pop();
numeros.push(6);
numeros.shift();
numeros.unshift(0);
numeros[2] = 10;
console.log(numeros);

let cores = ["vermelho", "verde", "azul", "amarelo"];
cores.pop();
cores.push("roxo");
cores.shift();
cores.unshift("laranja");
cores[1] = "preto";
console.log(cores);

//Objetos
const person = {
  nome: "Alice",
  age: 30,
  job: "teacher",
};

console.log(person.name);
console.log(person["age"]);

//Modificar
person.age = 31;
person.job = "developer";

//adicionar
person.city = "New York";

//remover
delete person.job;

//Exercícios
const pessoa = {
  nombre: "João",
  idade: 25,
};

console.log(pessoa.nombre, pessoa.idade);

const carro = {
  marca: "Ferrari",
  modelo: "Fixolas",
  ano: 2025,
  cor: "vermelho",
};

carro.cor = "azul";

carro.quilometragem = 100000;

console.log(
  carro.marca,
  carro.modelo,
  carro.ano,
  carro.cor,
  carro.quilometragem
);

//If...Else
let edad = 15;

if (edad >= 18) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}

if (num % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}

//Execício
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins ganham o troféu.");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas ganham o troféu.");
} else {
  console.log("Ambos ganham o troféu.");
}

let grade = 82;

if (grade >= 90 && grade <= 100) {
  console.log("O aluno tem nota A");
} else if (grade >= 70 && grade <= 89) {
  console.log("O aluno tem nota B");
} else if (grade >= 60 && grade <= 69) {
  console.log("O aluno tem nota C");
} else if (grade >= 50 && grade <= 59) {
  console.log("O aluno tem nota D");
} else {
  console.log("O aluno tem nota F");
}

//ou
let pontuação = 45;
let grad;

if (pontuação >= 90 && pontuação <= 100) {
  grad = "A";
} else if (pontuação >= 70 && pontuação <= 89) {
  grad = "B";
} else if (pontuação >= 60 && pontuação <= 69) {
  grad = "C";
} else if (pontuação >= 50 && pontuação <= 59) {
  grad = "D";
} else {
  grad = "F";
}
console.log(grad);

//Switch Case

let mesesDoAno = 5;

switch (mesesDoAno) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
}

let diaDaSemana = 7;

switch (diaDaSemana) {
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
}

//CICLOS
//While
let gatosResgatados = 0;

while (gatosResgatados <= 50) {
  console.log(gatosResgatados);
  gatosResgatados++;
}

//For
let arrayInteiro = [1, 2, 3, 4, 5, 6];
let mais = 0;

for (let i = 0; i < arrayInteiro.length; i++) {
  mais += arrayInteiro[i];
  //mais = mais + arrayInteiro[i]
  console.log(mais);
}

//Exercícios
let limite = 13;
let numInteiro = 1;

while (numInteiro <= limite) {
  console.log(numInteiro);
  numInteiro++;
}

for (let i = 1; i <= limite; i++) {
  console.log(i);
}

//Exercícios casa - While e For Loop

for (let p = 2; p <= 20; p++) {
  if (p % 2 === 0) {
    console.log(p);
  }
}

//
let something = [13, 90, 73, 45, 31];

for (let s = 0; s < something.length; s++) {
  console.log(something[s]);
}

//
let coisa = [13, 19, 9, 25, 14, 15, 12];

for (let c = 0; c < coisa.length; c++) {
  if (coisa[c] % 2 === 1) {
    console.log(coisa[c]);
  }
}

//
let zero = 0;

for (let z = 0; z < coisa.length; z++) {
  zero += coisa[z];
}
console.log(zero);

//
let arrNum = [2, 3, 6, 10, 2];
let product = 1;

for (let j = 0; j < arrNum.length; j++) {
  product *= arrNum[j];
}
console.log(product);

//Finding Nemo

let mar = ["Bruce", "Dory", "Crush", "Nemo", "Marlin", "Lucy"];

for (let m = 0; m < mar.length; m++) {
  if (mar[m] === "Nemo") {
    console.log(mar[m]);
  }
}

//Funções
function helloBytes() {
  console.log("Hello, Bytes4Future");
}
//chamar a função
helloBytes();
//para repetir
for (let a = 0; a < 3; a++) {
  helloBytes();
}

//Exercício
function hi(nome) {
  console.log(`Olá, ${nome}`);
}

hi("Joana");

//Retorno de valores
function add(a, b) {
  return a + b;
}

const resultado = add(3, 5);

//exercício
function comprimentoString(str) {
  return str.length;
}
const stringlength = comprimentoString("Madalena");

//exercício area retangulo
function calcularAreaRetangulo(width, height) {
  return width * height;
}
console.log(calcularAreaRetangulo(14, 6));

//exercicio concatenate strings
function concatenarStrings(string1, string2) {
  if (typeof string1 === "string" && typeof string2 === "string") {
    return string1 + " " + string2;
  } else {
    return "Parâmetros Inválidos. Insere strings";
  }
}
console.log(concatenarStrings("Mr Francis", "está com fome"));

//exercício somar
function somazinha(a, b) {
  let result = a + b;
  return result;
}
console.log(somazinha(16, 25));

//exercício dobro e triplo
function dobroETriplo(numb) {
  let array = [];
  let dobro = numb * 2;
  let triplo = numb * 3;
  array.push(dobro);
  array.push(triplo);
  return array;
}
console.log(dobroETriplo(15));

//exercício raiz quadrado
function calcularRaizQuadrada(e) {
  return Math.sqrt(e);
}
console.log(calcularRaizQuadrada(25));

//exercício calcular idade em dias
function calcularIdade(idade) {
  return idade * 365
}

//exercício criar objeto
function criarPessoa(nome, idade, cidade) {
  const pessoa = {};
  pessoa.nome = nome;
  pessoa.idade = idade;
  pessoa.cidade = cidade;
  return pessoa;
}
console.log("Madalena", 20, "Lisboa");

//exercício adicionar propriedade
const Paula = {
  profissão : "assassina",
  cidade : "Los Angeles"
};

function adicionarPropriedade(objeto) {
  objeto.idade = 25;
  return objeto 
}
console.log(adicionarPropriedade(Paula));

//remover propriedade
const car = {
  brand: "Lambo",
  model: "SVJ"
}
 
function removerPropriedade (obj, prop) {
  delete obj [prop];
  return obj
}

console.log(removerPropriedade(car, "model"))






