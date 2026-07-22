import Logo from '../assets/logo.png';

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
      { label: '事業内容', href: '#' },
      { label: '仕事内容', href: '#' },
      { label: '募集要項', href: '#' },
      { label: '応募する', href: '#', isButton: true },
    ],
  },
  business: [
    { label: 'インサイドセールス・マーケティング業務', description: '' },
    { label: '新規事業開発支援', description: '' },
    { label: 'SNS運用・Web制作・動画制作', description: '' },
    { label: '人材育成・研修', description: '' },
    { label: '採用支援', description: '' },
  ],
  requirement: {},
  apply: {},
  footer: {
    sns: [{ label: 'instagram', href: 'https://www.instagram.com/weare_ancore/?hl=ja', icon: 'simple-icons:instagram' }],
    copyright: '2026 株式会社Ancore',
  },
} as const;
