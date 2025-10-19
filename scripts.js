// Funções globais
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar animação de entrada para todos os cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';
    });
    
    // Inicializar tooltips se existirem
    initTooltips();
    
    // Adicionar efeitos aos botões
    addButtonEffects();
    
    // Verificar se estamos na página da roleta
    if (document.querySelector('.wheel')) {
        initWheel();
    }
    
    // Verificar se estamos na página do formulário
    if (document.querySelector('form')) {
        initForms();
    }
});

// Inicializar tooltips
function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            const text = this.getAttribute('data-tooltip');
            const tooltipEl = document.createElement('div');
            tooltipEl.className = 'tooltip';
            tooltipEl.textContent = text;
            document.body.appendChild(tooltipEl);
            
            const rect = this.getBoundingClientRect();
            tooltipEl.style.top = rect.top - tooltipEl.offsetHeight - 10 + 'px';
            tooltipEl.style.left = rect.left + (rect.width / 2) - (tooltipEl.offsetWidth / 2) + 'px';
            tooltipEl.style.opacity = '1';
        });
        
        tooltip.addEventListener('mouseleave', function() {
            const tooltipEl = document.querySelector('.tooltip');
            if (tooltipEl) {
                tooltipEl.remove();
            }
        });
    });
}

// Adicionar efeitos aos botões
function addButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Inicializar a roleta
function initWheel() {
    const wheel = document.querySelector('.wheel');
    const spinButton = document.querySelector('.spin-button');
    
    if (wheel && spinButton) {
        // Adicionar efeito de hover na roleta
        wheel.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(255, 107, 107, 0.4)';
        });
        
        wheel.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
        });
        
        // Adicionar efeito de clique no botão de girar
        spinButton.addEventListener('click', function() {
            // Adicionar classe de animação ao botão
            this.classList.add('btn-animated');
            
            // Remover a classe após a animação
            setTimeout(() => {
                this.classList.remove('btn-animated');
            }, 500);
        });
    }
}

// Inicializar formulários
function initForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        // Adicionar validação aos campos
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            // Adicionar classe quando o campo está em foco
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            // Remover classe quando o campo perde o foco
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
                
                // Validar campo
                if (this.hasAttribute('required') && !this.value) {
                    this.classList.add('invalid');
                } else {
                    this.classList.remove('invalid');
                }
            });
        });
        
        // Validar formulário no envio
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value) {
                    input.classList.add('invalid');
                    isValid = false;
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
            } else {
                showMessage('Formulário enviado com sucesso!', 'success');
            }
        });
    });
}

// Função para criar confetes
function createConfetti() {
    const confettiCount = 100;
    const colors = ['#f48fb1', '#ce93d8', '#90caf9', '#80deea', '#a5d6a7', '#fff59d', '#ffcc80'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(confetti);
        
        // Remover confete após a animação
        setTimeout(() => {
            confetti.remove();
        }, 7000);
    }
}

// Função para mostrar mensagens
function showMessage(message, type = 'info') {
    // Remover mensagens existentes
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Criar nova mensagem
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${type}`;
    messageEl.textContent = message;
    
    // Adicionar ícone
    const icon = document.createElement('span');
    icon.className = 'message-icon';
    
    if (type === 'success') {
        icon.innerHTML = '✓';
    } else if (type === 'error') {
        icon.innerHTML = '✗';
    } else if (type === 'warning') {
        icon.innerHTML = '⚠';
    } else {
        icon.innerHTML = 'ℹ';
    }
    
    messageEl.prepend(icon);
    
    // Adicionar botão de fechar
    const closeBtn = document.createElement('span');
    closeBtn.className = 'message-close';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', function() {
        messageEl.remove();
    });
    
    messageEl.appendChild(closeBtn);
    
    // Adicionar ao corpo do documento
    document.body.appendChild(messageEl);
    
    // Animar entrada
    setTimeout(() => {
        messageEl.style.transform = 'translateY(0)';
        messageEl.style.opacity = '1';
    }, 10);
    
    // Remover após 5 segundos
    setTimeout(() => {
        messageEl.style.transform = 'translateY(-20px)';
        messageEl.style.opacity = '0';
        
        setTimeout(() => {
            messageEl.remove();
        }, 300);
    }, 5000);
}

// Função para validar email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Função para validar telefone
function validatePhone(phone) {
    const re = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return re.test(String(phone));
}

// Função para formatar telefone
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        value = '(' + value;
    }
    if (value.length > 3) {
        value = value.substring(0, 3) + ') ' + value.substring(3);
    }
    if (value.length > 9) {
        if (value.length > 10) {
            value = value.substring(0, 10) + '-' + value.substring(10, 14);
        } else {
            value = value.substring(0, 9) + '-' + value.substring(9);
        }
    }
    
    input.value = value;
}

// Função para obter parâmetros da URL
function getUrlParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    for (const [key, value] of urlParams.entries()) {
        params[key] = decodeURIComponent(value);
    }
    
    return params;
}

// Função para redirecionar com parâmetros
function redirectWithParams(url, params) {
    const queryString = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    
    window.location.href = `${url}?${queryString}`;
}

// Função para simular o envio de email
function simulateEmailSending(emailData, callback) {
    // Simular tempo de envio
    setTimeout(() => {
        // Simular sucesso (em produção, isso seria uma chamada real a um serviço de email)
        const success = Math.random() > 0.1; // 90% de chance de sucesso
        
        if (success) {
            if (callback) callback(true, 'Email enviado com sucesso!');
        } else {
            if (callback) callback(false, 'Erro ao enviar email. Tente novamente.');
        }
    }, 1500);
}