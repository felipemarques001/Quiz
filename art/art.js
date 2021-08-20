// QUESTÕES
let questions = [
    {
    pergunta:'Quem pintou o famoso quadro Mona Lisa?',
    alt_a: 'Michelangelo',
    alt_b: 'Leonardo da Vinci',
    alt_c: 'Vicent van Gogh',
    alt_d: 'Luís Gonzaga',
    alt_e: 'Tarsilia do Amaral',
    correta: 'b',
    },
    {
    pergunta:'Em que ano aconteceu a Semana da Arte Moderna?',
    alt_a: '1922',
    alt_b: '1822',
    alt_c: '1975',
    alt_d: '1952',
    alt_e: '1956',
    correta: 'a',
    },
    {
    pergunta:'Qual a segunda maior pintura do mundo?',
    alt_a: 'O Beijo de Gustav Klimt',
    alt_b: 'Mona Lisa de Leonardo Da Vinci',
    alt_c: 'Guernica de Pablo Picasso',
    alt_d: 'As Meninas de Diego Velázquez',
    alt_e: 'A Persistência da Memória de Salvador Dalí',
    correta: 'c',
    },
    {
    pergunta:'Em qual país nasceu Portinari?',
    alt_a: 'EUA',
    alt_b: 'Inglaterra',
    alt_c: 'França',
    alt_d: 'Espanha',
    alt_e: 'Brasil',
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
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de arte!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_b(){
        num ++
        if(resposta_b.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de arte!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_c(){
        num ++
        if(resposta_c.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de arte!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_d(){
        num ++
        if(resposta_d.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de arte!!!';
        }
        else{
            console.log('errou')
        }
    }
    function verificar_e(){
        num ++
        if(resposta_e.dataset.letra == questions[num - 1].correta){
            acertos ++
            p_footer.innerHTML = 'Você acertou ' + (acertos) + ' de 4 questões de arte!!!';
        }
        else{
            console.log('errou')
        }
    }
    
    
    