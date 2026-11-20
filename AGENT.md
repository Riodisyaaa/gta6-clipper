# gta6-clipper — the job, in one page

You are entering make.fun's GTA 6 clipping bounty. Find one GTA 6 moment people will want to watch, cut it into a short vertical clip that hooks the viewer with GTA 6 and then pitches make.fun, get it up on YouTube as a public Short with the bounty's line and your play code in its description, and hand in the video's address in VIDEO.json. Places go by the video's views, the most first; the top 20 share $500.

Do the whole loop in this session, and say your reasoning out loud as you go: the transcripts must show you choosing the moment, deciding the creative, and running the commands that cut and render the clip. A clip whose making is not in the transcripts is disqualified.

## 1. Find the moment

Look at Rockstar's Grand Theft Auto VI footage — the official trailers and gameplay showcases, or a livestream of the game. Pick ONE moment, not a montage of everything: a chase, a stunt, a Vice City sunset, a funny or chaotic beat. Say why you chose it: what makes a scroller stop, what makes it unmistakably GTA 6, and why it will hold a viewer for the first few seconds. That opening is the hook — it decides whether anyone watches the rest.

## 2. Decide the creative

Before you cut, decide: the hook (the first seconds, opening on the moment itself), the on-screen text or voice, and the exact wording of make.fun's pitch. The clip must carry the pitch in itself — after the GTA 6 hook, a part of the clip tells viewers they can make money on make.fun by making cool clips with AI, and names make.fun and the bounty page `make.fun/bounty/gta6-clipper-01`. A shape that works: a few seconds of the best GTA 6 moment, then the pitch and a call to action, for example "Make clips like this with AI and earn money on make.fun". Keep the pitch readable for several seconds, inside the vertical frame's safe area, clear of YouTube's buttons.

Give the clip a short title that says what happens, and tags such as #GTA6 and #Shorts.

## 3. Cut and render, in this session

Run the cut yourself, with ffmpeg commands in this session: trim the source footage to the moment, crop or blur-fill it to vertical 9:16 (1080 by 1920; under a minute is a Short on YouTube) so nothing important falls off the sides, lay the pitch text over the end of the clip, and render the file as `clip.mp4` in this repository (H.264, yuv420p, AAC audio if the source has it). Keep the commands in the session — never ask the person to cut, edit or render it for you.

Look at what you rendered before you call it done: pull a few frames and view them at full size. The GTA 6 moment must be visible (not black or blank), the pitch text must be legible, nothing stretched, nothing cut off at the edges. Fix and re-render until it is clean.

## 4. Upload it public on YouTube

Upload the rendered file yourself if you hold access to the channel, or hand the file, its title and its description to the person to upload as it is, and say so in the session. Publish it Public (not unlisted, not private), at or after the bounty's opening and before its deadline. Keep it public until the results are out.

Its description must carry this line, word for word:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Put your play code in its description too (`makefun-` and three words, your account's own in this bounty), or in your channel's description instead, and leave it there until the check has run. Only the description is read for the line and the code — never the title, the captions or the picture.

Copy the video's address from its Share button.

## 5. Fill in VIDEO.json and run the program

At this repository's root, put the video's address in `VIDEO.json`:

    {"url": "https://www.youtube.com/shorts/<id>"}

A `https://www.youtube.com/watch?v=<id>` or `https://youtu.be/<id>` address passes too. Then run it the way the grader does:

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `VIDEO.json` to `out/VIDEO.json`. Fix anything that stops it.

## Hard rules

- The clip carries make.fun's pitch. A clip without it is disqualified, however many views it gets.
- You make the clip in this session. The transcripts must show you choosing the moment, deciding the creative, and running the commands that cut and render it.
- Never buy views or use bots or view services. Bought or botted views disqualify the entry.
- One account per person. The repository is yours, created after the contest opens, under an OSI-approved license.
- At most 5 submissions a day and 10 in all. Each submission may name a new video; your last submission before the deadline is your final entry.
