document.addEventListener('DOMContentLoaded', function() {

    // --- Animação de Scroll ---
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        scrollObserver.observe(element);
    });

    // --- Lógica do Modal de Personagens ---
    const modal = document.getElementById('character-modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');
    const characterCards = document.querySelectorAll('.character-card');

    // Dados dos personagens (poderiam vir de uma API no futuro)
    const characterData = {
        yusuke: {
            name: 'Yusuke Urameshi',
            image: 'img/yusuke-modal.jpg',
            description: 'O Protagonista. Um delinquente com um coração de ouro que se torna Detetive Espiritual. Sua principal técnica é o Leigan (Spirit Gun), um disparo de energia espiritual concentrada na ponta do dedo.'
        },
        kuwabara: {
            name: 'Kazuma Kuwabara',
            image: 'img/kuwabara-modal.jpg',
            description: 'O rival e melhor amigo de Yusuke. Apesar de sua aparência, é extremamente leal e possui uma alta sensibilidade espiritual. Sua principal arma é a Espada Espiritual (Spirit Sword), que pode cortar dimensões.'
        },
        kurama: {
            name: 'Kurama',
            image: 'img/kurama-modal.jpg',
            description: 'Um demônio-raposa (Youko) reencarnado em um corpo humano. É calmo, calculista e um mestre em manipular plantas para o combate, utilizando seu Chicote de Rosa (Rose Whip) como arma principal.'
        },
        hiei: {
            name: 'Hiei',
            image: 'img/hiei-modal.jpg',
            description: 'Um demônio de fogo veloz e inicialmente implacável. Possui o Jagan (Olho Maligno), que lhe concede habilidades psíquicas. Sua técnica mais poderosa é o Jagan Ensatsu Kokuryuha (Dragão Negro Mortal).'
        }
    };

    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            const charId = card.dataset.char;
            const data = characterData[charId];

            modalBody.innerHTML = `
                <img src="${data.image}" alt="${data.name}">
                <div>
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
                </div>
            `;
            modal.style.display = 'block';
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

});