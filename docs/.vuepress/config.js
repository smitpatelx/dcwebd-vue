module.exports = {
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh"
    },
  }
  },
  extendMarkdown(md) {
    // md.use(require('markdown-it-task-lists'));
  },
  base: '/docs/',
  dest: './public/docs/',
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public/'
      }
    }
  },
  title: 'PhpPress',
  description: 'Learn php the fun way',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/dc_logo.png' }],
    ['link', { rel: 'mask-icon', href: '/assets/dc_logo.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/dc_logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    // logo: '/dcicon.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Assignments',
        link: '/assignments/'
      },
      {
        text: 'Softwares',
        link: '/softwares/'
      },
      {
        text: 'Main Site',
        link: 'https://dcwebd.netlify.com/'
      },
      {
        text: 'Developer',
        link: 'https://netdevv.com'
      }
    ],
    sidebar: {
      '/assignments/': [
        ['/assignments/lab1', 'L-1 Basic XHTML Pages'],
        ['/assignments/lab2', 'L-2 Working with HTML Tables'],
        ['/assignments/lab3', 'L-3 Formatting and Layout with Styles'],
        ['/assignments/lab4', 'L-4 PHP Chapter Files from Textbook'],
        ['/assignments/lab5', 'L-5 Basic PHP Scripting'],
        ['/assignments/lab6', 'L-6 Self-referring Forms w/ Data Validation'],
        ['/assignments/lab7', 'L-7 Database Intro']
      ],
      '/softwares/': [
        ['/softwares/videos', 'Video Guide'],
        ['/softwares/apache', 'Apache Installation'],
        ['/softwares/php', 'Php Installation']
      ]
    },
    lastUpdated: 'Last Updated'
  }
};