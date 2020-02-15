module.exports = {
  siteMetadata: {
    title: `Theoatrix.Net`,
    siteUrl: `https://theoatrix.net`,
    description: `OldSchool RuneScape Guides`,
    topics: ["theo"],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Example',
        path: '/page'
      },
    ],
    footerMenu: [
      {
        name: 'Example',
        path: '/page'
      },
    ],
    search: true,
    author: {
      name: `Theoatrix`,
      description: `I'm <strong>nehalem</strong>, a Gatsby theme by 
        <a href="https://nehalist.io" rel="noopener" target="_blank">nehalist.io</a>. If you like what you see feel free to give a 
        <a href="https://github.com/nehalist/gatsby-theme-nehalem" rel="noopener" target="_blank">star on GitHub!</a>`,
      social: {
        youtube: `https://youtube.com/theoatrix`,
        twitter: `https://twitter.com/theoatrix`,
        linkedin: ``,
        instagram: `instagram.com/theoatrix.osrs`,
        facebook: `facebook.com/theoatrix`,
        github: ``,
        twitch: `twitch.tv/theoatrix_osrs`
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      }
    }
  ]
};
