#!/usr/bin/env bash
# Convert HEIC stills (and optional Live Photo .mov pairs) into web animations.
set -euo pipefail

OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/images"
mkdir -p "$OUT_DIR"

make_animation() {
  local heic="$1"
  local name="$2"
  local jpg="$OUT_DIR/$name.jpg"
  local mp4="$OUT_DIR/$name.mp4"
  local gif="$OUT_DIR/$name.gif"
  local mov="${heic%.*}.MOV"
  [[ -f "$mov" ]] || mov="${heic%.*}.mov"

  echo "→ $name"

  ffmpeg -y -i "$heic" -vf "scale='min(1200,iw)':-2" -q:v 2 "$jpg" 2>/dev/null

  if [[ -f "$mov" ]]; then
    echo "  using paired Live Photo video: $mov"
    ffmpeg -y -i "$mov" \
      -vf "scale=800:600:force_original_aspect_ratio=increase,crop=800:600,fps=25" \
      -t 3 -an -c:v libx264 -pix_fmt yuv420p -movflags +faststart "$mp4" 2>/dev/null
  else
    echo "  no .mov pair found — creating gentle zoom loop from still"
    ffmpeg -y -loop 1 -i "$jpg" \
      -vf "scale=800:600:force_original_aspect_ratio=increase,crop=800:600,zoompan=z='min(zoom+0.0015,1.12)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=75:s=800x600:fps=25" \
      -t 3 -an -c:v libx264 -pix_fmt yuv420p -movflags +faststart "$mp4" 2>/dev/null
  fi

  ffmpeg -y -i "$mp4" \
    -vf "fps=12,scale=600:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer" \
    "$gif" 2>/dev/null

  echo "  wrote $(du -h "$jpg" "$mp4" "$gif" | awk '{print $1}' | paste -sd' ' -)"
}

make_animation "${1:?HEIC path required}" "${2:?output basename required}"
