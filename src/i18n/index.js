import { createI18n } from "vue-i18n";

let DEFAULT_LOCALE = process.env.DEFAULT_LOCALE || "pt-BR";

const getUserPreferredLocale = () => {
  try {
    if (localStorage.getItem("locale")) {
      return localStorage.getItem("locale");
    }
    const userLang = navigator.language || navigator.userLanguage;
    const userLangDefault = navigator.languages && navigator.languages.length > 0? navigator.languages[0] : userLang;
    return userLangDefault || DEFAULT_LOCALE;
  } catch (e) {
    return DEFAULT_LOCALE;
  }
}

const i18n = createI18n({
  locale: getUserPreferredLocale(),
  messages: {
    'en': {
      software_developer: "Software Developer",
      software_developer_breakline: "Software<br>Developer",
      welcome_bio: "I'm Tadeu Barbosa, a developer with over %{years} years of experience, specializing in efficient and customized solutions.",
      programming_languages: "Artificial Intelligence, PHP, JS, Node, Python, Docker and more.",
      hello: "Hello 👋, I'm Tadeu!",
      github_url: "https://github.com/tadeubdev",
      github_url_name: "github.com/tadeubdev",
      linkedin_url: "https://www.linkedin.com/in/tadeubdev/?locale=en_US",
      linkedin_url_name: "linkedin.com/in/tadeubdev",
      devto_url: "https://dev.to/tadeubdev",
      devto_url_name: "dev.to/tadeubdev",
      medium_url: "https://medium.com/%{username}",
      medium_url_name: "medium.com/%{username}",
      about_me: "About Me",
      experiences: "Experiences",
      my_experiences: "My Experiences",
      my_linkedin: "My Linkedin",
      my_github: "My Github",
      my_devto: "My Dev.to",
      my_medium: "My Medium",
      app_created_with: "App created using: HTML, JS and CSS by Tadeu Barbosa.",
      simulating_loading: "Simulating loading...",
      airplane_game: "Airplane Game",
      airplane_game_title: "Airplane Game",
      airplane_game_subtitle: "Simple game where you control an airplane and avoid obstacles.<br>The game was developed using HTML, CSS, and JavaScript by Tadeu Barbosa.",
      experiences_data: [
        {
          image: require('@/assets/images/prints/workana.png'),
          title: 'Freelance Web Developer (Jan 2019 - Present)',
          description:
            'Freelance developer using Laravel, Vue.js, Node.js, and Python. Focus on system optimization, best coding practices, API integration, and creating applications in Node.js and Python.',
          link: 'https://medium.com/@tadeubdev',
          linguagens: ['Laravel', 'Vue.js', 'Node.js', 'Python'],
          tags: ['Freelance', 'API Integration'],
        },
        {
          image: require('@/assets/images/prints/projeto-laravel-2019.png'),
          title: 'Access System in Laravel (Jul 2019 - Aug 2019)',
          description:
            'Developed a login and CRUD system with 6 access levels, including Admin, Instructor, Seller, User, and Support. Implemented features like individual user pages and daily cash graphs. Migrated 18 PHP tables to Laravel.',
          link: '',
          linguagens: ['PHP', 'Laravel'],
          tags: ['CRUD', 'Access Levels'],
        },
        {
          image: require('@/assets/images/prints/projeto-laravel-set-2019.png'),
          title: 'Login and Registration in Laravel (Sep 2019 - Oct 2019)',
          description:
            'Developed a user login and registration system with permission levels in Laravel. The project included an Administrator level for access to the registration table and a basic level for limited access. Used pre-made templates in Bootstrap.',
          link: '',
          linguagens: ['PHP', 'Laravel', 'Bootstrap'],
          tags: ['Login', 'Registration', 'Permission Levels'],
        },
        {
          image: require('@/assets/images/prints/callon.png'),
          title: 'Full Stack Developer at Callon (Sep 2019 - Apr 2024)',
          description:
            'Full Stack developer using Laravel, Vue.js, Node.js, and Python. System updates, API integration, chatbot development, and internal services.',
          link: '',
          linguagens: ['Laravel', 'Vue.js', 'Node.js', 'Python'],
          tags: ['Full Stack', 'Chatbots', 'API Integration'],
        },
        {
          image: require('@/assets/images/prints/web-crawler-dez-2019.png'),
          title: 'Web Crawler in PHP (Dec 2019)',
          description:
            'Developed a simple web crawler in PHP to collect information about establishments from the Guiamais website, including name, category, address, and phone number. Updated the crawler to browse all available pages and integrated the data with the MongoDB database.',
          link: '',
          linguagens: ['PHP', 'MongoDB'],
          tags: ['Web Crawler', 'Data Collection'],
        },
        {
          image: require('@/assets/images/prints/alurastars.png'),
          title: 'Alura Star Participant (Aug 2021 - Aug 2022)',
          description:
            'Participated in the Alura Stars program, learning writing techniques and networking in the dev community, focusing on Open Source contributions.',
          link: '',
          linguagens: [],
          tags: ['Open Source', 'Networking'],
        },
        {
          image: require('@/assets/images/prints/leitura-pdf-maio-2022.png'),
          title: 'PDF to Word Conversion (May 2022)',
          description:
            'Developed a solution for reading exam PDFs with up to 78 pages, converting them into Word documents for generating orders, receipts, and reports.',
          link: '',
          linguagens: ['Python'],
          tags: ['PDF Processing', 'Automation'],
        },
        {
          image: require('@/assets/images/prints/mistral.png'),
          title: 'PHP Developer at Mistral (May 2022 - Present)',
          description:
            'PHP Developer at Mistral, responsible for technical support, developing features in Laravel, version migration, and integration with external APIs.',
          link: '',
          linguagens: ['PHP', 'Laravel', 'JavaScript'],
          tags: ['PHP Development', 'Technical Support'],
        },
        {
          image: require('@/assets/images/prints/quiz-site-maio-2023.png'),
          title: 'Interactive Quiz Site (Apr 2023 - May 2023)',
          description:
            'Developed a database-backed site for interactive quizzes, allowing user comments and explanations for each question. Included domain integration and functionality adjustments as needed.',
          link: '',
          linguagens: ['JavaScript', 'PHP'],
          tags: ['Interactive Quiz', 'Web Development'],
        },
        {
          image: require('@/assets/images/prints/plataforma-contabilidade-set-2023.png'),
          title: 'Accounting Platform (Aug 2023 - Sep 2023)',
          description:
            'Developed a platform for an accounting firm, enabling company registration, partner information, and tax obligations. The platform sends reminders via email and pop-ups about tax deadlines. Created a login system and a database to manage users and companies.',
          link: '',
          linguagens: ['PHP', 'Laravel', 'JavaScript'],
          tags: ['Accounting', 'Platform Development'],
        },
        {
          image: require('@/assets/images/prints/correcao-bugs-mar-2024.png'),
          title: 'Bug Fixes in Laravel System (Jan 2024 - Mar 2024)',
          description:
            'Resolved various bugs in a client management system developed in PHP with Laravel and Vue.js. The project involved debugging and optimizing the frontend and backend to improve functionality and user experience.',
          link: '',
          linguagens: ['PHP', 'Laravel', 'Vue.js'],
          tags: ['Bug Fixing', 'Optimization'],
        },
        {
          image: require('@/assets/images/prints/software-analise-projetos-abr-2024.png'),
          title: 'Project Analysis Software (Feb 2024 - Apr 2024)',
          description:
            'Developed software to automate project evaluation methodology, allowing efficient analysis of up to 70 scenarios per project. The software accelerates the analysis process, making it possible to complete complex evaluations in less than a day.',
          link: '',
          linguagens: ['Python', 'JavaScript'],
          tags: ['Project Analysis', 'Automation'],
        },
        {
          image: require('@/assets/images/prints/ajustes-ecommerce-maio-2024.png'),
          title: 'E-commerce Site Adjustments (Apr 2024 - May 2024)',
          description:
            'Performed adjustments on an e-commerce site, including improvements in the registration flow, profile page layout, password recovery, live scheduling, and PDF adjustments. Completed steps ensure better functionality and user experience.',
          link: '',
          linguagens: ['PHP', 'JavaScript'],
          tags: ['E-commerce', 'Web Development'],
        },
        {
          image: require('@/assets/images/prints/chatbot-ia-pdf-analise-jun-2024.png'),
          title: 'Chatbot Development with PDF Analysis (Mar 2024 - Jun 2024)',
          description:
            'Developed a chatbot for WordPress capable of analyzing PDF documents and answering questions based on the content. The project included chatbot integration, PDF storage, text processing for information extraction, and configuration for accurate responses.',
          link: '',
          linguagens: ['Python', 'JavaScript'],
          tags: ['Chatbot', 'AI', 'PDF Analysis'],
        },
        {
          image: require('@/assets/images/prints/telegram-mensagens-jun-2024.png'),
          title: 'Solution to Save Telegram Messages (Mar 2024 - Jun 2024)',
          description:
            'Implemented a solution using Docker and Python to capture and save Telegram messages after deletion. Configured the environment so the solution can be run multiple times on different machines, allowing easy reuse.',
          link: '',
          linguagens: ['Python', 'Docker'],
          tags: ['Telegram', 'Message Saving', 'Docker'],
        },
      ],
    },
    'pt-BR': {
      software_developer: "Desenvolvedor de Software",
      software_developer_breakline: "Desenvolvedor<br>de Software",
      welcome_bio: "Sou Tadeu Barbosa, desenvolvedor com mais de %{years} anos de experiência, especializado em soluções eficientes e personalizadas.",
      programming_languages: "Inteligência Artificial, PHP, JS, Node, Python, Docker e mais.",
      hello: "Olá 👋, eu sou o Tadeu!",
      github_url: "https://github.com/tadeubdev",
      github_url_name: "github.com/tadeubdev",
      linkedin_url: "https://www.linkedin.com/in/tadeubdev/",
      linkedin_url_name: "linkedin.com/in/tadeubdev",
      devto_url: "https://dev.to/tadeubdev",
      devto_url_name: "dev.to/tadeubdev",
      medium_url: "https://medium.com/%{username}",
      medium_url_name: "medium.com/%{username}",
      about_me: "Sobre Mim",
      experiences: "Experiências",
      my_experiences: "Minhas Experiências",
      my_linkedin: "Meu Linkedin",
      my_github: "Meu Github",
      my_devto: "Meu Dev.to",
      my_medium: "Meu Medium",
      app_created_with: "App criado utilizando: HTML, JS e CSS por Tadeu Barbosa.",
      simulating_loading: "Simulando carregamento...",
      airplane_game: "Jogo de Avião",
      airplane_game_title: "Jogo de Avião",
      airplane_game_subtitle: "Jogo simples onde você controla um avião e desvia de obstáculos.<br>O jogo foi desenvolvido utilizando HTML, CSS e JavaScript por Tadeu Barbosa.",
      experiences_data: [
        {
          image: require('@/assets/images/prints/workana.png'),
          title: 'Desenvolvedor Web Freelancer (Jan 2019 - Presente)',
          description:
            'Desenvolvedor freelancer usando Laravel, Vue.js, Node.js e Python. Foco em otimização de sistemas, boas práticas de código, integração de APIs e criação de aplicativos em Node.js e Python.',
          link: 'https://medium.com/@tadeubdev',
          linguagens: ['Laravel', 'Vue.js', 'Node.js', 'Python'],
          tags: ['Freelancer', 'Integração de API'],
        },
        {
          image: require('@/assets/images/prints/projeto-laravel-2019.png'),
          title: 'Sistema de Acesso em Laravel (Jul 2019 - Ago 2019)',
          description:
            'Desenvolvi um sistema de login e CRUD com 6 níveis de acesso, incluindo Administrador, Instrutor, Vendedor, Usuário e Suporte. Implementei funcionalidades como páginas individuais para usuários e gráficos diários de caixa. Migrei 18 tabelas PHP para Laravel.',
          link: '',
          linguagens: ['PHP', 'Laravel'],
          tags: ['CRUD', 'Níveis de Acesso'],
        },
        {
          image: require('@/assets/images/prints/projeto-laravel-set-2019.png'),
          title: 'Login e Cadastro em Laravel (Set 2019 - Out 2019)',
          description:
            'Desenvolvi um sistema de login e cadastro de usuários com níveis de permissão em Laravel. O projeto incluiu um nível de Administrador para acesso à tabela de cadastros e um nível básico para acesso limitado. Utilizei templates prontos em Bootstrap.',
          link: '',
          linguagens: ['PHP', 'Laravel', 'Bootstrap'],
          tags: ['Login', 'Cadastro', 'Níveis de Permissão'],
        },
        {
          image: require('@/assets/images/prints/callon.png'),
          title: 'Desenvolvedor Full Stack na Callon (Set 2019 - Abr 2024)',
          description:
            'Desenvolvedor Full Stack usando Laravel, Vue.js, Node.js e Python. Atualizações de sistemas, integração com APIs, desenvolvimento de chatbots e serviços internos.',
          link: '',
          linguagens: ['Laravel', 'Vue.js', 'Node.js', 'Python'],
          tags: ['Full Stack', 'Chatbots', 'Integração de API'],
        },
        {
          image: require('@/assets/images/prints/web-crawler-dez-2019.png'),
          title: 'Web Crawler em PHP (Dez 2019)',
          description:
            'Desenvolvi um web crawler simples em PHP para coletar informações de estabelecimentos do site Guiamais, incluindo nome, categoria, endereço e telefone. Atualizei o crawler para navegar por todas as páginas disponíveis e integrei os dados com o banco de dados MongoDB.',
          link: '',
          linguagens: ['PHP', 'MongoDB'],
          tags: ['Web Crawler', 'Coleta de Dados'],
        },
        {
          image: require('@/assets/images/prints/alurastars.png'),
          title: 'Participante do Programa Alura Star (Ago 2021 - Ago 2022)',
          description:
            'Participei do programa Alura Stars, aprendendo técnicas de escrita e networking na comunidade dev, com foco em contribuições Open Source.',
          link: '',
          linguagens: [],
          tags: ['Open Source', 'Networking'],
        },
        {
          image: require('@/assets/images/prints/leitura-pdf-maio-2022.png'),
          title: 'Conversão de PDF para Word (Mai 2022)',
          description:
            'Desenvolvi uma solução para leitura de PDFs de exames com até 78 páginas, transformando-os em documentos Word para a geração de pedidos, recibos e relatórios.',
          link: '',
          linguagens: ['Python'],
          tags: ['Processamento de PDF', 'Automação'],
        },
        {
          image: require('@/assets/images/prints/mistral.png'),
          title: 'Desenvolvedor PHP na Mistral (Mai 2022 - Presente)',
          description:
            'Desenvolvedor PHP na Mistral, responsável por suporte técnico, desenvolvimento de funcionalidades em Laravel, migração de versões e integração com APIs externas.',
          link: '',
          linguagens: ['PHP', 'Laravel', 'JavaScript'],
          tags: ['Desenvolvimento PHP', 'Suporte Técnico'],
        },
        {
          image: require('@/assets/images/prints/quiz-site-maio-2023.png'),
          title: 'Site de Quiz Interativo (Abr 2023 - Mai 2023)',
          description:
            'Desenvolvi um site com banco de dados para quizzes interativos, permitindo comentários dos usuários e explicações para cada questão. Incluiu integração de domínios e ajustes de funcionalidades conforme necessário.',
          link: '',
          linguagens: ['JavaScript', 'PHP'],
          tags: ['Quiz Interativo', 'Desenvolvimento Web'],
        },
        {
          image: require('@/assets/images/prints/plataforma-contabilidade-set-2023.png'),
          title: 'Plataforma de Contabilidade (Ago 2023 - Set 2023)',
          description:
            'Desenvolvi uma plataforma para uma empresa de contabilidade, permitindo o cadastro de empresas, informações de sócios e obrigações fiscais. A plataforma envia lembretes por e-mail e pop-ups sobre prazos fiscais. Criei um sistema de login e um banco de dados para gerenciar usuários e empresas.',
          link: '',
          linguagens: ['PHP', 'Laravel', 'JavaScript'],
          tags: ['Contabilidade', 'Desenvolvimento de Plataforma'],
        },
        {
          image: require('@/assets/images/prints/correcao-bugs-mar-2024.png'),
          title: 'Correção de Bugs em Sistema Laravel (Jan 2024 - Mar 2024)',
          description:
            'Resolvi diversos bugs em um sistema de gerenciamento de clientes desenvolvido em PHP com Laravel e Vue.js. O projeto envolveu a depuração e otimização do frontend e backend para melhorar a funcionalidade e a experiência do usuário.',
          link: '',
          linguagens: ['PHP', 'Laravel', 'Vue.js'],
          tags: ['Correção de Bugs', 'Otimização'],
        },
        {
          image: require('@/assets/images/prints/software-analise-projetos-abr-2024.png'),
          title: 'Software de Análise de Projetos (Fev 2024 - Abr 2024)',
          description:
            'Desenvolvi um software para automatizar a metodologia de avaliação de projetos, permitindo a análise eficiente de até 70 cenários por projeto. O software acelera o processo de análise, tornando possível concluir avaliações complexas em menos de um dia.',
          link: '',
          linguagens: ['Python', 'JavaScript'],
          tags: ['Análise de Projetos', 'Automação'],
        },
        {
          image: require('@/assets/images/prints/ajustes-ecommerce-maio-2024.png'),
          title: 'Ajustes no Site de E-commerce (Abr 2024 - Mai 2024)',
          description:
            'Realizei ajustes em um site de e-commerce, incluindo melhorias no fluxo de cadastro, layout da página de perfil, recuperação de senha, agendamento de lives e ajustes de PDF. As etapas concluídas garantem um melhor funcionamento e experiência do usuário.',
          link: '',
          linguagens: ['PHP', 'JavaScript'],
          tags: ['E-commerce', 'Desenvolvimento Web'],
        },
        {
          image: require('@/assets/images/prints/chatbot-ia-pdf-analise-jun-2024.png'),
          title: 'Desenvolvimento de Chatbot com Análise de PDFs (Mar 2024 - Jun 2024)',
          description:
            'Desenvolvi um chatbot para WordPress capaz de analisar documentos em PDF e responder perguntas com base no conteúdo. O projeto incluiu a integração do chatbot, armazenamento de PDFs, processamento de texto para extração de informações e configuração para respostas precisas.',
          link: '',
          linguagens: ['Python', 'JavaScript'],
          tags: ['Chatbot', 'IA', 'Análise de PDF'],
        },
        {
          image: require('@/assets/images/prints/telegram-mensagens-jun-2024.png'),
          title: 'Solução para Salvar Mensagens do Telegram (Mar 2024 - Jun 2024)',
          description:
            'Implementei uma solução utilizando Docker e Python para capturar e salvar mensagens do Telegram após sua exclusão. Configurei o ambiente para que a solução possa ser executada múltiplas vezes em diferentes máquinas, permitindo fácil reutilização.',
          link: '',
          linguagens: ['Python', 'Docker'],
          tags: ['Telegram', 'Salvamento de Mensagens', 'Docker'],
        },
      ],
    },
  },
});

export default i18n;
