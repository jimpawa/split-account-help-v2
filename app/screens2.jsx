/* ══════════════════════════════════════════════════════════════════════
 * betPawa SSOT — screens (2/2) + Betslip & Account sheets + Hub
 * ══════════════════════════════════════════════════════════════════════ */

/* ────────────────────────── Casino ────────────────────────── */
function CasinoScreen() {
  const app = useApp();
  const BP = window.BP;
  const [prov, setProv] = useState("Home");
  const [srch, setSrch] = useState(false);
  const [q, setQ] = useState("");
  const [favs, setFavs] = useState([]);
  const games = BP.casino.games;
  const isFav = (n) => favs.includes(n);
  const toggleFav = (n) => {
    setFavs((f) => f.includes(n) ? f.filter((x) => x !== n) : [...f, n]);
    app.toast(favs.includes(n) ? "Removed from favourites" : "Added to favourites");
  };
  const favGames = games.filter((g) => favs.includes(g.name));
  const results = q.trim().length >= 2 ? games.filter((g) => g.name.toLowerCase().includes(q.trim().toLowerCase())) : [];

  const Tile = ({ g, i, idp, rail }) => (
    <div className={"ctile" + (rail ? " ctile--rail" : "")} style={{ background: g.grad }} onClick={() => app.nav("game", { game: g })}>
      <image-slot id={"cg-" + idp + "-" + i} shape="rect" fit="cover" src={g.img || ""} placeholder={g.name}></image-slot>
      {g.tag ? <span className="tag">{g.tag}</span> : null}
      <button className={"fav" + (isFav(g.name) ? " on" : "")} aria-label="Favourite" onClick={(e) => { e.stopPropagation(); toggleFav(g.name); }}><Icon name="Star" size={16} /></button>
    </div>
  );

  return (
    <>
      <Header />
      <TopNav active="casino" />
      <div className="scroll fadein">
        <div className="casino-banner">
          <div className="tx"><b>Now Live!</b> 50% Real Casino Cashback with No Limits. <a onClick={() => app.toast("Cashback details")}>Read More.</a></div>
          <button className="x" onClick={() => app.toast("Dismissed")}><Icon name="X" size={16} /></button>
        </div>
        <div className="casino-cats">
          <button className={"ccat ccat--ico" + (srch ? " on" : "")} aria-label="Search games" onClick={() => setSrch((v) => !v)}><Icon name="Search" size={20} /></button>
          <button className={"ccat ccat--ico" + (prov === "fav" ? " on" : "")} aria-label="Favourites" onClick={() => setProv((p) => p === "fav" ? "Home" : "fav")}><Icon name="Star" size={20} /></button>
          {["Home", "All", "Popular", "Hot", "New"].map((c) =>
          <button key={c} className={"ccat" + (prov === c ? " on" : "")} onClick={() => setProv(c)}>
              {c === "Popular" || c === "Hot" ? <Icon name="Flame" size={16} cls="lead" /> : null}{c}
            </button>
          )}
        </div>

        {srch ? <>
          <div className="cgame-search">
            <div className="box"><Icon name="Search" /><input autoFocus placeholder="Search for a Game" value={q} onChange={(e) => setQ(e.target.value)} />
              {q ? <button className="x" aria-label="Clear" onClick={() => setQ("")}><Icon name="X" size={18} /></button> : null}</div>
            <span className="cgame-search__hint">Min. 2 Characters</span>
          </div>
          {q.trim().length >= 2 ?
          results.length ?
          <><div className="sec"><div className="csec">{results.length} result{results.length > 1 ? "s" : ""}</div></div>
            <div className="cgrid">{results.map((g, i) => <Tile key={i} g={g} i={i} idp="res" />)}</div></> :
          <div className="empty"><span className="empty__ic"><Icon name="Search" size={32} /></span>
            <span className="empty__t">No games found</span><span className="empty__s">Try a different name.</span></div> :
          <><div className="sec"><div className="csec">We think you might like...</div></div>
            <div className="cgrid">{games.map((g, i) => <Tile key={i} g={g} i={i} idp="sug" />)}</div></>}
        </> : prov === "fav" ? <>
          <div className="sec"><div className="csec"><Icon name="Star" size={20} />Favourites</div></div>
          {favGames.length ?
          <div className="cgrid">{favGames.map((g, i) => <Tile key={i} g={g} i={i} idp="fav" />)}</div> :
          <div className="empty"><span className="empty__ic"><Icon name="Star" size={32} /></span>
            <span className="empty__t">No favourites yet</span><span className="empty__s">Tap the star on any game to save it here.</span></div>}
        </> : <>
          <div className="sec"><div className="csec"><Icon name="LayoutGrid" size={20} />Recently Played</div></div>
          <div className="crow">{games.slice(0, 5).map((g, i) => <Tile key={i} g={g} i={i} idp="rec" rail />)}</div>
          {favGames.length ? <>
            <div className="sec"><div className="csec"><Icon name="Star" size={20} />Favourites</div></div>
            <div className="crow">{favGames.map((g, i) => <Tile key={i} g={g} i={i} idp="favrail" rail />)}</div>
          </> : null}
          <div className="sec"><div className="csec"><Flag code="NGA" size={20} />Most Popular in Nigeria</div></div>
          <div className="cgrid">{games.map((g, i) => <Tile key={i} g={g} i={i} idp="grid" />)}</div>
          <button className="viewmore"><Icon name="LayoutGrid" />View all 480 games</button>
        </>}
      </div>
      <BottomNav active="home" />
    </>
  );
}

/* ────────────────────────── Search ────────────────────────── */
function SearchScreen({ params }) {
  const app = useApp();
  const BP = window.BP;
  const [q, setQ] = useState((params && params.q) || "");
  const pool = BP.featured.concat(BP.boosted, BP.live);
  const res = q.trim() ? pool.filter((m) => (m.teams[0].name + " " + m.teams[1].name + " " + m.comp).toLowerCase().includes(q.toLowerCase())) : [];
  const recent = ["England v Ghana", "Argentina", "Aviator", "World Cup"];
  const trending = ["World Cup 2026", "Premier League", "Boosted odds", "Aviator", "Champions League"];
  return (
    <>
      <div className="searchbar">
        <button className="subhead__back" onClick={app.back}><Icon name="ChevronLeft" size={22} /></button>
        <div className="box"><Icon name="Search" /><input autoFocus placeholder="Search teams, leagues, games" value={q} onChange={(e) => setQ(e.target.value)} />
          {q ? <Icon name="X" size={18} style={{ cursor: "pointer", color: "var(--muted)" }} onClick={() => setQ("")} /> : null}</div>
      </div>
      <div className="scroll fadein">
        {!q.trim() ? <>
          <div className="sec"><div style={{ display: "flex", alignItems: "center" }}><h3 style={{ flex: 1, margin: 0, font: "700 15px/20px Roboto", color: "var(--text)" }}>Recent</h3><button style={{ border: 0, background: "transparent", color: "var(--accent)", font: "700 13px/1 Roboto", cursor: "pointer" }} onClick={() => app.toast("Recent cleared")}>Clear</button></div>
            <div className="chipwrap">{recent.map((r) => <button key={r} className="qchip" onClick={() => setQ(r)}><Icon name="RotateCw" cls="lead" size={16} style={{ color: "var(--muted)" }} />{r}</button>)}</div></div>
          <div className="sec"><h3 style={{ margin: 0, font: "700 15px/20px Roboto", color: "var(--text)" }}>Trending</h3>
            <div className="chipwrap">{trending.map((r) => <button key={r} className="qchip" onClick={() => setQ(r)}><Icon name="TrendingUp" cls="lead" size={16} style={{ color: "var(--orange)" }} />{r}</button>)}</div></div>
        </> : (res.length ? <>
          <div style={{ font: "700 13px/1 Roboto", color: "var(--muted)", padding: "2px", textTransform: "uppercase", letterSpacing: ".04em" }}>{res.length} result{res.length > 1 ? "s" : ""}</div>
          {res.map((m, i) => <MatchCard key={m.id + i} m={m} />)}
        </> : <div className="empty"><span className="empty__ic"><Icon name="Search" size={32} /></span><span className="empty__t">No results for "{q}"</span><span className="empty__s">Try another team, league or game name.</span></div>)}
      </div>
    </>
  );
}

/* ────────────────────────── Deposit / Withdraw — canonical DS page (figma 31013:46150) ────────────────────────── */
function DepositScreen({ params }) {
  const app = useApp();
  const BP = window.BP;
  const mode = params.mode || "deposit";
  const [method, setMethod] = useState(null);
  const [step, setStep] = useState(mode === "deposit" ? "select" : "form");
  const [amt, setAmt] = useState("");
  const sel = BP.methods.find((m) => m.id === method) || BP.methods[0];
  const MIN = mode === "deposit" ? 100 : 200;
  const MAX = mode === "deposit" ? 5000000 : 100000;
  const val = parseFloat(amt || "0");
  const valid = val >= MIN && val <= MAX && (mode === "withdraw" ? val <= app.balance : true);
  const methodIcon = (id) => id === "bank" ? "Bank" : id === "card" ? "CreditCard" : id === "ussd" ? "Hash" : "Phone";
  const methodMax = (id) => id === "bank" ? "Max: 10,000,000" : id === "card" ? "Max: 2,000,000" : id === "ussd" ? "Max: 100,000" : "Max: 1,000,000";
  const pickMethod = (id) => { setMethod(id); setStep("form"); };
  const cycleMethod = () => {
    const i = BP.methods.findIndex((m) => m.id === method);
    setMethod(BP.methods[(i + 1) % BP.methods.length].id);
  };
  const confirm = () => {
    if (!valid) return;
    if (mode === "deposit") { app.setBalance(app.balance + val); app.toast("Deposit of " + BP.money(val) + " successful"); }
    else { app.setBalance(app.balance - val); app.toast("Withdrawal of " + BP.money(val) + " requested"); }
    app.back();
  };
  // ── Step 1: choose a deposit method (figma 31013:46962) ──
  if (mode === "deposit" && step === "select") {
    return (
      <>
        <Header />
        <TopNav active="" />
        <div className="scroll fadein" style={{ padding: 0, gap: 0 }}>
          <div className="dw-body">
            <div className="dw-title"><h2>Deposit</h2><p>Choose how you'd like to deposit money into your betPawa account.</p></div>
            <div className="dmethods">
              {BP.methods.map((m) => (
                <button key={m.id} className="dmethod" onClick={() => pickMethod(m.id)}>
                  <span className="dmethod__logo"><Icon name={methodIcon(m.id)} size={24} /></span>
                  <span className="dmethod__tx"><span className="n">{m.nm}</span><span className="s">{methodMax(m.id)}</span></span>
                  <Icon name="ChevronRight" cls="dmethod__chev" size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <BottomNav active="account" />
      </>
    );
  }
  // ── Step 2: deposit / withdraw flow for the selected provider ──
  return (
    <>
      <Header />
      <TopNav active="" />
      {mode === "deposit" ? <>
        <div className="dw-back" onClick={() => setStep("select")}><Icon name="ChevronLeft" /><span>Use a different deposit method</span></div>
        <div className="tabs">
          <button className="tab on">Online deposit</button>
          <button className="tab">USSD Deposit</button>
        </div>
      </> : null}
      <div className="scroll fadein" style={{ padding: 0, gap: 0 }}>
        <div className="dw-body">
          <div className="dw-title">
            {mode === "deposit" ? <>
              <h2>Deposit Using {sel.nm}</h2>
              <p>Easily deposit money on betPawa using {sel.nm}. Simply enter the amount to deposit below.</p>
            </> : <>
              <h2>Withdraw</h2>
              <p>Making a withdrawal is free and easy. Just enter these details and then click WITHDRAW.</p>
            </>}
          </div>
          <div className="dw-card">
            {mode === "withdraw" ? (
              <div className="dw-select" onClick={cycleMethod}>
                <div className="dw-select__tx"><span className="dw-select__lbl">Withdrawal Option</span><span className="dw-select__val">{sel.nm}</span></div>
                <Icon name="ChevronDown" cls="dw-select__chev" size={20} />
              </div>
            ) : null}
            <div className="dw-mob">
              <span className="dw-mob__ic">{sel.nm.slice(0, 4)}</span>
              <div className="dw-mob__tx"><span className="dw-mob__lbl">Your mobile number</span><span className="dw-mob__num">+234 801 234 5678</span></div>
            </div>
            <div className="dw-field">
              <div className="dw-field__top"><span className="dw-field__lbl">Amount</span><span className="dw-field__free">FREE</span></div>
              <div className="dw-input"><span className="dw-input__ccy">₦</span>
                <input inputMode="decimal" placeholder="1000" value={amt} onChange={(e) => setAmt(e.target.value.replace(/[^\d.]/g, ""))} /></div>
              <span className="dw-field__desc">{mode === "deposit" ? "Min: 100.00, Max: 5,000,000.00" : "Min: 200, Max: 100,000"}</span>
            </div>
            <button className="dw-cta" disabled={!valid} onClick={confirm}>{mode === "deposit" ? "Deposit" : "Withdraw"}</button>
          </div>
          {mode === "deposit" ? (
            <div className="dw-notes">
              <p>What happens next? <span className="reg">Confirm the deposit request on your phone to complete the deposit process.</span></p>
              <p>Note: <span className="reg">Make sure any pop-up blocker is disabled.</span></p>
            </div>
          ) : null}
        </div>
      </div>
      <BottomNav active="account" />
    </>
  );
}

/* ────────────────────────── Login / Register ────────────────────────── */
function LoginScreen({ params }) {
  const app = useApp();
  const [tab, setTab] = useState(params.tab || "login");
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("7044937410");
  const [pw, setPw] = useState("");
  const [keep, setKeep] = useState(false);
  const isLogin = tab === "login";
  const valid = phone.replace(/\D/g, "").length >= 6 && pw.length >= 4;
  const submit = () => { if (!valid) return; app.login(); app.nav("home"); app.toast(isLogin ? "Logged in" : "Welcome to betPawa!"); };
  return (
    <>
      <Header />
      <TopNav active="" />
      <div className="scroll fadein">
        <div className="auth">
          <div className="auth__seg">
            <button className={isLogin ? "on" : ""} onClick={() => setTab("login")}><Icon name="LogIn" size={18} style={{ verticalAlign: "-4px", marginRight: 6 }} />Log In</button>
            <button className={!isLogin ? "on" : ""} onClick={() => setTab("register")}><Icon name="Pencil" size={18} style={{ verticalAlign: "-4px", marginRight: 6 }} />Join Now</button>
          </div>
          <div className="auth__card">
            <div className="field">
              <label>Mobile Number</label>
              <div className="field__in">
                <span className="dial"><Flag code="NGA" size={22} /><span>+234</span></span>
                <input inputMode="numeric" value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^\d ]/g, ""))} />
              </div>
              <span className="field__help">Enter your mobile number without the country code (e.g., 123456789).</span>
            </div>
            <div className="field">
              <div className="field__top"><label>Password</label><a onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</a></div>
              <div className="field__in"><input type={show ? "text" : "password"} value={pw} placeholder="Enter password" onChange={(e) => setPw(e.target.value)} /></div>
              <span className="field__help">Min. 4 Characters</span>
            </div>
            {isLogin ?
            <label className="auth__check"><input type="checkbox" checked={keep} onChange={(e) => setKeep(e.target.checked)} /><span>Keep me logged on this device</span></label> :
            <div className="field"><label>Promo code (optional)</label><div className="field__in"><input placeholder="Enter promo code" /></div></div>}
            <button className="btn-primary" disabled={!valid} onClick={submit}>{isLogin ? "LOG IN" : "JOIN NOW"}</button>
            <a className="auth__forgot" onClick={() => app.toast("Reset link sent")}>Forgot Password?</a>
            <div className="auth__div"><span></span>or<span></span></div>
            <div className="auth__alt">{isLogin ? <>Don't have an account? <a onClick={() => setTab("register")}>Join Now</a></> : <>Already have an account? <a onClick={() => setTab("login")}>Log In</a></>}</div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ────────────────────────── Post-bet confirmation ────────────────────────── */
function PostBetScreen({ params }) {
  const app = useApp();
  const BP = window.BP;
  const b = params.bet;
  return (
    <>
      <SubHeader title="Bet placed" onBack={() => app.nav("home")} />
      <div className="postbet fadein">
        <div className="postbet__burst"><Icon name="Check" size={54} /></div>
        <div className="postbet__t">Bet placed!</div>
        <div className="postbet__s">Your {b.type.toLowerCase()} bet is live. Track it any time in My Bets.</div>
        <div className="postbet__card">
          <div className="postbet__id"><span>{b.id}</span><Icon name="Copy" onClick={() => app.toast("Bet ID copied")} /></div>
          {b.selections.map((s, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 8, paddingTop: i ? 8 : 0, borderTop: i ? "1px solid var(--line)" : 0 }}>
              <div style={{ minWidth: 0 }}><div style={{ font: "700 14px/18px Roboto", color: "var(--text)" }}>{s.sel}</div><div style={{ font: "400 12px/16px Roboto", color: "var(--muted)" }}>{s.matchLabel}</div></div>
              <div style={{ font: "700 14px/1 Roboto", color: "var(--text)", flex: "none" }}>{s.od.toFixed(2)}</div>
            </div>
          ))}
          <div className="postbet__row" style={{ paddingTop: 8, borderTop: "1px solid var(--line)" }}><span>Total odds</span><b>{b.odds.toFixed(2)}</b></div>
          <div className="postbet__row"><span>Stake</span><b>{BP.money(b.stake)}</b></div>
          <div className="postbet__row postbet__row--win"><span>Potential win</span><b>{BP.money(b.returns)}</b></div>
        </div>
        <div className="postbet__actions">
          <button className="btn-primary" onClick={() => app.nav("mybets")}>View in My Bets</button>
          <button className="btn-ghost" onClick={() => { app.toast("Bet shared"); }}><Icon name="Share" size={18} style={{ verticalAlign: "-3px", marginRight: 6 }} />Share bet</button>
          <button className="btn-ghost" onClick={() => app.nav("home")}>Back to home</button>
        </div>
      </div>
    </>
  );
}

/* ────────────────────────── Betslip sheet ────────────────────────── */
function BetslipSheet({ open, onClose }) {
  const app = useApp();
  const BP = window.BP;
  const sels = app.betslip;
  const multi = sels.length > 1;
  const type = "multi";
  const [stake, setStake] = useState("100");
  const [acceptOdds, setAcceptOdds] = useState(true);
  const val = parseFloat(stake || "0");
  const totalOdds = sels.reduce((a, s) => a * s.od, 1);
  const bonusPct = type === "multi" && sels.length >= 3 ? Math.min(0.1 + (sels.length - 3) * 0.05, 1.0) : 0;
  const baseWin = type === "multi" ? val * totalOdds : sels.reduce((a, s) => a + val * s.od, 0);
  const bonus = type === "multi" ? baseWin * bonusPct : 0;
  const win = baseWin + bonus;
  const stakeTotal = type === "multi" ? val : val * sels.length;
  const place = () => {
    const bet = {
      id: "#" + (90000000 + Math.floor(Math.random() * 9999999)), type: multi && type === "multi" ? "Multi" : "Single",
      legs: sels.length, when: "Now · " + BP.today, status: "open", live: sels.some((s) => s.live),
      odds: type === "multi" ? +totalOdds.toFixed(2) : sels[0].od, stake: stakeTotal, returns: Math.round(win),
      legsState: { won: 0, lost: 0, pending: sels.length }, selections: sels.slice(),
      pick: sels.length === 1 ? sels[0].sel : null, mkt: sels.length === 1 ? sels[0].mkt : null,
    };
    app.placeBet(bet);
  };
  const goMyBets = () => { onClose(); app.nav("mybets"); };
  return (
    <Sheet open={open} onClose={onClose} cls="bsheet">
      <div className="bs2hdr">
        <div className="bs2seg">
          <button className="on">Betslip <span className="b">{sels.length}</span></button>
          <button onClick={goMyBets}>My Bets</button>
        </div>
        <div className="grow"></div>
        {app.loggedIn ? <span className="bal">{BP.money(app.balance)}</span> : null}
        <button className="x" onClick={onClose}><Icon name="X" /></button>
      </div>
      <div className="bs2body">
        {!sels.length ? (
          <div className="empty" style={{ padding: "32px 8px" }}><span className="empty__ic"><Icon name="Betslip" size={32} /></span>
            <span className="empty__t">Betslip is empty</span><span className="empty__s">Pick selections from the markets to start building your bet.</span>
            <button className="empty__cta" onClick={() => { onClose(); app.nav("sports"); }}>Browse sports</button></div>
        ) : <>
          <div className="bs2meta">
            <span className="l"><Icon name="Share" />Booking code</span>
            <button className="r" onClick={() => app.clearBetslip()}>Clear Betslip</button>
          </div>
          {sels.map((s) => (
            <div className={"bs2sel" + (s.live ? " live" : "")} key={s.key}>
              <button className="close" onClick={() => app.toggleSel(s)}><Icon name="X" /></button>
              <div className="card">
                {s.live ? <div className="top"><span className="live">LIVE</span></div> : null}
                <div className="row">
                  <Icon name="FootballBall" cls="ic" />
                  <span className="teams">{s.matchLabel.replace(/ v /, " - ")}</span>
                  {s.selections ? <span className="odd">{s.od.toFixed(2)}</span> : null}
                </div>
                {s.selections ?
                <ul className="bs2legs">
                  {s.selections.map((l, i) =>
                  <li key={i}><span className="pk">{l.sel}</span> <span className="mk">{l.mkt}</span></li>
                  )}
                </ul> :
                <div className="row">
                  <span className="market">{s.mkt} - {s.sel}</span>
                  <span className="odd">{s.od.toFixed(2)}</span>
                </div>}
              </div>
            </div>
          ))}
          <div className="bs2foot">
            <div className="bs2switch">
              <button className={"track" + (acceptOdds ? " on" : "")} onClick={() => setAcceptOdds(!acceptOdds)}></button>
              <span className="lbl">Accept odds changes</span>
            </div>
            <div className="bs2stake">
              <div className="lab">Stake</div>
              <div className="input"><span className="cur">₦</span>
                <input inputMode="decimal" value={stake} onChange={(e) => setStake(e.target.value.replace(/[^\d.]/g, ""))} />
                <span className="max" onClick={() => setStake(String(Math.min(app.balance, 100000)))}>MAX</span></div>
              <div className="hint"><span>Min Stake is ₦ 1.00</span><span>Balance {BP.money(app.balance)}</span></div>
            </div>
            <div className="bs2row"><span className="k">Odds</span>
              <span className="v">{(type === "multi" ? totalOdds : (sels[0] ? sels[0].od : 0)).toFixed(2)}</span></div>
            <div className="bs2row"><span className="k">Potential Winnings</span>
              <span className="v">{BP.money(Math.max(baseWin - stakeTotal, 0))}</span></div>
            {bonus > 0 ? <div className="bs2row"><span className="k">{Math.round(bonusPct * 100)}% Win Bonus</span>
              <span className="v">{BP.money(bonus)}</span></div> : null}
            <div className="bs2row bs2row--payout"><span className="k">Payout</span>
              <span className="v">{BP.money(win)}</span></div>
            <button className="bs2place" disabled={!val || (app.loggedIn && val > app.balance)}
              onClick={app.loggedIn ? place : () => { onClose(); app.nav("login"); }}>
              {app.loggedIn ? <>Place Bet <span className="amt">· {BP.money(stakeTotal)}</span></> : "Log in to bet"}</button>
          </div>
        </>}
      </div>
    </Sheet>
  );
}

/* ────────────────────────── Menu sheet (left sidebar · DS List + shortcuts) ────────────────────────── */
function MenuSheet({ open, onClose }) {
  const app = useApp();
  const go = (s, p) => { onClose(); app.nav(s, p); };
  const tiles = [
    { ic: "Home", l: "Home", act: () => go("home") },
    { ic: "Timer", l: "Sports", n: "990", act: () => go("sports") },
    { ic: "Activity", l: "Live", n: "17", act: () => go("sports", { tab: "live" }) },
    { ic: "Gem", l: "Casino", active: true, act: () => go("casino") },
    { ic: "VirtualSports", l: "Virtuals", act: () => app.toast("Virtuals") },
    { ic: "Flame", l: "Popular", n: "44", act: () => go("sports") },
    { ic: "Trophy", l: "Outrights", n: "8", act: () => go("sports") },
  ];
  const sports = [
    { ic: "FootballBall", l: "Football", active: true },
    { ic: "Basketball", l: "Basketball" },
    { ic: "Sports", l: "MMA" },
    { ic: "EFootballBall", l: "eFootball" },
  ];
  const [leaguesOpen, setLeaguesOpen] = useState(true);
  const [countriesOpen, setCountriesOpen] = useState(true);
  const leagues = window.BP.topComps;
  const countries = [
    { cc: "ENG", nm: "England", n: "94" },
    { cc: "FRA", nm: "France", n: "10" },
    { cc: "ITA", nm: "Italy", n: "10" },
    { cc: "ESP", nm: "Spain", n: "10" },
    { cc: "GER", nm: "Germany", n: "9" },
  ];
  return (
    <Sheet open={open} onClose={onClose} title="" cls="dssheet menusheet" full logo>
      <div className="mgrid">
        {tiles.map((s) =>
        <button className={"mtile" + (s.active ? " is-active" : "")} key={s.l} onClick={s.act}>
            {s.n ? <span className="mtile__n">{s.n}</span> : null}
            <span className="mtile__ic"><Icon name={s.ic} size={24} /></span>
            <span className="mtile__lab">{s.l}</span>
          </button>
        )}
      </div>
      <div className="pchips" style={{ padding: "0 0 4px" }}>
        {sports.map((s) =>
        <button className={"pChip" + (s.active ? " is-active" : "")} key={s.l} onClick={() => go("sports")}>
            <Icon name={s.ic} cls="pChip__icon" />{s.l}
          </button>
        )}
      </div>
      <div className="mgroup">
        <button className="mgroup__hd" onClick={() => setLeaguesOpen(!leaguesOpen)}>
          <span className="t">Leagues</span><Icon name="ChevronUp" cls={"chev" + (leaguesOpen ? "" : " down")} />
        </button>
        {leaguesOpen ?
        <div className="mrows">
            {leagues.map((c) =>
          <button className="mrow" key={c.id} onClick={() => go("sports")}>
                <span className="mrow__ic">{c.cc ? <Flag code={c.cc} size={22} /> : <span className="mrow__globe"><Icon name={c.ico || "Trophy"} size={16} /></span>}</span>
                <span className="mrow__nm">{c.nm}</span>
                <span className="mrow__n">{c.n}</span>
                <Icon name="ChevronRight" cls="mrow__chev" />
              </button>
          )}
          </div> : null}
      </div>
      <div className="mgroup">
        <button className="mgroup__hd" onClick={() => setCountriesOpen(!countriesOpen)}>
          <span className="t">Popular Countries</span><Icon name="ChevronUp" cls={"chev" + (countriesOpen ? "" : " down")} />
        </button>
        {countriesOpen ?
        <div className="mrows">
            {countries.map((c) =>
          <button className="mrow" key={c.cc} onClick={() => go("sports")}>
                <span className="mrow__ic"><Flag code={c.cc} size={22} /></span>
                <span className="mrow__nm">{c.nm}</span>
                <span className="mrow__n">{c.n}</span>
                <Icon name="ChevronRight" cls="mrow__chev" />
              </button>
          )}
          </div> : null}
      </div>
    </Sheet>
  );
}

/* ────────────────────────── Account sheet — canonical DS (account.html, figma 20087:17519) ────────────────────────── */
function AccountSheet({ open, onClose }) {
  const app = useApp();
  const BP = window.BP;
  const [render, setRender] = useState(open);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    let t;
    if (open) { setRender(true); t = setTimeout(() => setVis(true), 30); }
    else { setVis(false); t = setTimeout(() => setRender(false), 380); }
    return () => clearTimeout(t);
  }, [open]);
  if (!render) return null;
  const go = (s, p) => { onClose(); app.nav(s, p); };
  const onScrim = (e) => { if (e.target === e.currentTarget) onClose(); };
  return (
    <div className={"acc-scrim" + (vis ? " show" : "")} onClick={onScrim}>
      <div className="acc-sheet">
        <div className="acc-sheet__top acc-sheet__top--titled"><span className="acc-sheet__title">Account</span><button className="acc-sheet__close" onClick={onClose} aria-label="Close"><Icon name="X" /></button></div>
        {app.loggedIn ? <>
          <div className="acc-wallet">
            <span className="acc-wallet__lab">Wallet Balance</span>
            <span className="acc-wallet__amt">{BP.money(app.balance)}</span>
            <div className="acc-wallet__meta">
              <span className="acc-wallet__phone"><span className="acc-wallet__telco"><Flag code="NGA" size={22} /></span>+234 7073457532</span>
            </div>
            <div className="acc-wallet__cta">
              <button className="btn wd" onClick={() => { onClose(); app.openDeposit("withdraw"); }}>Withdraw</button>
              <button className="btn dep" onClick={() => { onClose(); app.openDeposit("deposit"); }}>Deposit</button>
            </div>
          </div>
          <div className="acc-group">
            <button className="acc-item" onClick={() => app.toast("Language")}><Icon name="Globe" cls="acc-item__ic" /><span className="acc-item__lbl">Change language</span><span className="acc-lang"><span className="on">EN</span><span>FR</span></span></button>
            <button className="acc-item" onClick={() => app.toast("Notifications")}><Icon name="Bell" cls="acc-item__ic" /><span className="acc-item__lbl">Notifications</span></button>
            <button className="acc-item" onClick={() => app.toast("Manage account")}><Icon name="ManageAccount" cls="acc-item__ic" /><span className="acc-item__lbl">Manage account</span><Icon name="ChevronDown" cls="acc-item__chev" /></button>
            <button className="acc-item" onClick={() => go("mybets")}><Icon name="MyBets" cls="acc-item__ic" /><span className="acc-item__lbl">My Bets</span></button>
            <button className="acc-item" onClick={() => app.toast("Statement")}><Icon name="Statement" cls="acc-item__ic" /><span className="acc-item__lbl">Statement</span></button>
            <button className="acc-item" onClick={() => app.toast("Download the App")}><Icon name="Apple" cls="acc-item__ic" /><span className="acc-item__lbl">Download the App</span></button>
            <button className="acc-item" style={{ cursor: "default" }}><Icon name="MoonStar" cls="acc-item__ic" /><span className="acc-item__lbl">Dark Theme</span><span className={"acc-toggle" + (app.theme === "dark" ? " on" : "")} onClick={(e) => { e.stopPropagation(); app.toggleTheme(); }} role="switch" aria-checked={app.theme === "dark"}></span></button>
          </div>
          <div className="acc-group">
            <button className="acc-item acc-item--danger" onClick={() => { app.logout(); onClose(); app.toast("Logged out"); }}><Icon name="LogOut" cls="acc-item__ic" /><span className="acc-item__lbl">Log Out</span></button>
          </div>
        </> : <>
          <div className="acc-group">
            <div className="acc-authcta">
              <button className="btn join" onClick={() => go("login", { tab: "register" })}>JOIN NOW</button>
              <button className="btn login" onClick={() => go("login")}>LOG IN</button>
            </div>
          </div>
          <div className="acc-group">
            <button className="acc-item" onClick={() => app.toast("Language")}><Icon name="Globe" cls="acc-item__ic" /><span className="acc-item__lbl">Change language</span><span className="acc-lang"><span className="on">EN</span><span>FR</span></span></button>
            <button className="acc-item" onClick={() => { onClose(); app.openDeposit("deposit"); }}><Icon name="Deposit" cls="acc-item__ic" /><span className="acc-item__lbl">Deposit</span></button>
            <button className="acc-item" onClick={() => app.toast("Download the App")}><Icon name="Apple" cls="acc-item__ic" /><span className="acc-item__lbl">Download the App</span></button>
            <button className="acc-item" style={{ cursor: "default" }}><Icon name="MoonStar" cls="acc-item__ic" /><span className="acc-item__lbl">Dark Theme</span><span className={"acc-toggle" + (app.theme === "dark" ? " on" : "")} onClick={(e) => { e.stopPropagation(); app.toggleTheme(); }} role="switch" aria-checked={app.theme === "dark"}></span></button>
          </div>
          <div className="acc-group">
            <button className="acc-item acc-item--danger" onClick={() => { onClose(); app.toast("Logged out"); }}><Icon name="LogOut" cls="acc-item__ic" /><span className="acc-item__lbl">Log Out</span></button>
          </div>
        </>}
      </div>
    </div>
  );
}

/* ────────────────────────── Help bottom sheet — Request a free call (figma Help) ─────────────────── */
function HelpSheet({ open, onClose }) {
  const app = useApp();
  const [render, setRender] = useState(open);
  const [vis, setVis] = useState(false);
  const [reason, setReason] = useState("");
  const [phone, setPhone] = useState(app.loggedIn ? "7073457532" : "");
  const [callOpen, setCallOpen] = useState(false);
  const [view, setView] = useState("root");
  const [faqOpen, setFaqOpen] = useState("pw");
  const [faqCat, setFaqCat] = useState("All");
  useEffect(() => { if (!open) { setView("root"); setFaqOpen("pw"); setFaqCat("All"); } else setPhone(app.loggedIn ? "7073457532" : ""); }, [open]);
  useEffect(() => {
    let t;
    if (open) { setRender(true); t = setTimeout(() => setVis(true), 30); }
    else { setVis(false); t = setTimeout(() => setRender(false), 380); }
    return () => clearTimeout(t);
  }, [open]);
  if (!render) return null;
  const onScrim = (e) => { if (e.target === e.currentTarget) onClose(); };
  // "More ways to get help" grid (betPawa contact + info shortcuts).
  const helpWays = [
    { id: "chat", ic: "MessageCircle", nm: "Chat with us", sub: "~2 min wait", tone: "accent", act: () => setView("chat") },
    { id: "call", ic: "Headset", nm: "Call Me", sub: "~3 min callback", tone: "accent", act: () => setView("call") },
    { id: "rules", ic: "ClipboardPen", nm: "Rules", sub: "How to play", tone: "plain", act: () => app.toast("Rules") },
    { id: "rg", ic: "ShieldCheck", nm: "Responsible Gaming", sub: "Stay in control", tone: "accent", act: () => app.toast("Responsible Gaming") }];
  const reasons = ["Deposit", "Withdrawal", "Betslip", "Other"];
  const canCall = !!reason && phone.trim().length >= 6;
  const submit = () => { if (!canCall) return; onClose(); app.toast("We'll call you in 0-5 minutes"); };

  // FAQ content — sourced from the live betPawa Help Center (betpawa.ng/help).
  // Ordered most-asked first; `pop` drives the "Most Asked" badge.
  const FAQS = [
    { id: "pw", cat: "Account", n: 336000, q: "How do I reset my password?",
      a: ["Tap Login → Forgot password and enter your registered phone number.",
          "We’ll send a reset code by SMS — enter it, then set a new password."] },
    { id: "acct", cat: "Account", n: 248000, q: "How do I register an account?",
      a: ["Go to our Join Now page.",
          "Enter your phone number and choose a 4-digit password.",
          "Fill in your personal details.",
          "Read and agree to our Terms & Conditions, then tap the ‘Join Now’ button.",
          "Note: The 4-digit password you set here will be your login password every time you access your betPawa account."] },
    { id: "wd", cat: "Withdrawals", n: 151000, q: "My withdrawal is still pending — when will I get it?",
      a: ["You must have wagered your deposit at least once before you can withdraw.",
          "Once approved, mobile-money withdrawals usually arrive within minutes; card and bank transfers can take longer.",
          "If it’s still pending, your account may need identity verification — check for any requested documents."] },
    { id: "dep", cat: "Deposits", n: 132000, q: "How do I deposit into my account?",
      a: ["Open the betPawa Deposit page.",
          "Select your deposit method, enter the amount you’d like to deposit and tap Deposit.",
          "Confirm the payment. Once approved, your account balance will be credited instantly."] },
    { id: "code", cat: "Account", n: 88000, q: "I didn’t receive my verification code",
      a: ["Refresh the page and try again, or request the code via WhatsApp, Telegram or a phone call.",
          "You can request up to 3 verification codes within 3 hours.",
          "Each verification code is valid for 24 hours only."] },
    { id: "settle", cat: "Bets", n: 61000, q: "How is my bet settled?",
      a: ["Your bet is settled according to the official result of the sporting event and the specific market rules you placed your bet on.",
          "Settlement only happens once the outcome is confirmed and announced."] },
  ];
  const faqCats = ["All", ...FAQS.reduce((acc, f) => acc.includes(f.cat) ? acc : [...acc, f.cat], [])];
  const faqShown = FAQS
    .filter((f) => faqCat === "All" || f.cat === faqCat)
    .sort((a, b) => b.n - a.n);
  if (view === "call") return (
    <div className={"acc-scrim" + (vis ? " show" : "")} onClick={onScrim}>
      <div className="acc-sheet help-sheet">
        <div className="help-head help-head--sub">
          <button className="help-back" onClick={() => setView("root")} aria-label="Back"><Icon name="ChevronLeft" /></button>
          <span className="help-head__t help-head__t--sub">Request a Free Call</span>
          <button className="acc-sheet__close" onClick={onClose} aria-label="Close"><Icon name="X" /></button>
        </div>
        <div className="help-card">
          <label className="help-field__lbl">Mobile Number</label>
          <div className="help-phone">
            <span className="help-phone__pre"><Flag code="NGA" size={22} /><span>+234</span></span>
            <input className="help-phone__in" type="tel" inputMode="numeric" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <p className="help-hint">Enter your mobile number without the country code (e.g., 123456789).</p>
          <div className="help-q">How can we help <span className="req">(Required)</span></div>
          <div className="help-radios">
            {reasons.map((r) =>
              <button key={r} className="help-radio" onClick={() => setReason(r)} role="radio" aria-checked={reason === r}>
                <span className={"help-radio__dot" + (reason === r ? " on" : "")}></span>
                <span className="help-radio__lbl">{r}</span>
              </button>)}
          </div>
          <div className="help-eta">
            <span className="help-eta__lbl">Expect a call in:</span>
            <div className="help-eta__bars"><span className="b b1"></span><span className="b b2"></span><span className="b b3"></span></div>
            <span className="help-eta__val">0-5 minutes</span>
          </div>
          <button className={"help-callme" + (canCall ? " on" : "")} disabled={!canCall} onClick={submit}>CALL ME</button>
        </div>
      </div>
    </div>
  );
  if (view === "chat") return (
    <div className={"acc-scrim" + (vis ? " show" : "")} onClick={onScrim}>
      <div className="acc-sheet help-sheet">
        <div className="help-head help-head--sub">
          <button className="help-back" onClick={() => setView("root")} aria-label="Back"><Icon name="ChevronLeft" /></button>
          <span className="help-head__t help-head__t--sub">Chat with us</span>
          <button className="acc-sheet__close" onClick={onClose} aria-label="Close"><Icon name="X" /></button>
        </div>
        <div className="help-contact">
          <p className="help-contact__sub">We'd love to hear from you. Our team is always available to help.</p>
          <button className="help-contact__row" onClick={() => app.toast("Opening Facebook Messenger")}>
            <span className="help-contact__ic help-contact__ic--msgr"><Icon name="Facebook" size={22} /></span>
            <span className="help-contact__tx"><span className="n">Facebook Messenger</span><span className="s">Chat with us</span><span className="h">m.me/betPawaNigeria</span></span>
            <Icon name="ChevronRight" cls="help-contact__chev" />
          </button>
          <button className="help-contact__row" onClick={() => app.toast("Opening Telegram")}>
            <span className="help-contact__ic help-contact__ic--tg"><Icon name="Send" size={20} /></span>
            <span className="help-contact__tx"><span className="n">Telegram</span><span className="s">Drop us a message</span><span className="h">t.me/betpawa_nigeria</span></span>
            <Icon name="ChevronRight" cls="help-contact__chev" />
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className={"acc-scrim" + (vis ? " show" : "")} onClick={onScrim}>
      <div className="acc-sheet help-sheet help-smart">
        <div className="help-head help-head--smart">
          <div className="help-head__tt">
            <span className="help-head__t">How can we help?</span>
          </div>
          <button className="acc-sheet__close" onClick={onClose} aria-label="Close"><Icon name="X" /></button>
        </div>

        <div className="hways">
          <div className="hways__grid">
            {helpWays.map((w) =>
              <button key={w.id} className="hway" onClick={w.act}>
                <span className={"hway__ic hway__ic--" + w.tone}><Icon name={w.ic} size={22} /></span>
                <span className="hway__nm">{w.nm}</span>
                <span className="hway__sub">{w.sub}</span>
              </button>)}
          </div>
        </div>

        <div className="faq-title">Frequently Asked Questions</div>
        <div className="faq-chips">
          {faqCats.map((c) =>
            <button key={c} className={"faq-chip" + (faqCat === c ? " on" : "")} onClick={() => setFaqCat(c)}>{c}</button>)}
        </div>

        <div className="faq-list">
          {faqShown.map((f, i) =>
            <div className={"faq-item" + (faqOpen === f.id ? " open" : "")} key={f.id}>
              <button className="faq-item__q" onClick={() => setFaqOpen((o) => o === f.id ? null : f.id)} aria-expanded={faqOpen === f.id}>
                <span className="faq-item__num">{i + 1}</span>
                <span className="faq-item__main">
                  <span className="faq-item__tx">{f.q}</span>
                  {i === 0 ? <span className="faq-badge"><Icon name="TrendingUp" size={13} />Most Asked</span> : null}
                </span>
                <Icon name={faqOpen === f.id ? "ChevronUp" : "ChevronDown"} cls="faq-item__chev" />
              </button>
              {faqOpen === f.id ?
              <div className="faq-item__body">
                <div className="faq-item__a">{f.a.map((p, j) => <p key={j}>{p}</p>)}</div>
                <a className="faq-guide" href="https://www.betpawa.ng/help" target="_blank" rel="noopener noreferrer">Open guide<Icon name="ArrowRight" size={16} /></a>
              </div> : null}
            </div>)}
        </div>

        <div className="acc-group help-group">
          <button className="acc-item" onClick={() => app.toast("About betPawa")}><Icon name="CirlceInfo" cls="acc-item__ic" /><span className="acc-item__lbl">About betPawa</span><Icon name="ChevronRight" cls="acc-item__chev" /></button>
          <button className="acc-item" onClick={() => app.toast("News")}><Icon name="Megaphone" cls="acc-item__ic" /><span className="acc-item__lbl">News</span><Icon name="ChevronRight" cls="acc-item__chev" /></button>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────── SSOT Hub ────────────────────────── */
const HUB_PAGES = [
  { id: "home", nm: "Homepage", ds: "USP, combos, World Cup, live", ic: "Home", feat: true, flow: "Start the flow" },
  { id: "sports", nm: "Sports", ds: "Listing · tabs · filters", ic: "FootballBall" },
  { id: "event", nm: "Single Event", ds: "Scoreboard · all markets", ic: "BarChart" },
  { id: "betslip", nm: "Betslip", ds: "Sheet · stake · win bonus", ic: "Betslip", sheet: "betslip" },
  { id: "mybets", nm: "My Bets", ds: "Open · settled · cashout", ic: "MyBets" },
  { id: "casino", nm: "Casino", ds: "Jackpot · providers · games", ic: "Gem" },
  { id: "deposit", nm: "Deposit / Withdraw", ds: "Select method · amount", ic: "Deposit", sheet: "deposit" },
  { id: "search", nm: "Search", ds: "Recent · trending · results", ic: "Search" },
  { id: "login", nm: "Login / Register", ds: "Phone · password", ic: "LogIn" },
  { id: "account", nm: "Account", ds: "Menu · theme · auth", ic: "Account", sheet: "account" },
  { id: "postbet", nm: "Post-Bet", ds: "Confirmation · share", ic: "Check", demo: true },
];
function HubScreen() {
  const app = useApp();
  const openPage = (p) => {
    if (p.sheet === "betslip") app.openBetslip();
    else if (p.sheet === "account") app.openAccount();
    else if (p.sheet === "deposit") app.openDeposit();
    else if (p.id === "event") app.nav("event", { id: window.BP.featured[0].id, match: window.BP.featured[0] });
    else if (p.id === "postbet") app.demoPostBet();
    else if (p.id === "deposit") app.openDeposit();
    else app.nav(p.id);
  };
  return (
    <div className="hub fadein">
      <div className="hub__hero">
        <div className="hub__logo"><Logo /><span className="pill">SSOT</span></div>
        <div className="hub__h">betPawa — Single Source of Truth</div>
        <div className="hub__p">A connected, remixable prototype of the core betPawa experience. Every screen shares one component layer — fork it, restyle it, build your idea.</div>
      </div>
      <div className="hub__sec">Core flow · tap to enter</div>
      <div className="hub__grid">
        {HUB_PAGES.map((p) => (
          <button key={p.id} className={"hub__card" + (p.feat ? " feat" : "") + (p.feat ? " hub__full" : "")} onClick={() => openPage(p)}>
            <span className="ic"><Icon name={p.ic} size={22} /></span>
            <div><div className="nm">{p.nm}</div><div className="ds">{p.ds}</div></div>
            {p.flow ? <span className="flow">{p.flow}<Icon name="ArrowRight" /></span> : null}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────── Casino game player ──────────────────────────
   Launch screen: full-black stage, centered "Connection…", bottom control bar
   (close · fullscreen · favourite · info). Mirrors production game launch. */
function GameScreen({ params }) {
  const app = useApp();
  const g = params.game || { name: "Game" };
  const [status, setStatus] = useState("Connection…");
  const [fav, setFav] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStatus("Loading " + g.name + "…"), 1600);
    return () => clearTimeout(t);
  }, [g.name]);
  return (
    <div className="gscreen">
      <div className="gscreen__stage"><span className="gscreen__status">{status}</span></div>
      <div className="gscreen__bar">
        <button className="gscreen__btn" aria-label="Close" onClick={() => app.back()}><Icon name="X" /></button>
        <span className="gscreen__grow"></span>
        <button className="gscreen__btn" aria-label="Fullscreen" onClick={() => app.toast("Fullscreen")}><Icon name="Maximize" /></button>
        <button className="gscreen__btn" aria-label="Favourite" onClick={() => { setFav(!fav); app.toast(fav ? "Removed from favourites" : "Added to favourites"); }}><Icon name={fav ? "StarFilled" : "Star"} /></button>
        <button className="gscreen__btn" aria-label="Info" onClick={() => app.toast(g.name + " · game info")}><Icon name="CirlceInfo" /></button>
      </div>
    </div>);

}

Object.assign(window, { CasinoScreen, SearchScreen, DepositScreen, LoginScreen, PostBetScreen, BetslipSheet, AccountSheet, MenuSheet, HelpSheet, HubScreen, GameScreen });
