import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'USThing Docs',
  tagline: 'Guides and resources for the student-driven all-in-one HKUST app.',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.usthing.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'USThing',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/usthing-devices.png',
    metadata: [
      {name: 'theme-color', content: '#003366'},
      {name: 'apple-mobile-web-app-title', content: 'USThing Docs'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'USThing Docs',
      logo: {
        alt: 'USThing',
        src: 'img/usthing-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dashboard',
        },
        {
          href: 'https://usthing.xyz',
          label: 'USThing',
          position: 'right',
        },
        {
          href: 'https://app.usthing.xyz',
          label: 'Open dashboard',
          position: 'right',
          className: 'navbar__dashboard-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Dashboard',
              to: '/docs/dashboard/timetable-planner',
            },
          ],
        },
        {
          title: 'USThing',
          items: [
            {
              label: 'Discover USThing',
              href: 'https://usthing.xyz',
            },
            {
              label: 'USThing Dashboard',
              href: 'https://app.usthing.xyz',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/hkust.usthing/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/usthing',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} USThing. Built by students, for students.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
