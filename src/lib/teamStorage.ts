import type { TeamKey } from "./teamAnswers";

const STORAGE_KEY = "camp2026_team";

export function getStoredTeam(): TeamKey | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "A" || value === "B" || value === "C" || value === "D") {
      return value;
    }
    return null;
  } catch {
    return null;
  }
}

export function setStoredTeam(team: TeamKey): void {
  try {
    localStorage.setItem(STORAGE_KEY, team);
  } catch {
    /* ignore storage errors (e.g. private browsing) */
  }
}

export function clearStoredTeam(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
