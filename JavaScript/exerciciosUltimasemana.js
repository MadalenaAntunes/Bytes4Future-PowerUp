//1
function contarVelasAcesas(arrayVelas) {
  let contador = 0;
  for (let i = 0; i < arrayVelas.length; i++) {
    if (arrayVelas[i] === true) {
      contador++;
    }
  }
  return contador;
}

const velas = [true, true, false, true, false, true];

console.log(contarVelasAcesas(velas));

//2
function calcularMedia(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  let media = soma / arr.length;
  return media;
}

let array = [4, 7, 8, 5, 2];

console.log(calcularMedia(array));

//3
function calcularMediana(arr) {
  arr.sort((a, b) => b - a);
  let midpoint = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[midpoint - 1] + arr[midpoint]) / 2;
  } else {
    return arr[midpoint];
  }
}

let arrayImpar = [4, 7, 8, 5, 2];
let arrayPar = [4, 7, 8, 5, 2, 4];

console.log(calcularMediana(arrayImpar));
console.log(calcularMediana(arrayPar));

//4
let array4 = [50, 21, 60, 45, 3, 6, 7];

function ordenar(array) {
  for (let i = 0; i < array.length; i++) {
    array.sort((first, second) => first - second);
  }
  return array;
}

console.log(ordenar(array4));


//5
function arrayBoo(narr) {
  return narr.map(bool => !bool)
}

let array5 = [true, false, false, true];

console.log(arrayBoo(array5));

//6
let array6 = [1, 2, 3, 4, 5, 6];

function inverted(array) {
  array.reverse();
  return array
}
console.log("Array invertido", inverted(array6));

//7
function exSete(array, elem) {
  for (let i = 0; i <= array.length; i++){
    if (array[i] === elem){
      return true
    } 
  } return false
}

let array7 = [19, 9, 25, 14, 15, 12, 16];
let element = 16;

console.log(exSete(array7, element))

//8
function mediana(array) {
  array.sort((a, b) => a - b);
  let med = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return console.log((array[med - 1]), array[med]);
  } else {
    return console.log(array[med]);
  }
}
let medArray = [1, 2, 3, 4, 5, 6];

let medArray2 = [1, 2, 3, 4, 5];

mediana(medArray);
mediana(medArray2);