import { normalizeArabic } from "./arabicNormalize";

export type TeamKey = "A" | "B" | "C" | "D";

/**
 * PLACEHOLDER ANSWERS — EDIT THESE
 * Fill in the real riddle answer that should map each participant to a team.
 * Comparison is case-insensitive, trims whitespace and normalizes Arabic
 * diacritics/letter variants, so you can just type the plain expected answer.
 */
export const TEAM_ANSWERS: Record<TeamKey, string> = {
  A: "الحفرة",
  B: "الحياة",
  C: "الماية",
  D: "المريخ",
};

export const TEAM_NAMES: Record<TeamKey, string> = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
};

export const TEAM_COLORS: Record<TeamKey, { accent: string; soft: string; text: string }> = {
  A: { accent: "#b3492a", soft: "#f1d9c8", text: "#5c2314" },
  B: { accent: "#1f5f74", soft: "#cfe4e6", text: "#0f3947" },
  C: { accent: "#4c6b3c", soft: "#dde7cb", text: "#2c4020" },
  D: { accent: "#8a6a1f", soft: "#efdfb2", text: "#54400f" },
};

/**
 * Checks a raw user answer against every team's placeholder answer.
 * Returns the matching team key, or null if no match / empty input.
 */
export function findTeamForAnswer(rawAnswer: string): TeamKey | null {
  const normalized = normalizeArabic(rawAnswer);
  if (!normalized) return null;

  const entry = (Object.entries(TEAM_ANSWERS) as [TeamKey, string][]).find(
    ([, answer]) => normalizeArabic(answer) === normalized,
  );

  return entry ? entry[0] : null;
}
