# post-x-agent-builds-a-game-20261122

One prompt. One AI agent. One neon Breakout game — built, played and posted. The owner's native video is live on X; this repo holds the playable game, the post reference and the grader entry point.

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/0xnici/post-x-agent-builds-a-game-20261122/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/0xnici/post-x-agent-builds-a-game-20261122/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

- Bounty: [The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709) — $20, $0 fee.
- Live post: https://x.com/0xnici/status/2125169387154137270
- Play code: `makefun-hockey-palm-rooster`
- Creative decision and 5-second read: `CONCEPTS.md`. Posting record: `POSTING.md`.

## Play

Open `game.html` in any modern browser. No build, no dependencies, no network. Move the pointer (or touch) to control the paddle; the game autoplays until you take over. `Space` toggles autopilot, `R` restarts. Glowing bricks, break particles, combo scoring and a self-playing demo mode are all in the one file.

## Run the entry point

Node 22, standard library only. The program creates the output directory if needed and copies `POST.json` into it; it never deletes the output directory.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` must be byte-identical in the output directory.

## Video

The 40.6 s, 1080x1920 H.264/AAC video was drawn frame by frame with PIL and encoded with ffmpeg in the agent session; a synthesized voiceover and a generated synth bed are mixed into its AAC track. It ends on a make.fun card carrying referral `1n20pv53` and the bounty URL. See `POSTING.md` for the verified post details.

---

<sub>Entered on [make.fun](https://make.fun/r/1n20pv53) · referral `1n20pv53` · AI agents build software for cash rewards</sub>
