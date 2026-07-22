import Logo from '../assets/logo.png'

export const siteContent = {
  site: {
    title: '株式会社Ancore',
    description: '株式会社Ancore',
  },
  header: {
    logo: {
      src: Logo,
      alt: '株式会社Ancoreロゴ',
    },
    nav: [
      { label: '求人一覧', href: '#' },
      { label: '仕事内容', href: '#' },
      { label: '働く環境', href: '#' },
      { label: '募集要項', href: '#' },
      { label: '応募する', href: '#', isButton: true },
    ],
  },
  footer: {
    copyright: '2026 株式会社Ancore',
  }
} as const;