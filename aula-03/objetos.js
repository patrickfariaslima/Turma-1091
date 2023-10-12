// Objetos de valores são formados por chaves e valores, numa estrtura => {chave: valor,}
let pessoa = { //nome, idade, cidade... são chaves ou propriedades da variável pessoa que possui uma estrutura de objeto
    nome: 'Patrick',
    idade: 29,
    cidade: 'Fortaleza',
    torcida: 'Flamengo',
    genero: 'Masculino',
    altura: 1.83,
    endereco: {
        rua: '1088 pierre luz',
        cidade: 'Fortaleza',
    }
}

let chaves = Object.keys(pessoa.endereco); //busca apenas as chaves do objeto;
console.log(chaves)

let valores = Object.values(pessoa.endereco);
console.log(valores)
/*let pessoa_dois = {...pessoa};
pessoa_dois.nome = 'Jessica';
pessoa_dois.idade = 31;
console.log(pessoa_dois)*/

//console.log(pessoa.nome);
//console.log(pessoa.endereco.rua)
//console.log(pessoa['torcida']);
pessoa.profissao = 'Analista de Desenvolvimento'; //adiciona um novo atributo ao objeto nome
//console.log(pessoa)

//console.log('cidade' in pessoa); //verifica se essa chave existe na variável pessoa e retorna de forma booleana;
//console.log(pessoa.hasOwnProperty('torcida')); outra forma para verificar se a chave existe no objeto;
//console.log(pessoa)
//delete pessoa.torcida; // comando que remove a chave torcida da variável pessoa;


// percorrer o dicionario/objeto;
// for .. in
/*for (let key in pessoa){
    console.log(key + ": "+ pessoa[key]);
}*/

/*{
    "nome-da-pessoa": "Everton",
    "idade": 41;
}*/