// vetores é uma estrutura de dados que permite armazenar uma coleção de valores (vetores são arrays); Pode armazenar números, strings, objetos e outros vetores;
// posições  0, 1, 2, 4,  4] 
let vetor = [1, 2, 30, 3, 4, 5, 45]; // um vetor de números;
let frutas = ['maçã', 'banana', 'laranja','melão', 'melancia', 'abacaxi', 'manga']; // um vetor de strings;
let mistos = [1, 'olá', true, {nome: "João"}]; // possui números, string, booleanos, e objetos.

// spread 
let nums = [...vetor, ...frutas]; //'...variável' para adicionar a array dentro da lista na posição indicada. 
console.log(nums)
/*console.log(vetor[0]);
console.log(frutas[1]);*/
//console.log(vetor[2])
//vetor[2] = 10; // alterando o valor do elemento da posição 2;
//console.log(vetor[2])

//console.log(frutas.length);// verifica o tamanho da array
//console.log(frutas.includes('maçã',0)); // includes retorna se o elemento existe na array, e se incluir a posição, ele valida também se é naquela posição.
//console.log(frutas.indexOf('banana')); // verifica a posição do elemento, se ele não existir, o retorno é '-1';
//console.log(frutas.concat(mistos)); // junta duas arrays;
//console.log(frutas);
//console.log(frutas.toString()); // transforma a array em string separada por vírgurla
//console.log(frutas.join('; ')); //transforma em string separado por um parâmetro indicado;
//console.log(frutas.sort());// modifica/ordena os itens por ordem alfabetica;
//console.log(frutas.slice(2,5)); // cria uma cópia e pode ser alocado dentro de uma variável; Os parâmetros são a posição do elemento de start e até qual elemento ele quer remover
//console.log(frutas)
//console.log(frutas.splice(2,3)); // modifica a array original,recebe como parâmetro o elemento de start e a quantidade de elementos que ele quer selecionar
//console.log(frutas); // a array original foi modificado por causa do splice

// fila de ações -->  primeiro a entrar -> pprimeiro a sair (FIFO - first in first out) fila;
/*frutas.push('morango'); // enfileira, sempre adiciona ao final da a0rray;
console.log(frutas);
frutas.pop(); // remove o elemento ao final;
console.log(frutas)*/  

// ultimo a entrar -> primeiro a sair (LIFO - last in first out) pilha;;
/*frutas.unshift('morango'); // empilha (coloca no topo da array);
console.log(frutas)
frutas.shift();// remove o primeiro item da array;
console.log(frutas);*/