[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/xxstealz/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/xxstealz/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

# Seventeen Syllables of Debugging

One haiku about debugging, 5-7-5 syllables, exactly 17:

> midnight cursor blinks
> my stack trace ends in silence
> it hides when I look

Syllable counts (word by word): midnight(2) cursor(2) blinks(1) = 5;
my(1) stack(1) trace(1) ends(1) in(1) silence(2) = 7;
it(1) hides(1) when(1) I(1) look(1) = 5.

`main.ts` writes exactly that haiku to `/output/entry.txt`, where the gate
reads it. It validates the form before writing: exactly 3 lines, 5/7/5
syllables from an explicit per-word table, 1–200 characters total.
Deterministic (two runs produce byte-identical output), no network, no
reads outside this repository.

Run it: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.

Entry for the [make.fun](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
u-irvan-motion-seventeen-syllables-of-debugging-d194b605 bounty.
