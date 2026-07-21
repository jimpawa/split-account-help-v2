// betPawa homepage "Combos" — production snapshot for Claude Design prototypes.
// Source: GET https://www.betpawa.ng/api/sportsbook/v1/combo-cards/list  (brand: betpawa-nigeria)
// Captured: 2026-07-16.  Claude Design blocks external fetch (CSP), so data is embedded.
// To refresh: re-run probe/capture-combos.mjs and regenerate this file.

export const COMBOS_META = {
  source: "https://www.betpawa.ng/api/sportsbook/v1/combo-cards/list",
  brand: "betpawa-nigeria",
  capturedAt: "2026-07-16",
};

export const COMBOS = [
  { id: "36637056", competition: "FIFA World Cup", category: "Football", region: "International",
    kickoff: "2026-07-18T21:00:00Z", home: "France", away: "England",
    selections: [
      { market: "Double Chance | Full Time", pick: "1X" },
      { market: "Both Teams To Score | Full Time", pick: "Yes" },
      { market: "Over/Under | Full Time", pick: "Under 3.5" },
    ], totalOdds: 4.58, winProbability: 0.1959, hot: 29 },
  { id: "36637055", competition: "FIFA World Cup", category: "Football", region: "International",
    kickoff: "2026-07-19T19:00:00Z", home: "Spain", away: "Argentina",
    selections: [
      { market: "Double Chance | Full Time", pick: "1X" },
      { market: "Both Teams To Score | Full Time", pick: "No" },
      { market: "Over/Under | Full Time", pick: "Under 2.5" },
    ], totalOdds: 3.01, winProbability: 0.3089, hot: 13 },
  { id: "36637056", competition: "FIFA World Cup", category: "Football", region: "International",
    kickoff: "2026-07-18T21:00:00Z", home: "France", away: "England",
    selections: [
      { market: "Double Chance | Full Time", pick: "X2" },
      { market: "Both Teams To Score | Full Time", pick: "Yes" },
      { market: "Over/Under | Full Time", pick: "Over 2.5" },
    ], totalOdds: 3.52, winProbability: 0.2611, hot: 9 },
  { id: "36637055", competition: "FIFA World Cup", category: "Football", region: "International",
    kickoff: "2026-07-19T19:00:00Z", home: "Spain", away: "Argentina",
    selections: [
      { market: "Double Chance | Full Time", pick: "X2" },
      { market: "Both Teams To Score | Full Time", pick: "Yes" },
      { market: "Over/Under | Full Time", pick: "Over 2.5" },
    ], totalOdds: 5.02, winProbability: 0.1768, hot: 27 },
  { id: "36637056", competition: "FIFA World Cup", category: "Football", region: "International",
    kickoff: "2026-07-18T21:00:00Z", home: "France", away: "England",
    selections: [
      { market: "Both Teams To Score | Full Time", pick: "Yes" },
      { market: "Over/Under | Full Time", pick: "Over 2.5" },
      { market: "Player to Score or Assist", pick: "Kylian Mbappe" },
    ], totalOdds: 2.64, winProbability: 0.3538, hot: 12 },
  { id: "36637055", competition: "FIFA World Cup", category: "Football", region: "International",
    kickoff: "2026-07-19T19:00:00Z", home: "Spain", away: "Argentina",
    selections: [
      { market: "Double Chance | Full Time", pick: "X2" },
      { market: "Over/Under | Full Time", pick: "Over 1.5" },
      { market: "Player to Score or Assist", pick: "Lionel Messi" },
    ], totalOdds: 3.27, winProbability: 0.283, hot: 10 },
  { id: "36637056", competition: "FIFA World Cup", category: "Football", region: "International",
    kickoff: "2026-07-18T21:00:00Z", home: "France", away: "England",
    selections: [
      { market: "Over/Under | Full Time", pick: "Over 1.5" },
      { market: "Total Bookings Over/Under | Full Time", pick: "Over 1.5" },
      { market: "Total Corners Over/Under | Full Time", pick: "Over 7.5" },
    ], totalOdds: 2.54, winProbability: 0.3692, hot: 14 },
];

// Drop-in "fetch" — reads like a real API call so you can swap in a live
// endpoint later without touching your render code.
export async function getCombos() {
  return COMBOS;
}
