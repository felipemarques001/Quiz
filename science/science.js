// QUESTÕES
let questions = [
    {
    pergunta:'O que significa CO2?',
    alt_a: 'Água oxigenada',
    alt_b: 'Dióxido de carbono',
    alt_c: 'Hidrogênio',
    alt_d: 'Oxigênio',
    alt_e: 'Gás oxigenado',
    correta: 'b',
    },
    {
    pergunta:'Quantos sistemas possui o corpo humano?',
    alt_a: '12 sistemas',
    alt_b: '13 sistemas',
    alt_c: '17 sistemas',
    alt_d: '15 sistemas',
    alt_e: '14 sistemas',
    correta: 'b',
    },
    {
    pergunta:'Em ordem, quais são os níveis de organização dos seres vivos?',
    alt_a: 'Átomos, moléculas, organelas, tecidos, orgãos, sistemas...',
    alt_b: 'Moléculas, átomos, tecidos, organelas, sistemas, orgãos...',
    alt_c: 'Átomos, tecidos, moléculas, organelas, sistemas, orgãos...',
    alt_d: 'Orgãos, organelas, tecidos, moléculas, orgãos, sistemas...',
    alt_e: 'Sistemas, orgãos, moléculas, tecidos, átomos, organelas...',
    correta: 'a',
    },
    {
    pergunta:'Gregor Mendel foi reconhecido por qual título?',
    alt_a: 'Descobridor dos sistemas solares',
    alt_b: 'Herói da biologia',
    alt_c: 'Criador da lei natural',
    alt_d: 'Divisor de átomos',
    alt_e: 'Pai da genética',
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
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de ciências!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_b(){
        num ++
        if(resposta_b.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de ciências!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_c(){
        num ++
        if(resposta_c.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de ciências!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_d(){
        num ++
        if(resposta_d.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de ciências!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_e(){
        num ++
        if(resposta_e.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de ciências!!!';
        }
        else{
            console.log('errou')
        }
    }
    
    
    