#!/usr/bin/env bash
# ============================================================================
#  MITHAAS & CO.  ·  scripts/process.sh
#  Builds media/ from the raw Google Flow downloads in assets/.
#
#  usage:   sh scripts/process.sh          (needs ffmpeg + ffprobe on PATH)
#           FFMPEG=/opt/ffmpeg sh scripts/process.sh
#
#  What it makes
#    media/hero/<name>.mp4     1280w  scroll-scrub clip  (CRF 25, all-keyframe-ish)
#    media/hero/<name>-m.mp4    720w  same clip for phones (CRF 27)
#    media/v/<name>.mp4        1280w  looping film       (CRF 26)
#    media/v/<name>.jpg               poster = first frame of the loop
#    media/img/<name>.webp      480²  square cut of a still
#    media/img/share.webp      1200w  share card = last frame of the box film
#
#  The raw downloads stay in assets/ and are not shipped.
# ============================================================================
set -euo pipefail
cd "$(dirname "$0")/.."

FFMPEG="${FFMPEG:-ffmpeg}"
FFPROBE="${FFPROBE:-ffprobe}"
SRC_DIR="${SRC_DIR:-assets}"
OUT="${OUT:-media}"

command -v "$FFMPEG" -nostdin >/dev/null 2>&1 || { echo "ffmpeg not found (set FFMPEG=...)"; exit 1; }

# ---------------------------------------------------------------------------
#  SRC — media name  ->  start of the downloaded filename
#  Flow names the exports after the prompt, so the prefix is enough. Rename a
#  file in assets/ and the only thing to change is the string on the right.
# ---------------------------------------------------------------------------
SRC="
# --- first-and-last-frame films: the gift box, then the six sweets -------
box|Indian_sweets_rising_from_box
kaju|Indian_sweets_floating_in_commer
laddoo|Motichoor_laddoo_bursting_on_plate
jalebi|Golden_sugar_syrup_dripping_jalebi
gulab|Gulab_jamun_floating_in_syrup
rasmalai|Indian_sweets_floating_in_bowl
soan|Soan_papdi_unravels_into_strands
# --- spare seventh sweet (dry fruits) ------------------------------------
dry|Dry_fruits_floating_above_thali
# --- text-to-video loops -------------------------------------------------
pipe|Piping_batter_into_frying_ghee
varq|Silver_varq_falling_in_light
syrup|Sugar_syrup_and_milk_pour
diyas|Lit_clay_diyas_flickering
sparkler|Sparkler_spraying_golden_sparks
petals|Petals_and_flowers_falling
shop|Shoppers_buying_sweets_during
"

# the six scrub films, in page order
SCRUB="box kaju laddoo jalebi gulab rasmalai soan"
# every loop the page plays
LOOPS="box kaju laddoo jalebi gulab rasmalai soan dry pipe varq syrup diyas sparkler petals shop"

# ---------------------------------------------------------------------------
#  THUMB — 720² crop centres (cx|cy) in 1920×1080 space, one per sweet.
#  Cut from the first frame of each film, so the thumbnail always shows the
#  sweet whole and always matches what the scrub starts on. The frame is
#  normalised to 1920 wide first, so these numbers hold for any render size.
#  Nudge a pair if a sweet sits off-centre in its first frame.
# ---------------------------------------------------------------------------
THUMB="
kaju|960|540
laddoo|960|540
jalebi|960|540
gulab|960|540
rasmalai|960|540
soan|960|540
"

# ---------------------------------------------------------------------------
#  the generator's sparkle mark, measured once on the 1080p renders.
#  The box is wide because first-and-last-frame films carry a second copy of
#  the mark beside the real one. Coordinates scale with the source size.
# ---------------------------------------------------------------------------
MK_X=1690; MK_Y=850; MK_W=180; MK_H=170

say() { printf '\033[38;5;179m▸\033[0m %s\n' "$1"; }
ok()  { printf '\033[38;5;107m✓\033[0m %s\n' "$1"; }

dims() { # echo "W H"
  "$FFPROBE" -v error -select_streams v:0 -show_entries stream=width,height \
    -of csv=s=x:p=0 "$1" | head -n1 | tr 'x' ' '
}

delogo() { # delogo=<scaled to the source>
  local f=$1 w h x y
  read -r w h <<EOF
$(dims "$f")
EOF
  [ -z "${w:-}" ] && { echo "!! cannot read size of $f"; exit 1; }
  x=$(( MK_X * w / 1920 )); y=$(( MK_Y * h / 1080 ))
  local bw=$(( MK_W * w / 1920 )); local bh=$(( MK_H * h / 1080 ))
  # never let the box run past the frame edge (delogo needs a 1px border)
  [ $((x + bw)) -gt $((w - 1)) ] && bw=$(( w - 1 - x ))
  [ $((y + bh)) -gt $((h - 1)) ] && bh=$(( h - 1 - y ))
  printf 'delogo=x=%d:y=%d:w=%d:h=%d' "$x" "$y" "$bw" "$bh"
}

# find <prefix> <ext>  ->  first matching file in assets/
find_src() {
  local p=$1 e=$2 f
  f=$(find "$SRC_DIR" -maxdepth 1 -type f -iname "${p}*${e}" 2>/dev/null | head -n1)
  [ -n "$f" ] || { echo "!! no ${e} in ${SRC_DIR}/ starting with '${p}'"; exit 1; }
  printf '%s' "$f"
}

mkdir -p "$OUT/hero" "$OUT/v" "$OUT/img"
: > "$OUT/.src-map.txt"

# ---------------------------------------------------------------------------
#  encoder profiles
# ---------------------------------------------------------------------------
X264_SCRUB='keyint=2:min-keyint=1:scenecut=0:bframes=0:ref=3:aq-mode=3'
COMMON='-pix_fmt yuv420p -an -movflags +faststart -profile:v high -level 4.0'

# ===========================================================================
#  1 · SCROLL CLIPS — every keyframe 2 frames apart so a seek is one decode.
# ===========================================================================
say "scroll clips (1280 + 720, all-keyframe)"
while IFS='|' read -r name prefix; do
  case "$name" in ''|'#'*) continue;; esac
  case " $SCRUB " in *" $name "*) ;; *) continue;; esac
  f=$(find_src "$prefix" .mp4)
  printf '%s\n' "$name|$f" >> "$OUT/.src-map.txt"
  say "  $name  <- $(basename "$f")"
  "$FFMPEG" -nostdin -y -v error -i "$f" \
    -vf "$(delogo "$f"),scale=1280:-2:flags=lanczos" \
    -c:v libx264 -preset slow -crf 25 -x264-params "$X264_SCRUB" $COMMON \
    "$OUT/hero/$name.mp4"
  "$FFMPEG" -nostdin -y -v error -i "$f" \
    -vf "$(delogo "$f"),scale=720:-2:flags=lanczos" \
    -c:v libx264 -preset slow -crf 27 -x264-params "$X264_SCRUB" $COMMON \
    "$OUT/hero/$name-m.mp4"
  ok "  $name.mp4  $(du -h "$OUT/hero/$name.mp4" | cut -f1) / $(du -h "$OUT/hero/$name-m.mp4" | cut -f1)"
done <<EOF
$SRC
EOF

# ===========================================================================
#  2 · LOOPS — 1280w CRF 26 + a poster from the first frame.
# ===========================================================================
say "loops (1280, CRF 26)"
while IFS='|' read -r name prefix; do
  case "$name" in ''|'#'*) continue;; esac
  case " $LOOPS " in *" $name "*) ;; *) continue;; esac
  f=$(find_src "$prefix" .mp4)
  say "  $name  <- $(basename "$f")"
  "$FFMPEG" -nostdin -y -v error -i "$f" \
    -vf "$(delogo "$f"),scale=1280:-2:flags=lanczos" \
    -c:v libx264 -preset slow -crf 26 $COMMON \
    "$OUT/v/$name.mp4"
  "$FFMPEG" -nostdin -y -v error -i "$OUT/v/$name.mp4" -frames:v 1 -q:v 3 \
    -vf "scale=640:-2:flags=lanczos" "$OUT/v/$name.jpg"
  ok "  $name.mp4  $(du -h "$OUT/v/$name.mp4" | cut -f1)"
done <<EOF
$SRC
EOF

# the Shagun card plays a second take of the box film
cp -f "$OUT/v/box.mp4" "$OUT/v/box2.mp4"
cp -f "$OUT/v/box.jpg" "$OUT/v/box2.jpg"
ok "  box2.mp4 (second box take)"

# ===========================================================================
#  3 · THUMBNAILS — 720² cut around a sweet on its first frame, scaled to 480.
# ===========================================================================
say "thumbnails (480² webp, from each film's first frame)"
while IFS='|' read -r name cx cy; do
  case "$name" in ''|'#'*) continue;; esac
  p=$(printf '%s\n' "$SRC" | awk -F'|' -v n="$name" '$1==n{print $2}')
  [ -n "$p" ] || { echo "!! no source film for $name"; exit 1; }
  f=$(find_src "$p" .mp4)
  x=$(( cx - 360 )); y=$(( cy - 360 ))
  [ $x -lt 0 ] && x=0
  [ $y -lt 0 ] && y=0
  "$FFMPEG" -nostdin -y -v error -i "$f" -frames:v 1 \
    -vf "$(delogo "$f"),scale=1920:-2:flags=lanczos,crop=720:720:${x}:${y},scale=480:480:flags=lanczos" \
    -c:v libwebp -quality 88 -compression_level 6 \
    "$OUT/img/thumb-$name.webp"
  ok "  thumb-$name.webp  $(du -h "$OUT/img/thumb-$name.webp" | cut -f1)"
done <<EOF
$THUMB
EOF

# ===========================================================================
#  4 · SHARE IMAGE — the box's last frame, 1200w.
# ===========================================================================
say "share image (box, last frame)"
"$FFMPEG" -nostdin -y -v error -sseof -0.35 -i "$OUT/hero/box.mp4" -frames:v 1 \
  -vf "scale=1200:-2:flags=lanczos" -c:v libwebp -quality 90 \
  "$OUT/img/share.webp"
ok "  share.webp  $(du -h "$OUT/img/share.webp" | cut -f1)"

# ===========================================================================
#  5 · the page's own ink, sampled from the films
# ===========================================================================
say "sampling page ink from the box film"
"$FFMPEG" -nostdin -y -v error -sseof -0.35 -i "$OUT/hero/box.mp4" -frames:v 1 \
  -vf "crop=8:8:6:6,scale=1:1:flags=area" -f rawvideo -pix_fmt rgb24 - 2>/dev/null |
  od -An -tu1 | awk '{printf "  #%02x%02x%02x  (film background)\n", $1, $2, $3}'

echo
ok "media/ built: $(find "$OUT" -type f | wc -l | tr -d ' ') files, $(du -sh "$OUT" | cut -f1)"
