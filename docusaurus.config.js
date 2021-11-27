// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mod Playbook | Denver Devs",
  tagline: "How to moderate the Denver Devs community",
  url: "https://mod-playbook.denverdevs.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Denver-Devs", // Usually your GitHub org/user name.
  projectName: "mod-playbook", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/denver-devs/mod-playbook/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          path: "updates",
          routeBasePath: "updates",
          // Please change this to your repo.
          editUrl: "https://github.com/denver-devs/mod-playbook/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Denver Devs - Mod Playbook",
        logo: {
          alt: "Denver Devs",
          src: "img/DD-Icon.svg",
        },
        items: [
          {
            type: "doc",
            docId: "bannable-offenses",
            position: "left",
            label: "Docs",
          },
          { to: "/updates", label: "Updates", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              // {
              //   label: "Tutorial",
              //   to: "/docs/intro",
              // },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/denverdevs",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/denverdevs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Updates",
                to: "/updates",
              },
              {
                label: "GitHub",
                href: "https://github.com/Denver-Devs/mod-playbook",
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
