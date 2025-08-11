
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const avaliarBtn = document.getElementById('avaliarBtn');
    const sacarBtn = document.getElementById('sacarBtn');
    const duvidasBtn = document.getElementById('duvidasBtn');
    
    const saqueModal = document.getElementById('saqueModal');
    const duvidasModal = document.getElementById('duvidasModal');
    
    const surveyForm = document.getElementById('surveyForm');
    const thankYou = document.getElementById('thankYou');
    
    const closeBtns = document.querySelectorAll('.close');

    // Event Listeners para botões de ação
    avaliarBtn.addEventListener('click', function() {
        // Verificar se todas as perguntas foram respondidas
        const rating = document.querySelector('input[name="rating"]:checked');
        const recommend = document.querySelector('input[name="recommend"]:checked');
        const age = document.querySelector('input[name="age"]:checked');
        
        if (!rating || !recommend || !age) {
            alert('Por favor, responda todas as perguntas antes de avaliar.');
            return;
        }

        // Mostrar animação de dinheiro e tocar som
        const moneyOverlay = document.getElementById('moneyOverlay');
        moneyOverlay.style.display = 'flex';
        
        // Tocar som de dinheiro
        if (window.playCashSound) {
            window.playCashSound();
        }
        
        // Esconder overlay após 1 segundo e redirecionar para Maiara e Maraisa
        setTimeout(function() {
            moneyOverlay.style.display = 'none';
            window.location.href = 'maiara.html';
        }, 1000);
    });

    sacarBtn.addEventListener('click', function() {
        saqueModal.style.display = 'block';
    });

    duvidasBtn.addEventListener('click', function() {
        duvidasModal.style.display = 'block';
    });

    // Event Listeners para fechar modais
    closeBtns.forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Fechar modal clicando fora dele
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Fechar modal com a tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(function(modal) {
                modal.style.display = 'none';
            });
        }
    });
});
