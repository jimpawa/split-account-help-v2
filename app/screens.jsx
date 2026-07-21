/* ══════════════════════════════════════════════════════════════════════
 * betPawa SSOT — screens (1/2): Home · Sports · Event · MyBets
 * ══════════════════════════════════════════════════════════════════════ */

/* Shared USP block (Why betPawa) */
function USP() {
  const [open, setOpen] = useState(true);
  const rows = [
  { ic: "Percent", t: "1250% Win Bonus", s: "Win up to 1250% with no minimum stake!" },
  { ic: "Star", t: "2up Early Settlement", s: "Some great odds on 1x2 & DC including live" },
  { ic: "Aviator", t: "Biggest Aviator Wins", s: "Play from ₦1 for Nigeria's biggest max win." }];

  return (
    <div className={"usp" + (open ? "" : " collapsed")}>
      <div className="usp__hd">
        <span className="t">Why betPawa?</span>
        <button className="c" aria-label={open ? "Collapse" : "Expand"} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name="ChevronUp" /></button>
      </div>
      <div className="usp__list">
          {rows.map((r) =>
        <div className="usp__row" key={r.t}>
              <span className="usp__ico"><Icon name={r.ic} /></span>
              <span className="usp__tx"><span className="t">{r.t}</span><span className="s">{r.s}</span></span>
            </div>
        )}
        </div>
    </div>);

}

function QuickChips() {
  const app = useApp();
  return (
    <div className="pchips">
      {window.BP.quickChips.map((c, i) =>
      <button className="pChip" key={i} onClick={() => { if (c.label === "Live") return app.nav("sports", { tab: "live" }); if (/ v /.test(c.label)) return app.nav("sports"); app.nav("sports", { league: c.label }); }}>
          {c.icon ? <Icon name={c.icon} cls="pChip__icon" style={c.accent ? { color: "var(--orange)" } : null} /> : <span className="pChip__icon"><Flag code={c.flag} size={20} /></span>}
          {c.label}<span className="pChip__n">{c.n}</span>
        </button>
      )}
    </div>);

}

/* Top Competitions — real leagues row from the live betpawa.ng homepage */
function TopCompetitions() {
  const app = useApp();
  return (
    <div className="sec">
      <SectionHeader icon="Trophy" title="Top Competitions" onMore={() => app.nav("sports")} />
      <div className="comps">
        {window.BP.topComps.map((c) =>
        <button className="comp-tile" key={c.id} onClick={() => app.nav("sports")}>
            <div className="comp-tile__top">
              <span className="comp-tile__badge">{c.cc ? <Flag code={c.cc} size={28} /> : <Icon name={c.ico || "Trophy"} />}</span>
              <span className="comp-tile__n">{c.n}</span>
            </div>
            <span className="comp-tile__nm">{c.nm}</span>
          </button>
        )}
      </div>
    </div>);

}

function WCBanner() {
  const app = useApp();
  return (
    <div className="usp" style={{ background: "var(--usp-grad)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span className="usp__ico" style={{ width: 44, height: 44 }}><Icon name="Trophy" /></span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ font: "700 11px/1 Roboto", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>FIFA World Cup 2026</div>
          <div style={{ font: "900 20px/24px Roboto", color: "var(--text)", marginTop: 4 }}>Kicks off in 3 days</div>
          <div style={{ font: "400 13px/18px Roboto", color: "var(--muted)", marginTop: 2 }}>104 matches · USA · Canada · Mexico</div>
        </div>
      </div>
      <button className="viewmore" style={{ marginTop: 12 }} onClick={() => app.nav("sports")}>
        <Icon name="FootballBall" />View all World Cup markets
      </button>
    </div>);

}

function HomeScreen() {
  const app = useApp();
  const BP = window.BP;
  const [show1up, setShow1up] = useState(false);
  return (
    <>
      <Header />
      <TopNav active="home" />
      <div className="scroll fadein">
        <USP />
        <QuickChips />

        <div className="sec">
          <SectionHeader icon="CirlceInfo" title="Popular Combos" />
          <div className="hscroll">{BP.combos.map((c, i) => <HomeComboCard key={c.id} c={c} index={i} />)}</div>
        </div>

        <div className="sec">
          <div className="sec__hd">
            <Icon name="FootballBall" cls="ico" size={22} />
            <h3>Football</h3>
            <button className="sec__count" onClick={() => app.nav("sports")}>753<Icon name="ChevronRight" /></button>
          </div>
          <label className="show1up">
            <span>Show 1UP &amp; 2UP</span>
            <button className={"sw2" + (show1up ? " on" : "")} onClick={() => setShow1up(!show1up)} aria-pressed={show1up}></button>
          </label>
          {BP.boosted.concat(BP.featured).slice(0, 5).map((m) => <MatchCard key={m.id} m={m} extra={show1up} />)}
          <button className="viewmore" onClick={() => app.nav("sports")}><Icon name="FootballBall" />View all Football (753)</button>
        </div>

        <div className="sec">
          <SectionHeader icon="Activity" title="Live" count={BP.live.length} onMore={() => app.nav("sports", { tab: "live" })} />
          {BP.live.map((m) => <MatchCard key={m.id} m={m} />)}
          <button className="viewmore" onClick={() => app.nav("sports", { tab: "live" })}><Icon name="Activity" />View all Live (34)</button>
        </div>

        <div className="sec">
          <SectionHeader icon="LayoutGrid" title="Games" count={1147} onMore={() => app.nav("casino")} />
          <div className="games">
            {BP.casino.games.slice(0, 6).map((g, i) =>
            <div className="gtile" key={i} style={{ background: g.grad }} onClick={() => app.nav("casino")}>
                <image-slot id={"game-" + i} shape="rect" fit="cover" src={g.img || ""} placeholder={g.name}></image-slot>
                <div className="gtile__scrim"></div>
                {g.tag ? <span className="tag">{g.tag}</span> : null}
              </div>
            )}
          </div>
        </div>

        <div className="sec">
          <SectionHeader icon="FootballBall" title="eFootball" count={25} onMore={() => app.nav("sports")} />
          {BP.efootball.map((m) => <MatchCard key={m.id} m={m} />)}
          <button className="viewmore" onClick={() => app.nav("sports")}><Icon name="FootballBall" />View all eFootball (25)</button>
        </div>

        <div className="sec">
          <SectionHeader icon="Basketball" title="Basketball" count={28} onMore={() => app.nav("sports")} />
          {BP.basketball.map((m) => <MatchCard key={m.id} m={m} />)}
          <button className="viewmore" onClick={() => app.nav("sports")}><Icon name="Basketball" />View all Basketball (28)</button>
        </div>

        <div className="sec">
          <SectionHeader icon="TennisBall" title="Tennis" count={85} onMore={() => app.nav("sports")} />
          {BP.tennis.map((m) => <MatchCard key={m.id} m={m} />)}
          <button className="viewmore" onClick={() => app.nav("sports")}><Icon name="TennisBall" />View all Tennis (85)</button>
        </div>

        <Footer />
      </div>
      <PromoBar />
      <BottomNav active="home" />
    </>);

}

/* ────────────────────────── Sports ────────────────────────── */
/* ────────────────────────── Sports — exact betPawa DS Sports page (ui_kits/betpawa/sports.html) ────────────────────────── */
function SportsScreen({ params }) {
  const app = useApp();
  const BP = window.BP;
  const [tab, setTab] = useState(params.tab || "upcoming");
  const [dd, setDd] = useState(null);
  const [chipsHidden, setChipsHidden] = useState(false);
  const lastScroll = useRef(0);
  const onScrollDir = (e) => {
    const y = e.target.scrollTop;
    if (y <= 8) setChipsHidden(false);
    else if (y > lastScroll.current + 4) setChipsHidden(true);
    else if (y < lastScroll.current - 4) setChipsHidden(false);
    lastScroll.current = y;
  };
  const [sport, setSport] = useState("football");
  const [market, setMarket] = useState("1X2");
  const [dateSel, setDateSel] = useState("All");
  const [leagueSel, setLeagueSel] = useState(() => params.league ? new Set([params.league]) : new Set());
  const sports = [
  { id: "football", nm: "Football", ic: "FootballBall", n: 958 },
  { id: "basketball", nm: "Basketball", ic: "Basketball", n: 49 },
  { id: "efootball", nm: "eFootball", ic: "FootballBall", n: 27 },
  { id: "mma", nm: "MMA", ic: "Trophy", n: 12 },
  { id: "tennis", nm: "Tennis", ic: "TennisBall", n: 66 }];
  const curSport = sports.find((s) => s.id === sport) || sports[0];
  const leaguesList = [{ nm: "All Popular Leagues", n: 88, all: true }].concat(BP.topComps);
  const marketTypes = ["1X2", "1X2 1UP", "1X2 2UP", "Total Goals Over/Under", "Home Team Over/Under", "Away Team Over/Under", "Double Chance", "Both Teams to Score (GG/NG)", "1X2 First Half", "Over/Under First Half", "1X2 - Interval 10 minutes (00:01-09:59)"];
  const dates = [["All", 644], ["Today", 165], ["Tomorrow", 281], ["Sunday", 94], ["Monday", 30], ["Tuesday", 22], ["Wednesday", 9], ["Thursday", 43]];
  const toggleLeague = (nm) => setLeagueSel((s) => { const n = new Set(s); n.has(nm) ? n.delete(nm) : n.add(nm); return n; });
  const toggleDd = (id) => setDd((d) => d === id ? null : id);
  const tabs = [
  { id: "upcoming", l: "Upcoming", ic: "Timer" },
  { id: "popular", l: "Popular", ic: "Flame" },
  { id: "live", l: "Live", ic: "Activity" },
  { id: "boosted", l: "Boosted", ic: "ChevronsUp" },
  { id: "jackpot", l: "Jackpot" }];

  const sportBase = sport === "basketball" ? BP.basketball :
  sport === "efootball" ? BP.efootball :
  sport === "tennis" ? BP.tennis :
  sport === "mma" ? [] :
  tab === "live" ? BP.live :
  tab === "popular" ? BP.boosted.concat(BP.featured.slice(0, 6)) :
  tab === "boosted" ? BP.boosted :
  BP.featured;
  let list = sportBase;
  if (leagueSel.size && !leagueSel.has("All Popular Leagues")) {
    const wanted = [...leagueSel].map((l) => l.toLowerCase());
    const filtered = sportBase.filter((m) => { const c = (m.comp || "").toLowerCase(); return wanted.some((w) => c.includes(w) || w.includes(c) || w.split(" ").some((tok) => tok.length > 3 && c.includes(tok))); });
    if (filtered.length) list = filtered;
  }
  return (
    <>
      <Header />
      {/* Sport tabs — replaces the product switcher on the Sports page */}
      <div className="topnav">
        <div className="scrollrow">
          {tabs.map((t) =>
          <button key={t.id} className={"t" + (tab === t.id ? " on" : "")} onClick={() => setTab(t.id)}>
              {t.ic ? <Icon name={t.ic} size={18} /> : null}{t.l}
            </button>
          )}
        </div>
        <button className="more" aria-label="More"><Icon name="ChevronDown" size={18} /></button>
      </div>
      {/* Filter chips */}
      <div className={"sfilters" + (chipsHidden && !dd ? " sfilters--hidden" : "")}>
        <button className={"chip2 chip2--icon" + (dd === "sport" ? " on" : "")} onClick={() => toggleDd("sport")}><Icon name={curSport.ic} cls="lead" size={20} /><Icon name={dd === "sport" ? "ChevronUp" : "ChevronDown"} cls="chev" size={16} /></button>
        <button className={"chip2" + (dd === "leagues" ? " on" : "")} onClick={() => toggleDd("leagues")}>Leagues<Icon name={dd === "leagues" ? "ChevronUp" : "ChevronDown"} cls="chev" size={16} /></button>
        <button className={"chip2" + (dd === "markets" ? " on" : "")} onClick={() => toggleDd("markets")}>Markets<Icon name={dd === "markets" ? "ChevronUp" : "ChevronDown"} cls="chev" size={16} /></button>
        <button className={"chip2 chip2--icon" + (dd === "date" ? " on" : "")} onClick={() => toggleDd("date")}><Icon name="Calendar" cls="lead" size={20} /><Icon name={dd === "date" ? "ChevronUp" : "ChevronDown"} cls="chev" size={16} /></button>
      </div>
      {!dd && (leagueSel.size || market !== "1X2" || dateSel !== "All") ?
      <div className="factive">
        <button className="factive__clear" onClick={() => { setLeagueSel(new Set()); setMarket("1X2"); setDateSel("All"); }}>Clear All</button>
        {market !== "1X2" ? <span className="fpill">{market}<button onClick={() => setMarket("1X2")}><Icon name="X" size={14} /></button></span> : null}
        {[...leagueSel].map((nm) =>
        <span className="fpill" key={nm}><Icon name="Trophy" size={16} cls="ic" />{nm}<button onClick={() => toggleLeague(nm)}><Icon name="X" size={14} /></button></span>
        )}
        {dateSel !== "All" ? <span className="fpill"><Icon name="Calendar" size={16} cls="ic" />{dateSel}<button onClick={() => setDateSel("All")}><Icon name="X" size={14} /></button></span> : null}
      </div> : null}
      <div className="sportswrap">
      <div className="scroll fadein" key={sport + tab + market + dateSel + [...leagueSel].join()} onScroll={onScrollDir}>
        {list.length ? list.map((m, i) => <MatchCard key={m.id + i} m={m} />) :
        <div className="empty"><span className="empty__ic"><Icon name="FootballBall" size={32} /></span>
          <span className="empty__t">No events</span><span className="empty__s">No {curSport.nm} events match your filters right now.</span></div>}
        <div style={{ height: 4 }}></div>
      </div>
      {dd ?
      <div className="fdrop-ov"><div className="fdrop-ov__bg" onClick={() => setDd(null)}></div>
      <div className={"fdrop fadein" + (dd === "sport" ? " fdrop--hug" : "")} key={dd}>
        {dd === "sport" ?
        <div className="fdrop__list">
          {sports.map((s) =>
          <button key={s.id} className={"fdrop__row fdrop__row--sport" + (sport === s.id ? " on" : "")} onClick={() => { setSport(s.id); setDd(null); }}>
              <Icon name={s.ic} cls="ic" size={22} /><span className="nm">{s.nm}</span><span className="n">{s.n}</span>
            </button>
          )}
        </div> : null}
        {dd === "leagues" ?
        <>
          <button className="fdrop__back" onClick={() => setDd(null)}><Icon name="ChevronLeft" size={18} /><span>Back to all {curSport.nm}</span><span className="n">{curSport.n}</span></button>
          <div className="fdrop__scroll">
            <div className="fdrop__sechd">Popular Leagues<Icon name="ChevronUp" size={18} /></div>
            {leaguesList.map((l) =>
            <button key={l.nm} className="fdrop__row" onClick={() => toggleLeague(l.nm)}>
                <span className={"fdrop__cb" + (leagueSel.has(l.nm) ? " on" : "")}>{leagueSel.has(l.nm) ? <Icon name="Check" size={14} /> : null}</span>
                {l.all ? null : l.cc ? <Flag code={l.cc} size={20} /> : <Icon name={l.ico || "Trophy"} cls="ic" size={20} />}
                <span className="nm">{l.nm}</span><span className="n">{l.n}</span>
              </button>
            )}
            <div className="fdrop__sechd">Popular Countries<Icon name="ChevronDown" size={18} /></div>
          </div>
          <div className="fdrop__foot">
            <button className="reset" onClick={() => setLeagueSel(new Set())}>RESET FILTERS</button>
            <button className="apply" onClick={() => setDd(null)}>APPLY</button>
          </div>
        </> : null}
        {dd === "markets" ?
        <>
          <div className="fdrop__list">
            {marketTypes.map((mt) =>
            <button key={mt} className="fdrop__row" onClick={() => setMarket(mt)}>
                <span className={"fdrop__radio" + (market === mt ? " on" : "")}></span><span className="nm">{mt}</span>
              </button>
            )}
          </div>
          <div className="fdrop__foot">
            <button className="reset" onClick={() => setMarket("1X2")}>RESET FILTERS</button>
            <button className="apply" onClick={() => setDd(null)}>APPLY</button>
          </div>
        </> : null}
        {dd === "date" ?
        <>
          <div className="fdrop__list">
            {dates.map(([d, n]) =>
            <button key={d} className="fdrop__row" onClick={() => setDateSel(d)}>
                <span className={"fdrop__radio" + (dateSel === d ? " on" : "")}></span><span className="nm">{d}</span><span className="n">{n}</span>
              </button>
            )}
          </div>
          <div className="fdrop__foot">
            <button className="reset" onClick={() => setDateSel("All")}>RESET FILTERS</button>
            <button className="apply" onClick={() => setDd(null)}>APPLY</button>
          </div>
        </> : null}
      </div>
      </div> : null}
      </div>
      {/* Promo bar */}
      <PromoBar />
      <BottomNav active="sports" />
    </>);

}

/* ────────────────────────── Single Event ────────────────────────── */
/* True when at least one market container is currently expanded. */
function allMarketsAreOpen(markets, isOpen) {
  return markets.some((mk) => isOpen(mk.key));
}

function MarketGroup({ mk, m, open, onToggle }) {
  const app = useApp();
  const [localOpen, setLocalOpen] = useState(true);
  const isOpen = open == null ? localOpen : open;
  const toggle = () => {onToggle ? onToggle() : setLocalOpen(!localOpen);};
  const matchLabel = m.teams[0].name + " v " + m.teams[1].name;
  // DS title anatomy: main | sub  (+ 2UP tag/badge on eligible markets)
  const parts = mk.name.split(" — ");
  const main = parts[0];
  const sub = parts[1] || "Full Time";
  const twoUp = mk.key === "1x2" || mk.key === "dc";
  // chunk outcomes into rows of `cols`
  const cols = mk.cols || 3;
  const rows = [];
  for (let i = 0; i < mk.outs.length; i += cols) rows.push(mk.outs.slice(i, i + cols));
  return (
    <div className={"pBM" + (isOpen ? "" : " collapsed")}>
      <div className="pBM__header" onClick={toggle}>
        <span className="pBM__lead"><Icon name="ChevronDown" size={20} /></span>
        <span className="pBM__title">
          <span className="pBM__title-main">{main}</span>
          <span className="pBM__title-pipe">|</span>
          <span className="pBM__title-sub">{sub}</span>
          {twoUp ? <span className="pBM__title-tag">2UP</span> : null}
        </span>
        <Icon name="CirlceInfo" cls="pBM__info" size={14} />
        <span className="pBM__spacer"></span>
        {twoUp ? <span className="pBM__badge-2up">2</span> : null}
        {twoUp ? <span className="pBM__badge-boost"><Icon name="ChevronsUp" size={14} /></span> : null}
        <span className="pBM__sep"></span>
        <span className="pBM__pin" onClick={(e) => {e.stopPropagation();}}><Icon name={mk.pin ? "PinFilled" : "Pin"} size={16} /></span>
      </div>
      <div className="pBM__list">
        {rows.map((row, ri) =>
        <div className="pBM__row" key={ri}>
            {row.map((o, i) => {
            const key = m.id + "|" + mk.key + "|" + o.sel;
            const mvCls = o.mv === "up" ? " up" : o.mv === "down" ? " down" : "";
            return (
              <button key={i} className={"pBMbet" + mvCls + (app.isSel(key) ? " on" : "")}
              onClick={() => app.toggleSel({ key, matchId: m.id, matchLabel, comp: m.comp, mkt: main + " | " + sub, sel: o.sel, od: o.od })}>
                  <span className="pBMbet__sel">{o.sel}</span>
                  <span className="pBMbet__val">{o.mv ? <Icon name="TrendingUp" /> : null}{o.od.toFixed(2)}</span>
                </button>);
          })}
          </div>
        )}
      </div>
    </div>);

}

function EventScreen({ params }) {
  const app = useApp();
  const m = params.match;
  const BP = window.BP;
  const allMarkets = BP.markets(m);
  const live = m.status === "live";
  const cats = [
  { id: "all", l: "All" },
  { id: "popular", l: "Popular", n: 8 },
  { id: "goals", l: "Goals", n: 8 },
  { id: "halves", l: "Halves", n: 8 },
  { id: "specials", l: "Specials", n: 6 }];

  const [cat, setCat] = useState("all");
  // Collapse/expand-all state for market containers, keyed by market.
  // null = use each card's default (open). The etabbar end button toggles all.
  const [collapsedAll, setCollapsedAll] = useState(null);
  const [overrides, setOverrides] = useState({});
  const isMarketOpen = (key) => key in overrides ? overrides[key] : collapsedAll == null ? true : !collapsedAll;
  const toggleMarket = (key) => setOverrides((o) => ({ ...o, [key]: !isMarketOpen(key) }));
  const anyOpen = allMarketsAreOpen(allMarkets, isMarketOpen);
  const toggleAll = () => {setCollapsedAll(anyOpen);setOverrides({});};
  // category line: "Football / Country / League" — league bold, mid segments underlined
  const crumbParts = (m.crumb || "Football / " + m.comp).split(" / ");
  return (
    <>
      <Header />
      <div className="scroll" style={{ padding: 0, gap: 0 }}>
        {/* Scoreboard — DS /Scoreboard */}
        <div className="pSB">
          <div className="pSB__top">
            <button className="pSB__back" onClick={app.back}><Icon name="ChevronLeft" />Back</button>
            {live ?
            <span className="pSB__live-badge">Live {m.min}</span> :
            <span className="pSB__time-pill"><span className="t">{m.time}</span><span className="d">{m.day}</span></span>}
            <span className="pSB__chart" onClick={() => app.toast("Match stats")}><Icon name="Activity" /></span>
          </div>
          <div className="pSB__teams">
            <div className="pSB__team-row">
              <span className="pSB__team">{m.teams[0].name}</span>
              {live ? <span className="pSB__scores"><span className="pSB__score pSB__score--orange">{m.score[0]}</span></span> : null}
            </div>
            <div className="pSB__team-row">
              <span className="pSB__team">{m.teams[1].name}</span>
              {live ? <span className="pSB__scores"><span className="pSB__score pSB__score--orange">{m.score[1]}</span></span> : null}
            </div>
          </div>
          <div className="pSB__category">
            {crumbParts.map((p, i) => {
              const last = i === crumbParts.length - 1;
              return (
                <React.Fragment key={i}>
                  {i > 0 ? " / " : ""}
                  {last ? <strong>{p}</strong> : i === 0 ? p : <u>{p}</u>}
                </React.Fragment>);

            })}
          </div>
        </div>
        {/* Statistics bar — Full · H2H · video */}
        <div className="estats">
          <span className="estats__lbl">Statistics</span>
          <button className="estats__chip" onClick={() => app.toast("Full statistics")}>Full<Icon name="BarChart" /></button>
          <button className="estats__chip" onClick={() => app.toast("Head to head")}>H2H<Icon name="ChevronDown" /></button>
          <button className="estats__chip estats__chip--icon" onClick={() => app.toast("Live stream")}><Icon name="MonitorPlay" /></button>
        </div>
        {/* Market category tabs */}
        <div className="etabbar">
          <button className="etabbar__search" onClick={() => app.toast("Search markets")}><Icon name="Search" /></button>
          <div className="etabbar__row">
            {cats.map((c) =>
            <button key={c.id} className={"etab2" + (cat === c.id ? " on" : "")} onClick={() => setCat(c.id)}>
                {c.l}{c.n ? <span className="badge">{c.n}</span> : null}
              </button>
            )}
          </div>
          <button className="etabbar__end" onClick={toggleAll} aria-label={anyOpen ? "Collapse all markets" : "Expand all markets"}><Icon name={anyOpen ? "ChevronsDownUp" : "ChevronsUpDown"} /></button>
        </div>
        {/* Match Combos carousel */}
        <div className="ecombos">
          <div className="ecombos__hd">Match Combos<Icon name="CirlceInfo" /></div>
          <div className="ecombos__row">
            {BP.combos.map((c, ci) => <ComboCard key={c.id} c={c} index={ci} eventId={m.id} />)}
          </div>
        </div>
        {/* Bet markets */}
        <div className="scroll--plain fadein" key={cat} style={{ paddingTop: 6, gap: "4px" }}>
          {allMarkets.map((mk) => <MarketGroup key={mk.key} mk={mk} m={m} open={isMarketOpen(mk.key)} onToggle={() => toggleMarket(mk.key)} />)}
          <div style={{ height: 12 }}></div>
        </div>
      </div>
      <PromoBar />
      <BottomNav active="sports" />
    </>);

}

/* ────────────────────────── MyBets ────────────────────────── */
function LegPills({ ls }) {
  return (
    <div className="bc__legs">
      {ls.won ? <span className="bc__leg bc__leg--won"><span className="dot"></span>{ls.won}</span> : null}
      {ls.pending ? <span className="bc__leg bc__leg--pending"><span className="dot"></span>{ls.pending}</span> : null}
      {ls.lost ? <span className="bc__leg bc__leg--lost"><span className="dot"></span>{ls.lost}</span> : null}
    </div>);

}

function OpenBetCard({ b }) {
  const app = useApp();
  const money = window.BP.money;
  const payout = b.returns;
  return (
    <div className="mbc" onClick={() => app.nav("betdetails", { bet: b })}>
      <div className="mbc__hd">
        <div className="bc__type"><Icon name={b.legs > 1 ? "Betslip" : "MyBets"} cls="ic" />
          <span className="lbl">{b.legs > 1 ? "Multibet" : "Single Bet"}</span>{b.legs > 1 ? <span className="count">{b.legs}</span> : null}</div>
        <span className="mbc__cash"><Icon name="Money" size={14} />Cashout</span>
      </div>
      <LegPills ls={b.legsState} />
      <div className="mbc__meta"><span>{b.when}</span><span className="id">ID: {b.id}</span></div>
      <div className="mbc__rows">
        <div className="mbc__r"><span className="k">ODDS</span><span className="v">{b.odds.toFixed(2)}</span></div>
        <div className="mbc__r"><span className="k">STAKE</span><span className="v">{money(b.stake)}</span></div>
        <div className="mbc__r"><span className="k">PAYOUT</span><span className="v">{money(payout)}</span></div>
      </div>
    </div>);

}

function SettledBetCard({ b }) {
  const app = useApp();
  const money = window.BP.money;
  const map = { won: ["Won", "won"], lost: ["Lost", "lost"], void: ["Void", "void"], cashout: ["Cashout", "cashout"] };
  const [lbl, cls] = map[b.status];
  return (
    <div className={"mbc" + (b.bigwin ? " mbc--bigwin" : "")} onClick={() => app.nav("betdetails", { bet: b })}>
      {b.bigwin ? <div className="mbc__bigwin"><Icon name="Trophy" size={14} />Big Win</div> : null}
      <div className="mbc__hd">
        <div className="bc__type"><Icon name={b.legs > 1 ? "Betslip" : "MyBets"} cls="ic" />
          <span className="lbl">{b.legs > 1 ? "Multibet" : "Single Bet"}</span>{b.legs > 1 ? <span className="count">{b.legs}</span> : null}</div>
        <span className={"mbc__stat mbc__stat--" + cls}>{lbl}</span>
      </div>
      <LegPills ls={b.legsState} />
      <div className="mbc__meta"><span>{b.when}</span><span className="id">ID: {b.id}</span></div>
      <div className="mbc__rows">
        <div className="mbc__r"><span className="k">ODDS</span><span className="v">{b.odds.toFixed(2)}</span></div>
        <div className="mbc__r"><span className="k">STAKE</span><span className="v">{money(b.stake)}</span></div>
        <div className="mbc__r"><span className="k">PAYOUT</span><span className={"v" + (b.status === "won" || b.status === "cashout" ? " v--won" : "")}>{money(b.returns)}</span></div>
      </div>
    </div>);

}

function MyBetsScreen() {
  const app = useApp();
  const [tab, setTab] = useState("open");
  const open = app.openBets;
  const settled = window.BP.settledBets;
  return (
    <>
      <Header />
      <TopNav active="" />
      <div className="tabs">
        <button className={"tab" + (tab === "open" ? " on" : "")} onClick={() => setTab("open")}>Open <span className="n">{open.length}</span></button>
        <button className={"tab" + (tab === "settled" ? " on" : "")} onClick={() => setTab("settled")}>Settled</button>
        <button className={"tab" + (tab === "virtuals" ? " on" : "")} onClick={() => setTab("virtuals")}>Virtuals</button>
      </div>
      <div className="scroll fadein" key={tab}>
        {tab === "open" ?
        open.length ? open.map((b) => <OpenBetCard key={b.id} b={b} />) :
        <div className="empty"><span className="empty__ic"><Icon name="Betslip" size={32} /></span>
              <span className="empty__t">No open bets</span><span className="empty__s">Your active bets will appear here. Place a bet to get started.</span>
              <button className="empty__cta" onClick={() => app.nav("sports")}>Bet now</button></div> :
        tab === "settled" ?
        settled.map((b) => <SettledBetCard key={b.id} b={b} />) :
        <div className="empty"><span className="empty__ic"><Icon name="Activity" size={32} /></span>
              <span className="empty__t">No virtual bets</span><span className="empty__s">Your virtuals bet history will appear here.</span>
              <button className="empty__cta" onClick={() => app.nav("casino")}>Play Virtuals</button></div>}
      </div>
      <BottomNav active="mybets" />
    </>);

}

/* Footer — mirrors the live betpawa.ng homepage footer */
function Footer() {
  const app = useApp();
  const sports = ["Football", "Basketball", "MMA", "eFootball", "Tennis"];
  const help = ["Deposit", "Rules", "Help", "Data Privacy Policy", "Cookies Policy", "Responsible Gambling", "About", "Terms", "News"];
  const socials = ["Facebook", "X", "Instagram"];
  return (
    <footer className="foot">
      <div className="foot__brand">
        <span className="foot__logo"><Logo /></span>
        <span className="foot__loc"><Flag code="NGA" size={20} />Nigeria</span>
      </div>
      <div className="foot__partner">
        <span className="foot__partner-lbl">Official Partner</span>
        <span className="foot__partner-nm">Nigeria National League</span>
      </div>
      <div className="foot__cols">
        <div className="foot__col">
          <h4>Sport</h4>
          {sports.map((s) => <button key={s} className="foot__lnk" onClick={() => app.nav("sports")}>{s}</button>)}
        </div>
        <div className="foot__col">
          <h4>Help Center</h4>
          {help.map((h) => <button key={h} className="foot__lnk" onClick={() => app.toast(h)}>{h}</button>)}
        </div>
      </div>
      <div className="foot__social">
        <span className="foot__social-lbl">Stay up to date</span>
        <div className="foot__social-row">
          {socials.map((s) => <button key={s} className="foot__soc" aria-label={s} onClick={() => app.toast(s)}><Icon name={s === "X" ? "Twitter" : s} size={20} /></button>)}
        </div>
      </div>
      <div className="foot__lang">
        <span>Change Language</span>
        <span className="foot__lang-seg"><span className="on">EN</span><span>PCM</span></span>
      </div>
      <div className="foot__legal">
        <p>Your bets and payouts are processed by Choplife Gaming Limited, licensed and regulated by the Lagos State Lotteries and Gaming Authority of Nigeria.</p>
        <p>Licence No. LSLGA/OP/OSB/CL071124</p>
        <p><b>You have to be 18 years and above to bet.</b> Betting is addictive and can be psychologically harmful.</p>
      </div>
    </footer>);

}

/* ────────────────────────── Bet Details (production betPawa layout) ────────────────────────── */
function BetDetailsScreen({ params }) {
  const app = useApp();
  const money = window.BP.money;
  const b = params.bet;
  if (!b) return <><Header /><TopNav active="" /><div className="scroll"></div><BottomNav active="mybets" /></>;
  const settled = b.status && b.status !== "open";
  const gross = b.stake * b.odds;
  const winnings = Math.max(gross - b.stake, 0);
  const winBonus = Math.max(b.returns - gross, 0);
  const payout = b.returns;
  const legState = (i) => {
    if (!settled) return "pending";
    const ls = b.legsState || {};
    if (b.status === "won") return "won";
    if (b.status === "lost") return i === 0 ? "lost" : "won";
    if (b.status === "void") return "void";
    return i < (ls.won || 0) ? "won" : i < (ls.won || 0) + (ls.pending || 0) ? "pending" : "lost";
  };
  const legs = b.selections || [];
  return (
    <>
      <Header />
      <TopNav active="" />
      <div className="bd2__title">
        <button className="bd2__back" onClick={() => app.nav("mybets")}><Icon name="ChevronLeft" size={22} /></button>
        <span>Bet ID {b.id}</span>
      </div>
      <div className="scroll fadein">
        <div className="bd2__card">
          <div className="bd2__cardhd">
            <div className="bc__type"><Icon name={b.legs > 1 ? "Betslip" : "MyBets"} cls="ic" />
              <span className="lbl">{b.legs > 1 ? "Multibet" : "Single Bet"}</span>{b.legs > 1 ? <span className="count">{b.legs}</span> : null}</div>
            {!settled ? <span className="bd2__cashbadge"><Icon name="Money" size={14} />Cashout</span> : null}
          </div>
          <LegPills ls={b.legsState} />
          <div className="bd2__rows">
            <div className="bd2__r"><span className="k">ODDS</span><span className="v">{b.odds.toFixed(2)}</span></div>
            <div className="bd2__r"><span className="k">STAKE</span><span className="v">{money(b.stake)}</span></div>
            <div className="bd2__r"><span className="k">POTENTIAL WINNINGS</span><span className="v">{money(winnings)}</span></div>
            {winBonus > 0 ? <div className="bd2__r"><span className="k">WIN BONUS</span><span className="v">{money(winBonus)}</span></div> : null}
            <div className="bd2__r"><span className="k">PAYOUT</span><span className="v">{money(payout)}</span></div>
          </div>
          {!settled ?
          <div className="bd2__cashrow">
            <span className="bd2__cashchip"><Icon name="Money" size={16} />Cashout</span>
            <button className="bd2__request" onClick={() => app.cashout(b)}>REQUEST</button>
          </div> : null}
        </div>

        <div className="bd2__acts">
          <button className="bd2__act" onClick={() => { app.betslip.length || legs.forEach((s) => app.toggleSel({ ...s, key: s.key || (b.id + "|reuse|" + s.sel) })); app.nav("sports"); app.toast("Selections added to betslip"); }}>
            <Icon name="RotateCw" size={18} />RE-USE<span className="ct">{b.legs}</span></button>
          <button className="bd2__act" onClick={() => app.toast("Bet shared")}><Icon name="Share" size={18} />SHARE</button>
        </div>

        <div className="bd2__legs">
          {legs.map((s, i) => {
            const st = legState(i);
            return (
              <div className="bd2__leg" key={i}>
                <div className="bd2__leg-top">
                  <span className="when">{s.time || b.when}</span>
                  <span className="od"><span className={"bd2__dot bd2__dot--" + st}></span>{s.od.toFixed(2)}</span>
                </div>
                <div className="bd2__leg-match"><Icon name="FootballBall" size={16} /><span className="lnk">{s.matchLabel.replace(/ v /, " - ")}</span></div>
                <div className="bd2__leg-comp">{s.comp || s.league || "Football"}</div>
                <div className="bd2__leg-mkt">{s.mkt} <span className="pick">- {s.sel}</span></div>
              </div>);
          })}
        </div>

        <div className="bd2__placed">Bet placed on {b.when}</div>
        <div className="bd2__legend">
          <span><span className="bd2__dot bd2__dot--pending"></span>Pending</span>
          <span><span className="bd2__dot bd2__dot--won"></span>Won</span>
          <span><span className="bd2__dot bd2__dot--lost"></span>Lost</span>
          <span><span className="bd2__dot bd2__dot--void"></span>Void</span>
        </div>
        <div className="bd2__tc">All bets are accepted and settled in accordance with our <b>Terms and Conditions</b> and <b>Rules</b>.</div>
      </div>
      <div className="promo">Odds: <b>{b.odds.toFixed(2)}</b> · Win Bonus: <b>{money(winBonus)}</b></div>
      <BottomNav active="mybets" />
    </>);

}

Object.assign(window, { USP, QuickChips, WCBanner, TopCompetitions, Footer, HomeScreen, SportsScreen, EventScreen, MarketGroup, MyBetsScreen, OpenBetCard, SettledBetCard, BetDetailsScreen });