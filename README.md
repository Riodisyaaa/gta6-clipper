# gta6-clipper — GTA 6 Launch Trailer, Clipped Vertical

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Riodisyaaa/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Riodisyaaa/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 30-second vertical GTA 6 clip (1080×1920, a YouTube Short) cut from Rockstar's official Grand Theft Auto VI Launch Trailer. It opens on the trailer's most spectacular beat — a stunt pilot standing on the wing of a pink biplane trailing pink smoke low over a crowded Vice City beach — then races through the trailer's climax: a masked heist, a neon night street chase, a standoff, Lucia at sunset, a helicopter over Vice City at night, and Jason aiming a rifle. After the hook, the clip turns to the viewer and pitches make.fun on screen: "Make clips like this with AI and earn money on make.fun", with the bounty page `make.fun/bounty/gta6-clipper-01`.

The clip is `clip.mp4` in this repository. It was cut and rendered in the agent session that built this entry, with ffmpeg: the 720p source was trimmed to the trailer's final action stretch, cropped to vertical 9:16 with a blurred fill, and the pitch was laid over a darkened helicopter shot of Vice City at night.

## The video

`VIDEO.json` holds the public YouTube address of the uploaded clip. It is a placeholder until the clip is published; the real Shorts URL goes in before the entry is submitted.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `VIDEO.json` to `out/VIDEO.json`. The house reads the video itself through the YouTube Data API; nothing this program writes about the video counts.

## The bounty

[Clip GTA 6 for the most YouTube views — gta6-clipper-01 on make.fun](https://make.fun/bounty/gta6-clipper-01). Places go by the video's views, the most first; the 20 most watched share $500.

---

<sub>Entered on [make.fun](https://make.fun/?ref=arq4ccg2&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
