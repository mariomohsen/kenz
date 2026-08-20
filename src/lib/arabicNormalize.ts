/**
 * Normalizes Arabic (and general) text for forgiving comparison:
 * - trims whitespace
 * - collapses internal whitespace
 * - removes Arabic diacritics (tashkeel) and tatweel
 * - unifies alef variants, yaa/alef-maqsura, taa-marbuta
 * - lowercases any latin characters
 */
export function normalizeArabic(input: string): string {
  if (!input) return "";

  return input
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[\u064B-\u0652\u0670\u0640]/g, "") // diacritics + tatweel
    .replace(/[إأآا]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[ًٌٍَُِّْ]/g, "")
    .replace(/[،,.!؟?]/g, "")
    .toLowerCase();
}
