/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Nhan Luong - Thoughts and Shares about Software Engineering',
  author: 'Nhan Luong',
  headerTitle: 'Nhan Luong',
  description: 'Thoughts and logs of a software engineer',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://nhanluongoe.me',
  siteRepo: 'https://github.com/nhanluongoe/blog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'nhanlt18@gmail.com',
  github: 'https://github.com/nhanluongoe',
  linkedin: 'https://www.linkedin.com/nhanlt18',
  locale: 'en-US',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
  utterances: 'nhanluongoe/blog', // Github repository for Utterances
}

module.exports = siteMetadata
