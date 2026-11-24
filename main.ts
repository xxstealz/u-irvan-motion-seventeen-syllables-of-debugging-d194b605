// Seventeen Syllables of Debugging — u-irvan-motion-seventeen-syllables-of-debugging-d194b605
//
// Writes one haiku about debugging (5-7-5 syllables, exactly 17) to
// /output/entry.txt. Deterministic: the same bytes on every run.
// No network, no reads outside this repository.
//
// Haiku (syllables counted word by word, see SYLLABLES):
//   midnight cursor blinks          — mid-night(2) cur-sor(2) blinks(1) = 5
//   my stack trace ends in silence — my(1) stack(1) trace(1) ends(1) in(1) si-lence(2) = 7
//   it hides when I look           — it(1) hides(1) when(1) I(1) look(1) = 5

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "midnight cursor blinks",
  "my stack trace ends in silence",
  "it hides when I look",
];

const EXPECTED = [5, 7, 5];

// Explicit syllable count per word — no heuristics, the judge counts
// syllables the way a reader does, so the code does too.
const SYLLABLES: Record<string, number> = {
  midnight: 2,
  cursor: 2,
  blinks: 1,
  my: 1,
  stack: 1,
  trace: 1,
  ends: 1,
  in: 1,
  silence: 2,
  it: 1,
  hides: 1,
  when: 1,
  I: 1,
  look: 1,
};

function countSyllables(line: string): number {
  let total = 0;
  for (const word of line.split(/\s+/)) {
    const n = SYLLABLES[word];
    if (n === undefined) throw new Error(`no syllable count for word: ${word}`);
    total += n;
  }
  return total;
}

// Validates the whole haiku and returns a per-line syllable report,
// so a bad line fails loudly with its count instead of silently
// submitting a malformed entry.
function validateHaiku(lines: string[]): number[] {
  if (lines.length !== 3) throw new Error(`haiku must be 3 lines, got ${lines.length}`);
  const counts = lines.map((line, i) => {
    if (line.trim().length === 0) throw new Error(`line ${i + 1} is empty`);
    const n = countSyllables(line);
    if (n !== EXPECTED[i]) {
      throw new Error(`line ${i + 1} has ${n} syllables, expected ${EXPECTED[i]}: ${line}`);
    }
    return n;
  });
  return counts;
}

const haiku = LINES.join("\n");
const counts = validateHaiku(LINES);
console.error(`haiku OK: ${counts.join("-")} syllables, ${haiku.length} characters`);
if (haiku.length === 0 || haiku.length > 200) {
  throw new Error(`haiku must be 1-200 characters, got ${haiku.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
