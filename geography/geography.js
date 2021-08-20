// QUESTÕES
let questions = [
    {
    pergunta:'Qual a capital dos Estados Unidos?',
    alt_a: 'New York',
    alt_b: 'Washington, D.C.',
    alt_c: 'Las Vegas',
    alt_d: 'Luís Gonzaga',
    alt_e: 'Springfield',
    correta: 'b',
    },
    {
    pergunta:'Qual o país com maior extensão territorial?',
    alt_a: 'Brasil',
    alt_b: 'Estados Unidos ',
    alt_c: 'Rússia',
    alt_d: 'Inglaterra',
    alt_e: 'Chile',
    correta: 'c',
    },
    {
    pergunta:'Qual a capital do Brasil?',
    alt_a: 'São Paulo',
    alt_b: 'Rio de Janeiro',
    alt_c: 'Fortaleza',
    alt_d: 'Brasília',
    alt_e: 'Recife',
    correta: 'd',
    },
    {
    pergunta:'Qual a maior montanha do planeta?',
    alt_a: 'Monte Everest',
    alt_b: 'Mauna Kea',
    alt_c: 'Makalu',
    alt_d: 'Chimborazo',
    alt_e: 'Cho Oyu',
    correta: 'a',
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
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de geografia!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_b(){
        num ++
        if(resposta_b.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de geografia!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_c(){
        num ++
        if(resposta_c.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de geografia!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_d(){
        num ++
        if(resposta_d.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de geografia!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_e(){
        num ++
        if(resposta_e.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de geografia!!!';
        }
        else{
            console.log('errou')
        }
    }
    
    
    