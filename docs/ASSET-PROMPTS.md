# MITHAAS & CO. — Google Flow Asset Prompts

Every image and film on the site, in generation order. Thirteen stills and eight exploded end frames
with Nano Banana, then fifteen films with Gemini Omni Flash: eight first-and-last-frame clips that the
hero scrubs through, and seven loops.

The site's signature moment is the gift box. The ribbon unties, the lid lifts and the sweets rise out
as you scroll, and the sweets after it each break apart in the light.

**What the demo site uses.** F01–F07 are the scroll clips (the box, then six sweets); F08 (dry
fruits) is spare, for a seventh sweet or a dry-fruit section. F09–F15 are the loops, and a second take
of F01 loops on the Shagun Box card. The stills S01–S08 are the first frames; the box builder and the
price list use square cuts of those first frames, so S09–S13 are optional (a top-down tray and a sheet
of single sweets if you want a photographic builder, a share image, two backgrounds).

**No text, logos or watermarks in any asset.** Every word on the page is HTML, so the shop can be
renamed without regenerating anything. AI likes to print fake lettering on mithai boxes, so every box
prompt asks for a plain, unprinted box.

## Global style block (paste at the end of every prompt)

> Photorealistic premium Indian sweets commercial for Diwali, shot on ARRI Alexa, 100mm macro lens,
> warm golden key light from the left with soft rim light, shallow depth of field, rich gold, saffron,
> rose pink, pistachio green and ivory tones, seamless solid deep oxblood-black background (#12060A),
> clean negative space, no text, no logos, no lettering, no watermarks, 16:9, 4K.

Every asset shares the same deep oxblood-black so it melts into the page. It is warmer than the
biryani site's near-black and reads as a festive mithai box. The page colour gets sampled from the
final films, because the generator never hits the hex exactly. The storefront film is the one
exception: it is a night street, and the style block's lens and light still apply.

## Flow settings

| Asset | Tool | Settings |
|---|---|---|
| Stills | Nano Banana (Imagen) | 16:9, 2K, download the full resolution |
| Exploded end frames | Nano Banana · edit the matching still | same chat as its still, 16:9, 2K |
| Hero films ⚙️ | Omni Flash · first + last frame | first = S0x still, last = E0x exploded frame, 8 s, 16:9, 1080p |
| Loops | Omni Flash · text to video | 8 s, 16:9, 1080p |

⚙️ = scrubbed by scroll. These need a locked-off camera, no cuts and constant lighting, or they jitter
when scrubbed. Each sweet starts whole and centred (the S still) and ends fully exploded (the E
frame), so the model only has to fill in the motion between two frames that already match.

**Draft at 360p first.** Omni Flash has a cheap 360p draft mode. Run two or three drafts of each film,
keep the one with the steadiest background and smoothest motion, then render that prompt at 1080p.
Turn the audio off or ignore it: the site strips sound from every film.

**Fix takes by asking.** Omni Flash edits by conversation, so a near-miss take can be fixed in the same
thread ("keep everything, but remove the lettering on the box", "keep the camera completely still")
instead of starting over.

**Watermarks.** A visible sparkle in a first or last frame gets copied into the film, beside the real
mark. Use a plan that exports without the mark, or clean the S and E stills before you use them as
frames.
The process script removes the mark from the films (`delogo`), the same way as on the biryani site.

## File naming

Drop the downloads into `assets/`. The process script finds each film by the start of its file name,
so keep Flow's names or tell me which file is which.

---

## A. Stills (Nano Banana)

The first eight are the hero's sweets, and each is also the first frame of its film in section B.

#### S01 · still-box-closed → `img/box-closed.webp`, first frame of F01
A square luxury mithai gift box with a lid of hammered gold foil, plain and unprinted, tied with a
wide deep-red silk ribbon finished in a loose bow on top, a small lit clay diya and three marigold
flowers resting beside it, centred, front view 20° above eye level, floating in a dark void.

#### S02 · still-kaju-katli → `img/kaju-katli.webp`, first frame of F02
Six diamond-shaped kaju katli stacked in a neat fan on a small round brass plate, smooth ivory
surfaces, centred, 30° above eye level. A single sheet of edible silver varq hovers just above the
top piece, about to land.

#### S03 · still-laddoo → `img/laddoo.webp`, first frame of F03
One large motichoor laddoo on a small brass plate: a perfect sphere of tiny glistening saffron-orange
boondi pearls, topped with a pistachio sliver and a silver varq fleck, centred, front view.

#### S04 · still-jalebi → `img/jalebi.webp`, first frame of F04
A stack of three crisp jalebi spirals on a small brass plate, deep amber-orange and glossy with sugar
syrup, a few saffron strands on top, one slow drop of syrup hanging from the edge, 3/4 angle.

#### S05 · still-gulab-jamun → `img/gulab-jamun.webp`, first frame of F05
Three dark golden-brown gulab jamun in a small brass katori half-filled with glossy rose-cardamom
syrup, a dried rose petal and pistachio slivers floating on the syrup, centred, 30° above eye level.

#### S06 · still-rasmalai → `img/rasmalai.webp`, first frame of F06
Two soft white rasmalai discs in a small clear glass bowl of pale saffron milk, topped with pistachio
and almond slivers, saffron strands and a few dried rose petals, centred, 30° above eye level.

#### S07 · still-soan-papdi → `img/soan-papdi.webp`, first frame of F07
A neat flaky cube of soan papdi on a small brass plate, its layered silky strands visible on the
sides, crushed pistachio and green cardamom seeds on top, centred, 3/4 angle.

#### S08 · still-dry-fruits → `img/dry-fruits.webp`, first frame of F08
A small round brass thali heaped with Diwali dry fruits in neat sections: whole almonds, cashews,
pistachios in shell, golden raisins, dried figs and medjool dates, a pinch of saffron in the middle,
centred, 30° above eye level.

#### S09 · still-box-open → `img/box-open.webp` (share image, gifting section)
The same gold foil gift box seen from directly above with its lid off and leaning beside it, the red
ribbon loose: inside, a compartment tray filled with kaju katli, motichoor laddoo, mini jalebi, pista
barfi, kesar peda and soan papdi, silver varq catching the light, marigold petals and two lit diyas
around the box, empty space above.

#### S10 · still-tray-empty → `img/tray-empty.webp` (box builder base)
Directly top-down view of an open square gold foil mithai box, plain and unprinted, with an empty
ivory card tray inside divided into a 3×3 grid of nine equal square compartments, crisp even edges,
flat even lighting, the box filling 80% of the frame height, perfectly centred and square to the
camera.

#### S11 · still-sweets-sheet → `img/sweets-sheet.webp` (box builder pieces)
Directly top-down view of eight individual Indian sweets laid out in a perfectly even 4 × 2 grid
with wide empty space around each one, every sweet the same size: kaju katli diamond with silver
varq, motichoor laddoo, jalebi spiral, gulab jamun, rasmalai disc, soan papdi cube, pista barfi
square, kesar peda with a pistachio on top. Flat even lighting, no plates, no shadows touching each
other.

#### S12 · still-diyas → `img/diyas.webp` (Diwali night section background)
A long row of lit clay diyas receding into the dark along the bottom of the frame, warm flickering
flames, soft golden bokeh of fairy lights above, a scatter of marigold and rose petals on the ground,
low camera angle, empty dark space in the upper half.

#### S13 · still-halwai → `img/halwai.webp` (story section)
A halwai's wide black iron kadai of bubbling ghee over a low flame, freshly fried jalebi spirals
lifted out on a long flat slotted spoon, golden light catching the steam and syrup, close 3/4 angle,
the cook's hand only partly in frame.

---

## A2. Exploded end frames (Nano Banana · edit)

The last frame of each hero film. Make each one **by editing its S still in the same Nano Banana
chat**, not as a new image, so the background, plate, light and camera angle stay identical. Start
every edit with: *Keep the exact same background, lighting, camera angle, framing and plate. Change
only this:* and then the line below.

Exploded-view rule, add it to every edit: *every piece separated with clear dark space between them,
arranged in a balanced composition around the centre, all pieces sharp and inside the frame with a
margin on every side, nothing cut off at the edges.*

#### E01 · box-exploded → last frame of F01
The lid and ribbon are gone. The box sits open and empty, and above it the sweets hang in mid-air in a
tall loose column: kaju katli diamonds, motichoor laddoos, mini jalebi, pista barfi and kesar peda,
with silver varq flakes, rose petals and marigold petals floating among them. The diya still burns
beside the box.

#### E02 · kaju-katli-exploded → last frame of F02
The six kaju katli diamonds float in a wide balanced ring above the empty brass plate, the top one
now covered in silver varq, whole cashews and silver flakes hanging between them.

#### E03 · laddoo-exploded → last frame of F03
The laddoo has burst into a floating sphere-shaped cloud of thousands of tiny saffron boondi pearls,
twice its original size, with pistachio slivers, cardamom seeds, melon seeds and silver flakes
suspended through it, the empty brass plate below.

#### E04 · jalebi-exploded → last frame of F04
The three jalebi spirals float apart at different heights and angles above the empty plate, syrup
droplets and saffron strands hanging in the air around them.

#### E05 · gulab-jamun-exploded → last frame of F05
The three gulab jamun float apart above the katori, a frozen crown of rose syrup rising from the bowl
below them, rose petals, pistachio slivers and cardamom pods suspended around them, glossy syrup
droplets in the air.

#### E06 · rasmalai-exploded → last frame of F06
The two rasmalai discs float side by side above the bowl, a frozen ribbon of saffron milk curling up
between them, pistachio and almond slivers, saffron strands, rose petals and milk droplets
suspended around them.

#### E07 · soan-papdi-exploded → last frame of F07
The soan papdi has unravelled into a wide soft cloud of fine silky golden strands floating above the
empty plate, crushed pistachio and green cardamom seeds suspended through it.

#### E08 · dry-fruits-exploded → last frame of F08
The dry fruits float in a wide balanced ring above the empty brass thali: almonds, cashews,
pistachios, golden raisins, dried figs and dates, saffron strands drifting through the centre.

---

## B. Hero films ⚙️ (Omni Flash · first + last frame)

Each starts on its S still from section A and ends on its E frame from section A2. Shared motion
rule, add it to every prompt: *Locked-off static camera, the sweet stays centred, continuous with no
cuts and no camera movement, constant lighting, slow weightless motion, every piece stays inside the
frame, ends exactly on the last frame.*

#### F01 · box-open ⚙️ — first frame S01, last frame E01
The red silk ribbon slowly unties and slides away, the gold foil lid lifts straight up and out of the
top of the frame, then the sweets rise out of the open box in a slow column: kaju katli diamonds,
motichoor laddoos, mini jalebi, pista barfi and kesar peda, with flakes of silver varq, rose petals
and marigold petals drifting among them, all hanging in mid-air above the box. The diya keeps
burning beside it.

#### F02 · kaju-katli ⚙️ — first frame S02, last frame E02
The sheet of silver varq floats down and settles onto the top kaju katli, shimmering, then the six
diamonds lift off the plate and fan out in a slow balanced ring, whole cashews and silver flakes
floating between them.

#### F03 · laddoo ⚙️ — first frame S03, last frame E03
The motichoor laddoo gently bursts apart into thousands of tiny saffron boondi pearls that expand into
a floating sphere-shaped cloud, pistachio slivers, cardamom seeds, melon seeds and silver flakes
drifting through the pearls, the brass plate below.

#### F04 · jalebi ⚙️ — first frame S04, last frame E04
A thick ribbon of golden sugar syrup drips over the stack, then the three jalebi spirals lift off the
plate one by one and turn slowly in the air, syrup droplets and saffron strands hanging around them.

#### F05 · gulab-jamun ⚙️ — first frame S05, last frame E05
A gulab jamun drops back into the katori and a crown of rose syrup splashes up, then the three gulab
jamun rise and float apart above the bowl, rose petals, pistachio slivers and cardamom pods orbiting
slowly, glossy syrup droplets frozen in the light.

#### F06 · rasmalai ⚙️ — first frame S06, last frame E06
A swirl of saffron milk spirals up out of the bowl, then the two rasmalai discs lift and float side by
side, pistachio and almond slivers, saffron strands and rose petals drifting out around them, milk
droplets suspended in the air.

#### F07 · soan-papdi ⚙️ — first frame S07, last frame E07
The soan papdi cube slowly unravels in mid-air into fine silky golden strands that spread out like a
soft cloud, crushed pistachio and green cardamom seeds floating through the strands, the brass plate
below.

#### F08 · dry-fruits ⚙️ — first frame S08, last frame E08
The dry fruits lift off the thali in a slow wave: almonds, cashews, pistachios, golden raisins,
dried figs and dates rise and spread into a wide floating ring above the brass plate, saffron strands
drifting through the centre.

---

## C. Loops (Omni Flash · text to video)

#### F09 · jalebi-pipe
Top-down macro: a stream of batter is piped from a cloth into a wide black kadai of bubbling golden
ghee, drawing a perfect jalebi spiral that puffs and crisps as it fries, small bubbles fizzing
around it. Locked-off camera, the spiral centred. (This is the clip people will screen-record, so
take your time on it.)

#### F10 · varq
Slow motion: delicate sheets and flakes of edible silver varq float down through a warm beam of light,
turning and shimmering, minimal, seamless loop. Locked-off camera.

#### F11 · syrup-pour
Slow motion: two streams pour from above, one of golden sugar syrup with saffron strands and one of
pale saffron milk, twist around each other and land in a splash crown with droplets flying.
Locked-off camera.

#### F12 · diyas
A row of lit clay diyas on a dark floor, small flames flickering gently, warm golden bokeh of fairy
lights in the background, a few marigold petals scattered in front. Very slow drift to the right,
seamless loop.

#### F13 · sparkler
Extreme close-up of a lit phuljhadi sparkler held still in the centre of frame, bright golden sparks
spraying outward in slow motion against pure black, nothing else visible. Locked-off camera.
(Used as an overlay and section transition, so the background must stay black.)

#### F14 · petals
Slow motion: marigold petals, rose petals and a few whole marigold flowers fall gently through the
frame from above, tumbling and catching the warm rim light. Locked-off camera.

#### F15 · storefront
Night during Diwali, a traditional Indian sweet shop on a busy old-city street: long glass counters
glowing warm and stacked with colourful mithai, strings of marigold garlands and golden fairy lights
across the front, lit diyas along the step, a few silhouetted shoppers holding gift boxes, a faint
sparkler glow in the haze. Very slow push-in. No readable signage or text.

---

## D. Mapping into `scripts/process.sh`

The `SRC` table in the script maps each media name to the start of the downloaded file name. As
shipped:

| media name | starts the file name of |
|---|---|
| `box` | `Indian_sweets_rising_from_box_a605967d.mp4` |
| `kaju` | `Indian_sweets_floating_in_commer…_ba12bc77.mp4` |
| `laddoo` | `Motichoor_laddoo_bursting_on_plate_b7edf984.mp4` |
| `jalebi` | `Golden_sugar_syrup_dripping_jalebi_8631d2e8.mp4` |
| `gulab` | `Gulab_jamun_floating_in_syrup_f7841231.mp4` |
| `rasmalai` | `Indian_sweets_floating_in_bowl_b7d68dc8.mp4` |
| `soan` | `Soan_papdi_unravels_into_strands_b33e63bb.mp4` |
| `dry` | `Dry_fruits_floating_above_thali_c84892d1.mp4` |
| `pipe` | `Piping_batter_into_frying_ghee_7b65f588.mp4` |
| `varq` | `Silver_varq_falling_in_light_3a7e2b2b.mp4` |
| `syrup` | `Sugar_syrup_and_milk_pour_0043a6db.mp4` |
| `diyas` | `Lit_clay_diyas_flickering_701b76ef.mp4` |
| `sparkler` | `Sparkler_spraying_golden_sparks_2c108324.mp4` |
| `petals` | `Petals_and_flowers_falling_e1425c89.mp4` |
| `shop` | `Shoppers_buying_sweets_during_Di…_ee185644.mp4` |

The delivered downloads are 1280×720 rather than 1080p, so the script scales the watermark box
proportionally instead of assuming 1920×1080:

```
x 1690 / 1920   y 850 / 1080   w 180 / 1920   h 170 / 1080
```

## E. If you re-render at another size

Nothing on the page needs to change — only `scripts/process.sh` runs again. Keep the first frame and
the last frame centred on the same axis, keep the camera locked, and keep the background the same
black, or the *lighten* blend that makes the film melt into the page will show its edges.
