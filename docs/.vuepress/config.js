module.exports = {
    title: 'Vuepress',
    // Configurações relativas ao Tema
    themeConfig: {
        // Configuração de uma navbar
        nav: [
            {text: 'Home', link: '/'},
            // para funcionarem você precisa criar os seguintes arquivos:
            // docs/guide/README.md
            // docs/api/README.md
            {text: 'Guide', link: '/guide/'},
            {text: 'API', link: '/api/'},
            {text: 'External Link', link: 'https://github.com/vmdev10'}
        ],
        // Configuração do sidebar
        sidebar: [
            '/',
            {
              title: 'Guide',
              children: ['/guide/introduction-guide', '/guide/getting-started'],
            },
            {
              title: 'API',
              children: ['/api/introduction-api', '/api/details-api'],
            },
          ],
    }
}