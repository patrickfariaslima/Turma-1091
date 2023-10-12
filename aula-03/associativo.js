// array associativo ou map;
const sinonimos = {
    "feliz": ["alegre", "contente", "radiante"],
    "triste": ["melancolico", "abatido", "deprimido"],
    "rapido": ["veloz", "agil", "rapido"]
}
//console.log(sinonimos['feliz'][1]);

//usando estrutura de dados map
const sinonimosMap = new Map();
sinonimosMap.set("feliz", ["alegre", "contente", "radiante"])/
sinonimosMap.set("triste", ["melancolico", "abatido", "deprimido"]);
sinonimosMap.set("rapido", ["veloz", "agil", "rapido"]);

// acessando - get
sinonimosMap.get("feliz");
console.log(sinonimosMap.get("feliz").push("teste"));//pode usar o .get("chave").push("novo valor");
console.log(sinonimosMap)
// deletar - delete
sinonimosMap.delete("feliz");
console.log(sinonimosMap)