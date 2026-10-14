// 1. Seleciona o botão e o texto do HTML usando os IDs
const botao = document.getElementById('meuBotao');
const textoStatus = document.getElementById('mensagemStatus');

// 2. Cria a função com o "comando" que você quer executar
function executarComando() {
    // Muda o texto da página
    textoStatus.innerHTML = "<strong>Comando enviado com sucesso! 🎉</strong>";
    textoStatus.style.color = "#2ea44f";

    // Mostra um aviso na tela
    alert("Você clicou no botão! O comando foi executado.");
    
    // DICA: Você pode colocar qualquer outra lógica de programação aqui dentro!
    console.log("O botão foi acionado pelo usuário.");
}

// 3. Diz ao botão para "escutar" o clique e rodar a função acima
botao.addEventListener('click', executarComando);

