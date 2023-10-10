//1 Escreva uma função que receba um vetor de números e retorne a soma de todos os elementos.
let vetor = [1, 2, 3, 4, 5];

function somarArray(vetor){
    let soma = 0;
    for(let i=0; i<vetor.length; i++){
        soma = soma + vetor[i]; // ou soma += vetor[i];
    }
    return soma;
}
const resultado = somarArray(vetor);
console.log(resultado);