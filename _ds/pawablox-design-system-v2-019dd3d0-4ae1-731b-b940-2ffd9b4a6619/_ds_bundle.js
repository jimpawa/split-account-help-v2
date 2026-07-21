/* @ds-bundle: {"format":3,"namespace":"PawabloXDesignSystemV2_019dd3","components":[],"sourceHashes":{"ui_kits/betpawa/components.jsx":"a8e3ac1ecc85","ui_kits/betpawa/primitives.jsx":"e814f32e1e9b","ui_kits/betpawa/screens.jsx":"4c8181957209"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PawabloXDesignSystemV2_019dd3 = window.PawabloXDesignSystemV2_019dd3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/betpawa/components.jsx
try { (() => {
// pawabloX UI kit — screens (Home / Sports / Betslip / MyBets / Account)
const {
  useState,
  useEffect
} = React;

// ─── Header ────────────────────────────────────────────────
function Header({
  onMenu,
  balance = '1,250.00'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: '#171A1C',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    style: {
      background: 'transparent',
      border: 0,
      color: '#fff',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 22
  })), /*#__PURE__*/React.createElement(Logo, {
    size: 22,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: '#252A2D',
      padding: '6px 10px',
      borderRadius: 30,
      font: '700 13px/1 Roboto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.muted,
      fontWeight: 400,
      fontSize: 11
    }
  }, "KES"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.brand
    }
  }, balance), /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    color: T.brand
  })));
}

// ─── Top Nav (product switcher) ───────────────────────────
function TopNav({
  active,
  onChange
}) {
  const tabs = ['Sports', 'Live', 'Casino', 'Virtuals', 'Promotions'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      background: '#252A2D',
      overflow: 'auto',
      borderBottom: `1px solid ${T.mutedDk}`
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => onChange(t),
    style: {
      background: 'transparent',
      border: 0,
      color: active === t ? '#fff' : T.light300,
      font: '700 13px/1 Roboto',
      padding: '12px 16px',
      cursor: 'pointer',
      borderBottom: active === t ? `2px solid ${T.brand}` : '2px solid transparent',
      whiteSpace: 'nowrap'
    }
  }, t)));
}

// ─── Bottom Nav ───────────────────────────────────────────
function BottomNav({
  active,
  onChange
}) {
  const items = [{
    id: 'home',
    label: 'Home',
    icon: 'home'
  }, {
    id: 'sports',
    label: 'Sports',
    icon: 'football'
  }, {
    id: 'betslip',
    label: 'Betslip',
    icon: 'ticket',
    count: 2
  }, {
    id: 'mybets',
    label: 'My Bets',
    icon: 'trophy'
  }, {
    id: 'account',
    label: 'Account',
    icon: 'user'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      display: 'flex',
      background: '#171A1C',
      borderTop: `1px solid ${T.mutedDk}`,
      paddingBottom: 'env(safe-area-inset-bottom)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onChange(it.id),
    style: {
      flex: 1,
      background: 'transparent',
      border: 0,
      padding: '10px 4px 12px',
      cursor: 'pointer',
      color: active === it.id ? T.brand : T.light300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 22,
    color: active === it.id ? T.brand : T.light300
  }), it.count && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: '30%',
      background: T.brand,
      color: T.ink,
      font: '700 9px/1 Roboto',
      padding: '2px 5px',
      borderRadius: 8
    }
  }, it.count), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `${active === it.id ? 700 : 400} 10px/1 Roboto`
    }
  }, it.label))));
}

// ─── USP banner ────────────────────────────────────────────
function USP() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: T.border
    }
  }, [['Boosted odds', 'on Premier League'], ['Free Bet', 'for first deposit']].map(([a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 13px/1.2 Roboto',
      color: T.ink
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.2 Roboto',
      color: T.muted
    }
  }, b))));
}

// ─── Match row ────────────────────────────────────────────
function MatchRow({
  m,
  picks,
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '12px 14px',
      borderBottom: `1px solid ${T.surface}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: '400 11px/1 Roboto',
      color: T.muted,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, m.league), /*#__PURE__*/React.createElement("span", {
    style: {
      color: m.live ? T.red : T.muted,
      fontWeight: m.live ? 700 : 400
    }
  }, m.live ? '⬤ LIVE · ' + m.time : m.kickoff)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: '700 14px/1.4 Roboto',
      color: T.ink,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, m.home), /*#__PURE__*/React.createElement("div", null, m.away)), m.live && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      color: T.ink
    }
  }, /*#__PURE__*/React.createElement("div", null, m.score[0]), /*#__PURE__*/React.createElement("div", null, m.score[1]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Pick, {
    label: "1",
    odd: m.odds[0],
    active: picks[m.id] === '1',
    onClick: () => onPick(m.id, '1', m.odds[0], m.home)
  }), /*#__PURE__*/React.createElement(Pick, {
    label: "X",
    odd: m.odds[1],
    active: picks[m.id] === 'X',
    onClick: () => onPick(m.id, 'X', m.odds[1], 'Draw')
  }), /*#__PURE__*/React.createElement(Pick, {
    label: "2",
    odd: m.odds[2],
    active: picks[m.id] === '2',
    onClick: () => onPick(m.id, '2', m.odds[2], m.away)
  })));
}

// ─── Section header ──────────────────────────────────────
function SectionHeader({
  icon,
  title,
  action = 'See all'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 16px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      font: '700 16px/1 Roboto',
      color: T.ink
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px/1 Roboto',
      color: T.brandHover,
      cursor: 'pointer'
    }
  }, action));
}

// ─── Filter chips ──────────────────────────────────────────
function Chips({
  items,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '10px 16px',
      overflow: 'auto',
      background: '#fff',
      borderBottom: `1px solid ${T.surface}`
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    onClick: () => onChange(it),
    style: {
      font: `${active === it ? 700 : 400} 13px/1 Roboto`,
      padding: '8px 14px',
      borderRadius: 30,
      background: active === it ? T.ink : T.surface,
      color: active === it ? '#fff' : T.ink,
      border: 0,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, it)));
}
Object.assign(window, {
  Header,
  TopNav,
  BottomNav,
  USP,
  MatchRow,
  SectionHeader,
  Chips
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/betpawa/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/betpawa/primitives.jsx
try { (() => {
// pawabloX UI kit — shared primitives
// Exports primitives + helpers to window for use across the kit.

const {
  useState
} = React;

// ─── Tokens (mirror colors_and_type.css) ───────────────────
const T = {
  brand: '#9CE800',
  brandHover: '#8DC63F',
  brand950: '#3D5904',
  ink: '#252A2D',
  ink2: '#171A1C',
  surface: '#F2F2F3',
  border: '#E4E6E7',
  muted: '#7A8185',
  mutedDk: '#484F52',
  light300: '#AAAEB0',
  red: '#CC371B',
  orange: '#FF7A00',
  yellow: '#FEBA0C',
  purple: '#831AED',
  teal: '#22BFDB'
};

// ─── Logo ───────────────────────────────────────────────────
function Logo({
  size = 28,
  color = T.ink,
  word = true
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 43.155 42.583",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.007 0 L 7.715 0 L 0 42.583 L 13.038 42.583 L 15.311 28.708 L 27.811 28.708 C 42.404 28.708 43.062 14.833 43.062 14.833 C 44.497 -0.239 29.007 0 29.007 0 Z M 30.801 13.696 C 30.622 18.6 23.983 18.541 23.983 18.541 L 16.985 18.541 L 18.481 9.988 L 26.136 9.988 C 31.04 10.048 30.801 13.696 30.801 13.696 Z",
    fillRule: "nonzero"
  })), word && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `900 ${size * 0.85}px/1 Roboto, sans-serif`,
      color,
      letterSpacing: '-0.02em'
    }
  }, "etpawa"));
}

// ─── Icon (production pawaIconZ via assets/icons/sprite.svg) ──
// The sprite is fetched once and inlined at the top of <body> so <use href="#pIcon-X">
// works as a same-document reference. Cross-document <use> is unreliable in iframes.
const ICON_ALIAS = {
  home: 'Home',
  search: 'Search',
  bell: 'Bell',
  user: 'Account',
  menu: 'Menu',
  close: 'X',
  chevron: 'ChevronRight',
  star: 'Star',
  plus: 'Plus',
  flame: 'Flame',
  ticket: 'Betslip',
  wallet: 'Money',
  casino: 'Aviator',
  live: 'Flame',
  arrowL: 'ChevronLeft',
  check: 'Check',
  trophy: 'Trophy',
  football: 'FootballBall',
  basketball: 'Basketball',
  tennis: 'TennisBall',
  info: 'CirlceInfo',
  settings: 'Settings'
};
(function loadSprite() {
  if (window.__pawaSpriteLoaded) return;
  window.__pawaSpriteLoaded = true;
  fetch('../../assets/icons/sprite.svg').then(r => r.text()).then(txt => {
    const div = document.createElement('div');
    div.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    div.setAttribute('aria-hidden', 'true');
    div.innerHTML = txt;
    document.body.insertAdjacentElement('afterbegin', div);
  });
})();
function Icon({
  name,
  size = 20,
  color = 'currentColor'
}) {
  const sym = ICON_ALIAS[name] || name;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      color,
      flexShrink: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("use", {
    href: `#pIcon-${sym}`
  }));
}

// ─── Badge ──────────────────────────────────────────────────
function Badge({
  kind = 'live',
  children,
  dot
}) {
  const styles = {
    live: {
      bg: T.red,
      fg: '#fff'
    },
    boosted: {
      bg: 'linear-gradient(90deg,#831AED,#FF7A00)',
      fg: '#fff'
    },
    new: {
      bg: T.brand,
      fg: T.ink
    },
    hot: {
      bg: T.orange,
      fg: '#fff'
    },
    won: {
      bg: T.brand,
      fg: T.ink
    },
    lost: {
      bg: T.red,
      fg: '#fff'
    },
    open: {
      bg: T.border,
      fg: T.ink
    },
    void: {
      bg: T.muted,
      fg: '#fff'
    }
  };
  const s = styles[kind] || styles.live;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '700 10px/1 Roboto',
      padding: '4px 7px',
      borderRadius: 4,
      background: s.bg,
      color: s.fg,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#fff'
    }
  }), children);
}

// ─── Button ─────────────────────────────────────────────────
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  full,
  style
}) {
  const base = {
    font: `700 ${size === 'lg' ? 16 : size === 'sm' ? 12 : 14}px/1 Roboto`,
    padding: size === 'lg' ? '14px 20px' : size === 'sm' ? '8px 12px' : '12px 16px',
    borderRadius: 8,
    border: 0,
    cursor: 'pointer',
    width: full ? '100%' : 'auto',
    transition: '120ms',
    ...style
  };
  const variants = {
    primary: {
      background: T.brand,
      color: T.ink
    },
    secondary: {
      background: T.ink,
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: T.ink,
      border: `1.5px solid ${T.light300}`
    },
    ghost: {
      background: 'transparent',
      color: T.ink
    },
    danger: {
      background: T.red,
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...base,
      ...(variants[variant] || {})
    }
  }, children);
}

// ─── Pick (odds button) ────────────────────────────────────
function Pick({
  label,
  odd,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: active ? T.brand : T.surface,
      border: 0,
      borderRadius: 8,
      padding: '10px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      transition: '120ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px/1 Roboto',
      color: T.muted
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 14px/1 Roboto',
      color: T.ink
    }
  }, odd));
}
Object.assign(window, {
  T,
  Logo,
  Icon,
  Badge,
  Button,
  Pick
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/betpawa/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/betpawa/screens.jsx
try { (() => {
// pawabloX UI kit — screens
const {
  useState: useStateS,
  useEffect: useEffectS
} = React;
const MATCHES = [{
  id: 'm1',
  league: 'Premier League',
  live: true,
  time: "87'",
  home: 'Manchester City',
  away: 'Arsenal',
  score: [2, 1],
  odds: [1.85, 3.40, 4.20]
}, {
  id: 'm2',
  league: 'La Liga',
  live: true,
  time: "43'",
  home: 'Real Madrid',
  away: 'Barcelona',
  score: [1, 1],
  odds: [2.10, 3.25, 3.40]
}, {
  id: 'm3',
  league: 'Bundesliga',
  live: false,
  kickoff: '18:30',
  home: 'Bayern München',
  away: 'Dortmund',
  odds: [1.55, 4.20, 5.50]
}, {
  id: 'm4',
  league: 'Serie A',
  live: false,
  kickoff: '21:00',
  home: 'Inter',
  away: 'Juventus',
  odds: [2.05, 3.10, 3.80]
}, {
  id: 'm5',
  league: 'Ligue 1',
  live: false,
  kickoff: 'Tomorrow',
  home: 'Paris Saint-Germain',
  away: 'Marseille',
  odds: [1.40, 4.80, 7.50]
}, {
  id: 'm6',
  league: 'KPL Kenya',
  live: false,
  kickoff: 'Tomorrow',
  home: 'Gor Mahia',
  away: 'AFC Leopards',
  odds: [2.20, 3.00, 3.30]
}];
function ScreenHome({
  picks,
  onPick
}) {
  const [filter, setFilter] = useStateS('Top');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(USP, null), /*#__PURE__*/React.createElement(SectionHeader, {
    icon: "flame",
    title: "Top Picks"
  }), /*#__PURE__*/React.createElement(Chips, {
    items: ['Top', 'Live', 'Today', 'Tomorrow', 'Boosted'],
    active: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", null, MATCHES.slice(0, 4).map(m => /*#__PURE__*/React.createElement(MatchRow, {
    key: m.id,
    m: m,
    picks: picks,
    onPick: onPick
  }))), /*#__PURE__*/React.createElement(SectionHeader, {
    icon: "trophy",
    title: "Top Leagues"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: T.border
    }
  }, ['Premier League', 'La Liga', 'Bundesliga', 'Champions League'].map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: '#fff',
      padding: '14px 16px',
      font: '700 14px/1.2 Roboto',
      color: T.ink,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "football",
    size: 20,
    color: T.muted
  }), l))));
}
function ScreenSports({
  picks,
  onPick
}) {
  const [sport, setSport] = useStateS('Football');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chips, {
    items: ['Football', 'Basketball', 'Tennis', 'Rugby', 'Cricket', 'Boxing'],
    active: sport,
    onChange: setSport
  }), /*#__PURE__*/React.createElement(SectionHeader, {
    icon: sport === 'Basketball' ? 'basketball' : sport === 'Tennis' ? 'tennis' : 'football',
    title: sport + ' · All matches'
  }), /*#__PURE__*/React.createElement("div", null, MATCHES.map(m => /*#__PURE__*/React.createElement(MatchRow, {
    key: m.id,
    m: m,
    picks: picks,
    onPick: onPick
  }))));
}
function ScreenBetslip({
  picks,
  setPicks,
  balance,
  setBalance
}) {
  const [stake, setStake] = useStateS(500);
  const [placed, setPlaced] = useStateS(false);
  const entries = Object.entries(picks);
  const totalOdds = entries.reduce((acc, [, v]) => acc * v.odd, 1);
  const win = (stake * totalOdds).toFixed(2);
  const place = () => {
    setBalance(b => b - stake);
    setPlaced(true);
    setTimeout(() => {
      setPicks({});
      setPlaced(false);
    }, 2200);
  };
  if (placed) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      margin: '0 auto 16px',
      borderRadius: '50%',
      background: T.brand,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36,
    color: T.ink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 20px/1.2 Roboto',
      color: T.ink,
      marginBottom: 6
    }
  }, "Bet placed"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.4 Roboto',
      color: T.muted
    }
  }, "Tracking in My Bets \xB7 Potential win KES ", win));
  if (!entries.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ticket",
    size: 56,
    color: T.light300
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 18px/1.2 Roboto',
      color: T.ink,
      margin: '14px 0 6px'
    }
  }, "Your betslip is empty"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.4 Roboto',
      color: T.muted
    }
  }, "Tap any odds to add a pick."));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px/1 Roboto',
      color: T.ink,
      marginBottom: 12,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Multi \xB7 ", entries.length, " picks"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPicks({}),
    style: {
      background: 'transparent',
      border: 0,
      color: T.muted,
      font: '400 13px/1 Roboto',
      cursor: 'pointer'
    }
  }, "Clear all")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 12
    }
  }, entries.map(([id, v]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      padding: '12px 14px',
      borderBottom: `1px solid ${T.surface}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px/1.2 Roboto',
      color: T.ink
    }
  }, v.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 14px/1 Roboto',
      color: T.ink
    }
  }, v.odd)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 Roboto',
      color: T.muted,
      marginTop: 2
    }
  }, v.market))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      display: 'flex',
      justifyContent: 'space-between',
      font: '700 14px/1 Roboto',
      color: T.ink
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total odds"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: T.ink,
      color: T.brand,
      padding: '4px 8px',
      borderRadius: 6
    }
  }, totalOdds.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '14px 0'
    }
  }, [100, 500, 1000, 5000].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setStake(v),
    style: {
      flex: 1,
      padding: '8px 0',
      background: stake === v ? T.ink : T.surface,
      color: stake === v ? '#fff' : T.ink,
      border: 0,
      borderRadius: 8,
      font: '700 12px/1 Roboto',
      cursor: 'pointer'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 Roboto',
      color: T.mutedDk,
      marginBottom: 6
    }
  }, "Stake (KES)"), /*#__PURE__*/React.createElement("input", {
    value: stake,
    onChange: e => setStake(Number(e.target.value) || 0),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '14px',
      borderRadius: 8,
      border: `1.5px solid ${T.border}`,
      font: '700 18px Roboto',
      color: T.ink
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderTop: `1px solid ${T.border}`,
      font: '700 16px/1 Roboto',
      color: T.ink,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "Potential win"), /*#__PURE__*/React.createElement("span", null, "KES ", win)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true,
    onClick: place,
    style: {
      borderRadius: 12
    }
  }, "Place Bet \xB7 KES ", stake));
}
const FAKE_BETS = [{
  id: 'b1',
  status: 'open',
  kind: 'Multi',
  picks: 2,
  stake: 200,
  odds: 3.18,
  win: 636,
  items: [['Man City', 'Match Result', '1.85'], ['Over 2.5', 'Total Goals', '1.72']]
}, {
  id: 'b2',
  status: 'won',
  kind: 'Single',
  picks: 1,
  stake: 500,
  odds: 2.10,
  win: 1050,
  items: [['Real Madrid', 'Match Result', '2.10']]
}, {
  id: 'b3',
  status: 'lost',
  kind: 'Multi',
  picks: 3,
  stake: 100,
  odds: 6.50,
  win: 0,
  items: [['Inter', 'Match Result', '2.05'], ['BTTS', 'Both Score', '1.85'], ['Over 1.5', 'Liverpool vs Chelsea', '1.55']]
}];
function ScreenMyBets() {
  const [tab, setTab] = useStateS('Open');
  const filtered = FAKE_BETS.filter(b => tab === 'Open' ? b.status === 'open' : tab === 'Settled' ? b.status !== 'open' : true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      display: 'flex',
      gap: 24,
      padding: '0 16px',
      borderBottom: `1px solid ${T.border}`
    }
  }, ['Open', 'Settled', 'Cashed Out'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      font: `700 14px/1 Roboto`,
      padding: '14px 0',
      background: 'transparent',
      border: 0,
      color: tab === t ? T.ink : T.muted,
      borderBottom: `2px solid ${tab === t ? T.brand : 'transparent'}`,
      marginBottom: -1,
      cursor: 'pointer'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, filtered.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    style: {
      background: '#fff',
      borderRadius: 12,
      padding: 14,
      boxShadow: '0 1px 3px rgba(23,26,28,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 13px/1 Roboto',
      color: T.ink
    }
  }, b.kind, " \xB7 ", b.picks, " pick", b.picks > 1 ? 's' : ''), /*#__PURE__*/React.createElement(Badge, {
    kind: b.status
  }, b.status)), b.items.map(([n, m, o], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px 0',
      font: '400 13px/1.3 Roboto',
      color: T.ink,
      borderBottom: i < b.items.length - 1 ? `1px solid ${T.surface}` : '0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      color: T.muted,
      fontSize: 11
    }
  }, m)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, o))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingTop: 10,
      borderTop: `1px solid ${T.surface}`,
      font: '400 12px/1 Roboto',
      color: T.muted
    }
  }, /*#__PURE__*/React.createElement("span", null, "Stake KES ", b.stake), /*#__PURE__*/React.createElement("span", null, "Odds ", b.odds), /*#__PURE__*/React.createElement("span", {
    style: {
      color: b.status === 'won' ? T.brand950 : T.ink,
      fontWeight: 700
    }
  }, "KES ", b.win)), b.status === 'open' && /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    full: true,
    style: {
      marginTop: 10
    }
  }, "Cash Out \xB7 KES ", Math.round(b.stake * b.odds * 0.7))))));
}
function ScreenAccount({
  balance
}) {
  const items = [{
    label: 'Deposit',
    icon: 'wallet'
  }, {
    label: 'Withdraw',
    icon: 'wallet'
  }, {
    label: 'My Bets',
    icon: 'trophy'
  }, {
    label: 'Statement',
    icon: 'ticket'
  }, {
    label: 'Notifications',
    icon: 'bell'
  }, {
    label: 'Help',
    icon: 'info'
  }, {
    label: 'Settings',
    icon: 'settings'
  }, {
    label: 'Responsible Gambling',
    icon: 'star'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#171A1C',
      color: '#fff',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1 Roboto',
      color: T.light300,
      marginBottom: 4
    }
  }, "Balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 28px/1 Roboto',
      color: T.brand
    }
  }, "KES ", balance.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    size: "md"
  }, "Deposit"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    full: true,
    size: "md",
    style: {
      color: '#fff',
      borderColor: T.mutedDk
    }
  }, "Withdraw"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 16px',
      borderBottom: i < items.length - 1 ? `1px solid ${T.surface}` : '0',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 22,
    color: T.mutedDk
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '400 15px/1 Roboto',
      color: T.ink
    }
  }, it.label), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 16,
    color: T.muted
  })))));
}
Object.assign(window, {
  ScreenHome,
  ScreenSports,
  ScreenBetslip,
  ScreenMyBets,
  ScreenAccount
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/betpawa/screens.jsx", error: String((e && e.message) || e) }); }

})();
