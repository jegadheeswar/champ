// cloudmasa.config.js
import {themes as prismThemes} from 'prism-react-renderer';
const config = {
  title: 'CloudMaSa',
  tagline: 'All-in-One DevOps Automation Platform',
  favicon: 'img/favicon.ico',

  // Local dev URL
  url: 'http://localhost:3000',
  baseUrl: '/',

  // Handle broken links
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    ({
      // 🌑 Dark mode by default
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // 🧭 Navbar with your logo
      navbar: {
        title: 'CloudMaSa',
        logo: {
          alt: 'CloudMaSa Logo',
          src: 'img/app-logo.png', 
          width: 36,
          height: 36,
          style: { marginRight: '0.5rem' },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation', 
          },
          {
            href: 'https://github.com/your-username/cloudmasa',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 📜 Footer with logo + copyright
      footer: {
        style: 'dark',
        logo: {
          alt: 'CloudMaSa',
          src: 'img/app-logo.png',
          width: 60,
          height: 60,
          href: '/',
        },
        copyright: `Copyright © ${new Date().getFullYear()} CloudMaSa. All rights reserved.`,
      },

      // 💻 Code syntax highlighting (Dracula = dark & clean)
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },

      // 🔠 Beautiful, formal typography
      headTags: [
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: 'anonymous',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700&family=Fira+Code&display=swap',
          },
        },
      ],
    }),
};

export default config;