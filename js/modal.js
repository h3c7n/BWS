document.addEventListener('DOMContentLoaded', () => {
    const initializeModal = (buttonSelector, modalId) => {
        const modal = document.getElementById(modalId);
        const button = document.querySelector(buttonSelector);
        const closeBtn = modal.querySelector('.close-modal');
        let lastFocusedElement;

        const openModal = (e) => {
            e.preventDefault();
            lastFocusedElement = document.activeElement;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            modal.querySelector('.close-modal').focus();

            // Adiciona classe de animação
            modal.querySelector('.modal-content').classList.add('modal-animate-in');

            // Reinicializa as animações AOS quando o modal de reviews é aberto
            if (modalId === 'reviewsModal') {
                setTimeout(() => {
                    AOS.refresh();
                }, 100);
            }
        };

        const closeModal = () => {
            modal.querySelector('.modal-content').classList.add('modal-animate-out');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                modal.querySelector('.modal-content').classList.remove('modal-animate-out');
                if (lastFocusedElement) {
                    lastFocusedElement.focus();
                }
            }, 300);
        };

        // Event Listeners
        button.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);

        // Fechar ao clicar fora do modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Fechar com tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });

        // Trap focus dentro do modal
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableElements = modal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstFocusable = focusableElements[0];
                const lastFocusable = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    };

    // Inicializar modais
    initializeModal('a[href="#sobre"]', 'sobreModal');
    initializeModal('a[href="#localizacao"]', 'localizacaoModal');
    initializeModal('a[href="#reviews"]', 'reviewsModal');

    // Debug da imagem
    const clinicImage = document.querySelector('.clinic-image');
    if (clinicImage) {
        clinicImage.addEventListener('load', function() {
            console.log('Imagem carregada com sucesso');
        });
    }

    console.log('Verificando estrutura de arquivos...');
    fetch('images/placeholder.svg')
        .then(response => console.log('placeholder.svg encontrado'))
        .catch(error => console.error('Erro ao carregar placeholder.svg:', error));
    
    fetch('images/clinica.jpg')
        .then(response => console.log('clinica.jpg encontrado'))
        .catch(error => console.error('Erro ao carregar clinica.jpg:', error));
});
