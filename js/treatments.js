// Define os tratamentos
const treatments = [
    // Peelings
    {
        id: 'peeling-superficial',
        category: 'peelings',
        title: 'Peeling Químico Superficial (Ácido Glicólico/Mandélico)',
        description: 'Remove a camada mais externa da pele, clareando manchas, acne e rugas superficiais. Estimula a renovação celular e o colágeno.',
        pricePerSession: 350,
        pricePerPackage: 945,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'peeling-medio',
        category: 'peelings',
        title: 'Peeling Químico Médio (Ácido Tricloroacético - TCA)',
        description: 'Remove camadas mais profundas da pele, tratando acne, rugas mais profundas e hiperpigmentação. Exige mais cuidado pós-peeling.',
        pricePerSession: 700,
        pricePerPackage: 1890,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'peeling-enzimatico',
        category: 'peelings',
        title: 'Peeling Enzimático',
        description: 'Utiliza enzimas naturais para esfoliar a pele, removendo células mortas e promovendo a renovação celular de forma suave. Ideal para peles sensíveis.',
        pricePerSession: 300,
        pricePerPackage: 810,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'dermaplaning',
        category: 'peelings',
        title: 'Dermaplaning',
        description: 'Remove a camada superficial da pele e os pelos finos (vellus) com uma lâmina, proporcionando um aspecto mais liso e luminoso.',
        pricePerSession: 350,
        pricePerPackage: 945,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'peeling-cristal',
        category: 'peelings',
        title: 'Peeling de Cristal',
        description: 'Utiliza microcristais para esfoliar a pele, removendo células mortas e estimulando a produção de colágeno. Melhora a textura e o viço da pele.',
        pricePerSession: 400,
        pricePerPackage: 1080,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'peeling-diamante',
        category: 'peelings',
        title: 'Peeling de Diamante',
        description: 'Similar ao peeling de cristal, porém com partículas de diamante, que são mais suaves e promovem uma esfoliação mais delicada.',
        pricePerSession: 350,
        pricePerPackage: 945,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'peeling-laser',
        category: 'peelings',
        title: 'Peeling a Laser',
        description: 'Utiliza o laser para remover camadas da pele, tratando manchas, cicatrizes, rugas e flacidez. Estimula a produção de colágeno e elastina.',
        pricePerSession: 1500,
        pricePerPackage: 4050,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'peeling-carbono',
        category: 'peelings',
        title: 'Peeling de Carbono',
        description: 'Aplica-se uma máscara de carbono na pele e, em seguida, utiliza-se o laser para remover o carbono e as células mortas. Trata acne, oleosidade e poros dilatados.',
        pricePerSession: 1200,
        pricePerPackage: 3240,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'peeling-retinoico',
        category: 'peelings',
        title: 'Peeling de Ácido Retinóico',
        description: 'Promove a renovação celular, tratando acne, hiperpigmentação e rugas. Pode causar descamação intensa da pele.',
        pricePerSession: 799,
        pricePerPackage: 2157.30,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'peeling-clareador',
        category: 'peelings',
        title: 'Peeling Clareador',
        description: 'Combina diferentes ácidos para clarear manchas e hiperpigmentação, como melasma e sardas.',
        pricePerSession: 750,
        pricePerPackage: 2025,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'peeling-detox',
        category: 'peelings',
        title: 'Peeling Detox',
        description: 'Promove a limpeza profunda da pele, removendo toxinas e impurezas. Controla a oleosidade e minimiza os poros.',
        pricePerSession: 350,
        pricePerPackage: 945,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },

    // Microagulhamento
    {
        id: 'microagulhamento-manual',
        category: 'microagulhamento',
        title: 'Microagulhamento Manual (Roller/Carimbo)',
        description: 'Utiliza um rolo ou carimbo com microagulhas para perfurar a pele, estimulando a produção de colágeno e elastina. Trata cicatrizes, rugas e flacidez.',
        pricePerSession: 799,
        pricePerPackage: 2157.30,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'dermapen',
        category: 'microagulhamento',
        title: 'Dermapen (Elétrico)',
        description: 'Similar ao microagulhamento manual, porém com um dispositivo elétrico que controla a profundidade das agulhas.',
        pricePerSession: 900,
        pricePerPackage: 2430,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'radiofrequencia',
        category: 'microagulhamento',
        title: 'Radiofrequência',
        description: 'Combina o microagulhamento com a radiofrequência, que aquece a pele e estimula ainda mais a produção de colágeno.',
        pricePerSession: 2000,
        pricePerPackage: 5400,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'prp',
        category: 'microagulhamento',
        title: 'PRP (Plasma Rico em Plaquetas)',
        description: 'Utiliza o plasma sanguíneo do paciente, rico em plaquetas, para estimular a regeneração da pele e o colágeno.',
        pricePerSession: 1800,
        pricePerPackage: 4860,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'microagulhamento-robotico',
        category: 'microagulhamento',
        title: 'Microagulhamento Robótico',
        description: 'Utiliza um sistema robótico para inserir as microagulhas de forma precisa e controlada, minimizando o desconforto e o tempo de recuperação.',
        pricePerSession: 2500,
        pricePerPackage: 6750,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },

    // Outros Serviços
    {
        id: 'inibidor-apetite',
        category: 'outros',
        title: 'Inibidor de Apetite',
        description: 'Auxilia no processo de emagrecimento, reduzindo o apetite e a vontade de comer.',
        pricePerSession: 139.90,
        pricePerPackage: 377.73,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'depilacao-laser',
        category: 'outros',
        title: 'Depilação a Laser',
        description: 'Remove os pelos de forma duradoura através da aplicação de laser.',
        pricePerSession: 200,
        priceRange: {
            min: 200,
            max: 500
        },
        pricePerPackage: 0,
        sessions: 3,
        observations: 'Preço por sessão variável dependendo da área'
    },
    {
        id: 'skinbooster',
        category: 'outros',
        title: 'Skinbooster',
        description: 'Hidrata a pele profundamente, suavizando linhas finas e melhorando a elasticidade e o viço.',
        pricePerSession: 499.90,
        pricePerPackage: 1349.73,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'limpeza-pele',
        category: 'outros',
        title: 'Limpeza de Pele',
        description: 'Remove impurezas, células mortas e comedões (cravos) da pele, deixando-a mais limpa e saudável.',
        pricePerSession: 199,
        pricePerPackage: 537.30,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'mascara-rejuvenescedora',
        category: 'outros',
        title: 'Máscara Rejuvenescedora',
        description: 'Máscara facial com ativos que promovem a hidratação, nutrição e rejuvenescimento da pele.',
        pricePerSession: 250,
        pricePerPackage: 675,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'botox',
        category: 'outros',
        title: 'Botox',
        description: 'Aplicação de toxina botulínica para suavizar rugas e linhas de expressão.',
        pricePerSession: 1190,
        pricePerPackage: 3213,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'lipo-enzimatica',
        category: 'outros',
        title: 'Lipo Enzimática',
        description: 'Aplicação de enzimas que quebram as moléculas de gordura.',
        pricePerSession: 139.90,
        pricePerPackage: 377.73,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'massagem-relaxante',
        category: 'outros',
        title: 'Massagem Relaxante',
        description: 'Massagem terapêutica que promove relaxamento muscular, reduz o estresse e melhora a circulação sanguínea.',
        pricePerSession: 150.00,
        pricePerPackage: 405.00,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'drenagem-linfatica',
        category: 'outros',
        title: 'Drenagem Linfática',
        description: 'Técnica de massagem que estimula o sistema linfático, reduzindo inchaços e melhorando a circulação.',
        pricePerSession: 180.00,
        pricePerPackage: 486.00,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'reiki',
        category: 'outros',
        title: 'Reiki',
        description: 'Terapia energética que promove equilíbrio físico e emocional através da imposição das mãos.',
        pricePerSession: 139.00,
        pricePerPackage: 375.30,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'manta-termica',
        category: 'outros',
        title: 'Manta Térmica',
        description: 'Tratamento que utiliza calor para promover relaxamento muscular, redução de medidas e desintoxicação.',
        pricePerSession: 139.90,
        pricePerPackage: 377.73,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'hidratacao-facial',
        category: 'outros',
        title: 'Hidratação Facial Profunda',
        description: 'Tratamento intensivo para hidratar e revitalizar a pele do rosto, devolvendo luminosidade e maciez.',
        pricePerSession: 220.00,
        pricePerPackage: 594.00,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'carboxiterapia',
        category: 'outros',
        title: 'Carboxiterapia',
        description: 'Aplicação de gás carbônico medicinal que estimula a circulação e produção de colágeno.',
        pricePerSession: 250.00,
        pricePerPackage: 675.00,
        sessions: 3,
        observations: '10% de desconto no pacote'
    },
    {
        id: 'massagem',
        category: 'outros',
        title: 'Massagem',
        description: 'Promove o relaxamento muscular, alivia dores e tensões, melhora a circulação sanguínea e linfática.',
        pricePerSession: 120,
        pricePerPackage: 324,
        sessions: 3,
        observations: '10% de desconto no pacote'
    }
];

// Funções de renderização
function handleTreatmentClick(treatment) {
    window.location.href = `treatments.html?category=${treatment.category}#${treatment.id}`;
}

function createTreatmentCard(treatment) {
    const priceDisplay = treatment.priceRange 
        ? `R$ ${treatment.priceRange.min.toFixed(2)} - ${treatment.priceRange.max.toFixed(2)}`
        : `R$ ${treatment.pricePerSession.toFixed(2)}`;

    return `
        <div class="treatment-card" data-category="${treatment.category}" data-aos="fade-up" onclick="handleTreatmentClick(${JSON.stringify(treatment)})">
            <div class="treatment-content">
                <h3>${treatment.title}</h3>
                <p>${treatment.description}</p>
            </div>
            <div class="price-info">
                <p class="price">
                    <span class="font-medium">Preço por sessão:</span>
                    <span class="text-primary">${priceDisplay}</span>
                </p>
                ${treatment.pricePerPackage ? `
                    <p class="package-price">
                        <span class="font-medium">Pacote ${treatment.sessions} sessões:</span>
                        <strong class="text-primary">R$ ${treatment.pricePerPackage.toFixed(2)}</strong>
                    </p>
                ` : ''}
                ${treatment.observations ? `
                    <p class="observations">${treatment.observations}</p>
                ` : ''}
            </div>
            <a href="https://api.whatsapp.com/send/?phone=555186106030&text=${encodeURIComponent(`Olá! Gostaria de informações sobre ${treatment.title}`)}"
               class="cta-button"
               target="_blank"
               rel="noopener noreferrer">
                Agendar Avaliação
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </a>
        </div>
    `;
}

function createCategorySection(category, title) {
    const filteredTreatments = category === 'todos' 
        ? treatments 
        : treatments.filter(t => t.category === category);

    return `
        <div class="category-section" id="${category}">
            <h2>${title}</h2>
            <div class="treatments-grid">
                ${filteredTreatments.map(createTreatmentCard).join('')}
            </div>
        </div>
    `;
}

// Função principal de filtro (atualizada)
function filterTreatments(category) {
    const categoriesContainer = document.querySelector('.treatment-categories');
    
    if (category === 'todos') {
        const categories = [
            { id: 'peelings', title: 'Peelings' },
            { id: 'microagulhamento', title: 'Microagulhamento' },
            { id: 'outros', title: 'Outros Serviços' }
        ];
        
        categoriesContainer.innerHTML = categories
            .map(cat => createCategorySection(cat.id, cat.title))
            .join('');
    } else {
        const categoryTitle = {
            'peelings': 'Peelings',
            'microagulhamento': 'Microagulhamento',
            'outros': 'Outros Serviços'
        }[category];
        
        categoriesContainer.innerHTML = createCategorySection(category, categoryTitle);
    }

    // Atualizar estado ativo dos botões
    document.querySelectorAll('.nav-button, .filter-button').forEach(button => {
        const buttonCategory = button.dataset.category || button.dataset.filter;
        button.classList.toggle('active', buttonCategory === category);
    });
}

// Função updateURL corrigida
function updateURL(category) {
    try {
        const url = category === 'todos' ? 'treatments.html' : `treatments.html?category=${category}`;
        history.pushState({}, '', url);
    } catch (e) {
        console.warn('URL update not supported in local environment');
    }
}

// Inicialização corrigida
document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.querySelector('.treatment-categories');
    if (!categoriesContainer) return; // Evita erros em outras páginas

    // Setup dos botões
    document.querySelectorAll('.nav-button, .filter-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = button.dataset.category || button.dataset.filter;
            if (!category) return;
            
            filterTreatments(category);
        });
    });

    // Inicialização baseada na URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category') || 'todos';
    filterTreatments(initialCategory);
});

// Atualizar inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Setup do menu mobile       
    const menuToggle = document.querySelector('.menu-toggle');       
    const navMobile = document.getElementById('nav-mobile');
    const body = document.body;    
    
    function toggleMenu() {
        navMobile.classList.toggle('show');
        menuToggle.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
    
    menuToggle?.addEventListener('click', toggleMenu);

    // Setup dos botões
    document.querySelectorAll('.nav-button, .filter-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = button.dataset.category || button.dataset.filter;                        // Atualizar URL sem recarregar            
            updateURL(category);                        // Filtrar conteúdo            
            filterTreatments(category);                        // Fechar menu se necessário            
            if (navMobile.classList.contains('show')) {                
                toggleMenu();            
            }        
        });    
    });    
    // Inicialização baseada na URL    
    const urlParams = new URLSearchParams(window.location.search);    
    const initialCategory = urlParams.get('category') || 'todos';    
    filterTreatments(initialCategory);    
    // Restaurar funcionalidade de filtro nos botões do menu mobile    
    document.querySelectorAll('.nav-mobile .nav-button').forEach(button => {        
        if (!button.classList.contains('cta')) {            
            button.addEventListener('click', (e) => {                
                e.preventDefault();                
                const category = button.dataset.category;                
                filterTreatments(category);                                
                // Fechar menu mobile                
                const navMobile = document.getElementById('nav-mobile');                
                const menuToggle = document.querySelector('.menu-toggle');                
                navMobile.classList.remove('show');                
                menuToggle.classList.remove('active');                
                document.body.classList.remove('menu-open');            
            });        
        }
    });

    // Inicializar AOS
    AOS.init({
        duration: 800,
        once: true
    });
});