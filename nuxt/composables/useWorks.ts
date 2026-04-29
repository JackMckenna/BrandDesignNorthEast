// composables/useWorks.ts
export type Work = {
  id: string;
  client: string;
  tag: string;
  year: number;
  summary: string;
  stripes: [string, string, string];
};

export const WORKS: Work[] = [
  { id: 'orbit',   client: 'Orbit Coffee Roasters', tag: 'Web + Brand',     year: 2026, summary: 'Identity, site, and packaging for a Newcastle micro-roastery.',                stripes: ['#ff7a3d', '#080810', '#f4f1de'] },
  { id: 'tide',    client: 'Tide Surf School',      tag: 'Brand + Social',  year: 2026, summary: 'A new brand and 90-day social launch for a surf school on the Northumberland coast.', stripes: ['#00d9ff', '#0a2a40', '#f0e8d8'] },
  { id: 'foundry', client: 'Foundry Strength Co.',  tag: 'Web + Identity',  year: 2025, summary: 'Booking platform and visual system for a strength gym chain.',                  stripes: ['#ff0080', '#1a1a24', '#e8e8f0'] },
  { id: 'larch',   client: 'Larch & Loom',          tag: 'Brand + Print',   year: 2025, summary: 'Sustainable textile studio identity, lookbook, and Shopify storefront.',         stripes: ['#2d4a2b', '#d8c8a8', '#080810'] },
  { id: 'reel',    client: 'Reel Talk Podcast',     tag: 'Social + Content',year: 2025, summary: 'Cover art system, episode templates, and a six-month content calendar.',         stripes: ['#ffcc00', '#080810', '#ff0080'] },
  { id: 'aurora',  client: 'Aurora Climbing',       tag: 'Web Dev',         year: 2025, summary: 'Headless e-comm rebuild and route-database tooling.',                            stripes: ['#00ff88', '#080810', '#1a1a24'] },
];

export const useWorks = () => WORKS;
export const findWork = (id: string) => WORKS.find((w) => w.id === id);
