document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        updateTextColor();
    });

    document.getElementById('language-select').addEventListener('change', function() {
        const lang = this.value;
        translatePage(lang);
    });

    function updateTextColor() {
        if (document.body.classList.contains('light-mode')) {
            document.documentElement.style.setProperty('--text-color', '#000');
        } else {
            document.documentElement.style.setProperty('--text-color', '#e0e0e0');
        }
    }

    function translatePage(lang) {
        const translations = {
            pt: {
                title: 'Bem-vindo à Minha Página de Projetos',
                aboutMe: 'Sobre Mim',
                aboutText: 'Olá me chamo Rafaela, tenho 17 anos e estou estudando para me transformar em uma programadora Back end no futuro, fiz essa página para postar meus projetos, espero que gostem.',
                projects: 'Meus Projetos',
                themeToggle: 'Modo Claro/Escuro',
                projectButtons: ['Agrinho', 'Jogos', 'Calculadora científica', 'Previsão do tempo', 'Despertador', 'Bloco de Notas']
            },
            en: {
                title: 'Welcome to My Project Page',
                aboutMe: 'About Me',
                aboutText: 'Hello, my name is Rafaela. I am 17 years old and I am studying to become a Back-end developer in the future. I created this page to post my projects, and I hope you like them.',
                projects: 'My Projects',
                themeToggle: 'Light/Dark Mode',
                projectButtons: ['Agrinho', 'Games', 'Scientific Calculator', 'Weather Forecast', 'Alarm Clock', 'Notepad']
            },
            es: {
                title: 'Bienvenido a Mi Página de Proyectos',
                aboutMe: 'Sobre Mí',
                aboutText: 'Hola, me llamo Rafaela. Tengo 17 años y estoy estudiando para convertirme en desarrolladora Back-end en el futuro. Creé esta página para publicar mis proyectos, y espero que les gusten.',
                projects: 'Mis Proyectos',
                themeToggle: 'Modo Claro/Oscuro',
                projectButtons: ['Agrinho', 'Juegos', 'Calculadora científica', 'Pronóstico del tiempo', 'Despertador', 'Bloc de notas']
            },
            fr: {
                title: 'Bienvenue sur Ma Page de Projets',
                aboutMe: 'À Propos de Moi',
                aboutText: 'Bonjour, je m\'appelle Rafaela. J\'ai 17 ans et j\'étudie pour devenir développeuse Back-end à l\'avenir. J\'ai créé cette page pour publier mes projets, et j\'espère que vous les aimerez.',
                projects: 'Mes Projets',
                themeToggle: 'Mode Clair/Sombre',
                projectButtons: ['Agrinho', 'Jeux', 'Calculatrice scientifique', 'Prévisions météorologiques', 'Réveil', 'Bloc-notes']
            }
        };

        // Atualize o texto da página
        document.querySelector('header h1').textContent = translations[lang].title;
        document.querySelector('#about-me h2').textContent = translations[lang].aboutMe;
        document.querySelector('#about-text').textContent = translations[lang].aboutText;
        document.querySelector('#projects h2').textContent = translations[lang].projects;

        // Atualize o texto do botão de tema
        document.getElementById('theme-toggle').textContent = translations[lang].themeToggle;

        // Atualize o texto dos botões de projeto
        const projectButtons = document.querySelectorAll('.project-button');
        translations[lang].projectButtons.forEach((text, index) => {
            if (projectButtons[index]) {
                projectButtons[index].textContent = text;
            }
        });
    }

    updateTextColor(); // Inicializa a cor do texto corretamente
    translatePage('pt'); // Define o idioma padrão como português
});
