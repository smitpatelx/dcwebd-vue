module.exports = {
  base: '/docs/',
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public/'
      }
    }
  },
  title: 'PhpPress',
  description: 'Learn php the fun way',
  themeConfig: {
    // logo: '/dcicon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Assignments', link: '/assignments/' },
      { text: 'Main Website', link: '/../' },
      { text: 'Developer', link: 'https://netdevv.com' }
    ],
    sidebar: [
      ['/assignments/lab1', 'L-1 Basic XHTML Pages'],
      ['/assignments/lab2', 'L-2 Working with HTML Tables'],
      ['/assignments/lab3', 'L-3 Formatting and Layout with Styles'],
      ['/assignments/lab4', 'L-4 PHP Chapter Files from Textbook'],
      ['/assignments/lab5', 'L-5 Basic PHP Scripting'],
      ['/assignments/lab6', 'L-6 Self-referring Forms w/ Data Validation']
    ],
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true, // Boolean | Object, default to undefined.
      // If set to true, the default text config will be:
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    }
  }
};
