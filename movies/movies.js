// QUESTÕES
let questions = [
    {
    pergunta:'Qual a data do lançamento do filme Titanic?',
    alt_a: '19 de abril de 1999',
    alt_b: '15 de fevereiro de 1995',
    alt_c: '16 de janeiro de 1998',
    alt_d: '14 de março de 1997',
    alt_e: '22 de janeiro de 1994',
    correta: 'c',
    },
    {
    pergunta:'Qual o nome do ator do personagem Homem de Ferro?',
    alt_a: 'Robert Downey Jr.',
    alt_b: 'Mark Ruffalo',
    alt_c: 'Jeremy Renner',
    alt_d: 'Chris Evans',
    alt_e: 'Anthony Mackie',
    correta: 'a',
    },
    {
    pergunta:'Qual é o herói de Peter Benjamin Parker?',
    alt_a: 'Capitão América',
    alt_b: 'Hulk',
    alt_c: 'Thanos',
    alt_d: 'Homem-Aranha',
    alt_e: 'Pantera Negra',
    correta: 'd',
    },
    {
    pergunta:'Quem é o vilão do primeiro filme dos Vingadores?',
    alt_a: 'Thanos',
    alt_b: 'Visão',
    alt_c: 'Ultron',
    alt_d: 'Loki',
    alt_e: 'Feiticeira Escalarte',
    correta: 'd',
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
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de cinema!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_b(){
        num ++
        if(resposta_b.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de cinema!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_c(){
        num ++
        if(resposta_c.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de cinema!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_d(){
        num ++
        if(resposta_d.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de cinema!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_e(){
        num ++
        if(resposta_e.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de cinema!!!';
        }
        else{
            console.log('errou')
        }
    }
    
    
    