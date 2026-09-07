import Logo from '../assets/images/logo.png';
import HeroImage from '../assets/images/hero02.jpg';
import OfficePortrait from '../assets/images/about.jpg';
import CultureImage01 from '../assets/images/life-01.jpg';
import CultureImage02 from '../assets/images/life-02.jpg';
import CultureImage03 from '../assets/images/life-03.jpg';
import CultureImage04 from '../assets/images/life-04.jpg';
import CultureImage05 from '../assets/images/life-05.jpg';
import CultureImage06 from '../assets/images/life-06.jpg';
import CultureImage07 from '../assets/images/life-07.jpg';
import CultureImage08 from '../assets/images/life-08.jpg';
import CultureImage09 from '../assets/images/life-09.jpg';
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
      titleLines: ['その挑戦を、', 'カタチに。'],
      subtitleLines: [
        'やりたいことがある人も、',
        'まだ見つかっていない人も。',
      ],
      descriptionBlocks: [
        ['一歩踏み出すきっかけと、', '挑戦を実現できる環境をつくる。'],
        [
          '一人ひとりが自分の可能性を広げ、',
          '描いた未来をカタチにできる場所をつくります。',
        ],
      ],
    },
    vision: {
      label: 'Vision',
      title: '人生に、もう一度熱狂を。',
      subtitleLines: [
        '「やってみたい」を、「できる」に。',
        '「なりたい」を、現実に。',
      ],
      descriptionLines: [
        '挑戦を、挑戦だけで終わらせない。',
        '一人ひとりが自分の可能性を形にし、',
        '望む未来を実現できる社会をつくる。',
      ],
    },
    philosophy: {
      label: 'Philosophy',
      title: '一人の挑戦が、誰かの勇気になる。',
      subtitleLines: [
        '挑戦する姿は、誰かの背中を押す。',
        'そして、その一歩がまた次の挑戦につながっていく',
      ],
      conclusion:
        '私たちは、全力で挑戦することの楽しさを伝え、人生でもう一度熱狂できる場所を創り続けます。',
      image: OfficePortrait,
      imageAlt: 'Ancoreのオフィスで働くメンバー',
    },
  },
  values: {
    title: 'VALUES',
    subtitle: 'バリュー（私たちが大切にすること）',
    tagline: '挑戦が、未来をつくる。',
    items: [
      {
        number: '01',
        icon: 'mdi:run',
        title: 'まず、やってみる。',
        description: '考えるだけで終わらず、行動する。',
      },
      {
        number: '02',
        icon: 'mdi:book-open-page-variant',
        title: '学び続ける。',
        description: '変化を恐れず、自分自身をアップデートし続ける。',
      },
      {
        number: '03',
        icon: 'mdi:handshake',
        title: '人を信じる。',
        description: '今できることだけではなく、その人のこれからの可能性を見る。',
      },
      {
        number: '04',
        icon: 'mdi:summit',
        title: '最後までやり切る。',
        description: 'うまくいかない時も逃げず、決めたことに向き合う。',
      },
      {
        number: '05',
        icon: 'mdi:heart',
        title: '人を大切にする。',
        description: '仲間、出会い、支えてくれる人への感謝を忘れない。',
      },
      {
        number: '06',
        icon: 'mdi:account-group',
        title: '次の人につなぐ。',
        description: '自分が成長して終わりではなく、得た経験や学びを次の人へつなぐ。',
      },
    ],
  },
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
    eyebrow: 'LIFE AT ANCORE',
    titleLines: ['夢中になれる毎日が、', 'ここにある。'],
    leadLines: [
      '挑戦したり、笑ったり、楽しんだり。',
      '私たちの“いつもの毎日”を、少しだけ。',
    ],
    images: [
      { src: CultureImage01, alt: 'テラスで笑い合うAncoreのメンバー' },
      { src: CultureImage02, alt: 'オフィスでセルフィーを撮るメンバー' },
      { src: CultureImage03, alt: 'ラウンジで作業するメンバー' },
      { src: CultureImage04, alt: '運動会で笑顔を見せるメンバー' },
      { src: CultureImage05, alt: '食事を囲んで笑うAncoreのメンバー' },
      { src: CultureImage06, alt: 'アイスを楽しむAncoreのメンバー' },
      { src: CultureImage07, alt: 'オフィスで微笑むAncoreのメンバー' },
      { src: CultureImage08, alt: '自動販売機の前でポーズするメンバー' },
      { src: CultureImage09, alt: 'オフィスで談笑するメンバー3名' },
    ],
  },
  staff: {
    eyebrow: 'OUR PEOPLE',
    title: 'スタッフ紹介',
    message: {
      label: '代表挨拶',
      paragraphs: [
        '私自身、最初からやりたいことが明確だったわけでも、特別な力があったわけでもありません。',
        'さまざまな仕事や挑戦を経験する中で、環境やきっかけ一つで、人は想像以上に変われることを実感してきました。',
        'だからこそAncoreは、「やってみたい」という気持ちを、可能性のままで終わらせない会社でありたいと思っています。',
        '仕事は、ただ生活のためにするものではなく、自分の成長や可能性にワクワクできるもの。\nそんな「仕事って楽しい」と思える人を、一人でも多く増やしていきたい。',
        'そして、目の前の一人ひとりの挑戦に向き合い、その挑戦をカタチにしていく。',
        '一人の挑戦が、また誰かの一歩につながっていく。\nそんな未来を、Ancoreからつくっていきます。',
      ],
      signOff: {
        title: '株式会社Ancore代表取締役',
        name: '伊藤珠伽',
      },
    },
    members: [
      {
        name: '伊藤珠伽',
        role: '代表',
        image: StaffImage03,
        imageAlt: '代表 伊藤珠伽',
      },
      {
        name: '瀬戸満乃理',
        role: 'Team Manager',
        image: StaffImage01,
        imageAlt: 'Team Manager 瀬戸満乃理',
      },
      {
        name: '長﨑一真',
        role: 'Field Manager',
        image: StaffImage02,
        imageAlt: 'Field Manager 長﨑一真',
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
    titleLines: ['ここから、', 'あなたの挑戦が', '始まる。'],
    subtitleLines: [
      'やりたいことがある人も、まだ見つかっていない人も。',
      'まずは、ここから一歩踏み出してみませんか。',
    ],
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
