# Launch kit — Mithaas & Co.

Everything you paste when this goes public. Nothing here is installed by the site.

---

## 1 · GitHub

**Repository name**

```
mithaas-co
```

Alternatives, if you want the keyword in the URL: `diwali-mithai-shop`, `scroll-scrubbed-mithai`,
`mithaas`.

**Title field (the big H1 on the repo page — it comes from the README's first heading) **

```
Mithaas & Co. — a scroll-scrubbed Diwali mithai shop
```

**About — description (350 char limit, this is 218)**

```
A premium Diwali mithai shop template. A gold gift box opens as you scroll, six sweets break apart in slow motion, and the whole page melts into one oxblood-black. Static HTML/CSS/JS, GSAP + Lenis, no build step.
```

**About — website**

```
https://mithaasandco.in
```

**Topics (paste these 12, they are what people actually browse on GitHub)**

```
diwali  mithai  gsap  scrolltrigger  lenis  scroll-animation  video-scrubbing  canvas
template  landing-page  html-css-javascript  motion-design
```

**Social preview image** — upload `docs/media/promo-poster.webp` (Settings → Social preview).

**First release**

```
v1.0.0 · Mithaas & Co.
Diwali 2026 template: scroll-scrubbed gift box, six exploded sweets, box builder with WhatsApp
checkout, price list, animated promo film.
```

**Pinned line for the repo's "About" if you want something shorter and sharper**

```
The Diwali mithai shop where the gift box opens at the speed of your scroll.
```

---

## 2 · LinkedIn

**Post this as a native video**, not a link. Upload `docs/media/mithaas-promo-square.mp4`
(1080×1080, 18 s, 3 MB). LinkedIn throttles posts that link out; put the link in the first comment.

### The post

> I rebuilt a 60-year-old mithai shop as a scroll.
>
> Scroll down and the ribbon unties. The gold lid lifts out of the frame. The sweets rise.
> Scroll back up and the box puts itself away.
>
> Then the counter: six sweets, one screen each. Kaju katli fans out under silver varq. The laddoo
> bursts into boondi pearls. The soan papdi unravels into a thousand silk threads. Every one starts
> whole and centred, and scrolling up rebuilds it. Six films, one scroll axis, both directions.
>
> The hard part wasn't the animation. It was making the film disappear: the videos sit in a
> `mix-blend-mode: lighten` layer, and the page ink is a fraction brighter than the film's own
> background, so the black around each sweet evaporates and the giant मिठास behind it shows through.
> You never see where the video starts.
>
> Then I broke the rules a little:
>
> → every second frame is a keyframe, so a scroll seek is one decode and never flashes black
> → every clip is fetched whole as a blob and played from an object URL, so seeking never touches the network
> → 6 scroll films, 15 loops, 64 MB of media, and still no build step
> → phones get a 720p set and a 190vw hero, because a 16:9 box on a 375px screen is a postage stamp
>
> And the promo film is generated too: a Canvas 2D timeline, deterministic, rendered frame by frame
> at 1080p, with liquid-glass layers that blur and magnify the actual page underneath.
>
> No text is baked into any image. Rename the shop in the markup and every word changes.
>
> Halwai since 1961, Chandni Chowk. Template is open source. 🔗 first comment.
>
> What would you rather have — the box that opens on scroll, or the sweets that break apart?

### First comment

> Repo + the 18s film in 1080p: github.com/<your-handle>/mithaas-co
> Built with GSAP ScrollTrigger, Lenis, a Canvas promo film, and Motion Prompt #019 for the liquid
> scene change. No framework, no build step.

### Hashtags

Put **3–5** in the post itself and the rest in the first comment. LinkedIn does not reward hashtag
spam; relevance beats volume.

```
#motiondesign #webdesign #gsap #creativedevelopment #diwali
```

Second comment / carousel version:

```
#frontend #javascript #animation #uidesign #canvas #threejs #webgl
#scrollanimation #designdevelopment #creativecoding #india #mithai
#generativeart #AIvideo #productdesign #branding #luxury #festive
```

### Why this post can travel

- **The first 3 seconds are the whole pitch.** The square cut starts on the closed box and the
  ribbon starts moving at 0:00 — do not add an intro card.
- **Native video + no outbound link in the post body.** Put the repo in the first comment.
- **One question at the end.** Comments in the first hour are the only thing that reliably widens
  the first distribution ring. Answer every one with a real sentence.
- **Post Tuesday–Thursday, 8–10 a.m. in your audience's timezone.** For a design/dev audience that
  is roughly 8–10 a.m. CET or 9–11 a.m. IST.
- **Reply to your own first comment** with one extra artefact (a still of the box mid-open, or the
  frame count: "465 frames, rendered one by one").
- **Do not edit the post in the first hour** — edits can reset reach.

### Shorter variant (if the long one feels too much)

> A mithai shop where the gift box opens at the speed of your scroll.
>
> 6 sweets. 6 films. 1 scroll axis, both directions. No build step.
>
> Rendered frame by frame at 1080p — including the promo, which is a Canvas timeline with liquid-glass
> layers, not a screen recording.
>
> Halwai since 1961. Open source. 🔗 first comment.

---

## 3 · Cross-posts

| Where | What to post | Note |
|---|---|---|
| **X / Twitter** | `docs/media/mithaas-promo.mp4` + the hook line | Native video, 2:20 max is plenty at 18 s |
| **Instagram Reels** | `docs/media/mithaas-promo-vertical.mp4` (1080×1920) | Cover frame = the closed box |
| **Dribbble** | `promo-poster.webp` + 3 stills | Title: "Mithaas & Co. — scroll-scrubbed mithai" |
| **Reddit r/webdev** | Link + one line: "I made a box open at the speed of your scroll" | Never post the same day as LinkedIn |
| **Product Hunt** | Square cut as the gallery video | Tagline: "The gift box opens at the speed of your scroll" |

**One-line tagline, everywhere:**

```
The gift box opens at the speed of your scroll.
```
