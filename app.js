'use strict';
/* =====================================================================
   apoorvkhanna.com — a Windows XP desktop with a Winamp in the corner.
   Everything configurable lives in CONFIG at the top.
   ===================================================================== */

const TERM_LIMIT = 5;
const CONFIG = {
  name: 'Apoorv Khanna',
  email: 'apoorv@vaaya.ai',
  socials: {
    github:   'https://github.com/ApoorvKhanna',
    x:        'https://x.com/token_wala',
    linkedin: 'https://www.linkedin.com/in/apoorvkhanna',
    medium:   'https://medium.com/@apoorvkhanna',
    instagram:'https://www.instagram.com/apoorvkhanna/',
  },
  calendar: 'https://cal.com/apoorv-vaaya/30min',
  siteRepo: 'https://github.com/ApoorvKhanna/apoorvkhanna.com',
  wallpaperInterval: 45_000,
};

// Pocketamp downloads. Bump `version` and the sizes when a new release ships;
// release assets are always named Pocketamp-<version>-<arch>.dmg.
const POCKETAMP = {
  version: '1.1.0',
  site: 'https://apoorvkhanna.github.io/pocketamp/',
  repo: 'https://github.com/ApoorvKhanna/pocketamp',
  builds: [
    { arch: 'arm64', label: 'Apple silicon', note: 'M1 and later', size: '117 MB' },
    { arch: 'x64',   label: 'Intel',         note: 'Intel Macs',  size: '119 MB' },
  ],
  dmg(b) { return `${this.repo}/releases/download/v${this.version}/Pocketamp-${this.version}-${b.arch}.dmg`; },
};

const PROJECTS = [
  {
    id: 'vaaya', name: 'Vaaya', url: 'https://vaaya.ai', icon: 'vaaya',
    tag: 'Credit for your agents.',
    body: `<p>Vaaya is credit for your agents. You top up one balance; your agents spend it on whatever a job needs — generating images, video and audio; searching, scraping and crawling the web; parsing documents; running code in sandboxes; driving a browser; sending email; making phone calls; finding and enriching leads; pulling live data past their training cutoff.</p>
      <p>No API keys to hand out, no account to open per service, no subscription to any of them. They ask what a task needs, they get the exact call, they run it, you pay for that call.</p>
      <ul><li>Works from Claude Code, Codex, ChatGPT and any MCP client</li><li>Recipes for full GTM loops, product demos and market research</li><li>One bill, every service</li></ul>`,
  },
  {
    id: 'claudepoker', name: 'ClaudePoker', url: 'https://claudepoker.com', icon: 'claudepoker',
    tag: 'Bring your agent and your strategies to the table.',
    body: `<p>A poker room where AI agents play each other. Register your agent over the API, ship a strategy, and watch it grind Texas Hold'em against everyone else's.</p>
      <ul><li>Agent-first API — no browser, no clicks, just decisions</li><li>Real hand histories, leaderboards, and tables that never close</li><li>Bring Claude, GPT, a hand-written bot, or your own model</li></ul>`,
  },
  {
    id: 'askpaxo', name: 'AskPaxo', url: 'https://askpaxo.com', icon: 'askpaxo',
    tag: 'Find a place to live without opening 14 tabs.',
    body: `<p>Paxo scrapes every rental listing site for a city, dedupes the same flat posted five times, and ranks what's left the way a local would — by neighbourhood, commute and whether the photos are lying.</p>
      <ul><li>Bangalore and Bombay, with the Bay Area for short-term stays</li><li>Fresh listings every few hours, labelled by locality</li><li>Ask it in plain English</li></ul>`,
  },
  {
    id: 'saul', name: 'Better Call Saul', url: 'https://better-call-saul.fly.dev/', icon: 'saul',
    tag: 'An AI business consultant, on a voice call.',
    body: `<p>Saul interviews you about your business the way a good consultant would — specifics, numbers, what you already tried — answers the one question you came with from a library of consulting playbooks, then builds a slide deck from the conversation and walks you through it on screen, live, before he hangs up.</p>
      <ul><li>Three movements: questions, answers, the boardroom</li><li>Won't let you go without a commitments slide — who does what, by when</li><li>Voice runs on Dograh, the open-source alternative to Vapi; the rest is dependency-free Node</li></ul>`,
  },
  {
    id: 'crayon', name: 'Crayon', url: 'https://crayon-board.fly.dev/board?u=vaaya.ai', icon: 'crayon',
    tag: 'Paste a URL. Get your market sketched on one board.',
    body: `<p>Give Crayon your product's URL and it draws your market on a single hand-drawn board: live <b>threads</b> on X, Reddit and LinkedIn you can jump into, ~30 <b>people</b> worth reaching with a profile to reach them on, and <b>signals</b> — competitor moves, partnership openings, fundraising news.</p>
      <ul><li>The link opens the board for vaaya.ai</li><li>Search, social and news data via Vaaya (Exa, Tavily, Apify under the hood)</li><li>Zero-dependency Node, crayon-on-paper UI</li></ul>`,
  },
];

const PAINTINGS = [
  { file: 'starry-night',       title: 'The Starry Night',              artist: 'Vincent van Gogh',       year: 1889 },
  { file: 'great-wave',         title: 'The Great Wave off Kanagawa',   artist: 'Katsushika Hokusai',     year: 1831 },
  { file: 'pearl-earring',      title: 'Girl with a Pearl Earring',     artist: 'Johannes Vermeer',       year: 1665 },
  { file: 'wanderer',           title: 'Wanderer above the Sea of Fog', artist: 'Caspar David Friedrich', year: 1818 },
  { file: 'birth-of-venus',     title: 'The Birth of Venus',            artist: 'Sandro Botticelli',      year: 1485 },
  { file: 'the-kiss',           title: 'The Kiss',                      artist: 'Gustav Klimt',           year: 1908 },
  { file: 'hunters-in-snow',    title: 'The Hunters in the Snow',       artist: 'Pieter Bruegel the Elder', year: 1565 },
  { file: 'fighting-temeraire', title: 'The Fighting Temeraire',        artist: 'J. M. W. Turner',        year: 1839 },
  { file: 'wheatfield-crows',   title: 'Wheatfield with Crows',         artist: 'Vincent van Gogh',       year: 1890 },
  { file: 'night-watch',        title: 'The Night Watch',               artist: 'Rembrandt',              year: 1642 },
  { file: 'ninth-wave',         title: 'The Ninth Wave',                artist: 'Ivan Aivazovsky',        year: 1850 },
];

// YouTube IDs verified via oEmbed on 2026-09-07. Unplayable/embed-blocked tracks are skipped automatically.
const PLAYLIST = [
  { artist: 'Nirvana',                   title: 'Smells Like Teen Spirit',   year: 1991, yt: 'hTWKbfoikeg', dur: 278 },
  { artist: 'Pearl Jam',                 title: 'Alive',                     year: 1991, yt: 'qM0zINtulhM', dur: 340 },
  { artist: 'Radiohead',                 title: 'Creep',                     year: 1992, yt: 'XFkzRNyygfk', dur: 238 },
  { artist: 'Red Hot Chili Peppers',     title: 'Under the Bridge',          year: 1991, yt: 'GLvohMXgcBo', dur: 273 },
  { artist: 'Soundgarden',               title: 'Black Hole Sun',            year: 1994, yt: '3mbBbFH9fAg', dur: 281 },
  { artist: 'Oasis',                     title: 'Wonderwall',                year: 1995, yt: 'bx1Bh8ZvH84', dur: 276 },
  { artist: 'Green Day',                 title: 'Basket Case',               year: 1994, yt: 'NUTGr5t3MoY', dur: 191 },
  { artist: 'The Smashing Pumpkins',     title: '1979',                      year: 1995, yt: '4aeETEoNfOg', dur: 267 },
  { artist: 'Foo Fighters',              title: 'Everlong',                  year: 1997, yt: 'eBG7P-K-r1Y', dur: 260 },
  { artist: 'Alice in Chains',           title: 'Man in the Box',            year: 1990, yt: 'TAqZb52sgpU', dur: 274 },
  { artist: 'Weezer',                    title: 'Buddy Holly',               year: 1994, yt: 'kemivUKb4f4', dur: 160 },
  { artist: 'Rage Against the Machine',  title: 'Killing in the Name',       year: 1992, yt: 'bWXazVhlyxQ', dur: 321 },
  { artist: 'Blur',                      title: 'Song 2',                    year: 1997, yt: 'SSbBvKaM6sk', dur: 123 },
  { artist: 'Metallica',                 title: 'Enter Sandman',             year: 1991, yt: 'CD-E-LDc384', dur: 331 },
  { artist: 'The Cranberries',           title: 'Zombie',                    year: 1994, yt: '6Ejga4kJUts', dur: 310 },
  { artist: 'Beck',                      title: 'Loser',                     year: 1994, yt: 'YgSPaXgAdzE', dur: 236 },
  { artist: 'Stone Temple Pilots',       title: 'Interstate Love Song',      year: 1994, yt: 'yjJL9DGU7Gg', dur: 183 },
  { artist: "Guns N' Roses",             title: 'November Rain',             year: 1991, yt: '8SbUC-UaAxE', dur: 556 },
];

/* =========================== ICONS (inline SVG) =========================== */
const ICONS = {
  vaaya: `<svg viewBox="0 0 48 48"><defs><linearGradient id="gv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b6cff"/><stop offset="1" stop-color="#2a1b8f"/></linearGradient></defs><rect x="4" y="4" width="40" height="40" rx="10" fill="url(#gv)"/><path d="M14 15l10 19 10-19" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="37" r="2.6" fill="#ffd166"/></svg>`,
  claudepoker: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#c8102e"/><circle cx="24" cy="24" r="19" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="7.5 7.4"/><circle cx="24" cy="24" r="13.5" fill="#fff"/><path d="M24 13.5c-4 6-8.5 8-8.5 12.5a4.6 4.6 0 0 0 7.6 3.3c-.3 2.2-1 3.6-2.1 4.4h6c-1.1-.8-1.8-2.2-2.1-4.4a4.6 4.6 0 0 0 7.6-3.3c0-4.5-4.5-6.5-8.5-12.5z" fill="#111"/></svg>`,
  askpaxo: `<svg viewBox="0 0 48 48"><path d="M6 23L24 8l18 15" fill="none" stroke="#1d4ed8" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/><path d="M11 21v19h26V21" fill="#e6efff" stroke="#1d4ed8" stroke-width="3"/><rect x="20" y="27" width="8" height="13" fill="#1d4ed8"/><circle cx="34" cy="33" r="7" fill="#fff" stroke="#f59e0b" stroke-width="3"/><path d="M39 38l6 6" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/></svg>`,
  about: `<svg viewBox="0 0 48 48"><defs><clipPath id="gab"><circle cx="24" cy="24" r="21"/></clipPath></defs><circle cx="24" cy="24" r="22" fill="#fff"/><image href="photo.jpg" x="3" y="3" width="42" height="42" clip-path="url(#gab)" preserveAspectRatio="xMidYMid slice"/><circle cx="24" cy="24" r="21.5" fill="none" stroke="#fff" stroke-width="1.5"/></svg>`,
  github: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#fff"/><g transform="translate(9 9) scale(1.25)"><path fill="#1b1f23" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></g></svg>`,
  x: `<svg viewBox="0 0 48 48"><rect x="4" y="4" width="40" height="40" rx="9" fill="#000"/><path fill="#fff" d="M28.6 13h4.3l-9.4 10.7L34.5 38h-8.6l-6.8-8.8-7.7 8.8h-4.3l10-11.5L6.5 13h8.8l6.1 8.1zm-1.5 22.4h2.4L14.2 15.5h-2.6z"/></svg>`,
  linkedin: `<svg viewBox="0 0 48 48"><rect x="4" y="4" width="40" height="40" rx="6" fill="#0a66c2"/><text x="24" y="33" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="24" fill="#fff">in</text></svg>`,
  email: `<svg viewBox="0 0 48 48"><rect x="4" y="11" width="40" height="27" rx="3" fill="#fff" stroke="#6b7ea8" stroke-width="2"/><path d="M5 13l19 14 19-14" fill="#e9eefb" stroke="#6b7ea8" stroke-width="2" stroke-linejoin="round"/><path d="M5 37l14-12M43 37L29 25" fill="none" stroke="#6b7ea8" stroke-width="2"/></svg>`,
  winamp: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#f5a623" stroke="#8a5300" stroke-width="1.5"/><path d="M27 6l-12 21h8l-3 15 12-22h-8z" fill="#111"/></svg>`,
  pocketamp: `<svg viewBox="0 0 48 48"><rect x="12" y="2" width="24" height="44" rx="4" fill="#f7f7f5" stroke="#9a9a94" stroke-width="1.5"/><rect x="15" y="5.5" width="18" height="14" rx="1.5" fill="#9bbc0f" stroke="#2a2f3a" stroke-width="1.5"/><path d="M18 10h6M18 13.5h9" stroke="#0f380f" stroke-width="1.4" stroke-linecap="round"/><path d="M16.5 16.8h15" stroke="#0f380f" stroke-width="1" opacity=".45"/><circle cx="24" cy="32.5" r="8.5" fill="#eeeeec" stroke="#c9c9c3" stroke-width="1.2"/><circle cx="24" cy="32.5" r="3.2" fill="#fdfdfc" stroke="#c9c9c3"/><g fill="#a8a8a2"><path d="M22.5 26.4h3l-1.5-1.8z"/><path d="M22.5 38.6h3l-1.5 1.8z"/><path d="M18.2 31v3l-1.8-1.5z"/><path d="M29.8 31v3l1.8-1.5z"/></g></svg>`,
  recycle: `<svg viewBox="0 0 48 48"><path d="M10 15h28l-3 27H13z" fill="#cfe3f5" fill-opacity=".85" stroke="#4a7ab5" stroke-width="2"/><rect x="8" y="10.5" width="32" height="5" rx="2" fill="#7fb0e0" stroke="#4a7ab5" stroke-width="1.5"/><path d="M18 20v18M24 20v18M30 20v18" stroke="#4a7ab5" stroke-width="2"/><path d="M19 10l2-4h6l2 4" fill="none" stroke="#4a7ab5" stroke-width="2"/><path d="M16 26l5-3-2 5M32 26l-5-3 2 5" fill="none" stroke="#3c9a3c" stroke-width="1.5"/></svg>`,
  display: `<svg viewBox="0 0 48 48"><rect x="5" y="7" width="38" height="27" rx="2" fill="#d4d0c8" stroke="#555" stroke-width="2"/><rect x="8" y="10" width="32" height="21" fill="#3a6ea5"/><path d="M8 31l32-21v21z" fill="#5e94d1"/><rect x="18" y="36" width="12" height="4" fill="#888"/><rect x="13" y="40" width="22" height="3" rx="1" fill="#666"/></svg>`,
  folder: `<svg viewBox="0 0 48 48"><path d="M4 12h14l4 4h22v24H4z" fill="#f7d774" stroke="#b8901e" stroke-width="1.5"/><path d="M4 20h40v20H4z" fill="#ffe89a" stroke="#b8901e" stroke-width="1.5"/></svg>`,
  txt: `<svg viewBox="0 0 48 48"><path d="M10 4h20l8 8v32H10z" fill="#fff" stroke="#777" stroke-width="1.5"/><path d="M30 4v8h8" fill="#ddd" stroke="#777" stroke-width="1.5"/><path d="M15 20h18M15 26h18M15 32h12" stroke="#555" stroke-width="1.5"/></svg>`,
  gta: `<svg viewBox="0 0 48 48"><defs><linearGradient id="gvc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff3cac"/><stop offset=".55" stop-color="#ff8a3d"/><stop offset="1" stop-color="#2af0d8"/></linearGradient></defs><rect x="3" y="3" width="42" height="42" rx="5" fill="url(#gvc)"/><circle cx="24" cy="26" r="11" fill="#ffe873"/><path d="M3 30h42v15H3z" fill="#1a0a2e" opacity=".85"/><path d="M13 45V27M13 27c-4-2-8-1-9 2M13 27c-1-4 2-7 5-7M13 27c3-3 8-3 10 0M13 27c-2-3-6-5-9-3" fill="none" stroke="#1a0a2e" stroke-width="2.5" stroke-linecap="round"/><path d="M36 45V29M36 29c-3-2-7-1-8 2M36 29c0-4 3-6 6-6M36 29c3-2 7-1 8 2" fill="none" stroke="#1a0a2e" stroke-width="2.5" stroke-linecap="round"/><text x="24" y="42" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="7" fill="#ff3cac" font-style="italic">VICE CITY</text></svg>`,
  medium: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#000"/><ellipse cx="18" cy="24" rx="8" ry="9" fill="#fff"/><ellipse cx="31" cy="24" rx="3.6" ry="8.5" fill="#fff"/><ellipse cx="37.5" cy="24" rx="1.5" ry="7.5" fill="#fff"/></svg>`,
  instagram: `<svg viewBox="0 0 48 48"><defs><radialGradient id="gig" cx=".3" cy="1.1" r="1.2"><stop offset="0" stop-color="#fd5"/><stop offset=".45" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient></defs><rect x="4" y="4" width="40" height="40" rx="11" fill="url(#gig)"/><rect x="11.5" y="11.5" width="25" height="25" rx="7" fill="none" stroke="#fff" stroke-width="3"/><circle cx="24" cy="24" r="6" fill="none" stroke="#fff" stroke-width="3"/><circle cx="31.5" cy="16.5" r="1.8" fill="#fff"/></svg>`,
  notepad: `<svg viewBox="0 0 48 48"><path d="M10 5h22l9 9v29H10z" fill="#fff" stroke="#6b7a8f" stroke-width="1.5"/><path d="M32 5v9h9" fill="#dfe6f0" stroke="#6b7a8f" stroke-width="1.5"/><path d="M15 19h18M15 24h18M15 29h18M15 34h12" stroke="#4c6ea8" stroke-width="1.6"/><rect x="8" y="3" width="10" height="7" rx="1.5" fill="#3d7fd6" stroke="#1f4f96"/><rect x="8" y="12" width="10" height="7" rx="1.5" fill="#3d7fd6" stroke="#1f4f96"/></svg>`,
  calendar: `<svg viewBox="0 0 48 48"><rect x="5" y="8" width="38" height="36" rx="3" fill="#fff" stroke="#6b7a8f" stroke-width="1.5"/><path d="M5 11a3 3 0 0 1 3-3h32a3 3 0 0 1 3 3v8H5z" fill="#2f63c9"/><rect x="12" y="4" width="4" height="9" rx="1.5" fill="#444"/><rect x="32" y="4" width="4" height="9" rx="1.5" fill="#444"/><text x="24" y="38" text-anchor="middle" font-family="Tahoma, Arial, sans-serif" font-weight="700" font-size="17" fill="#1a1a1a">30</text><text x="24" y="17" text-anchor="middle" font-family="Tahoma, Arial, sans-serif" font-size="6.5" fill="#fff">MINUTES</text></svg>`,
  terminal: `<svg viewBox="0 0 48 48"><rect x="3" y="6" width="42" height="36" rx="3" fill="#000" stroke="#7a7a7a" stroke-width="1.5"/><path d="M3 9a3 3 0 0 1 3-3h36a3 3 0 0 1 3 3v5H3z" fill="#2f63c9"/><circle cx="40" cy="10" r="2" fill="#e04b3a"/><text x="8" y="28" font-family="Lucida Console, Menlo, monospace" font-size="9" fill="#c0c0c0">&gt; ai "…</text><rect x="9" y="31" width="6" height="2" fill="#fff"/></svg>`,
  saul: `<svg viewBox="0 0 48 48"><rect x="3" y="3" width="42" height="42" rx="6" fill="#f5c400"/><rect x="3" y="3" width="42" height="42" rx="6" fill="none" stroke="#b58900" stroke-width="1.5"/><path d="M14 13c-3 1-5 4-3 9 3 8 9 13 15 15 5 2 8 0 9-3l-5-4-4 2c-4-2-7-5-9-9l2-4z" fill="#111"/><text x="24" y="43" text-anchor="middle" font-family="Impact, Arial Black, sans-serif" font-size="7" fill="#b40000">BETTER CALL</text></svg>`,
  crayon: `<svg viewBox="0 0 48 48"><g transform="rotate(45 24 24)"><path d="M19 4h10l0 6H19z" fill="#e0402a"/><path d="M24 -2l5 6H19z" fill="#f6b19e"/><rect x="18" y="10" width="12" height="30" rx="1" fill="#e0402a"/><rect x="18" y="14" width="12" height="20" fill="#f1e2b8"/><rect x="18" y="14" width="12" height="3" fill="#2b2b2b"/><rect x="18" y="31" width="12" height="3" fill="#2b2b2b"/><rect x="18" y="40" width="12" height="4" fill="#c33320"/></g></svg>`,
  off: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#e2471a"/><path d="M24 12v12" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M15 16a12 12 0 1 0 18 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
};
const GLYPH = {
  min: `<svg viewBox="0 0 12 12"><rect x="2" y="8" width="6" height="2" fill="#fff"/></svg>`,
  max: `<svg viewBox="0 0 12 12"><rect x="1.5" y="1.5" width="9" height="9" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="1.5" y="1.5" width="9" height="2.5" fill="#fff"/></svg>`,
  close: `<svg viewBox="0 0 12 12"><path d="M2 2l8 8M10 2l-8 8" stroke="#fff" stroke-width="2"/></svg>`,
};

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const isTouch = matchMedia('(pointer: coarse)').matches;
const isNarrow = () => innerWidth <= 720;
const fmt = s => { s = Math.max(0, Math.floor(s || 0)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };

/* =========================== WALLPAPER =========================== */
const Wallpaper = {
  layers: [$('#wp-a'), $('#wp-b')], cur: 0, idx: 0, timer: null, order: [],
  rotating: store.get('wp.rotate', true),
  init() {
    const saved = store.get('wp.idx', 0);
    this.idx = Math.min(saved, PAINTINGS.length - 1);
    this.order = PAINTINGS.map((_, i) => i).filter(i => i !== this.idx).sort(() => Math.random() - .5);
    this.show(this.idx, true);
    this.schedule();
    $('#wp-caption').onclick = () => WM.open('display');
  },
  show(i, instant) {
    this.idx = i; store.set('wp.idx', i);
    const p = PAINTINGS[i], next = this.layers[1 - this.cur], prev = this.layers[this.cur];
    const img = new Image();
    img.onload = () => {
      next.style.backgroundImage = `url(wallpapers/${p.file}.jpg)`;
      if (instant) next.style.transition = 'none';
      next.classList.add('show'); prev.classList.remove('show');
      if (instant) requestAnimationFrame(() => next.style.transition = '');
      this.cur = 1 - this.cur;
      $('#wp-caption').innerHTML = `<i>${p.title}</i> — ${p.artist}, ${p.year}`;
      document.dispatchEvent(new CustomEvent('wallpaper', { detail: i }));
    };
    img.src = `wallpapers/${p.file}.jpg`;
  },
  next() {
    if (!this.order.length) this.order = PAINTINGS.map((_, i) => i).filter(i => i !== this.idx).sort(() => Math.random() - .5);
    this.show(this.order.shift());
    this.schedule();
  },
  schedule() {
    clearTimeout(this.timer);
    if (this.rotating) this.timer = setTimeout(() => this.next(), CONFIG.wallpaperInterval);
  },
  setRotating(v) { this.rotating = v; store.set('wp.rotate', v); this.schedule(); },
};

/* =========================== WINDOW MANAGER =========================== */
const WM = {
  wins: new Map(), z: 10, active: null, cascade: 0,
  bump(node) { node.style.zIndex = ++this.z; },
  open(id) {
    const app = APPS[id];
    if (!app) return;
    if (app.url) { window.open(app.url, '_blank', 'noopener'); return; }
    if (app.run) { app.run(); return; }
    if (id === 'winamp') { Winamp.show(); return; }
    let w = this.wins.get(id);
    if (w) { w.node.classList.remove('min'); this.focus(id); return; }
    w = this.create(id, app);
    this.wins.set(id, w);
    Taskbar.render();
    this.focus(id);
    app.onOpen?.(w.node);
  },
  create(id, app) {
    const node = el('div', 'win');
    node.dataset.id = id;
    const W = Math.min(app.width || 480, innerWidth - 20), H = Math.min(app.height || 360, innerHeight - 60);
    const c = (this.cascade++ % 6) * 28;
    node.style.cssText = `width:${W}px;height:${H}px;left:${Math.max(90, Math.round((innerWidth - W) / 2 - 80 + c))}px;top:${Math.max(10, Math.round((innerHeight - 30 - H) / 2 - 40 + c))}px`;
    node.innerHTML = `<div class="win-title">${ICONS[app.icon] || ''}<span class="t">${app.title}</span>
        <span class="win-btns"><b data-a="min" title="Minimize">${GLYPH.min}</b><b data-a="max" title="Maximize">${GLYPH.max}</b><b class="close" data-a="close" title="Close">${GLYPH.close}</b></span></div>
      <div class="win-body${app.tinted ? ' tinted' : ''}${app.plain ? ' plain' : ''}"></div>${app.status ? `<div class="win-status"><span>${app.status}</span></div>` : ''}`;
    const body = $('.win-body', node);
    const content = app.body();
    if (typeof content === 'string') body.innerHTML = content; else body.appendChild(content);
    $('#windows').appendChild(node);

    node.addEventListener('pointerdown', () => this.focus(id), true);
    $('.win-btns', node).addEventListener('click', e => {
      const a = e.target.closest('b')?.dataset.a;
      if (a === 'min') this.minimize(id); else if (a === 'max') node.classList.toggle('max'); else if (a === 'close') this.close(id);
    });
    const title = $('.win-title', node);
    title.addEventListener('dblclick', e => { if (!e.target.closest('.win-btns')) node.classList.toggle('max'); });
    makeDraggable(title, node, () => node.classList.contains('max') || isNarrow());
    return { id, node, app };
  },
  focus(id) {
    this.active = id;
    for (const w of this.wins.values()) w.node.classList.toggle('inactive', w.id !== id);
    Winamp.group.classList.toggle('active', id === 'winamp');
    const w = this.wins.get(id);
    if (w) this.bump(w.node); else if (id === 'winamp') this.bump(Winamp.group);
    Taskbar.render();
  },
  minimize(id) {
    const w = this.wins.get(id); if (!w) return;
    w.node.classList.add('min');
    if (this.active === id) this.active = null;
    Taskbar.render();
  },
  close(id) {
    const w = this.wins.get(id); if (!w) return;
    w.node.remove(); this.wins.delete(id);
    if (this.active === id) this.active = null;
    Taskbar.render();
  },
  minimizeAll() { for (const id of this.wins.keys()) this.minimize(id); Winamp.minimize(); },
};

function makeDraggable(handle, node, locked, onMove) {
  let sx, sy, ox, oy, dragging = false;
  handle.addEventListener('pointerdown', e => {
    if (e.button !== 0 || e.target.closest('b') || locked?.()) return;
    dragging = true; handle.setPointerCapture(e.pointerId);
    sx = e.clientX; sy = e.clientY; ox = node.offsetLeft; oy = node.offsetTop;
    e.preventDefault();
  });
  handle.addEventListener('pointermove', e => {
    if (!dragging) return;
    const x = Math.max(-node.offsetWidth + 60, Math.min(innerWidth - 60, ox + e.clientX - sx));
    const y = Math.max(0, Math.min(innerHeight - 60, oy + e.clientY - sy));
    node.style.left = x + 'px'; node.style.top = y + 'px';
    onMove?.();
  });
  const stop = () => { dragging = false; };
  handle.addEventListener('pointerup', stop); handle.addEventListener('pointercancel', stop);
}

/* =========================== APPS =========================== */
const projectWindow = p => ({
  title: p.name, icon: p.icon, width: 520, height: 400, status: p.url.replace('https://', ''),
  body: () => `<div class="proj-head">${ICONS[p.icon]}<div><h1>${p.name}</h1><div class="tag">${p.tag}</div></div></div>${p.body}
    <div class="proj-actions"><a class="xp-btn primary" href="${p.url}" target="_blank" rel="noopener">Open ${p.url.replace('https://', '')}</a></div>`,
});

const APPS = {
  ...Object.fromEntries(PROJECTS.map(p => [p.id, projectWindow(p)])),
  about: {
    title: 'About Me', icon: 'about', width: 620, height: 440, status: `${CONFIG.name}`,
    body: () => `<div class="explorer">
      <div class="explorer-side">
        <div class="box"><h3>Projects</h3>${PROJECTS.map(p => `<a href="#" data-open="${p.id}">${p.name}</a>`).join('')}</div>
        <div class="box"><h3>Other Places</h3><a href="${CONFIG.socials.github}" target="_blank" rel="noopener">GitHub</a><a href="${CONFIG.socials.x}" target="_blank" rel="noopener">X / Twitter</a><a href="${CONFIG.socials.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="${CONFIG.socials.medium}" target="_blank" rel="noopener">Medium</a><a href="${CONFIG.socials.instagram}" target="_blank" rel="noopener">Instagram</a><a href="mailto:${CONFIG.email}">Email</a></div>
        <div class="box"><h3>Details</h3><a href="#" data-open="winamp">Now playing</a><a href="#" data-open="display">Wallpaper</a></div>
      </div>
      <div class="explorer-main">
        <img class="avatar" src="photo.jpg" alt="${CONFIG.name}" width="512" height="512">
        <h1>${CONFIG.name}</h1>
        <p>I build software for AI agents, and for the people who put them to work.</p>
        <p>Right now that's <a href="#" data-open="vaaya">Vaaya</a> — credit for your agents, so they can buy the services they need without you handing out API keys — plus <a href="#" data-open="claudepoker">ClaudePoker</a>, where agents play each other at Hold'em, and <a href="#" data-open="askpaxo">AskPaxo</a>, which finds you a flat so you don't have to.</p>
        <h2>Why does this look like 2003?</h2>
        <p>Because Windows XP and Winamp were the last time computers were unambiguously fun. The paintings rotate; the music is the best of the 90s; the Recycle Bin is not empty.</p>
        <h2>Say hi</h2>
        <p><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></p>
        <p><a href="#" data-open="calendar">Book 30 minutes</a> to understand how AI can help your company.</p>
      </div></div>`,
  },
  display: {
    title: 'Display Properties', icon: 'display', width: 380, height: 420, tinted: true,
    body: () => {
      const d = el('div');
      d.innerHTML = `<div class="dp-monitor"><div class="bezel"></div><div class="screen"></div><div class="base"></div></div>
        <fieldset class="xp-fieldset"><legend>Background</legend><div class="dp-list"></div>
        <div class="dp-row"><label><input type="checkbox" id="dp-rotate"> Rotate every ${CONFIG.wallpaperInterval / 1000}s</label><button class="xp-btn" id="dp-next" style="margin-left:auto">Next</button></div></fieldset>
        <div style="text-align:right"><button class="xp-btn" data-close>OK</button></div>`;
      const list = $('.dp-list', d), screen = $('.screen', d), rot = $('#dp-rotate', d);
      const paint = () => {
        list.innerHTML = PAINTINGS.map((p, i) => `<div class="${i === Wallpaper.idx ? 'sel' : ''}" data-i="${i}">${p.title} — ${p.artist}</div>`).join('');
        screen.style.backgroundImage = `url(wallpapers/${PAINTINGS[Wallpaper.idx].file}.jpg)`;
        rot.checked = Wallpaper.rotating;
      };
      paint();
      list.onclick = e => { const i = e.target.closest('[data-i]')?.dataset.i; if (i != null) { Wallpaper.show(+i); Wallpaper.schedule(); } };
      rot.onchange = () => Wallpaper.setRotating(rot.checked);
      $('#dp-next', d).onclick = () => Wallpaper.next();
      document.addEventListener('wallpaper', paint);
      return d;
    },
  },
  recycle: {
    title: 'Recycle Bin', icon: 'recycle', width: 460, height: 300, status: '5 objects',
    body: () => `<div class="files">${[
      ['txt', 'todo.txt'], ['folder', 'New Folder (3)'], ['txt', 'startup_idea_47.md'], ['folder', 'my-first-poker-agent'], ['txt', 'final_FINAL_v2.pptx'],
    ].map(([i, n]) => `<div>${ICONS[i]}<span>${n}</span></div>`).join('')}</div>
      <p style="margin-top:18px;color:#666">Nothing here is really gone. Some of it just needed a better name.</p>`,
  },
  shutdown: {
    title: 'Turn off computer', icon: 'off', width: 340, height: 170, tinted: true,
    body: () => `<p style="margin:2px 0 16px">What do you want the computer to do?</p>
      <div class="proj-actions" style="justify-content:center"><button class="xp-btn" data-standby>Stand By</button><button class="xp-btn primary" data-off>Turn Off</button><button class="xp-btn" data-restart>Restart</button></div>
      <div style="text-align:right;margin-top:14px"><button class="xp-btn" data-close>Cancel</button></div>`,
  },
  gta: {
    title: 'GTA Vice City', icon: 'gta', width: 960, height: 640, plain: true, status: 'Runs in the browser · courtesy of quenq.com · click inside the game to give it the keyboard',
    body: () => `<iframe src="https://vc.quenq.com/" title="GTA Vice City" allow="fullscreen; autoplay; gamepad; pointer-lock" allowfullscreen loading="eager"></iframe>`,
  },
  winamp: { title: 'Winamp', icon: 'winamp' },
  pocketamp: {
    title: 'Pocketamp', icon: 'pocketamp', width: 560, height: 560,
    status: `v${POCKETAMP.version} · free, MIT · macOS 12 and later · <a href="${POCKETAMP.site}" target="_blank" rel="noopener">pocketamp site</a>`,
    body: () => `<div class="proj-head">${ICONS.pocketamp}<div><h1>Pocketamp</h1><div class="tag">Nostalgia in your pocket.</div></div></div>
      <p>An iPod for your Mac. Paste a YouTube playlist, press play, and the click wheel comes back — scroll the tracks, watch the little screen, change the skin when you miss a different device you owned.</p>
      <p>Free, open source, and it never asks you to sign in to anything.</p>
      <div class="proj-actions">${POCKETAMP.builds.map((b, i) => `<a class="xp-btn${i ? '' : ' primary'}" href="${POCKETAMP.dmg(b)}">Download for ${b.label}<small>${b.note} · ${b.size}</small></a>`).join('')}</div>
      <h2>Getting it running</h2>
      <ol class="pa-steps">
        <li>Open the .dmg, drag Pocketamp to Applications.</li>
        <li>First launch only: System Settings → Privacy &amp; Security → <b>Open Anyway</b>.</li>
        <li>Paste a YouTube playlist URL into the screen, press enter.</li>
      </ol>
      <h2>Controls</h2>
      <div class="pa-keys"><kbd>space</kbd><span>play / pause</span><kbd>←</kbd><span>previous</span><kbd>→</kbd><span>next</span><kbd>S</kbd><span>change skin</span><kbd>P</kbd><span>playlist</span></div>
      <div class="proj-actions"><a class="xp-btn" href="${POCKETAMP.site}" target="_blank" rel="noopener">Product page</a><a class="xp-btn" href="${POCKETAMP.repo}" target="_blank" rel="noopener">Source on GitHub</a><a class="xp-btn" href="${POCKETAMP.repo}/releases" target="_blank" rel="noopener">All releases</a></div>`,
  },
  terminal: {
    title: 'Terminal', icon: 'terminal', width: 760, height: 480, plain: true,
    status: `demo · <b class="term-count">0</b>/${TERM_LIMIT} commands · powered by <a href="https://vaaya.ai" target="_blank" rel="noopener">vaaya.ai</a>`,
    body: () => `<div class="term"><pre class="term-out"></pre><div class="term-line"><span class="term-ps">&gt;</span><input class="term-in" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="command"></div></div>`,
    onOpen: w => Terminal.mount(w),
  },
  arrange: { title: 'Arrange Icons', icon: 'display', run: () => { store.set('iconpos', {}); location.reload(); } },
  calendar: {
    title: 'Book a call', icon: 'calendar', width: 820, height: 640, plain: true,
    status: `Free, 30 minutes, on Google Meet · <a href="${CONFIG.calendar}" target="_blank" rel="noopener">open in cal.com</a>`,
    body: () => `<div class="cal-head"><strong>Book 30 minutes to understand how AI can help your company.</strong> Pick a slot below — no prep needed, bring the problem.</div>
      <iframe src="${CONFIG.calendar}?embed=true&layout=month_view" title="Book a 30 minute call" allow="payment" loading="eager"></iframe>`,
  },
  notepad: {
    title: 'Untitled - Notepad', label: 'Notepad', icon: 'notepad', width: 520, height: 400, status: 'Saved in this browser only',
    body: () => `<div class="np-menu"><span>File</span><span>Edit</span><span>Format</span><span>View</span><span>Help</span></div>
      <textarea class="np" spellcheck="false" aria-label="Notepad">${store.get('notepad', 'Type something. It sticks around until you clear your browser.')}</textarea>`,
    onOpen: w => {
      const ta = w.querySelector('.np'), title = w.querySelector('.win-title span');
      ta.addEventListener('input', () => { store.set('notepad', ta.value); title.textContent = '*Untitled - Notepad'; });
      ta.addEventListener('keydown', e => { if (e.key === 'Tab') { e.preventDefault(); ta.setRangeText('\t', ta.selectionStart, ta.selectionEnd, 'end'); ta.dispatchEvent(new Event('input')); } });
      ta.focus();
    },
  },
  github:   { title: 'GitHub',   icon: 'github',   url: CONFIG.socials.github },
  x:        { title: 'X',        icon: 'x',        url: CONFIG.socials.x },
  linkedin: { title: 'LinkedIn', icon: 'linkedin', url: CONFIG.socials.linkedin },
  medium:   { title: 'Medium',   icon: 'medium',   url: CONFIG.socials.medium },
  instagram:{ title: 'Instagram',icon: 'instagram',url: CONFIG.socials.instagram },
  email:    { title: 'E-mail',   icon: 'email',    url: `mailto:${CONFIG.email}` },
};

// delegated clicks inside windows: [data-open], [data-close], shutdown buttons
document.addEventListener('click', e => {
  const open = e.target.closest('[data-open]');
  if (open) { e.preventDefault(); WM.open(open.dataset.open); return; }
  const win = e.target.closest('.win');
  if (!win) return;
  if (e.target.closest('[data-close]')) WM.close(win.dataset.id);
  else if (e.target.closest('[data-standby]')) { WM.close('shutdown'); WM.minimizeAll(); }
  else if (e.target.closest('[data-restart]')) location.reload();
  else if (e.target.closest('[data-off]')) { Winamp.pause(); $('#shutdown').hidden = false; }
});
$('#reboot').onclick = e => { e.preventDefault(); location.reload(); };

/* =========================== DESKTOP ICONS =========================== */
const DESKTOP = [
  { label: 'Work',    ids: ['about', 'claudepoker', 'askpaxo', 'saul', 'crayon', 'calendar'] },
  { label: 'Socials', ids: ['github', 'x', 'linkedin', 'medium', 'instagram', 'email'] },
  { label: 'Goodies', ids: ['winamp', 'pocketamp', 'gta', 'notepad', 'terminal', 'display', 'recycle'] },
];
function renderIcons() {
  for (const g of DESKTOP) {
    const box = el('div', 'icon-group', `<h2>${g.label}</h2>`);
    $('#icons').appendChild(box);
    for (const id of g.ids) {
    const app = APPS[id];
    const n = el('div', 'icon', `${ICONS[app.icon]}<span>${app.label || app.title}</span>`);
    n.tabIndex = 0; n.dataset.id = id;
    n.addEventListener('click', () => { document.querySelectorAll('.icon.sel').forEach(i => i.classList.remove('sel')); n.classList.add('sel'); if (isTouch) WM.open(id); });
    n.addEventListener('dblclick', () => WM.open(id));
    n.addEventListener('keydown', e => { if (e.key === 'Enter') WM.open(id); });
    box.appendChild(n);
    makeIconMovable(n, id);
    }
  }
  // Dragged positions are saved per icon id, against the layout they were dragged in.
  // Add or remove an icon and every icon below it shifts a slot, so old coordinates
  // land on top of their new neighbours. Drop them whenever the icon set changes.
  const layoutSig = DESKTOP.map(g => `${g.label}:${g.ids.join(',')}`).join('|');
  if (store.get('iconlayout') !== layoutSig) { store.set('iconpos', {}); store.set('iconlayout', layoutSig); }

  // restore icons the visitor dragged somewhere else last time
  const saved = store.get('iconpos', {});
  if (!isNarrow()) for (const n of document.querySelectorAll('#icons .icon')) {
    const p = saved[n.dataset.id];
    if (p && p[0] < innerWidth - 40 && p[1] < innerHeight - 90) freeIcon(n, p[0], p[1]);
  }
  $('#desktop').addEventListener('pointerdown', e => { if (e.target === $('#desktop') || e.target.closest('#wallpaper')) document.querySelectorAll('.icon.sel').forEach(i => i.classList.remove('sel')); });
}

// lift an icon out of its column (leaving a gap, like XP without auto-arrange) and pin it at x,y
function freeIcon(n, x, y) {
  if (!n.classList.contains('free')) {
    const ghost = el('div', 'icon ghost'); ghost.style.height = n.offsetHeight + 'px';
    n.replaceWith(ghost); n.classList.add('free'); $('#desktop').appendChild(n);
  }
  n.style.left = x + 'px'; n.style.top = y + 'px';
}
function makeIconMovable(n, id) {
  let sx, sy, ox, oy, armed = false, moving = false;
  n.addEventListener('pointerdown', e => {
    if (e.button !== 0 || isNarrow()) return;
    armed = true; sx = e.clientX; sy = e.clientY; n.setPointerCapture(e.pointerId);
  });
  n.addEventListener('pointermove', e => {
    if (!armed) return;
    if (!moving) {
      if (Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy) < 5) return;
      const r = n.getBoundingClientRect(); ox = r.left; oy = r.top;
      moving = true; n.classList.add('dragging'); freeIcon(n, ox, oy);
    }
    n.style.left = Math.max(0, Math.min(innerWidth - n.offsetWidth, ox + e.clientX - sx)) + 'px';
    n.style.top = Math.max(0, Math.min(innerHeight - 80, oy + e.clientY - sy)) + 'px';
  });
  const stop = () => {
    if (moving) { const pos = store.get('iconpos', {}); pos[id] = [n.offsetLeft, n.offsetTop]; store.set('iconpos', pos); }
    armed = moving = false; n.classList.remove('dragging');
  };
  n.addEventListener('pointerup', stop); n.addEventListener('pointercancel', stop);
}

/* =========================== TERMINAL (Vaaya demo) =========================== */
const Terminal = {
  esc: s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])),
  sleep: ms => new Promise(r => setTimeout(r, ms)),
  TRY: [
    'find 20 heads of sales at fintech startups in Bangalore',
    'write a cold email to them about our AI onboarding tool',
    'make a logo for a coffee brand called Slow Drip',
    'what did Notion launch this month',
    'call +91 98xxx xxxxx and confirm tomorrow\'s 3pm demo',
  ],
  banner() {
    return `<span class="hi">Terminal</span> — an AI that can actually go and do things.

Type <span class="hi">ai "…"</span> with anything you'd hand to an assistant. It picks the right tool and runs it:
find leads, write and send outreach, make ad creatives, watch competitors, scrape a site,
make a phone call, crunch a spreadsheet. It runs on credit you top up — no API keys, no logins.

This window is a preview — it shows you what happens, it doesn't run it.
To make it work for real, on your machine, in whatever you already use
(Claude Code, Cursor, Codex, Claude Desktop, ChatGPT):

  <span class="hi">npx -y @vaaya/mcp install</span>

One line, browser sign-in, no keys to paste. Or start at <a href="https://vaaya.ai" target="_blank" rel="noopener">vaaya.ai</a>.

Meanwhile, try these — each one builds on the last:
${this.TRY.map(t => `  <span class="hi">ai "${this.esc(t)}"</span>`).join('\n')}
<span class="dim">(help · clear · ${TERM_LIMIT} commands in this preview)</span>
`;
  },
  // [matcher, what it's for, tool, cost in cents, trace lines, sample result]
  PLANS: [
    [/lead|prospect|head of|vp |cto|cmo|founder|decision|icp|companies|startups|people at/i, 'Sales · lead list', 'Apollo people search', 5,
      ['searching 275M profiles', 'filtering by title, industry, city', 'verifying emails'],
      `20 leads ready (showing 3, sample):
  Priya S.      Head of Sales     Razorpay-sized fintech   priya@…    linkedin.com/in/…
  Arjun M.      VP Sales          lending startup, Series B arjun@…   linkedin.com/in/…
  Neha K.       Head of Growth    payments startup          neha@…    linkedin.com/in/…
Saved as a segment. Next: ai "write a cold email to them about …"`],
    [/email|outreach|sequence|follow.?up|cold|pitch|newsletter/i, 'Sales · outreach', 'Vaaya GTM writer + mailboxes', 2,
      ['reading the segment (20 people)', 'drafting one email per person from their profile', 'warming 2 sending mailboxes'],
      `draft for Priya S. (sample):
  Subject: 40% faster onboarding at fintechs like yours
  Priya — saw your team is hiring 4 SDRs this quarter. Most fintech sales teams we work
  with lose the first two weeks of every hire to tooling. We fix that in a day. Worth 15 min?
19 more drafted. Replies get watched; you approve each answer before it goes out.`],
    [/logo|image|photo|banner|creative|ad |ads|thumbnail|poster|illustrat|picture/i, 'Marketing · creative', 'fal image model', 8,
      ['writing 3 prompt variants', 'rendering 1024×1024', 'upscaling the best one'],
      `logo ready (sample): slow-drip-logo.png · 1024×1024 · 3 variants
Next: ai "turn it into a 15 second Instagram ad"`],
    [/video|reel|clip|animate|ad$/i, 'Marketing · video', 'fal video model', 60,
      ['storyboarding 4 shots', 'rendering (async, ~90s)', 'adding captions and music'],
      `video ready (sample): slow-drip-15s.mp4 · 9:16 · 15s · captions burned in`],
    [/call|phone|dial|ring|confirm|remind/i, 'Sales · voice call', 'Dograh voice agent', 30,
      ['dialing', 'connected — speaking as your assistant', 'confirmed, sending calendar invite'],
      `call done (sample): 1m 48s · "Yes, 3pm works" · invite sent · transcript saved
Next: ai "remind me 30 min before"`],
    [/launch|competitor|news|what did|what's new|latest|announce|funding|raised|hiring/i, 'Research · signals', 'Exa + news search', 1,
      ['searching the last 30 days', 'reading 14 sources', 'summarising'],
      `Notion, last 30 days (sample):
  · Notion Mail rolled out to all workspaces — AI triage, snoozes
  · Shipped "Custom agents" in beta — background tasks over your docs
  · Pricing: Business tier now bundles AI, Plus does not
  · Hiring: 12 GTM roles, 4 in Bangalore
Next: ai "watch Notion and tell me when they change pricing"`],
    [/scrape|crawl|extract|website|site|pricing page|url|http/i, 'Research · scrape', 'Firecrawl', 2,
      ['fetching 8 pages', 'converting to clean markdown', 'pulling the tables'],
      `scraped (sample): 8 pages · 3 pricing tables · 41 feature rows → pricing.csv`],
    [/csv|spreadsheet|excel|sheet|analy|numbers|revenue|churn|forecast|code|script|python/i, 'Ops · sandbox', 'E2B sandbox', 3,
      ['starting a sandbox', 'loading the data', 'running the analysis, closing the sandbox'],
      `done (sample): churn is 4.1%/mo, concentrated in accounts under ₹10k MRR · chart saved → churn.png`],
    [/./, 'Research · search', 'Exa search', 1,
      ['searching', 'reading the top 10 in full', 'summarising'],
      `answer (sample): 5 bullet summary, 10 sources with full text attached.`],
  ],
  mount(w) {
    const out = w.querySelector('.term-out'), inp = w.querySelector('.term-in'), count = w.querySelector('.term-count');
    let used = 0, busy = false; const hist = []; let hi = 0;
    const print = (html, cls = '') => { const d = el('div', cls); d.innerHTML = html; out.appendChild(d); out.scrollTop = out.scrollHeight; return d; };
    print(this.banner());
    w.querySelector('.term').addEventListener('click', () => inp.focus());
    inp.addEventListener('keydown', async e => {
      if (e.key === 'ArrowUp') { e.preventDefault(); if (hi > 0) inp.value = hist[--hi]; return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); inp.value = hist[++hi] || ''; hi = Math.min(hi, hist.length); return; }
      if (e.key !== 'Enter' || busy || used >= TERM_LIMIT) return;
      const raw = inp.value.trim(); inp.value = ''; if (raw) { hist.push(raw); hi = hist.length; }
      print(`&gt; ${this.esc(raw)}`, 'cmd');
      if (!raw) return;
      const m = raw.match(/^ai\s+["“']?(.*?)["”']?\s*$/i);
      if (/^clear$/i.test(raw)) { out.innerHTML = ''; return; }
      if (/^help$/i.test(raw)) { print(this.banner()); return; }
      if (!m || !m[1]) { print(`Try: <span class="hi">ai "${this.esc(this.TRY[used] || this.TRY[0])}"</span>`); return; }
      used++; count.textContent = used; busy = true; inp.disabled = true;
      await this.run(m[1], print);
      busy = false;
      if (used >= TERM_LIMIT) {
        print(`
── end of the preview ───────────────────────────────────────────────
Everything you just watched runs for real, on your machine, off credit you top up once:

  <span class="hi">npx -y @vaaya/mcp install</span>     ·     <a href="https://vaaya.ai" target="_blank" rel="noopener">vaaya.ai</a>

<span class="dim">(close and reopen this window for ${TERM_LIMIT} more)</span>`, 'warn');
        inp.placeholder = `run npx -y @vaaya/mcp install to keep going`;
      } else { inp.disabled = false; inp.focus(); }
    });
    setTimeout(() => inp.focus(), 50);
  },
  async run(intent, print) {
    const [, what, tool, cost, steps, result] = this.PLANS.find(([re]) => re.test(intent));
    const trace = print('', 'trace');
    const line = t => { trace.innerHTML += `<div>${t}</div>`; trace.parentNode.scrollTop = 1e9; };
    line(`<span class="dim">thinking…</span>`); await this.sleep(500);
    trace.innerHTML = `<div><span class="ok">✓</span> ${this.esc(what)} → using <span class="hi">${this.esc(tool)}</span>, about ${cost}¢</div>`;
    for (const s of steps) { await this.sleep(550); line(`<span class="dim">  ${this.esc(s)}…</span>`); }
    await this.sleep(500);
    print(this.esc(result).replace(/\(sample\)/g, '<span class="dim">(sample)</span>').replace(/^Next: (ai ".*")$/m, 'Next: <span class="hi">$1</span>'), 'res');
  },
};

/* =========================== STICKY NOTE =========================== */
function initNote() {
  const n = $('#note');
  const place = () => {
    if (n.dataset.moved) return;
    n.style.left = (isNarrow() ? Math.round((innerWidth - 170) / 2) : Math.round(innerWidth * 0.42)) + 'px';
    n.style.top = (isNarrow() ? $('#icons').offsetHeight + 24 : 40) + 'px';
  };
  place(); addEventListener('resize', place);
  makeDraggable(n, n, null, () => n.dataset.moved = 1);
  n.addEventListener('dblclick', e => { if (!e.target.closest('a')) WM.open('vaaya'); });
}

/* =========================== TASKBAR / START MENU =========================== */
const Taskbar = {
  render() {
    const t = $('#tasks'); t.innerHTML = '';
    const items = [...WM.wins.values()].map(w => ({ id: w.id, title: w.app.title, icon: w.app.icon, min: w.node.classList.contains('min') }));
    if (Winamp.open) items.push({ id: 'winamp', title: Winamp.taskTitle(), icon: 'winamp', min: Winamp.group.classList.contains('min') });
    for (const it of items) {
      const b = el('div', 'task' + (WM.active === it.id && !it.min ? ' active' : ''), `${ICONS[it.icon]}<span>${it.title}</span>`);
      b.onclick = () => {
        if (it.id === 'winamp') { if (WM.active === 'winamp' && !it.min) Winamp.minimize(); else Winamp.show(); return; }
        const w = WM.wins.get(it.id);
        if (WM.active === it.id && !it.min) WM.minimize(it.id); else { w.node.classList.remove('min'); WM.focus(it.id); }
      };
      t.appendChild(b);
    }
  },
};

const StartMenu = {
  node: $('#startmenu'), btn: $('#start-btn'),
  init() {
    const item = (id, sub, extra = '') => { const a = APPS[id]; return `<a class="sm-item ${extra}" href="${a.url || '#'}" data-id="${id}" ${a.url ? 'target="_blank" rel="noopener"' : ''}>${ICONS[a.icon]}<div><b>${a.label || a.title}</b>${sub ? `<small>${sub}</small>` : ''}</div></a>`; };
    $('#sm-left').innerHTML = PROJECTS.map(p => item(p.id, p.tag)).join('') + '<div class="sm-sep"></div>' + item('winamp', '90s rock, on repeat') + item('pocketamp', 'An iPod for your Mac — free download') + item('gta', 'Vice City, in the browser') + item('notepad', 'Scratch space') + item('terminal', 'Type ai "…" and watch') + item('about', 'Who is this guy') + '<div class="sm-sep"></div>' + item('calendar', 'Book 30 mins — how AI can help your company');
    $('#sm-right').innerHTML = item('github', '', 'bold') + item('x', '', 'bold') + item('linkedin', '', 'bold') + item('medium', '', 'bold') + item('instagram', '', 'bold') + item('email', '', 'bold') + '<div class="sm-sep"></div>' + item('display') + item('arrange') + item('recycle') +
      `<div class="sm-sep"></div><a class="sm-item" href="${CONFIG.siteRepo}" target="_blank" rel="noopener">${ICONS.folder}<div><b>Source of this site</b></div></a>`;
    this.node.addEventListener('click', e => {
      const a = e.target.closest('.sm-item'); if (!a) return;
      if (a.dataset.id && !APPS[a.dataset.id].url) { e.preventDefault(); WM.open(a.dataset.id); }
      this.toggle(false);
    });
    this.btn.onclick = e => { e.stopPropagation(); this.toggle(); };
    document.addEventListener('pointerdown', e => { if (!e.target.closest('#startmenu, #start-btn')) this.toggle(false); if (!e.target.closest('#ctxmenu')) $('#ctxmenu').hidden = true; });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { this.toggle(false); $('#ctxmenu').hidden = true; } });
    $('#sm-logoff').onclick = () => location.reload();
    $('#sm-shutdown').onclick = () => { this.toggle(false); WM.open('shutdown'); };
    $('#ql-desktop').onclick = () => WM.minimizeAll();
    $('#ql-winamp').onclick = () => Winamp.show();
  },
  toggle(force) {
    const show = force ?? this.node.hidden;
    this.node.hidden = !show; this.btn.classList.toggle('open', show);
  },
};

function tickClock() {
  const d = new Date(); let h = d.getHours(); const ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12;
  $('#clock').textContent = `${h}:${String(d.getMinutes()).padStart(2, '0')} ${ap}`;
}

/* =========================== TRAY FLYOUTS =========================== */
// The volume icon and the clock each open a small XP-style panel above the taskbar.
const Tray = {
  MONTHS: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  DOW: ['S','M','T','W','T','F','S'],
  shown: new Date(),
  init() {
    const vol = $('#volpop'), cal = $('#calpop');
    const range = $('#vol-range'), mute = $('#vol-mute');

    $('#tray-vol').onclick = e => { e.stopPropagation(); this.toggle(vol, cal); };
    $('#clock').onclick = e => { e.stopPropagation(); this.shown = new Date(); this.paint(); this.toggle(cal, vol); };
    $('#clock').addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); $('#clock').click(); } });

    range.oninput = () => { Winamp.setVolume(+range.value); mute.checked = Winamp.muted; };
    mute.onchange = () => { if (mute.checked !== Winamp.muted) Winamp.toggleMute(); mute.checked = Winamp.muted; };
    $('#cal-prev').onclick = () => this.step(-1);
    $('#cal-next').onclick = () => this.step(1);

    // clicking anywhere else, or Escape, closes both
    document.addEventListener('pointerdown', e => { if (!e.target.closest('.tray-pop, #tray')) this.closeAll(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') this.closeAll(); });
    this.paint();
  },
  toggle(open, other) {
    other.hidden = true;
    const show = open.hidden;
    open.hidden = !show;
    if (show && open.id === 'volpop') { $('#vol-range').value = Winamp.vol; $('#vol-mute').checked = Winamp.muted; }
  },
  closeAll() { $('#volpop').hidden = true; $('#calpop').hidden = true; },
  step(n) { this.shown = new Date(this.shown.getFullYear(), this.shown.getMonth() + n, 1); this.paint(); },
  paint() {
    const now = new Date(), y = this.shown.getFullYear(), m = this.shown.getMonth();
    $('#cal-title').textContent = `${this.MONTHS[m]} ${y}`;
    const first = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate(), prev = new Date(y, m, 0).getDate();
    let html = this.DOW.map(d => `<span class="dow">${d}</span>`).join('');
    for (let i = first - 1; i >= 0; i--) html += `<span class="pad">${prev - i}</span>`;
    for (let d = 1; d <= days; d++) {
      const today = d === now.getDate() && m === now.getMonth() && y === now.getFullYear();
      html += `<span class="${today ? 'today' : ''}">${d}</span>`;
    }
    const tail = (7 - ((first + days) % 7)) % 7;
    for (let d = 1; d <= tail; d++) html += `<span class="pad">${d}</span>`;
    $('#cal-grid').innerHTML = html;
    $('#cal-foot').textContent = now.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  },
};

function initContextMenu() {
  const m = $('#ctxmenu');
  $('#desktop').addEventListener('contextmenu', e => {
    if (e.target.closest('.win, .wa-group, #taskbar, #startmenu, .icon')) return;
    e.preventDefault();
    m.innerHTML = `<div data-a="next">Next wallpaper</div><div data-a="refresh">Refresh</div><hr><div data-a="winamp">Winamp</div><hr><div data-a="display">Properties</div>`;
    m.hidden = false;
    m.style.left = Math.min(e.clientX, innerWidth - 170) + 'px'; m.style.top = Math.min(e.clientY, innerHeight - 140) + 'px';
  });
  m.onclick = e => {
    const a = e.target.dataset.a; m.hidden = true;
    if (a === 'next') Wallpaper.next(); else if (a === 'refresh') document.querySelectorAll('.icon.sel').forEach(i => i.classList.remove('sel')); else if (a) WM.open(a);
  };
}

/* =========================== WINAMP =========================== */
const Winamp = {
  group: $('#winamp'), open: true,
  idx: 0, playing: false, paused: false, shuffle: false, repeat: true, vol: 80, muted: false,
  player: null, ready: false, wantPlay: false, errors: 0, dur: 0, scrubbing: false,
  marqueeText: '', marqueeTimer: null, timeTimer: null, visTimer: null, seekDragging: false,

  init() {
    this.layout();
    addEventListener('resize', () => this.layout(true));
    // window group drag (any Winamp title bar moves the docked group, like the real thing)
    this.group.querySelectorAll('.wa-title').forEach(t => makeDraggable(t, this.group));
    this.group.addEventListener('pointerdown', () => WM.focus('winamp'), true);

    // visualizer bars
    const vis = $('#wa-vis'); for (let i = 0; i < 19; i++) vis.appendChild(el('i'));
    this.visBars = [...vis.children];

    // buttons
    this.group.addEventListener('click', e => {
      const act = e.target.closest('[data-act]')?.dataset.act; if (!act) return;
      ({ prev: () => this.prev(), play: () => this.play(), pause: () => this.togglePause(), stop: () => this.stop(), next: () => this.next(),
        video: () => this.toggleVideo(), min: () => this.minimize(), close: () => this.close(), shade: () => $('.wa-main').classList.toggle('shade'),
        'pl-close': () => this.togglePlaylist(false), 'video-close': () => this.toggleVideo(false) })[act]?.();
    });
    $('#wa-pl-btn').onclick = () => this.togglePlaylist();
    $('#wa-shuffle').onclick = () => { this.shuffle = !this.shuffle; $('#wa-shuffle').classList.toggle('on', this.shuffle); };
    $('#wa-repeat').onclick = () => { this.repeat = !this.repeat; $('#wa-repeat').classList.toggle('on', this.repeat); };

    // sliders
    this.slider($('#wa-vol'), 14, f => { this.setVolume(Math.round(f * 100)); });
    this.slider($('#wa-bal'), 14, null, .5);
    this.slider($('#wa-seek'), 29, f => { if (this.ready && this.dur) this.player.seekTo(f * this.dur, true); }, 0, true);
    this.setVolume(this.vol, true);

    // playlist
    this.renderPlaylist();
    this.setMarquee(`WINAMP 2.95  ***  ${PLAYLIST.length} TRACKS OF 90S ROCK  ***  CLICK PLAY  ***  `);
    this.setStatus('stop'); this.showTime(0);
    this.updatePlTime();

    // YouTube IFrame API — the player lives in the "Nullsoft Video" window.
    window.onYouTubeIframeAPIReady = () => {
      this.player = new YT.Player('yt', {
        videoId: PLAYLIST[this.idx].yt, width: '100%', height: '100%',
        playerVars: { controls: 0, rel: 0, modestbranding: 1, playsinline: 1, iv_load_policy: 3, disablekb: 1, fs: 0, origin: location.origin },
        events: {
          onReady: () => { this.ready = true; this.player.setVolume(this.vol); if (this.wantPlay) this.play(); },
          onStateChange: e => this.onState(e.data),
          onError: () => { this.errors++; if (this.errors < PLAYLIST.length) this.next(true); else this.stop(); },
        },
      });
    };
    const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; document.head.appendChild(s);
    this.visLoop();
  },

  layout(keepPos) {
    const narrow = isNarrow();
    const scale = narrow ? Math.min(1.3, (innerWidth - 16) / 275) : Math.max(1.05, Math.min(1.6, (innerHeight - 70) / 470));
    this.group.style.setProperty('--wa-scale', scale.toFixed(3));
    if (keepPos && this.group.dataset.placed) return;
    this.group.style.left = (narrow ? 8 : Math.max(8, innerWidth - 275 * scale - 28)) + 'px';
    this.group.style.top = (narrow ? $('#note').offsetTop + $('#note').offsetHeight + 16 : 24) + 'px';
    this.group.dataset.placed = 1;
  },
  taskTitle() { const t = PLAYLIST[this.idx]; return this.playing ? `${t.artist} - ${t.title}` : 'Winamp'; },
  show() { this.open = true; this.group.classList.remove('min'); WM.focus('winamp'); },
  minimize() { this.group.classList.add('min'); if (WM.active === 'winamp') WM.active = null; Taskbar.render(); },
  close() { this.open = false; this.group.classList.add('min'); this.pause(); if (WM.active === 'winamp') WM.active = null; Taskbar.render(); },
  togglePlaylist(force) { const pl = $('#wa-pl'); const show = force ?? pl.classList.contains('hide'); pl.classList.toggle('hide', !show); $('#wa-pl-btn').classList.toggle('on', show); },
  toggleVideo(force) { const v = $('#wa-video'); const show = force ?? v.classList.contains('hide'); v.classList.toggle('hide', !show); },

  // ---- transport
  play() {
    if (!this.ready) { this.wantPlay = true; return; }
    this.wantPlay = false;
    if (this.paused) { this.player.playVideo(); return; }
    if (this.player.getPlayerState() === YT.PlayerState.CUED || this.player.getPlayerState() === -1 || this.player.getPlayerState() === YT.PlayerState.ENDED) this.player.playVideo();
    else this.player.playVideo();
  },
  togglePause() { if (!this.ready) return; if (this.playing) this.player.pauseVideo(); else this.play(); },
  pause() { if (this.ready && this.playing) this.player.pauseVideo(); },
  stop() { if (this.ready) { this.player.stopVideo(); this.player.cueVideoById(PLAYLIST[this.idx].yt); } this.playing = false; this.paused = false; this.setStatus('stop'); this.showTime(0); this.seekKnob(0); this.wantPlay = false; Taskbar.render(); },
  load(i, autoplay) {
    this.idx = (i + PLAYLIST.length) % PLAYLIST.length;
    const t = PLAYLIST[this.idx]; this.dur = t.dur;
    this.setMarquee(`${this.idx + 1}. ${t.artist} - ${t.title} (${fmt(t.dur)})  ***  `);
    this.renderPlaylist(); this.seekKnob(0); this.showTime(0);
    if (!this.ready) { this.wantPlay = autoplay; return; }
    if (autoplay) this.player.loadVideoById(t.yt); else this.player.cueVideoById(t.yt);
    this.paused = false;
  },
  next(auto) {
    const wasPlaying = this.playing || auto || this.wantPlay;
    let i;
    if (this.shuffle) { do i = Math.floor(Math.random() * PLAYLIST.length); while (i === this.idx && PLAYLIST.length > 1); }
    else { i = this.idx + 1; if (i >= PLAYLIST.length) { if (!this.repeat) { this.stop(); return; } i = 0; } }
    this.load(i, wasPlaying);
  },
  prev() {
    if (this.ready && this.player.getCurrentTime?.() > 3 && this.playing) { this.player.seekTo(0, true); return; }
    this.load(this.idx - 1, this.playing || this.wantPlay);
  },
  onState(s) {
    const S = YT.PlayerState;
    if (s === S.PLAYING) {
      this.playing = true; this.paused = false; this.errors = 0; this.setStatus('play');
      const d = this.player.getDuration(); if (d > 0) { this.dur = d; PLAYLIST[this.idx].dur = Math.round(d); }
      this.startTimer(); Taskbar.render();
    } else if (s === S.PAUSED) { this.playing = false; this.paused = true; this.setStatus('pause'); this.stopTimer(); Taskbar.render(); }
    else if (s === S.ENDED) { this.playing = false; this.stopTimer(); this.next(true); }
    else if (s === S.CUED) { this.playing = false; this.paused = false; this.setStatus('stop'); this.stopTimer(); }
  },
  startTimer() { this.stopTimer(); this.timeTimer = setInterval(() => this.tick(), 250); this.tick(); },
  stopTimer() { clearInterval(this.timeTimer); this.timeTimer = null; },
  tick() {
    if (!this.ready) return;
    const t = this.player.getCurrentTime() || 0;
    this.showTime(t);
    if (!this.seekDragging && this.dur) this.seekKnob(t / this.dur);
    $('#wa-pl-time').textContent = `${fmt(t)}/${fmt(this.dur)}`;
  },

  // ---- audio
  setVolume(v, silent) {
    this.vol = Math.max(0, Math.min(100, v));
    $('#wa-vol .wa-knob').style.left = Math.round(this.vol / 100 * (68 - 14)) + 'px';
    if (this.ready && !silent) { this.player.setVolume(this.vol); if (this.muted && this.vol > 0) { this.muted = false; this.player.unMute(); $('#tray-vol').classList.remove('muted'); } }
  },
  toggleMute() { if (!this.ready) return; this.muted = !this.muted; this.muted ? this.player.mute() : this.player.unMute(); $('#tray-vol').classList.toggle('muted', this.muted); },

  // ---- ui bits
  setStatus(s) { $('#wa-status').className = 'wa-status ' + s; $('#wa-time').classList.toggle('blink', s === 'pause'); },
  showTime(t) {
    const m = Math.floor(t / 60), s = Math.floor(t % 60);
    const d = $('#wa-time').querySelectorAll('span');
    d[0].textContent = Math.floor(m / 10) % 10; d[1].textContent = m % 10; d[2].textContent = Math.floor(s / 10); d[3].textContent = s % 10;
  },
  seekKnob(f) { $('#wa-seek .wa-knob').style.left = Math.round(Math.max(0, Math.min(1, f)) * (248 - 29)) + 'px'; },
  setMarquee(text) {
    this.marqueeText = text.toUpperCase();
    clearInterval(this.marqueeTimer);
    const span = $('#wa-marquee-text'); let off = 0;
    span.textContent = this.marqueeText;
    if (this.marqueeText.length <= 30) return;
    this.marqueeTimer = setInterval(() => { off = (off + 1) % this.marqueeText.length; span.textContent = this.marqueeText.slice(off) + this.marqueeText.slice(0, off); }, 220);
  },
  slider(node, knobW, onChange, initial = 0, deferUntilUp = false) {
    const knob = $('.wa-knob', node), w = node.offsetWidth || +getComputedStyle(node).width.replace('px', '');
    const track = w - knobW; let dragging = false;
    const place = f => knob.style.left = Math.round(f * track) + 'px';
    const frac = e => { const r = node.getBoundingClientRect(); return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)); };
    if (initial) place(initial);
    node.addEventListener('pointerdown', e => { dragging = true; node.setPointerCapture(e.pointerId); if (node.id === 'wa-seek') this.seekDragging = true; place(frac(e)); if (!deferUntilUp) onChange?.(frac(e)); e.preventDefault(); });
    node.addEventListener('pointermove', e => { if (!dragging) return; place(frac(e)); if (!deferUntilUp) onChange?.(frac(e)); });
    const up = e => { if (!dragging) return; dragging = false; if (node.id === 'wa-seek') this.seekDragging = false; if (deferUntilUp) onChange?.(frac(e)); };
    node.addEventListener('pointerup', up); node.addEventListener('pointercancel', up);
  },
  renderPlaylist() {
    const list = $('#wa-pl-list');
    list.innerHTML = PLAYLIST.map((t, i) => `<div class="${i === this.idx ? 'cur' : ''}" data-i="${i}"><span>${i + 1}. ${t.artist} - ${t.title}</span><span>${fmt(t.dur)}</span></div>`).join('');
    if (!list.dataset.bound) {
      list.dataset.bound = 1;
      list.addEventListener('click', e => { const d = e.target.closest('[data-i]'); if (!d) return; list.querySelectorAll('.sel').forEach(x => x.classList.remove('sel')); d.classList.add('sel'); if (isTouch) this.load(+d.dataset.i, true); });
      list.addEventListener('dblclick', e => { const d = e.target.closest('[data-i]'); if (d) this.load(+d.dataset.i, true); });
    }
    const cur = $('.cur', list); if (cur && cur.offsetTop > list.clientHeight - 20) list.scrollTop = cur.offsetTop - 30;
  },
  updatePlTime() { $('#wa-pl-time').textContent = `0:00/${fmt(PLAYLIST.reduce((a, t) => a + t.dur, 0))}`; },
  visLoop() {
    const levels = new Array(19).fill(0);
    this.visTimer = setInterval(() => {
      for (let i = 0; i < 19; i++) {
        const target = this.playing ? Math.random() * (1 - Math.abs(i - 6) / 22) * 16 : 0;
        levels[i] = target > levels[i] ? target : Math.max(0, levels[i] - 1.6);
        this.visBars[i].style.height = Math.round(levels[i]) + 'px';
      }
    }, 90);
  },
};

/* =========================== BOOT =========================== */
function chime() {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [[622.25, 0, .9], [466.16, .18, .9], [415.30, .36, .9], [622.25, .54, 1.4], [932.33, .72, 1.6]];
    for (const [f, t, d] of notes) {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = 'triangle'; o.frequency.value = f;
      g.gain.setValueAtTime(0, ac.currentTime + t); g.gain.linearRampToValueAtTime(.12, ac.currentTime + t + .03); g.gain.exponentialRampToValueAtTime(.0001, ac.currentTime + t + d);
      o.connect(g).connect(ac.destination); o.start(ac.currentTime + t); o.stop(ac.currentTime + t + d);
    }
  } catch {}
}

function boot() {
  const b = $('#boot');
  const go = () => {
    if (b.classList.contains('fade')) return;
    b.classList.add('fade'); chime();
    Winamp.play();                 // user gesture → autoplay allowed
    WM.focus('winamp');
    setTimeout(() => b.remove(), 700);
  };
  b.addEventListener('click', go);
  b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') go(); });
  const q = new URLSearchParams(location.search);
  if (q.has('desktop')) {          // ?desktop skips the boot screen (no autoplay without a gesture); &open=about,vaaya &start for previews
    b.remove(); WM.focus('winamp');
    (q.get('open') || '').split(',').filter(Boolean).forEach(id => WM.open(id));
    if (q.has('start')) StartMenu.toggle(true);
  }
}

/* =========================== INIT =========================== */
Wallpaper.init();
renderIcons();
initNote();
StartMenu.init();
initContextMenu();
tickClock(); setInterval(tickClock, 10_000);
Tray.init();
Winamp.init();
Taskbar.render();
boot();
