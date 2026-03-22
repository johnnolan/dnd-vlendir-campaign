# Session Recording

## Pre-session

Run `helvum`

### Link Discord, Yeti and Chrome to 2 new outputs

* Chrome -> Chrome Bus
* Discord -> Voices Bus
* Yeti -> Voices Bus

## After

### Backup mkv

* Ensure drive mounted
* Run script

### Get Channels available

`cd /run/media/jnolan/Media/media/Vlendir/`

`ffmpeg -i "2026-01-11 20-23-28.mkv"`

### Export 2nd voice channel

`ffmpeg -i "2026-01-11 20-23-28.mkv" -map 0:2 -ac 1 -ar 16000 "2026-01-11 20-23-28.mkv.wav"`

### Merge audio tracks

`ffmpeg -i "2026-03-22 20-14-10.mkv" -filter_complex "[0:a:0][0:a:1]amix=inputs=2:duration=longest[aout]" -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 256k "2026-03-22 20-14-10-merged.mkv"`

### Drag into NotebookLM
