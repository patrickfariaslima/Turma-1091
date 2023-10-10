//1) Uma empresa está implementando um chatbot para um síndico de um condomínio. Esse síndico tem a necessidade de saber num primeiro momento se o feedback dos condôminos é um dos predefinidos por ele.A lista dos possíveis feedbacks é essa:const feedbacks = ["Ruim", "Pessimo", "Regular", "Bom", "Otimo"]; O chatbot deve então receber o feedback digitado pelo usuário e retornar se esse valor é válido ou não. Caso o usuário digite “Péssimo” ou “Ótimo” deve valer por “Pessimo” e “Otimo” respectivamente
const feedbacks = ["Ruim", "Pessimo", "Regular", "Bom", "Otimo"];
console.log("Digite sua satisfação no momento. Escolha entre as seguintes respostas: Ruim; Pessimo, Regular, Bom ou Otimo");

function verificarFeedbackValido(feedbackCondominos){
    const padronizarFeedback = feedbackCondominos.charAt(0).toUpperCase() + feedbackCondominos.slice(1).toLowerCase(); // irá padronizar as repostas com primeira letra maiúscula e as demais minúsculas;

    if (feedbacks.includes(feedbackCondominos)){
        return true; // se a resposta existir na lista, o retorno já será true;
    } else if (padronizarFeedback == "Péssimo"){
        return feedbacks.includes("Pessimo"); //retorna um true
    } else if (padronizarFeedback == "Ótimo"){
        return feedbacks.includes("Otimo"); //retorna um true
    } else {
        return false;
    }
}
const respostaCondomino = "ótimo";
if (verificarFeedbackValido(respostaCondomino)){
    console.log("Feedback Válido");
} else{
    console.log("Feedback inválido");
}