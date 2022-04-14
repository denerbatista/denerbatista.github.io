const elementoH2 = document.querySelector('#h2');
const elemenTextR = document.querySelector("#textR");
const elemenGif = document.querySelector("#gif");
const elemenAGif = document.querySelector("#aGif");
let elementoBotton = document.querySelector('#alterar');
let elementoCompartilhar = document.querySelector('#compartilhar');

elementoBotton.addEventListener('click', () =>{
    if(elementoBotton.value=='0'){
        elemenGif.src="./assets/img/jokempo.gif"
        elementoH2.innerText ="Projeto 2 - Jokempô"
        elementoH2.href="https://github.com/denerbatista/Atividades-JavaScript/blob/main/projetos/modulo_1_jokenpo.js"
        elemenAGif.href="https://github.com/denerbatista/Atividades-JavaScript/blob/main/projetos/modulo_1_jokenpo.js"
        elementoCompartilhar.href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Fdenerbatista%2FAtividades-JavaScript%2Fblob%2Fmain%2Fprojetos%2Fmodulo_1_jokenpo.js"
        elemenTextR.innerText = 'O Jokenpô é o popular jogo do "pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.\n E para esse projeto você deve desenvolver um programa capaz de:\n Receber o elemento escolhido pelo usuário;\n Escolher um elemento aleatório para o computador;\n Comparar os dois elementos e declarar um vencedor.'
        elementoBotton.value='1'
    }else if(elementoBotton.value=='1'){
        elemenGif.src="./assets/img/ficcaoInterativa.gif"
        elementoH2.innerText ="Projeto 3 - Ficção Interativa"
        elementoH2.href="https://github.com/denerbatista/Atividades-JavaScript/blob/main/projetos/modulo_1_ficcaoInterativa.js"
        elemenAGif.href="https://github.com/denerbatista/Atividades-JavaScript/blob/main/projetos/modulo_1_ficcaoInterativa.js"
        elementoCompartilhar.href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Fdenerbatista%2FAtividades-JavaScript%2Fblob%2Fmain%2Fprojetos%2Fmodulo_1_ficcaoInterativa.js"
        elemenTextR.innerText = 'Criar um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de estudos, aventuras épicas, histórias assustadoras, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza pela história. Cada escolha irá gerar uma consequência diferente para o seu personagem. Você será responsável por determinar o inicio e término da história, além de avançar o tempo a cada escolha.\nÉ importante que haja uma passagem de tempo e períodos determinados que determinarão os ciclos de repetição das possibilidades do personagem, por exemplo: Manhã, tarde, noite, dormir - Recomeça o ciclo.\nÉ obrigatório o uso funções, laços (while/for) e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.'
        elementoBotton.value='2'
    }else if(elementoBotton.value=='2'){
        elemenGif.src="./assets/img/jornadaDoHeroi.gif"
        elementoH2.innerText ="Projeto 1 - Jornada do Herói"
        elementoH2.href="https://github.com/denerbatista/Atividades-JavaScript/blob/main/projetos/modulo_1_jornadaDoHeroi.js"
        elemenAGif.href="https://github.com/denerbatista/Atividades-JavaScript/blob/main/projetos/modulo_1_jornadaDoHeroi.js"
        elementoCompartilhar.href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Fdenerbatista%2FAtividades-JavaScript%2Fblob%2Fmain%2Fprojetos%2Fmodulo_1_jornadaDoHeroi.js"
        elemenTextR.innerText = 'Criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, No final, o programa deve fazer uma contagem de quantas respostas for Sim, e exibir o resultado de acordo com esse número:\n0 respostas Sim: Você falha miseravelmente. \n1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.\n3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.\n4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.\n5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.\nO programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima.'
        elementoBotton.value='0'
    }
});