// Escreva uma função que encontre o valor máximo em um vetor de números.

let array = [1, 10, 5, 55, 15, 80, 3];

function encontrarValorMaximo(array){
    let maximo = array[0];
    for(let i=0; i <array.length; i++){
        if (array[i]>maximo){
            maximo = array[i];
        }
    }
    return maximo;
}
let maiorNumero = encontrarValorMaximo(array);
console.log(maiorNumero);

// outra forma de resolver a questão

let vetor = [1, 15, 1024, 56, 88];
let maximo1= Math.max(...vetor);
console.log(maximo1);