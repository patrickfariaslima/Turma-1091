// coerção implícita
var numero = 42;
var texto = 'O número é: ' + numero; // nessa operação, a variável numero (que é do tipo numero), se torna string pois a variavel texto é do tipo string.

console.log(texto)
// de tipo string para numero
var texto2 = '10';
var numero2 = texto *2;
console.log(numero2)

// transformando o tipo em booleano: 
var valor = 'Olá';
var isVerdadeiro = !!valor; // ! ou !! serve para realizar uma validação lógica;
console.log(isVerdadeiro)


// Coerção Explícita (quando usa funções para alterar o tipo de uma variável)
var texto3 = "50";
var numero3 = parseInt(texto3);
console.log(numero3);

// conversao de numero para string

var numero4 = 65;
var texto4 = numero4.toString();

console.log(texto4);

// conversao de um numero para string (usando template literals). Template Literals é a forma prática de atribuir variáveis dentro de textos através de ``e ${}. 
var numeroliteral = 42;
var textoliteral = `O valor do número é ${numeroliteral}`;

console.log(textoliteral);

// conversao explicita de booleano para numero; (onde true = 1 e false = 0;)
var valorBooleano = true;
var numero5 = Number(valorBooleano);
console.log(numero5);