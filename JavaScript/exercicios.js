//1
let a = "Olá";
let b = "Mundo";
let c = a + b;

console.log(c);

//2
let num = 100;
let str = "100";
str = 100
let soma = num + str;
console.log(soma);

//3
function contaParesEntreDoisValores(d, e) {
    if (d === e) {
        return "Por favor introduza dois valores diferentes."    
    } 
    let contador = 0;
    if (d < e) {
        for (i = d; i <= e; i++) {
            if(i % 2 === 0) {
                contador++
            } 
        }
    } else {
        for(i = d; i >= e; i--) {
            if(i % 2 === 0) {
                contador++
            }
        }
    }
     
    return contador
}
console.log(contaParesEntreDoisValores(200, 10));

//4
function trimestre(t){
    switch (t) {
        case 1:
            console.log("Janeiro", "Fevereiro", "Março");
            break;
        case 2:
            console.log("Abril", "Maio", "Junho");
            break;
        case 3:
            console.log("Julho", "Agosto", "Setembro");
            break;
        case 4:
            console.log("Outubro", "Novembro", "Dezembro")
            break;
        default:
            console.log("Número inválido. Por favor insira um número entre 1 e 4.") 
    }
    return t
}
trimestre(2)

//5
function numero(n) {
    let array = [];
    if ( n < 0) {
        console.log("Por favor insira um número superior a 0.")
    } else {
        for(let i = 0; i <= n; i++) {
        array.push(i);
        }
    }
    return array
}
    
console.log(numero(7));

//6
function fizzBuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            arr.push("Fizz")
        } else if (i % 5 === 0) {
            arr.push("Buzz")
        } else if (i % 15 === 0) {
            arr.push("FizzBuzz")
        } else {
            arr.push(" ");
        }
    }
    return arr
}
console.log(fizzBuzz(15))

//7
function validaSubArray(arrayBase, arrayComp) {
    let j = 0;
    for (i = 0; i < arrayBase.length; i++) {
        // console.log("Index", i, j)
        // console.log("Valor", arrayBase[i], arrayComp[j])
        if (arrayBase[i] === arrayComp[j]) {
            j++
            // console.log("Soma!")
        } 
    } 
    // console.log(j)
    // if (j === arrayComp.length) {
    //     return true
    // } else {
    //     return false
    // }
    return j === arrayComp.length
}

let array = [1, 2, 3, 4, 5]
let sub2 = [2, 4, 5]
let sub3 = [1, 3]
let sub4 = [4, 3, 2, 1]
let sub5 = [2, 5]

console.log(validaSubArray(array, sub2))
console.log(validaSubArray(array, sub3))
console.log(validaSubArray(array, sub4))
console.log(validaSubArray(array, sub5))

//8
let arrayExOito = [4, 1, 4, 5];

let max = Math.max(...arrayExOito)

console.log(arrayExOito.indexOf(max))

//9
let arrayExNove = [4, 1, 4, 5];

let min = Math.min ()
