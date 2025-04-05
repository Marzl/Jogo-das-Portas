let vitorias = 0;

function iniciarJogo() {
    document.getElementById('mensagem').innerText = '';
    document.getElementById('gameContainer').innerHTML = '<h2>Escolha uma porta</h2>';
  
    let rodadas = document.getElementById('rodadas');
    if (rodadas) {
      rodadas.style.display = 'block'
    }
    let botaoJogar = document.getElementById('botaoJogar');
    if (botaoJogar) {
        botaoJogar.style.display = 'none';
    }

    let portaMonstro = Math.floor(Math.random() * 3) + 1;
    let container = document.createElement('div');
    container.className = 'portas';

    for (let i = 1; i <= 3; i++) {
        let porta = document.createElement('div');
        porta.className = 'porta';
        porta.innerText = i;
        porta.onclick = function() { escolherPorta(i, portaMonstro); };
        container.appendChild(porta);
    }
    document.getElementById('gameContainer').appendChild(container);
}

function escolherPorta(escolhaJogador, portaMonstro) {
    let portas = document.querySelectorAll('.porta');
    portas.forEach((porta, index) => {
        if (index + 1 === portaMonstro) {
            porta.classList.add('revelada');
            porta.innerText = '👹';
        }
    });

    if (escolhaJogador === portaMonstro) {
        document.getElementById('mensagem').innerText = "Você encontrou o monstro! Fim de jogo!";
        vitorias = 0;
        document.getElementById('contador').innerText = vitorias;
        setTimeout(iniciarJogo, 2000); // Reinicia após perder
    } else {
        document.getElementById('mensagem').innerText = "Você passou! O monstro estava na porta " + portaMonstro;
        document.querySelector(`.porta:nth-child(${escolhaJogador})`).classList.add('passou');
        vitorias++;
        document.getElementById('contador').innerText = vitorias;
        setTimeout(iniciarJogo, 2000);
    }
}
