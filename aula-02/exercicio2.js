// Escreva uma função que encontre o valor máximo em um vetor de números.

let array = [1, 10, 5, 55, 15, 80, 3];

function valorMaximo(array){
    let maximo = array[0];
    for(let i=0; i <array.length; i++){
        if (array[i]>maximo){
            maximo = array[i];
        }
    }
    return maximo;
}
let maiorNumero = valorMaximo(array);
console.log(maiorNumero);