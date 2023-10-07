// var (escopo global) - escopo fora do bloco

var numero1 = 10;

// let (escopo local) - escopo restrito ao bloco

let numero2 = 30

// const 

const PI = 3.14;

var a = 1;
//console.log(a)
var b =2, c=3;

//console.log(b,c)

var f = g = 5
//console.log(f,g)

var i=h, h=6; // i será indefinido pois no momento que ele é atribuído, não existe h com o valor de 6.
console.log(i, h);

const j = k = l = m =7, n =k;
console.log(j,k,l,m,n);