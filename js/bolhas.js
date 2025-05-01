function criandoBolhas() {
    // Declarando variável "section" como a primeira section do HTML
    const section = document.querySelector('section');

    const bolha = document.createElement('span');

    // Definindo tamnho da bolha (aleatório de 0 a 150)
    var size = Math.random() * 150;

    // Definindo largura da bolha
    bolha.style.width = 20 + size + 'px';
    // Definindo altura da bolha
    bolha.style.height = 20 + size + 'px';
    // Definindo posição lateralmente da bolha
    bolha.style.left = Math.random() * innerWidth + 'px';
    // Criando e colocando a bolha na Section
    section.appendChild(bolha);

    // Intervalo para remoção da bolha
    setTimeout(() => {
        bolha.remove();
    }, 20000)
}
// Intervalo para criação de outra bolha
setInterval(criandoBolhas, 400);