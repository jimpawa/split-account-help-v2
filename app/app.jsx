/* ══════════════════════════════════════════════════════════════════════
 * betPawa SSOT — app root: state, router, device shell
 * ══════════════════════════════════════════════════════════════════════ */

const SCREENS = {
  home: HomeScreen, sports: SportsScreen, event: EventScreen, mybets: MyBetsScreen,
  casino: CasinoScreen, aviator: CasinoScreen, search: SearchScreen, deposit: DepositScreen,
  login: LoginScreen, postbet: PostBetScreen, betdetails: BetDetailsScreen, game: GameScreen,
};

function StatusBar() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => { const id = setInterval(() => setT(new Date()), 20000); return () => clearInterval(id); }, []);
  const hh = t.getHours(), mm = String(t.getMinutes()).padStart(2, "0");
  return (
    <div className="statusbar">
      <span className="time">{((hh % 12) || 12)}:{mm}</span>
      <span className="sysico">
        <svg viewBox="0 0 20 14" width="18" height="13"><g fill="currentColor">
          <rect x="0" y="9" width="3" height="5" rx="1" /><rect x="5" y="6" width="3" height="8" rx="1" /><rect x="10" y="3" width="3" height="11" rx="1" /><rect x="15" y="0" width="3" height="14" rx="1" /></g></svg>
        <Icon name="Wifi" size={16} />
        <svg viewBox="0 0 26 14" width="24" height="13"><rect x="1" y="1" width="21" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.3" opacity=".5" /><rect x="3" y="3" width="15" height="8" rx="1.5" fill="currentColor" /><rect x="23" y="4.5" width="2" height="5" rx="1" fill="currentColor" opacity=".6" /></svg>
      </span>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState("home");
  const DEVICES = {
    se5: { nm: "iPhone 5/SE", w: 320, h: 640 },
    se: { nm: "iPhone 12 Pro", w: 390, h: 844 },
    ip: { nm: "iPhone 14 Pro", w: 430, h: 932 },
    px: { nm: "Pixel 7", w: 412, h: 915 },
    ipad: { nm: "iPad Mini", w: 768, h: 1024 },
    desk: { nm: "Desktop", w: 1280, h: 800 },
  };
  const [device, setDevice] = useState("ip");
  const [params, setParams] = useState({});
  const [stack, setStack] = useState([]);
  const [theme, setTheme] = useState(() => localStorage.getItem("bp_theme_v2") || "dark");
  const [loggedIn, setLoggedIn] = useState(true);
  const [balance, setBalanceState] = useState(48250);
  const [betslip, setBetslip] = useState([]);
  const [betslipOpen, setBetslipOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);
  const toastT = useRef(null);

  const [openBets, setOpenBets] = useState([
    { id: "#9359002201", type: "Multi", legs: 3, when: "Today · Mon 08 Jun", status: "open", live: false,
      odds: 6.85, stake: 200, returns: 1370, legsState: { won: 0, lost: 0, pending: 3 },
      selections: [
        { sel: "Mexico", matchLabel: "Mexico v South Africa", od: 1.62, mkt: "1X2 | Full Time", comp: "World Cup 2026", time: "11:00 pm, Thu 11 Jun" },
        { sel: "England", matchLabel: "England v Ghana", od: 1.46, mkt: "1X2 | Full Time", comp: "World Cup 2026", time: "9:00 pm, Sat 13 Jun" },
        { sel: "Over 2.5", matchLabel: "France v Senegal", od: 1.95, mkt: "Over/Under", comp: "World Cup 2026", time: "8:00 pm, Mon 15 Jun" }] },
    { id: "#9359010044", type: "Single", legs: 1, when: "Today · Mon 08 Jun", status: "open", live: false,
      odds: 1.62, stake: 500, returns: 810, pick: "Mexico", mkt: "1X2 | Full Time",
      legsState: { won: 0, lost: 0, pending: 1 },
      selections: [{ sel: "Mexico", matchLabel: "Mexico v South Africa", od: 1.62, mkt: "1X2 | Full Time", comp: "World Cup 2026", time: "11:00 pm, Thu 11 Jun" }] },
  ]);

  useEffect(() => { localStorage.setItem("bp_theme_v2", theme); }, [theme]);

  const toast = (msg) => { setToastMsg(msg); clearTimeout(toastT.current); toastT.current = setTimeout(() => setToastMsg(null), 2200); };
  const nav = (s, p) => { setStack((st) => [...st, { screen, params }]); setScreen(s); setParams(p || {}); setBetslipOpen(false); setAccountOpen(false); setMenuOpen(false); setHelpOpen(false); };
  const back = () => { setStack((st) => { if (!st.length) { setScreen("home"); setParams({}); return st; } const prev = st[st.length - 1]; setScreen(prev.screen); setParams(prev.params); return st.slice(0, -1); }); };

  const isSel = (key) => betslip.some((s) => s.key === key);
  // One selection per event (matchId): adding a different market on the same
  // event replaces the previous pick. Same key toggles off.
  const toggleSel = (sel) => setBetslip((bs) => {
    if (bs.some((s) => s.key === sel.key)) return bs.filter((s) => s.key !== sel.key);
    const cleaned = sel.matchId != null ? bs.filter((s) => s.matchId !== sel.matchId) : bs;
    return [...cleaned, sel];
  });
  const clearBetslip = () => setBetslip([]);

  const setBalance = (v) => setBalanceState(v);
  const login = () => setLoggedIn(true);
  const logout = () => { setLoggedIn(false); setAccountOpen(false); };
  const toggleTheme = () => setTheme((t) => t === "dark" ? "light" : "dark");

  const placeBet = (bet) => {
    setOpenBets((b) => [bet, ...b]);
    setBalanceState((bal) => bal - bet.stake);
    setBetslip([]); setBetslipOpen(false);
    nav("postbet", { bet });
  };
  const cashout = (b) => {
    const amt = Math.round(b.returns * 0.78);
    setOpenBets((list) => list.filter((x) => x.id !== b.id));
    setBalanceState((bal) => bal + amt);
    toast("Cashed out " + window.BP.money(amt));
  };
  const demoPostBet = () => {
    const sels = [
      { sel: "Mexico", matchLabel: "Mexico v South Africa", od: 1.62, mkt: "1X2 | Full Time" },
      { sel: "England", matchLabel: "England v Ghana", od: 1.46, mkt: "1X2 | Full Time" },
      { sel: "Over 2.5", matchLabel: "France v Senegal", od: 1.95, mkt: "Over/Under" }];
    const odds = sels.reduce((a, s) => a * s.od, 1);
    nav("postbet", { bet: { id: "#93590" + Math.floor(Math.random() * 99999), type: "Multi", stake: 200, odds: +odds.toFixed(2), returns: Math.round(200 * odds * 1.1), selections: sels } });
  };

  const app = {
    screen, params, nav, back, theme, toggleTheme, loggedIn, login, logout, balance, setBalance,
    betslip, isSel, toggleSel, clearBetslip, openBets,
    openBetslip: () => { setAccountOpen(false); setMenuOpen(false); setBetslipOpen(true); }, closeBetslip: () => setBetslipOpen(false),
    openAccount: () => { setBetslipOpen(false); setMenuOpen(false); setAccountOpen(true); }, closeAccount: () => setAccountOpen(false),
    openMenu: () => { setBetslipOpen(false); setAccountOpen(false); setMenuOpen(true); }, closeMenu: () => setMenuOpen(false),
    openHelp: () => { setBetslipOpen(false); setAccountOpen(false); setMenuOpen(false); setHelpOpen(true); }, closeHelp: () => setHelpOpen(false),
    openDeposit: (mode) => { nav("deposit", { mode: mode || "deposit" }); },
    placeBet, cashout, demoPostBet, toast,
  };

  const Cur = SCREENS[screen] || HomeScreen;
  const isHub = screen === "hub";

  // App / kiosk mode for usability testing (Maze etc): fill the viewport,
  // drop the device bezel + SSOT toolbar. Triggered by ?app / ?maze / ?embed
  // in the URL, or window.__APP_MODE = true (set by the offline export).
  const APP_MODE = (typeof window !== "undefined") &&
    (window.__APP_MODE === true || /[?&](app|maze|embed)(=|&|$)/i.test(window.location.search));
  useEffect(() => {
    document.body.classList.toggle("appmode", !!APP_MODE);
  }, [APP_MODE]);

  return (
    <AppCtx.Provider value={app}>
      {!APP_MODE ? (
      <div className="ssotbar ssotbar--min">
        <div className="ssotbar__seg">
          <button className={theme === "light" ? "on" : ""} onClick={() => setTheme("light")}>Light</button>
          <button className={theme === "dark" ? "on" : ""} onClick={() => setTheme("dark")}>Dark</button>
        </div>
      </div>
      ) : null}

      <div className="stagewrap">
        <div className="device" data-theme={theme} style={APP_MODE ? undefined : { width: DEVICES[device].w + 22 }}>
          <div className="device__scr" style={APP_MODE ? undefined : { width: DEVICES[device].w, height: DEVICES[device].h }}>
            <div className={"phone" + (theme === "dark" ? " dark" : "")}>
              <StatusBar />
              {isHub ? <HubScreen /> : <Cur key={screen + JSON.stringify(params)} params={params} />}
              <BetslipSheet open={betslipOpen} onClose={() => setBetslipOpen(false)} />
              <AccountSheet open={accountOpen} onClose={() => setAccountOpen(false)} />
              <MenuSheet open={menuOpen} onClose={() => setMenuOpen(false)} />
              <HelpSheet open={helpOpen} onClose={() => setHelpOpen(false)} />
              <div className={"toast" + (toastMsg ? " show" : "")}><Icon name="Check" size={18} />{toastMsg}</div>
            </div>
          </div>
        </div>
      </div>
    </AppCtx.Provider>
  );
}

(window.__spriteReady || Promise.resolve()).then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
});
