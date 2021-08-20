let lista = [{
    pergunta: "Qual o estado em que se encontra a Floresta Amazônica?",
    respostaA: "Pernambuco",
    respostaB: "Amazonas",
    respostaC: "Bahia",
    respostaD: "São Paulo",
    respostaE: "Amapá",
},
{
    pergunta: "Qual o estado em que se encontra a capital chamada Recife?",
    respostaA: "Rio de Janeiro",
    respostaB: "Amazonas",
    respostaC: "Bahia",
    respostaD: "Pernambuco",
    respostaE: "Amapá",
},
{
    pergunta: "Onde fica o Cristo Redentor?",
    respostaA: "Tocantins",
    respostaB: "Amazonas",
    respostaC: "Rio de Janeiro",
    respostaD: "Pernambuco",
    respostaE: "Amapá",
}];

let respostaA = document.getElementById("respostaA")
let respostaB = document.getElementById("respostaB")
let respostaC = document.getElementById("respostaC")
let respostaD = document.getElementById("respostaD")
let respostaE = document.getElementById("respostaE")

function escolher(){
    this.button.classList.add("escolhido")
}
