// QUESTÕES
let questions = [
{
pergunta:'Em um trem há 100 pessoas, das quais 40% são mulheres. Quantas mulheres estão nesse trem?',
alt_a: '55 pessoas',
alt_b: '40 pessoas',
alt_c: '80 pessoas',
alt_d: '25 pessoas',
alt_e: '47 pessoas',
correta: 'b',
},
{
pergunta:'Na promoção de uma loja de cosmêticos, uma maquiagem que custava R$ 200,00 teve um desconto de 12%. Quanto o cliente irá pagar por esta maquiagem?',
alt_a: 'R$ 176,00',
alt_b: 'R$ 200,00',
alt_c: 'R$ 150,00',
alt_d: 'R$ 185,00',
alt_e: 'R$ 190,00',
correta: 'a',
},
{
pergunta:'Em um concurso, 500 candidatos se inscreveram. No dia da prova apenas 320 candidatos apareceram. Neste caso, quantos candidatos faltaram a prova?',
alt_a: '200',
alt_b: '421',
alt_c: '180',
alt_d: '176',
alt_e: '255',
correta: 'c',
},
{
pergunta:'Qual a probabilidade de uma moeda cair "cara" 2 vezes em seguida?',
alt_a: '38%',
alt_b: '50%',
alt_c: '70%',
alt_d: '35%',
alt_e: '25%',
correta: 'e',
}
]


// PEGANDO AS VARIÁVIES
let number = 0;
let pergunta = document.getElementById('pergunta');
let resposta_a = document.getElementById('resposta_a');
let resposta_b = document.getElementById('resposta_b');
let resposta_c = document.getElementById('resposta_c');
let resposta_d = document.getElementById('resposta_d');
let resposta_e = document.getElementById('resposta_e');
let num_questões = document.getElementById('num_questões');
let footer = document.getElementById('footer')
let p_footer = document.getElementById('p_footer')

// PASSANDO A QUESTÃO
function criar_questão(){
    pergunta.innerHTML = questions[0].pergunta;
    resposta_a.innerHTML = questions[0].alt_a;
    resposta_b.innerHTML = questions[0].alt_b;
    resposta_c.innerHTML = questions[0].alt_c;
    resposta_d.innerHTML = questions[0].alt_d;
    resposta_e.innerHTML = questions[0].alt_e;
}

function passar_question(){
    if(number < 3){
        number ++
        pergunta.innerHTML = questions[number].pergunta;
        resposta_a.innerHTML = questions[number].alt_a;
        resposta_b.innerHTML = questions[number].alt_b;
        resposta_c.innerHTML = questions[number].alt_c;
        resposta_d.innerHTML = questions[number].alt_d;
        resposta_e.innerHTML = questions[number].alt_e; 
        num_questões.innerHTML = '0' + (number + 1) + '/04'
    }
    else{
        footer.classList.add("display")
    }
}

// VERIFICANDO AS RESPOSTAS
num = 0
acertos = 0
function verificar_a(){     
    num ++
    if(resposta_a.dataset.letra == questions[num - 1].correta){
        acertos ++
        p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de matemática!!!';
    }
    else{
        console.log('errou')
    }
}
function verificar_b(){
    num ++
    if(resposta_b.dataset.letra == questions[num - 1].correta){
        acertos ++
        p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de matemática!!!';
    }
    else{
        console.log('errou')
    }
}
function verificar_c(){
    num ++
    if(resposta_c.dataset.letra == questions[num - 1].correta){
        acertos ++
        p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de matemática!!!';
    }
    else{
        console.log('errou')
    }
}
function verificar_d(){
    num ++
    if(resposta_d.dataset.letra == questions[num - 1].correta){
        acertos ++
        p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de matemática!!!';
    }
    else{
        console.log('errou')
    }
}
function verificar_e(){
    num ++
    if(resposta_e.dataset.letra == questions[num - 1].correta){
        acertos ++
        p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de matemática!!!';
    }
    else{
        console.log('errou')
    }
}


