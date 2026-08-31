import Logo from '../assets/images/logo.png';
import HeroImage from '../assets/images/item (1).jpg';
import OfficePortrait from '../assets/images/item (10).jpg';
import CultureImage02 from '../assets/images/item (2).jpg';
import CultureImage03 from '../assets/images/item (3).jpg';
import CultureImage04 from '../assets/images/item (4).jpg';
import CultureImage05 from '../assets/images/item (5).jpg';
import CultureImage06 from '../assets/images/item (6).jpg';
import CultureImage07 from '../assets/images/item (7).jpg';
import CultureImage08 from '../assets/images/item (8).jpg';
import CultureImage09 from '../assets/images/item (9).jpg';
import StaffImage01 from '../assets/images/staff/staff01.jpg';
import StaffImage02 from '../assets/images/staff/staff02.jpg';
import StaffImage03 from '../assets/images/staff/staff03.jpg';
import StaffGallery01 from '../assets/images/staff/gallery-01.jpg';
import StaffGallery02 from '../assets/images/staff/gallery-02.jpg';
import StaffGallery03 from '../assets/images/staff/gallery-03.jpg';
import StaffGallery04 from '../assets/images/staff/gallery-04.jpg';
import StaffGallery05 from '../assets/images/staff/gallery-05.jpg';
import StaffGallery06 from '../assets/images/staff/gallery-06.jpg';
import StaffGallery07 from '../assets/images/staff/gallery-07.jpg';
import StaffGallery08 from '../assets/images/staff/gallery-08.jpg';
import StaffGallery09 from '../assets/images/staff/gallery-09.jpg';
import StaffGallery10 from '../assets/images/staff/gallery-10.jpg';

export const siteContent = {
  site: {
    title: '株式会社Ancore 採用サイト｜人生に、もう一度熱狂を。',
    description:
      '株式会社Ancoreの採用サイト。もう一度、本気になれる瞬間を創る。全力で挑戦することの楽しさを伝え、人生でもう一度熱狂できる場所を創り続けます。',
    ogImage: '/ogp.png',
  },
  header: {
    logo: {
      src: Logo,
      alt: '株式会社Ancore',
    },
    nav: [
      { label: '私たちについて', href: '#about' },
      { label: '大切にすること', href: '#values' },
      { label: '事業内容', href: '#business' },
      { label: 'Ancoreの日常', href: '#culture' },
      { label: 'メンバー紹介', href: '#staff' },
      { label: '会社情報', href: '#company' },
      { label: 'お問い合わせ', href: '#contact', isButton: true },
    ],
  },
  hero: {
    image: HeroImage,
    imageAlt: 'メンバーの成果を称え合うAncoreの様子',
    eyebrow: 'ANCORE RECRUITING',
    titleLines: ['人生に、もう一度', '熱狂を。'],
    lead: '期待を超えた瞬間、歓声が生まれる。',
    description:
      'アンコールが響くステージのように、もう一度、本気になれる場所へ。',
  },
  identity: {
    mission: {
      label: 'Mission',
      title: 'もう一度、本気になれる瞬間を創る。',
    },
    vision: {
      label: 'Vision',
      title: '人生に、もう一度熱狂を。',
    },
    philosophy: {
      label: 'Philosophy',
      title: '本気で挑戦することの、すべてを。',
      lines: [
        '本気で挑戦するから、悔しい。',
        '本気で挑戦するから、嬉しい。',
        '本気で挑戦するから、仲間との絆が生まれる。',
      ],
      conclusion:
        '私たちは、全力で挑戦することの楽しさを伝え、人生でもう一度熱狂できる場所を創り続けます。',
      image: OfficePortrait,
      imageAlt: 'Ancoreのオフィスで働くメンバー',
    },
  },
  values: [
    {
      number: '01',
      name: 'Challenge',
      title: '挑戦する選択を。',
      description: '挑戦しない後悔より、挑戦する選択を。',
    },
    {
      number: '02',
      name: 'Growth',
      title: '自分を超え続ける。',
      description: '昨日の自分を超え続ける。',
    },
    {
      number: '03',
      name: 'Trust',
      title: '信頼を何より大切に。',
      description: '仲間・お客様との信頼を何より大切にする。',
    },
    {
      number: '04',
      name: 'Gratitude',
      title: '期待を超える。',
      description: '感謝を忘れず、期待を超える。',
    },
    {
      number: '05',
      name: 'Encore',
      title: '何度でも挑戦する。',
      description: '一度きりで終わらせない。失敗しても、何度でも挑戦する。',
    },
  ],
  business: [
    {
      number: '01',
      title: 'インサイドセールス・\nマーケティング業務',
    },
    {
      number: '02',
      title: '新規事業開発支援',
    },
    {
      number: '03',
      title: 'SNS運用・Web制作・\n動画制作',
    },
    {
      number: '04',
      title: '人材育成・研修',
    },
    {
      number: '05',
      title: '採用支援',
    },
  ],
  culture: {
    images: [
      { src: CultureImage02, alt: 'Ancoreのメンバー2名' },
      { src: CultureImage03, alt: 'オフィスで会話を交わすメンバー' },
      { src: CultureImage04, alt: '笑顔で話すAncoreのメンバー' },
      { src: CultureImage05, alt: 'パソコンを囲んで仕事をするメンバー' },
      { src: CultureImage06, alt: '窓辺で街を眺めるAncoreのメンバー' },
      { src: CultureImage07, alt: '海辺で過ごすAncoreのメンバー' },
      { src: CultureImage08, alt: 'オフィスで過ごすAncoreのメンバー3名' },
      { src: CultureImage09, alt: 'ボートで休日を過ごすAncoreのメンバー' },
    ],
  },
  staff: {
    eyebrow: 'OUR PEOPLE',
    title: 'スタッフ紹介',
    members: [
      {
        name: '伊藤珠伽',
        role: '代表',
        image: StaffImage03,
        imageAlt: '代表 伊藤珠伽',
      },
      {
        name: '瀬戸満乃理',
        image: StaffImage01,
        imageAlt: '瀬戸満乃理',
      },
      {
        name: '長﨑一真',
        image: StaffImage02,
        imageAlt: '長﨑一真',
      },
    ],
    gallery: [
      StaffGallery01,
      StaffGallery02,
      StaffGallery03,
      StaffGallery04,
      StaffGallery05,
      StaffGallery06,
      StaffGallery07,
      StaffGallery08,
      StaffGallery09,
      StaffGallery10,
    ],
  },
  company: {
    name: '株式会社Ancore',
    details: [
      { label: '会社名', value: '株式会社Ancore' },
      { label: '電話番号', value: '080-4854-5503', href: 'tel:08048545503' },
      { label: '住所', value: '東京都板橋区中丸町26−1' },
      {
        label: 'アクセス',
        value: '本部は池袋駅から徒歩15分\nオフィスは池袋駅から徒歩10分',
      },
      { label: '営業時間', value: '9:00〜20:00（平日・土日祝）' },
      { label: '定休日', value: 'なし' },
    ],
  },
  entry: {
    eyebrow: 'JOIN OUR STAGE',
    titleLines: ['次の歓声を、', 'ともにつくろう。'],
    description:
      'Ancoreの考え方に共感し、もっと知りたいと思った方は、お電話でご連絡ください。Instagramでは日々の様子をご覧いただけます。',
    phone: {
      label: '電話で採用について聞く',
      display: '080-4854-5503',
      href: 'tel:08048545503',
      hours: '受付時間 9:00〜20:00',
    },
    instagram: {
      label: 'Instagramを見る',
      href: 'https://www.instagram.com/weare_ancore/?hl=ja',
    },
  },
  contact: {
    eyebrow: 'CONTACT',
    title: 'お問い合わせ',
    inquiryTypes: ['パートナー募集', '採用応募', 'その他'],
    positions: [
      'SNS運用',
      '動画編集',
      'Webデザイン',
      '人事・採用',
      'インサイドセールス',
      'その他',
    ],
    occupations: [
      '会社員',
      'アルバイト・パート',
      '学生',
      'フリーランス',
      'その他',
    ],
    conditions: [
      '学歴・経験不問',
      '未経験歓迎',
      '長期勤務が可能な方',
      '新しいことに挑戦したい方',
      '経験よりも意欲や人柄を重視しています',
    ],
    applicationFlow:
      'ご応募内容を確認のうえ、選考を通過された方には、近日中に採用担当者よりご連絡いたします。',
    submitLabel: '送信する',
  },
  footer: {
    logo: {
      src: Logo,
      alt: '株式会社Ancore',
    },
    instagram: 'https://www.instagram.com/weare_ancore/?hl=ja',
    copyright: '2026 株式会社Ancore',
  },
} as const;
