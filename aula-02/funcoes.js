// funções - conjunto de código que executa e retorna algo, tem também a função de reaproveitar um código;
function somar(a, b){
    return a + b;
}

const subtrair = function(c, d){
    return c - d;
}

const dividir = (e,f) => { //arrow function - exemplo 1;
    return e/f;
}

const multiplicar = (g, h) => g*h; //arrow function - exemplo 2 (mais simples ainda);

// invocar a função
let numero1 = 50;
let numero2 = 40;
let somaTotal = somar(numero1, numero2);

//console.log(somaTotal);

let numero3 = 80;
let numero4 = 60;


let totalSubtrair = subtrair(numero3, numero4);
console.log(totalSubtrair);

let totalDividir = dividir(numero3, numero4);
console.log(totalDividir);

let totalMultiplicar = multiplicar(numero3, numero4);
console.log(totalMultiplicar);

const curry = (a) => {
    console.log(a);
    return (b) => {
        console.log(b)
        return c =>{
            return a+b+c;
        }
    }
}
let total = curry(10)(50)(100);
console.log(total)
