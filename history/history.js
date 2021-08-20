// QUESTÕES
let questions = [
    {
    pergunta:'Quem foi o colonizador do Brasil?',
    alt_a: 'Pedro Álvares Cabral ',
    alt_b: 'Dom Pedro II',
    alt_c: 'Tiradentes',
    alt_d: 'Luís Gonzaga',
    alt_e: 'Martin Luther King',
    correta: 'a',
    },
    {
    pergunta:'Qual a maior pirâmide do mundo?',
    alt_a: 'Grande Pirâmide de Cholula',
    alt_b: 'Pirâmide de Gizé',
    alt_c: 'Pirâmide de Quéfren',
    alt_d: 'Pirâmide de Miquerinos',
    alt_e: 'Pirâmide de Cleópatra',
    correta: 'a',
    },
    {
    pergunta:'Respectivamente, quais anos determinaram o início e o fim da Segunda Guerra Mundial',
    alt_a: '1939 e 1948',
    alt_b: '1942 e 1950',
    alt_c: '1955 e 1956',
    alt_d: '1939 e 1945',
    alt_e: '1938 e 1946',
    correta: 'd',
    },
    {
    pergunta:'Qual presidente do Brasil governou por mais tempo?',
    alt_a: 'José Sarney',
    alt_b: 'Dilma Rousseff',
    alt_c: 'Dom Pedro II',
    alt_d: 'Lula',
    alt_e: 'Getúlio Vargas',
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
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de história!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_b(){
        num ++
        if(resposta_b.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de história!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_c(){
        num ++
        if(resposta_c.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de história!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_d(){
        num ++
        if(resposta_d.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de história!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_e(){
        num ++
        if(resposta_e.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de história!!!';
        }
        else{
            console.log('errou')
        }
    }
    
    
    