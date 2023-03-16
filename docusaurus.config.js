// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Energy Materials Lab',
  tagline: 'Welcome to Georgia Tech\'s Energy Materials Lab',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://baena.gatech.edu',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eml-gatech', // Usually your GitHub org/user name.
  projectName: 'eml-gatech.github.io', // Usually your repo name.
  deploymentBranch: 'deployment',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Energy Materials Lab',
        logo: {
          alt: 'Energy Materials Lab',
          src: 'img/gt_logos/GTOneLine_RGB.svg',
          srcDark: 'img/gt_logos/GTOneLine_TechGoldandWhite.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'research',
            position: 'right',
            label: 'Research',
          },
          {
            type: 'doc',
            docId: 'People/team',
            position: 'right',
            label: 'People',
          },
          {
            type: 'doc',
            docId: 'publications',
            position: 'right',
            label: 'Publications',
          },
          {
            type: 'doc',
            docId: 'teaching',
            position: 'right',
            label: 'Teaching',
          },
          {
            type: 'doc',
            docId: 'lab',
            position: 'right',
            label: 'Our Lab',
          },
          {
            type: 'doc',
            docId: 'contact',
            position: 'right',
            label: 'Contact',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Energy Materials Lab at Georgia Tech`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        },
      }
    }),
};

module.exports = config;
