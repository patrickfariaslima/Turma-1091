var animal = 'elefante';

{
    console.log(animal);
    let animal = 'gato'; 
    console.log(animal);
}

console.log(animal); // o valor de animal será elefante, pois o valor gato está dentro de um escopo restrito. Só será atribuído caso seja chamado algo dentro do bloco atribuído a ele;
// var é um tipo de variável global, ele estoura qualquer escopo restrito quando ele está incluso.
// let domina qualquer escopo restrito que ele está incluso, mas isso não transborda para um escopo global.

 