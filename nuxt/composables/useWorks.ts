// composables/useWorks.ts
export type Work = {
  id: string;
  client: string;
  tag: string;
  year: number;
  summary: string;
  stripes: [string, string, string];
  url?: string;
  image?: string;
  logo?: string;
  engagement?: string;
  deliverables?: string;
  outcome?: string;
};

export const WORKS: Work[] = [
  {
    id: 'menstrual-rage',
    client: 'Menstrual Rage',
    tag: 'Brand + Logo + Graphic + Content',
    year: 2026,
    summary: 'Identity rework, new logo, and a content system for an unflinching new-work theatre company.',
    stripes: ['#c8001e', '#080810', '#f0e8e8'],
    image: '/works/menstrualrage.png',
    logo: '/works/MenstrualRageLogoRevamp.avif',
    engagement: '5 weeks',
    deliverables: '16 assets',
    outcome: '+62% social reach',
  },
  {
    id: 'rose-casino',
    client: 'Rose Casino',
    tag: 'Casino Web + Web Design',
    year: 2026,
    summary: 'Premium UK casino — full design system, lobby UI, and game-tile architecture for a slots-first audience.',
    stripes: ['#e63a6a', '#1a0a14', '#f5d8c8'],
    url: 'https://www.rosecasino.com/',
    image: '/works/rose-casino.png',
    engagement: '8 weeks',
    deliverables: '24 assets',
    outcome: '+52% sign-ups',
  },
  {
    id: 'ivy-casino',
    client: 'Ivy Casino',
    tag: 'Web Design + Website Development',
    year: 2026,
    summary: 'Slot-first casino brand and front-end build, with a custom lobby, search, and onboarding flow.',
    stripes: ['#2d8a5a', '#0a1a14', '#f0e8c8'],
    url: 'https://www.ivycasino.com/',
    image: '/works/ivy-casino.png',
    engagement: '6 weeks',
    deliverables: '18 assets',
    outcome: '+34% retention',
  },
  {
    id: '666-casino',
    client: '666 Casino',
    tag: 'Web Design + Art Direction',
    year: 2025,
    summary: 'Stylised dark-mode casino — bespoke art direction and end-to-end front-end build.',
    stripes: ['#c8101e', '#080810', '#f0c060'],
    url: 'https://www.666casino.com/',
    image: '/works/666-casino.png',
    engagement: '10 weeks',
    deliverables: '32 assets',
    outcome: '+41% time-on-site',
  },
  {
    id: 'rightbet',
    client: 'RightBet',
    tag: 'Sportsbook + Web Design',
    year: 2025,
    summary: 'Sportsbook design and development — odds tables, in-play markets, account UI.',
    stripes: ['#0066cc', '#0a1428', '#f0f0f5'],
    url: 'https://www.rightbet.com/',
    image: '/works/rightbet.png',
    engagement: '12 weeks',
    deliverables: '48 components',
    outcome: '+28% bet placement',
  },
  {
    id: 'red-casino',
    client: 'Red Casino',
    tag: 'Casino Web + Web Design',
    year: 2025,
    summary: 'Branded casino front-end with lobby, search, jackpots, and live-casino verticals.',
    stripes: ['#d8202a', '#1a0a0a', '#f0e8e8'],
    url: 'https://www.redcasino.com/',
    image: '/works/red-casino.png',
    engagement: '7 weeks',
    deliverables: '20 assets',
    outcome: '+37% slot plays',
  },
  {
    id: 'bet442',
    client: 'Bet442',
    tag: 'Casino + Web Design',
    year: 2025,
    summary: 'Casino vertical for an established UK sportsbook — design system through to deployment.',
    stripes: ['#003366', '#ffcc00', '#0a1428'],
    url: 'https://www.bet442.co.uk/casino/',
    image: '/works/bet442.png',
    engagement: '9 weeks',
    deliverables: '26 assets',
    outcome: '+44% deposits',
  },
  
];

export const useWorks = () => WORKS;
export const findWork = (id: string) => WORKS.find((w) => w.id === id);
