//1) Crie uma variável chamada "numero1" e atribua a ela um valor numérico. Em seguida, crie uma variável chamada "numero2" e atribua a ela outro valor numérico. Realize a soma desses dois números e exiba o resultado no console.
let numero1 = 10;
let numero2 = 15

let soma= numero1 + numero2;
console.log(soma);
// 2) Declare uma variável chamada "texto1" e atribua a ela uma string com um texto qualquer. Em seguida, crie uma variável chamada "texto2" e atribua a ela outro texto. Concatene esses dois textos e exiba o resultado no console.
let texto1 = "casa";
let texto2 = "nova";
console.log(texto1, texto2);
let texto3 = texto1.concat(texto2)
console.log(texto3);

//3) Crie uma variável chamada "idade" e atribua a ela um número que represente a sua idade. Em seguida, crie uma condicional que verifique se a sua idade é maior ou igual a 18 anos. Se for, exiba uma mensagem indicando que você é maior de idade. Caso contrário, exiba uma mensagem indicando que você é menor de idade.
let idade = 29
;

if (idade >=18){
    console.log("Você é maior de idade.");
} else{
    console.log("Você é menor de idade.");
}